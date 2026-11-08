'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import MainNavbar from '@/components/navigation/MainNavbar';
import { API_ENDPOINTS } from '@/config/api';
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

interface FamousSpot {
  name: string;
  address: string;
  rating: number;
  price?: string;
}

interface CuisineItem {
  id: number;
  province_id: string;
  province_name: string;
  name: string;
  dish_type: string;
  description: string;
  price_range: string;
  famous_spots: FamousSpot[];
  is_gift_suitable: boolean;
  image_url: string;
}

export default function CuisinePage() {
  const [cuisines, setCuisines] = useState<CuisineItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<'All' | 'North' | 'Central' | 'South'>('All');
  const [onlyGifts, setOnlyGifts] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState<string>('All');
  const [provincesList, setProvincesList] = useState<{ id: string; name: string }[]>([]);

  useEffect(() => {
    async function loadData() {
      try {
        const [cRes, pRes] = await Promise.all([
          fetch(API_ENDPOINTS.cuisines),
          fetch(API_ENDPOINTS.provinces)
        ]);
        const cData = await cRes.json();
        const pData = await pRes.json();

        if (cData.status === 'success' && cData.data) {
          setCuisines(cData.data);
        }
        if (pData.status === 'success' && pData.data) {
          setProvincesList(pData.data.map((p: any) => ({ id: p.id, name: p.name })));
        }
      } catch (err) {
        console.error('Failed to load cuisines:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const filteredCuisines = useMemo(() => {
    return cuisines.filter(item => {
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
  }, [cuisines, selectedProvince, onlyGifts, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <MainNavbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Banner Section */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-pink-300 dark:border-pink-800 bg-gradient-to-r from-rose-900 via-pink-900 to-rose-950 p-6 sm:p-10 text-white">
          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/30 border border-pink-400/40 text-pink-200 text-xs font-black uppercase tracking-wider backdrop-blur-xs">
              <SparklesIcon className="w-4 h-4 text-pink-300" />
              <span>FOOD & LOCAL CUISINE • 34 TỈNH THÀNH VIỆT NAM</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
              Hương Vị Ẩm Thực & <span className="bg-gradient-to-r from-pink-300 via-rose-200 to-amber-200 bg-clip-text text-transparent">Quán Ăn 5 Sao Google Maps</span>
            </h1>
            <p className="text-xs sm:text-sm text-pink-100/90 leading-relaxed">
              Khám phá hơn 300 món ngon nức tiếng trải dài từ Bắc chí Nam: Phở Bát Đàn, Bánh đa cua Hải Phòng, Bún bò giò heo Huế, Mì Quảng, Cơm tấm Sài Gòn, Lẩu mắm Cần Thơ cùng địa chỉ quán ăn được đánh giá 4.8 - 5.0 ⭐.
            </p>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-88">
              <MagnifyingGlassIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm món ngon, đặc sản, tỉnh thành..."
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all font-medium"
              />
            </div>

            {/* Filters Right */}
            <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
              {/* Province Dropdown */}
              <select
                value={selectedProvince}
                onChange={(e) => setSelectedProvince(e.target.value)}
                className="px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <option value="All">Tất cả 34 tỉnh thành</option>
                {provincesList.map(p => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>

              {/* Only Gift Suitability Toggle */}
              <button
                type="button"
                onClick={() => setOnlyGifts(!onlyGifts)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  onlyGifts
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                <GiftIcon className="w-4 h-4" />
                <span>Đặc sản làm quà</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content Loading or Empty */}
        {loading ? (
          <div className="py-20 text-center space-y-3">
            <div className="w-10 h-10 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-xs font-bold text-slate-500">Đang tải tinh hoa ẩm thực 34 tỉnh thành...</p>
          </div>
        ) : filteredCuisines.length === 0 ? (
          <div className="py-16 text-center bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 p-8 space-y-2">
            <p className="text-sm font-bold text-slate-600 dark:text-slate-300">Không tìm thấy món ăn nào theo tiêu chí tìm kiếm</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedProvince('All'); setOnlyGifts(false); }}
              className="px-4 py-2 rounded-xl text-xs font-bold text-pink-600 hover:underline"
            >
              Đặt lại toàn bộ bộ lọc
            </button>
          </div>
        ) : (
          /* Dishes Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCuisines.map(c => (
              <div
                key={c.id}
                className="bg-white dark:bg-slate-900 rounded-3xl border-2 border-slate-200 dark:border-slate-800 hover:border-pink-400 dark:hover:border-pink-600 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between overflow-hidden p-5 space-y-4"
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
                            <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-black">
                              ⭐ {spot.rating}
                            </span>
                            <a
                              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.name + ' ' + spot.address)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 hover:bg-pink-100 dark:hover:bg-pink-950 text-pink-600 rounded-lg transition-colors"
                              title="Chỉ đường trên Google Maps"
                            >
                              <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-[11px] text-slate-400 italic">Liên hệ người bản địa hoặc hỏi Trợ lý AI để có địa chỉ quán gia truyền.</p>
                    )}
                  </div>
                </div>

                {/* Bottom link to wizard */}
                <div className="pt-2">
                  <Link
                    href="/"
                    className="w-full py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-pink-50 dark:hover:bg-pink-950/60 text-slate-700 dark:text-slate-300 hover:text-pink-600 text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Lập chuyến đi thưởng thức {c.name}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

