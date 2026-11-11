'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import MainNavbar from '@/components/navigation/MainNavbar';
import { API_ENDPOINTS } from '@/config/api';
import { VIETNAM_DESTINATIONS } from '@/data/vietnamData';
import {
  MagnifyingGlassIcon,
  MapPinIcon,
  SparklesIcon,
  CalendarIcon,
  ArrowRightIcon,
  XMarkIcon,
  BuildingOffice2Icon,
  SunIcon,
  CheckCircleIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

interface ProvinceItem {
  id: string;
  name: string;
  code: string;
  region: string;
  region_name: string;
  province_type: string;
  merged_from: string;
  lat: number;
  lng: number;
  image_url: string;
  description: string;
  geography: string;
  climate: string;
  best_season: string;
  destination_count: number;
  cuisine_count: number;
  festival_count: number;
}

// Baseline 34 Provinces generated statically from VIETNAM_DESTINATIONS
const STATIC_PROVINCES: ProvinceItem[] = VIETNAM_DESTINATIONS.map(p => ({
  id: p.id,
  name: p.name,
  code: p.id.toUpperCase(),
  region: p.region,
  region_name: p.regionName || (p.region === 'North' ? 'Miền Bắc' : p.region === 'Central' ? 'Miền Trung' : 'Miền Nam'),
  province_type: p.provinceType || 'province',
  merged_from: p.mergedFrom || '',
  lat: p.lat,
  lng: p.lng,
  image_url: p.image || '/logo.png',
  description: p.description,
  geography: `Khu vực ${p.regionName || p.region}, địa hình đặc trưng với các cảnh quan thiên nhiên và di sản nổi bật.`,
  climate: 'Nhiệt đới gió mùa, thời tiết phân mùa rõ rệt thích hợp du lịch quanh năm.',
  best_season: p.bestSeason || 'Quanh năm',
  destination_count: p.touristSpots?.length || 2,
  cuisine_count: p.touristSpots?.reduce((sum, s) => sum + (s.foodSpecialties?.length || 0), 0) || 4,
  festival_count: 2
}));

export default function ExploreProvincesPage() {
  const router = useRouter();
  const [provinces, setProvinces] = useState<ProvinceItem[]>(STATIC_PROVINCES);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<'All' | 'North' | 'Central' | 'South' | 'City'>('All');
  const [activeProvince, setActiveProvince] = useState<any | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);

  useEffect(() => {
    async function fetchProvinces() {
      try {
        const res = await fetch(API_ENDPOINTS.provinces);
        const data = await res.json();
        if (data.status === 'success' && data.data && data.data.length > 0) {
          setProvinces(data.data);
        }
      } catch (err) {
        console.warn('API provinces fallback to static list:', err);
      }
    }
    fetchProvinces();
  }, []);

  const filteredProvinces = useMemo(() => {
    return provinces.filter(p => {
      // Region filter
      if (selectedRegion === 'City' && p.province_type !== 'city') return false;
      if (selectedRegion === 'North' && p.region !== 'North') return false;
      if (selectedRegion === 'Central' && p.region !== 'Central') return false;
      if (selectedRegion === 'South' && p.region !== 'South') return false;

      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = p.name.toLowerCase().includes(q);
        const matchMerged = p.merged_from && p.merged_from.toLowerCase().includes(q);
        const matchDesc = p.description && p.description.toLowerCase().includes(q);
        return matchName || matchMerged || matchDesc;
      }
      return true;
    });
  }, [provinces, selectedRegion, searchQuery]);

  // Open province detail drawer
  const handleOpenDetail = async (pId: string) => {
    setDetailLoading(true);
    const dest = VIETNAM_DESTINATIONS.find(d => d.id === pId);
    if (dest) {
      const baselineData = {
        province: {
          id: dest.id,
          name: dest.name,
          region_name: dest.regionName || (dest.region === 'North' ? 'Miền Bắc' : dest.region === 'Central' ? 'Miền Trung' : 'Miền Nam'),
          province_type: dest.provinceType,
          merged_from: dest.mergedFrom,
          description: dest.description,
          geography: `Tọa lạc tại khu vực ${dest.regionName || dest.region}, là vùng đất giàu truyền thống lịch sử với cảnh quan đa dạng.`,
          climate: 'Khí hậu nhiệt đới gió mùa phân hóa đa dạng, thích hợp du lịch quanh năm.',
          best_season: dest.bestSeason || 'Mùa khô & các dịp lễ hội truyền thống',
          image_url: dest.image
        },
        destinations: (dest.touristSpots || []).map(s => ({
          id: s.id,
          name: s.name,
          category_name: s.category || 'Danh lam thắng cảnh',
          address: `${s.name}, ${dest.name}`,
          description: s.description,
          highlights: s.activities?.join('\n') || 'Khám phá văn hóa và thắng cảnh bản địa.',
          ticket_price: '50.000đ - 250.000đ / vé',
          opening_hours: '07:00 - 18:30 (Hằng ngày)',
          estimated_duration: '2 - 4 giờ',
          rating: 4.9
        })),
        cuisines: (dest.touristSpots?.[0]?.foodSpecialties || []).map(f => ({
          name: f,
          description: `Món ăn đặc sản nức tiếng truyền đời của người dân ${dest.name}.`,
          price_range: '35.000đ - 85.000đ',
          famous_spots: [
            { name: `Quán ${f} Gia Truyền`, address: `Khu ẩm thực trung tâm, ${dest.name}`, rating: 4.9 }
          ]
        })),
        festivals: [
          { name: `Lễ hội Văn hóa Du lịch ${dest.name}`, time_details: 'Dịp đầu xuân và các mùa lễ hội', location: dest.name, significance: 'Tôn vinh cội nguồn và di sản văn hóa.' }
        ]
      };
      setActiveProvince(baselineData);
    }

    try {
      const res = await fetch(API_ENDPOINTS.provinceDetail(pId));
      const data = await res.json();
      if (data.status === 'success' && data.data) {
        setActiveProvince(data.data);
      }
    } catch (err) {
      console.log('Using baseline province detail data');
    } finally {
      setDetailLoading(false);
    }
  };

  const handleStartTripAtProvince = (pIdentifier: string) => {
    if (!pIdentifier) {
      router.push('/');
      return;
    }
    const target = pIdentifier.trim().toLowerCase();
    const dest = VIETNAM_DESTINATIONS.find(d =>
      d.id.toLowerCase() === target ||
      d.name.toLowerCase() === target ||
      d.name.toLowerCase().includes(target) ||
      target.includes(d.name.toLowerCase())
    );

    if (dest) {
      try {
        const key = 'vietnam_trip_wizard_v3_34provinces';
        const saved = sessionStorage.getItem(key);
        const parsed = saved ? JSON.parse(saved) : {};
        sessionStorage.setItem(key, JSON.stringify({
          ...parsed,
          selectedDestinations: [dest],
          currentStep: 2
        }));
      } catch (e) {
        console.error('Failed to set destination in session:', e);
      }
      router.push(`/?province=${dest.id}`);
    } else {
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <MainNavbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Banner Section */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-pink-300 dark:border-pink-800 bg-gradient-to-r from-pink-900 via-rose-900 to-pink-950 p-6 sm:p-10 text-white">
          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/30 border border-pink-400/40 text-pink-200 text-xs font-black uppercase tracking-wider backdrop-blur-xs">
              <SparklesIcon className="w-4 h-4 text-pink-300" />
              <span>NGHỊ QUYẾT 202/2025/QH15 • ĐỦ 34 ĐƠN VỊ HÀNH CHÍNH</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
              Khám Phá Toàn Diện <span className="bg-gradient-to-r from-pink-300 via-rose-200 to-amber-200 bg-clip-text text-transparent">34 Tỉnh/Thành Việt Nam</span>
            </h1>
            <p className="text-xs sm:text-sm text-pink-100/90 leading-relaxed">
              Dữ liệu du lịch thực tế đầy đủ của 34 tỉnh/thành phố: Hà Nội, TP. Hồ Chí Minh, Đà Nẵng, Huế, Hải Phòng, Cần Thơ, Sa Pa (Lào Cai), Hội An, Phú Quốc (An Giang)... Tra cứu địa danh lịch sử sau sáp nhập, thời gian du lịch đẹp nhất, danh thắng và tụ điểm ăn chơi.
            </p>
          </div>
        </div>

        {/* Search & Region Filter Bar */}
        <div className="bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <MagnifyingGlassIcon className="w-5 h-5 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm tỉnh thành (Hà Nội, Lào Cai, Đà Nẵng, Sa Pa...)"
                className="w-full pl-11 pr-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all font-medium"
              />
            </div>

            {/* Total Count Badge */}
            <div className="text-xs font-black text-slate-600 dark:text-slate-300 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Hiển thị <strong>{filteredProvinces.length}</strong> / <strong>{provinces.length}</strong> Tỉnh thành</span>
            </div>
          </div>

          {/* Region Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {[
              { id: 'All', label: 'Tất cả 34 tỉnh thành' },
              { id: 'City', label: '⭐ 6 TP Trực thuộc TW' },
              { id: 'North', label: 'Miền Bắc (14 Tỉnh)' },
              { id: 'Central', label: 'Miền Trung & Tây Nguyên (11 Tỉnh)' },
              { id: 'South', label: 'Miền Nam (9 Tỉnh)' }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedRegion(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedRegion === tab.id
                    ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-xs scale-102'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {filteredProvinces.length === 0 ? (
          <div className="py-16 text-center bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 p-8 space-y-2">
            <p className="text-sm font-bold text-slate-600 dark:text-slate-300">Không tìm thấy tỉnh/thành nào phù hợp với từ khóa &quot;{searchQuery}&quot;</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedRegion('All'); }}
              className="px-4 py-2 rounded-xl text-xs font-bold text-pink-600 hover:underline cursor-pointer"
            >
              Xóa bộ lọc để xem lại toàn bộ 34 tỉnh
            </button>
          </div>
        ) : (
          /* Provinces Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProvinces.map(p => (
              <div
                key={p.id}
                className="group bg-white dark:bg-slate-900 rounded-3xl border-2 border-slate-200 dark:border-slate-800 hover:border-pink-500 dark:hover:border-pink-500 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col overflow-hidden"
              >
                {/* Card Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                  <img
                    src={p.image_url || '/logo.png'}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30" />

                  {/* Region badge */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-wider border border-white/20">
                      {p.region_name}
                    </span>
                    {p.province_type === 'city' && (
                      <span className="px-2.5 py-1 rounded-lg bg-pink-600 text-white text-[10px] font-black uppercase tracking-wider shadow-xs">
                        ⭐ TP Trực thuộc TW
                      </span>
                    )}
                  </div>

                  {/* Province Name on image bottom */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-lg font-black text-white drop-shadow-md">
                      {p.name}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    {/* Merged From Pill */}
                    {p.merged_from && (
                      <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 p-2 rounded-xl border border-slate-200 dark:border-slate-700">
                        📍 <strong>Địa danh sau sắp xếp:</strong> {p.merged_from}
                      </div>
                    )}

                    {/* Short Description */}
                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                      {p.description}
                    </p>

                    {/* Quick Stats: Destinations, Food, Season */}
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px]">
                      <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                        <span>🏖️</span>
                        <span>{p.destination_count} tụ điểm vui chơi</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                        <span>🍜</span>
                        <span>{p.cuisine_count} món ăn đặc sản</span>
                      </div>
                      <div className="col-span-2 flex items-center gap-1.5 text-pink-700 dark:text-pink-300 font-semibold text-[10.5px]">
                        <SunIcon className="w-3.5 h-3.5 text-amber-500" />
                        <span>Mùa đẹp nhất: {p.best_season}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleOpenDetail(p.id)}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-pink-50 dark:bg-pink-950/60 hover:bg-pink-100 dark:hover:bg-pink-900/60 text-pink-700 dark:text-pink-300 font-bold text-xs border border-pink-200 dark:border-pink-800 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Khám phá tỉnh này</span>
                      <ArrowRightIcon className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleStartTripAtProvince(p.name)}
                      className="p-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 text-white hover:scale-105 transition-all shadow-xs cursor-pointer"
                      title={`Lập lịch trình du lịch tại ${p.name}`}
                    >
                      <SparklesIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Detailed Province Drawer Modal */}
        {activeProvince && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-fadeIn">
            <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border-2 border-pink-300 dark:border-pink-800 shadow-2xl space-y-6">
              {/* Modal Banner Header */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900">
                <img
                  src={activeProvince.province?.image_url || '/logo.png'}
                  alt={activeProvince.province?.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <button
                  type="button"
                  onClick={() => setActiveProvince(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors cursor-pointer"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
                <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-pink-600 text-[10px] font-black uppercase">
                      {activeProvince.province?.region_name}
                    </span>
                    {activeProvince.province?.merged_from && (
                      <span className="text-xs text-pink-200">
                        {activeProvince.province.merged_from}
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black">
                    {activeProvince.province?.name}
                  </h2>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6">
                {/* Overview & Climate */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1.5">
                    <h4 className="text-xs font-black uppercase text-pink-600 flex items-center gap-1.5">
                      <GlobeAltIcon className="w-4 h-4" />
                      <span>Vị trí & Khí hậu</span>
                    </h4>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      {activeProvince.province?.geography || activeProvince.province?.description}
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      🌤️ <strong>Thời tiết:</strong> {activeProvince.province?.climate}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-pink-50/70 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-900 space-y-1.5">
                    <h4 className="text-xs font-black uppercase text-pink-700 dark:text-pink-300 flex items-center gap-1.5">
                      <SunIcon className="w-4 h-4" />
                      <span>Mùa du lịch đẹp nhất</span>
                    </h4>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-semibold">
                      {activeProvince.province?.best_season}
                    </p>
                    <p className="text-[11px] text-pink-800 dark:text-pink-200">
                      💡 Mẹo: Nên chuẩn bị lịch trình trước 2 tuần để tối ưu đặt phòng và phương tiện.
                    </p>
                  </div>
                </div>

                {/* Tourist Spots List */}
                <div className="space-y-3">
                  <h4 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <span>🏖️</span>
                    <span>Tụ điểm du lịch & Địa danh nổi bật ({activeProvince.destinations?.length || 0})</span>
                  </h4>
                  <div className="space-y-3">
                    {activeProvince.destinations?.map((d: any) => (
                      <div
                        key={d.id}
                        className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 space-y-2"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h5 className="text-sm font-black text-slate-900 dark:text-white">
                              {d.name}
                            </h5>
                            <span className="text-[10px] font-bold text-pink-600 dark:text-pink-400 uppercase">
                              {d.category_name} • 📍 {d.address}
                            </span>
                          </div>
                          <span className="px-2 py-0.5 rounded-lg bg-pink-100 text-pink-800 dark:bg-pink-950 dark:text-pink-200 text-[10px] font-extrabold whitespace-nowrap">
                            Vé: {d.ticket_price}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                          {d.description}
                        </p>
                        {d.highlights && (
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 whitespace-pre-line bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                            {d.highlights}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specialties & Food */}
                {activeProvince.cuisines && activeProvince.cuisines.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                      <span>🍜</span>
                      <span>Đặc sản ẩm thực trứ danh ({activeProvince.cuisines.length})</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeProvince.cuisines.map((c: any, cIdx: number) => (
                        <div
                          key={cIdx}
                          className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs space-y-1"
                        >
                          <div className="font-black text-slate-900 dark:text-white flex items-center justify-between">
                            <span>{c.name}</span>
                            <span className="text-[10px] text-pink-600 font-bold">{c.price_range}</span>
                          </div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">
                            {c.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Buttons in Drawer */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveProvince(null)}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 cursor-pointer"
                  >
                    Đóng lại
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const pKey = activeProvince.province?.id || activeProvince.province?.name;
                      setActiveProvince(null);
                      if (pKey) {
                        handleStartTripAtProvince(pKey);
                      } else {
                        router.push('/');
                      }
                    }}
                    style={{
                      backgroundColor: '#db2777',
                      backgroundImage: 'linear-gradient(135deg, #e11d48 0%, #db2777 50%, #ec4899 100%)',
                      color: '#ffffff'
                    }}
                    className="px-6 py-2.5 rounded-xl text-xs font-black text-white shadow-md shadow-pink-900/30 hover:scale-105 transition-all cursor-pointer"
                  >
                    ✨ Lập lịch trình tại {activeProvince.province?.name}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
