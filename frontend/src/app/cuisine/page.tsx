'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import MainNavbar from '@/components/navigation/MainNavbar';
import { API_ENDPOINTS } from '@/config/api';
import { VIETNAM_CUISINES_MASTER, MasterCuisineItem, FamousSpot } from '@/data/vietnamCuisinesMaster';
import { VIETNAM_DESTINATIONS } from '@/data/vietnamData';
import {
  MagnifyingGlassIcon,
  SparklesIcon,
  GiftIcon,
  MapPinIcon,
  StarIcon,
  ArrowTopRightOnSquareIcon,
  ShoppingBagIcon,
  FireIcon
} from '@heroicons/react/24/outline';

const ALL_PROVINCES_LIST = VIETNAM_DESTINATIONS.map(d => ({
  id: d.id,
  name: d.name,
  region: d.region
}));

const POPULAR_PROVINCES = [
  { id: 'All', name: 'Tất cả 34 tỉnh' },
  { id: 'hanoi', name: 'TP. Hà Nội' },
  { id: 'hue', name: 'TP. Huế' },
  { id: 'danang', name: 'TP. Đà Nẵng' },
  { id: 'tphcm', name: 'TP. Hồ Chí Minh' },
  { id: 'cantho', name: 'TP. Cần Thơ' },
  { id: 'ninhbinh', name: 'Ninh Bình' },
  { id: 'haiphong', name: 'Hải Phòng' },
  { id: 'laocai', name: 'Lào Cai (Sa Pa)' },
  { id: 'angiang', name: 'An Giang' },
  { id: 'camau', name: 'Cà Mau' },
  { id: 'phutho', name: 'Phú Thọ' }
];

