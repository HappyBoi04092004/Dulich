'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import MainNavbar from '@/components/navigation/MainNavbar';
import { API_ENDPOINTS } from '@/config/api';
import { VIETNAM_DESTINATIONS } from '@/data/vietnamData';
import {
  CurrencyDollarIcon,
  SparklesIcon,
  HomeModernIcon,
  ShoppingBagIcon,
  TruckIcon,
  TicketIcon,
  ArrowRightIcon,
  UserGroupIcon,
  CalendarDaysIcon,
  CheckCircleIcon,
  MapPinIcon,
  BuildingOffice2Icon
} from '@heroicons/react/24/outline';

interface CostGuidelineData {
  daily_budget_economy: number;
  daily_budget_standard: number;
  daily_budget_luxury: number;
  hotel_avg_economy: number;
  hotel_avg_standard: number;
  hotel_avg_luxury: number;
  meal_avg_per_day: number;
  transport_local_avg: number;
}

export default function CostsEstimatorPage() {
  const router = useRouter();
  const [provinces, setProvinces] = useState<{ id: string; name: string }[]>([]);
  const [selectedProvinceId, setSelectedProvinceId] = useState<string>('phutho');
  const [days, setDays] = useState<number>(3);
  const [travelers, setTravelers] = useState<number>(2);
  const [style, setStyle] = useState<'economy' | 'standard' | 'luxury'>('economy');
  const [costData, setCostData] = useState<CostGuidelineData | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedSpots, setSelectedSpots] = useState<string[]>([]);

  // Load provinces list
  useEffect(() => {
    async function loadProvinces() {
      try {
        const res = await fetch(API_ENDPOINTS.provinces);
        const data = await res.json();
        if (data.status === 'success' && data.data) {
          setProvinces(data.data.map((p: any) => ({ id: p.id, name: p.name })));
        } else {
          setProvinces(VIETNAM_DESTINATIONS.map(d => ({ id: d.id, name: d.name })));
        }
      } catch (err) {
        setProvinces(VIETNAM_DESTINATIONS.map(d => ({ id: d.id, name: d.name })));
      }
    }
    loadProvinces();
  }, []);

  // Matched destination from master dataset
  const currentDestination = useMemo(() => {
    return (
      VIETNAM_DESTINATIONS.find(d => d.id === selectedProvinceId) ||
      VIETNAM_DESTINATIONS.find(d => d.id === 'phutho') ||
      VIETNAM_DESTINATIONS[0]
    );
  }, [selectedProvinceId]);

  // Set default selected spots when province changes
  useEffect(() => {
    if (currentDestination && currentDestination.touristSpots) {
      // Pick top 2-3 spots by default
      const defaultIds = currentDestination.touristSpots.slice(0, 3).map(s => s.id);
      setSelectedSpots(defaultIds);
    }
  }, [currentDestination]);

  // Toggle spot selection
  const handleToggleSpot = (spotId: string) => {
    setSelectedSpots(prev => {
      if (prev.includes(spotId)) {
        return prev.filter(id => id !== spotId);
      } else {
        return [...prev, spotId];
      }
    });
  };

  // Fetch costs from backend
  useEffect(() => {
    async function fetchCosts() {
      if (!selectedProvinceId) return;
      setLoading(true);
      try {
        const res = await fetch(API_ENDPOINTS.costs(selectedProvinceId));
        const data = await res.json();
        if (data.status === 'success' && data.data) {
          setCostData(data.data);
        }
      } catch (err) {
        console.error('Failed to load costs:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchCosts();
  }, [selectedProvinceId]);

  // Calculations with reduced, realistic Vietnamese costs
  // Economy: 150k-220k/phòng/đêm (nhà nghỉ/homestay)
  // Standard: 320k-480k/phòng/đêm (khách sạn 3 sao)
  // Luxury: 1.2m-1.8m/đêm (resort 4-5 sao)
  const hotelPerNight = costData
    ? (style === 'economy'
        ? costData.hotel_avg_economy
        : style === 'standard'
        ? costData.hotel_avg_standard
        : costData.hotel_avg_luxury)
    : style === 'economy'
    ? 150000
    : style === 'standard'
    ? 340000
    : 1400000;

  // Assuming 2 persons per room
  const roomsNeeded = Math.ceil(travelers / 2);
  const totalHotel = hotelPerNight * roomsNeeded * Math.max(days - 1, 1);

  // Meal cost per person per day:
  // Economy: 60% of baseline (~75k - 110k/ngày cho 3 bữa ăn bình dân xôi/phở/cơm tấm)
  // Standard: 100% of baseline (~130k - 180k/ngày ăn nhà hàng/đặc sản)
  // Luxury: 220% of baseline (~300k - 450k/ngày)
  const mealPerPersonPerDay = costData
    ? (style === 'economy'
        ? Math.round(costData.meal_avg_per_day * 0.6)
        : style === 'standard'
        ? costData.meal_avg_per_day
        : Math.round(costData.meal_avg_per_day * 2.2))
    : style === 'economy'
    ? 80000
    : style === 'standard'
    ? 140000
    : 320000;
  const totalMeals = mealPerPersonPerDay * travelers * days;

  // Transport cost per person per day:
  // Economy: 55% (~40k - 55k/ngày: xe máy/xe buýt)
  // Standard: 100% (~70k - 100k/ngày)
  // Luxury: 200% (~150k - 200k/ngày: xe hợp đồng/taxi)
  const transportPerDay = costData
    ? (style === 'economy'
        ? Math.round(costData.transport_local_avg * 0.55)
        : style === 'standard'
        ? costData.transport_local_avg
        : Math.round(costData.transport_local_avg * 2.0))
    : style === 'economy'
    ? 45000
    : style === 'standard'
    ? 75000
    : 160000;
  const totalTransport = transportPerDay * travelers * days;

  // Sightseeing tickets: Based on selected spots or realistic entry ticket averages
  const ticketRatePerSpot = style === 'economy' ? 25000 : style === 'standard' ? 45000 : 120000;
  const totalSightseeing = selectedSpots.length > 0
    ? selectedSpots.length * ticketRatePerSpot * travelers
    : (style === 'economy' ? 30000 : style === 'standard' ? 70000 : 180000) * travelers * days;

  const subTotal = totalHotel + totalMeals + totalTransport + totalSightseeing;
  const contingency = Math.round(subTotal * 0.10); // 10% contingency & gifts
  const grandTotal = subTotal + contingency;
  const perPersonTotal = Math.round(grandTotal / travelers);
  const perPersonPerDay = Math.round(perPersonTotal / days);

  const formatVND = (num: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(num);
  };

  // Start trip with this province and selected spots
  const handleStartTripWithBudget = () => {
    if (currentDestination) {
      try {
        const key = 'vietnam_trip_wizard_v3_34provinces';
        const saved = sessionStorage.getItem(key);
        const parsed = saved ? JSON.parse(saved) : {};
        sessionStorage.setItem(
          key,
          JSON.stringify({
            ...parsed,
            selectedDestinations: [currentDestination],
            currentStep: 2
          })
        );
      } catch (e) {
        console.error(e);
      }
      router.push(`/?province=${currentDestination.id}`);
    } else {
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <MainNavbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Banner Section */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-pink-300 dark:border-pink-800 bg-gradient-to-r from-rose-900 via-pink-900 to-rose-950 p-6 sm:p-10 text-white">
          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/30 border border-pink-400/40 text-pink-200 text-xs font-black uppercase tracking-wider backdrop-blur-xs">
              <CurrencyDollarIcon className="w-4 h-4 text-pink-300" />
              <span>DỰ TOÁN CHI PHÍ DU LỊCH 34 TỈNH THÀNH THEO THỰC TẾ VIỆT NAM</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
              Tính Toán Chi Phí & <span className="bg-gradient-to-r from-pink-300 via-rose-200 to-amber-200 bg-clip-text text-transparent">Dự Toán Ngân Sách Thực Tế</span>
            </h1>
            <p className="text-xs sm:text-sm text-pink-100/90 leading-relaxed">
              Mức giá đã được tối ưu sát với thực tế từng vùng miền (Tây Bắc, Đông Bắc, Miền Trung, Miền Tây, Tây Nguyên và các Đô thị lớn) cho cả gói Tiết Kiệm (homestay, nhà nghỉ, ăn vặt) và Tiêu Chuẩn.
            </p>
          </div>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Form: Inputs */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 p-6 rounded-3xl border-2 border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
              <SparklesIcon className="w-5 h-5 text-pink-600" />
              <span>Thông số chuyến đi của bạn</span>
            </h3>

            {/* Province Picker & Places Preview */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-black text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                  <MapPinIcon className="w-4 h-4 text-pink-600" />
                  <span>1. Điểm đến (Tỉnh / Thành phố)</span>
                </label>
                <span className="text-[11px] font-bold text-pink-600 bg-pink-50 dark:bg-pink-950/60 px-2.5 py-0.5 rounded-full border border-pink-200 dark:border-pink-800">
                  {currentDestination?.regionName || 'Việt Nam'}
                </span>
              </div>

              <select
                value={selectedProvinceId}
                onChange={(e) => setSelectedProvinceId(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 cursor-pointer"
              >
                {provinces.map(p => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>

              {/* Province Overview Card */}
              {currentDestination && (
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-pink-50/70 to-rose-50/70 dark:from-pink-950/30 dark:to-rose-950/30 border border-pink-200/80 dark:border-pink-900/40 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-black text-pink-900 dark:text-pink-200 flex items-center gap-1">
                      <BuildingOffice2Icon className="w-3.5 h-3.5 text-pink-600" />
                      {currentDestination.name}
                    </span>
                    <span className="text-[10.5px] text-pink-700 dark:text-pink-300 font-bold">
                      {currentDestination.provinceType === 'city' ? 'TP Trực thuộc TW' : 'Tỉnh mới sáp nhập'}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-300">
                    💡 Mùa đẹp nhất: <strong>{currentDestination.bestSeason}</strong>
                  </div>
                </div>
              )}

              {/* Hiển thị các nơi muốn đến tại Tỉnh/Thành phố này */}
              {currentDestination?.touristSpots && currentDestination.touristSpots.length > 0 && (
                <div className="pt-1 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-black text-slate-800 dark:text-slate-200">
                      📍 Các nơi muốn đến ({currentDestination.touristSpots.length} địa điểm nổi bật):
                    </span>
                    <span className="text-[11px] font-bold text-pink-600">
                      Đã chọn {selectedSpots.length} điểm
                    </span>
                  </div>

                  <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                    {currentDestination.touristSpots.map((spot) => {
                      const isSelected = selectedSpots.includes(spot.id);
                      return (
                        <div
                          key={spot.id}
                          onClick={() => handleToggleSpot(spot.id)}
                          className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-start gap-2.5 ${
                            isSelected
                              ? 'border-pink-500 bg-pink-50/70 dark:bg-pink-950/50 text-pink-900 dark:text-pink-100 shadow-xs ring-1 ring-pink-500/20'
                              : 'border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                          }`}
                        >
                          <div className={`mt-0.5 w-4 h-4 rounded-md flex items-center justify-center flex-shrink-0 text-white ${
                            isSelected ? 'bg-pink-600' : 'border border-slate-300 dark:border-slate-600'
                          }`}>
                            {isSelected && <CheckCircleIcon className="w-3.5 h-3.5" />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1">
                              <span className="text-xs font-black truncate">{spot.name}</span>
                              <span className="text-[9.5px] font-bold px-1.5 py-0.5 rounded-md bg-white dark:bg-slate-800 text-pink-700 dark:text-pink-300 border border-pink-200 dark:border-pink-800 flex-shrink-0">
                                {spot.category}
                              </span>
                            </div>
                            {spot.subLocations && spot.subLocations.length > 0 && (
                              <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                                Gồm: {spot.subLocations.slice(0, 3).join(' • ')}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Days Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-slate-700 dark:text-slate-300">2. Thời gian chuyến đi</span>
                <span className="text-pink-600 font-black">{days} Ngày {Math.max(days - 1, 1)} Đêm</span>
              </div>
              <input
                type="range"
                min="1"
                max="14"
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="w-full accent-pink-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>1 ngày (Đi về trong ngày)</span>
                <span>7 ngày</span>
                <span>14 ngày</span>
              </div>
            </div>

            {/* Travelers Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <UserGroupIcon className="w-4 h-4 text-pink-600" />
                <span>3. Số lượng thành viên tham gia</span>
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 4, 6].map(num => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setTravelers(num)}
                    className={`py-2 rounded-xl text-xs font-black transition-all ${
                      travelers === num
                        ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-xs'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                    }`}
                  >
                    {num === 1 ? '1 người' : `${num} người`}
                  </button>
                ))}
              </div>
            </div>

            {/* Travel Style Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                4. Phong cách du lịch (Đã giảm chi phí theo thực tế)
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'economy', label: 'Tiết kiệm', desc: 'Nhà nghỉ, Homestay / Ăn vỉa hè' },
                  { id: 'standard', label: 'Tiêu chuẩn', desc: 'Khách sạn 3⭐ / Quán đặc sản' },
                  { id: 'luxury', label: 'Cao cấp', desc: 'Resort 4-5⭐ / Sang trọng' }
                ].map(item => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setStyle(item.id as any)}
                    className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                      style === item.id
                        ? 'border-pink-500 bg-pink-50/60 dark:bg-pink-950/40 text-pink-700 dark:text-pink-300 ring-2 ring-pink-500/20 shadow-xs'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 text-slate-600 dark:text-slate-300 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-xs font-black">{item.label}</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Breakdown: Result Dashboard */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border-2 border-pink-300 dark:border-pink-800 shadow-xl space-y-6">
            {/* Grand Total Highlight Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-pink-600 via-rose-600 to-pink-700 text-white shadow-lg space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-pink-100 flex items-center justify-between">
                <span>Tổng ngân sách ({travelers} người • {days} ngày tại {currentDestination?.name})</span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-[11px] font-extrabold backdrop-blur-xs">
                  {style === 'economy' ? 'Gói Tiết Kiệm (Giảm sâu)' : style === 'standard' ? 'Gói Tiêu Chuẩn' : 'Gói Cao Cấp'}
                </span>
              </div>
              <div className="text-3xl sm:text-4xl font-black tracking-tight">
                {formatVND(grandTotal)}
              </div>
              <div className="text-xs text-pink-100/90 flex flex-wrap gap-x-4 pt-1 border-t border-white/20">
                <span>Bình quân: <strong>{formatVND(perPersonTotal)}</strong> / người</span>
                <span>Tương đương: <strong>{formatVND(perPersonPerDay)}</strong> / người / ngày</span>
              </div>
            </div>

            {/* Itemized Categories Breakdown */}
            <div className="space-y-3.5">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Chi tiết các khoản mục chi tiêu theo vùng {currentDestination?.regionName}:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Hotel */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-1">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200">
                    <span className="flex items-center gap-1.5">
                      <HomeModernIcon className="w-4 h-4 text-pink-600" />
                      <span>Nhà nghỉ / Lưu trú ({roomsNeeded} phòng • {Math.max(days - 1, 1)} đêm)</span>
                    </span>
                    <span className="font-black text-pink-600">{formatVND(totalHotel)}</span>
                  </div>
                  <div className="text-[10.5px] text-slate-500 truncate">
                    Ước tính: {formatVND(hotelPerNight)} / phòng / đêm
                  </div>
                </div>

                {/* Meals */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-1">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200">
                    <span className="flex items-center gap-1.5">
                      <ShoppingBagIcon className="w-4 h-4 text-amber-500" />
                      <span>Tiền ăn ({days} ngày • 3 bữa)</span>
                    </span>
                    <span className="font-black text-pink-600">{formatVND(totalMeals)}</span>
                  </div>
                  <div className="text-[10.5px] text-slate-500 truncate">
                    Ước tính: {formatVND(mealPerPersonPerDay)} / người / ngày
                  </div>
                </div>

                {/* Local Transport */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-1">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200">
                    <span className="flex items-center gap-1.5">
                      <TruckIcon className="w-4 h-4 text-blue-500" />
                      <span>Di chuyển nội tỉnh</span>
                    </span>
                    <span className="font-black text-pink-600">{formatVND(totalTransport)}</span>
                  </div>
                  <div className="text-[10.5px] text-slate-500 truncate">
                    Ước tính: {formatVND(transportPerDay)} / người / ngày
                  </div>
                </div>

                {/* Sightseeing Tickets */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-1">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200">
                    <span className="flex items-center gap-1.5">
                      <TicketIcon className="w-4 h-4 text-emerald-500" />
                      <span>Vé tham quan danh thắng</span>
                    </span>
                    <span className="font-black text-pink-600">{formatVND(totalSightseeing)}</span>
                  </div>
                  <div className="text-[10.5px] text-slate-500 truncate">
                    Tính theo {selectedSpots.length} địa điểm bạn đã chọn
                  </div>
                </div>
              </div>

              {/* Contingency */}
              <div className="p-3.5 rounded-2xl bg-pink-50/50 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-900/40 flex items-center justify-between text-xs">
                <span className="font-bold text-pink-900 dark:text-pink-200">
                  🎁 Quỹ dự phòng & quà đặc sản (10%):
                </span>
                <span className="font-black text-pink-600 dark:text-pink-400">
                  {formatVND(contingency)}
                </span>
              </div>
            </div>

            {/* Bottom CTA to Wizard with this province */}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={handleStartTripWithBudget}
                style={{
                  backgroundColor: '#db2777',
                  backgroundImage: 'linear-gradient(135deg, #e11d48 0%, #db2777 50%, #ec4899 100%)',
                  color: '#ffffff'
                }}
                className="w-full py-3.5 px-5 rounded-2xl font-black text-xs shadow-md shadow-pink-600/30 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>✨ Bắt đầu lập lịch trình tại {currentDestination?.name} với ngân sách này</span>
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