export default function CuisinePage() {
  const [cuisines, setCuisines] = useState<MasterCuisineItem[]>(VIETNAM_CUISINES_MASTER);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<'All' | 'North' | 'Central' | 'South'>('All');
  const [selectedProvince, setSelectedProvince] = useState<string>('All');
  const [onlyGifts, setOnlyGifts] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const cRes = await fetch(API_ENDPOINTS.cuisines);
        const cData = await cRes.json();
        if (cData.status === 'success' && cData.data && cData.data.length > 0) {
          setCuisines(cData.data);
        }
      } catch (err) {
        console.log('Using static cuisines master data');
      }
    }
    loadData();
  }, []);

  const filteredCuisines = useMemo(() => {
    return cuisines.filter(item => {
      // Region filter
      if (selectedRegion !== 'All') {
        const prov = ALL_PROVINCES_LIST.find(p => p.id === item.province_id);
        const itemRegion = (item as any).region || prov?.region || 'North';
        if (itemRegion !== selectedRegion) return false;
      }

      // Province filter
      if (selectedProvince !== 'All' && item.province_id !== selectedProvince) {
        return false;
      }

      // Gift filter
      if (onlyGifts && !item.is_gift_suitable) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(q);
        const matchProv = item.province_name.toLowerCase().includes(q);
        const matchDesc = item.description && item.description.toLowerCase().includes(q);
        return matchName || matchProv || matchDesc;
      }

      return true;
    });
  }, [cuisines, selectedRegion, selectedProvince, onlyGifts, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <MainNavbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Banner Section */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-pink-300 dark:border-pink-800 bg-gradient-to-r from-rose-900 via-pink-900 to-rose-950 p-6 sm:p-10 text-white">
          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/30 border border-pink-400/40 text-pink-200 text-xs font-black uppercase tracking-wider backdrop-blur-xs">
              <SparklesIcon className="w-4 h-4 text-pink-300" />
              <span>FOOD & LOCAL CUISINE • TOÀN BỘ 34 TỈNH THÀNH</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
              Hương Vị Ẩm Thực & <span className="bg-gradient-to-r from-pink-300 via-rose-200 to-amber-200 bg-clip-text text-transparent">Quán Ăn 5 Sao Google Maps</span>
            </h1>
            <p className="text-xs sm:text-sm text-pink-100/90 leading-relaxed">
              Khám phá hơn 300 món ăn đặc sản truyền thống tinh hoa của 34 tỉnh thành Việt Nam: Phở Bát Đàn, Bún chả Hàng Mành, Cơm hến Sông Hương, Mì Quảng, Bánh tráng cuốn thịt heo, Bánh xèo miền Tây, Lẩu cá hồi Sa Pa, Cua Cà Mau... Kèm địa chỉ quán ăn được đánh giá 5 sao uy tín trên Google Maps.
            </p>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
          {/* Top row: Search and Counters */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <MagnifyingGlassIcon className="w-5 h-5 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm món ngon, đặc sản (Phở, Bún chả, Cua Cà Mau...)"
                className="w-full pl-11 pr-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all font-medium"
              />
            </div>

            {/* Controls Right */}
            <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto justify-between md:justify-end">
              {/* Province Dropdown with All 34 Provinces */}
              <select
                value={selectedProvince}
                onChange={(e) => setSelectedProvince(e.target.value)}
                className="px-3.5 py-2.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-500 cursor-pointer"
              >
                <option value="All">Tất cả 34 tỉnh thành</option>
                {ALL_PROVINCES_LIST.map(p => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>

              {/* Only Gift Suitability Toggle */}
              <button
                type="button"
                onClick={() => setOnlyGifts(!onlyGifts)}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  onlyGifts
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                <GiftIcon className="w-4 h-4" />
                <span>Đặc sản làm quà</span>
              </button>

              <div className="text-xs font-black text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-pulse" />
                <span><strong>{filteredCuisines.length}</strong> món</span>
              </div>
            </div>
          </div>

          {/* Region Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar border-t border-slate-100 dark:border-slate-800 pt-3">
            {[
              { id: 'All', label: 'Tất cả vùng miền' },
              { id: 'North', label: '🍜 Ẩm thực Miền Bắc' },
              { id: 'Central', label: '🌶️ Ẩm thực Miền Trung & Tây Nguyên' },
              { id: 'South', label: '🥥 Ẩm thực Miền Nam & Sông Nước' }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => { setSelectedRegion(tab.id as any); setSelectedProvince('All'); }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedRegion === tab.id
                    ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Quick Popular Provinces Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar pt-1">
            <span className="text-[11px] font-bold text-slate-400 whitespace-nowrap mr-1">Tỉnh tiêu biểu:</span>
            {POPULAR_PROVINCES.map(p => (
              <button
                key={p.id}
                type="button"
                onClick={() => setSelectedProvince(p.id)}
                className={`px-3 py-1 rounded-lg text-[11px] font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedProvince === p.id
                    ? 'bg-pink-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        {/* Cuisines Grid */}
        {filteredCuisines.length === 0 ? (
          <div className="py-16 text-center bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 p-8 space-y-2">
            <p className="text-sm font-bold text-slate-600 dark:text-slate-300">Không tìm thấy món ăn nào theo tiêu chí tìm kiếm</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedRegion('All'); setSelectedProvince('All'); setOnlyGifts(false); }}
              className="px-4 py-2 rounded-xl text-xs font-bold text-pink-600 hover:underline cursor-pointer"
            >
              Đặt lại toàn bộ bộ lọc để xem toàn bộ 304 món
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCuisines.map(c => (
              <div
                key={c.id}
                className="bg-white dark:bg-slate-900 rounded-3xl border-2 border-slate-200 dark:border-slate-800 hover:border-pink-500 dark:hover:border-pink-500 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between overflow-hidden p-5 space-y-4"
              >
                {/* Header Information */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10.5px] font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400 flex items-center gap-1">
                        <MapPinIcon className="w-3.5 h-3.5" />
                        <span>{c.province_name}</span>
                      </span>
                      <h3 className="text-lg font-black text-slate-900 dark:text-white leading-snug">
                        {c.name}
                      </h3>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <span className="px-2.5 py-1 rounded-lg bg-pink-50 dark:bg-pink-950/60 text-pink-700 dark:text-pink-300 text-xs font-black border border-pink-200 dark:border-pink-800">
                        {c.price_range}
                      </span>
                      {c.is_gift_suitable && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 text-[10px] font-extrabold border border-amber-200 dark:border-amber-800">
                          <GiftIcon className="w-3 h-3" />
                          <span>Làm quà</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {c.description}
                  </p>
                </div>

                {/* 5-Star Google Maps Eateries */}
                <div className="space-y-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <div className="text-[11px] font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                    <StarIcon className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span>Gợi ý quán ăn 5 sao Google Maps:</span>
                  </div>

                  <div className="space-y-2">
                    {c.famous_spots && c.famous_spots.length > 0 ? (
                      c.famous_spots.map((spot, idx) => (
                        <div
                          key={idx}
                          className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 text-xs flex items-center justify-between gap-2"
                        >
                          <div className="min-w-0">
                            <div className="font-bold text-slate-900 dark:text-white truncate">
                              {spot.name}
                            </div>
                            <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                              📍 {spot.address}
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5 flex-shrink-0">
                            <span className="px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 text-[10px] font-black">
                              ⭐ {spot.rating}
                            </span>
                            <a
                              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.name + ' ' + spot.address)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 hover:bg-pink-100 dark:hover:bg-pink-950 text-pink-600 rounded-lg transition-colors cursor-pointer"
                              title="Chỉ đường trên Google Maps"
                            >
                              <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-[11px] text-slate-400 italic">
                        Các quán ăn truyền thống tại trung tâm {c.province_name}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
