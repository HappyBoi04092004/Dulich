'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import MainNavbar from '@/components/navigation/MainNavbar';
import { API_ENDPOINTS } from '@/config/api';
import {
  CalendarDaysIcon,
  SparklesIcon,
  MapPinIcon,
  MagnifyingGlassIcon,
  ClockIcon,
  ShieldExclamationIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

interface FestivalItem {
  id: number;
  province_id: string;
  province_name: string;
  name: string;
  month_lunar: number;
  month_solar: number;
  time_details: string;
  location: string;
  significance: string;
  activities: string;
  dress_code_tips: string;
  image_url: string;
}

export default function FestivalsPage() {
  const [festivals, setFestivals] = useState<FestivalItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMonth, setSelectedMonth] = useState<number | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function loadFestivals() {
      try {
        const res = await fetch(API_ENDPOINTS.festivals);
        const data = await res.json();
        if (data.status === 'success' && data.data) {
          setFestivals(data.data);
        }
      } catch (err) {
        console.error('Failed to load festivals:', err);
      } finally {
        setLoading(false);
      }
    }
    loadFestivals();
  }, []);

  const filteredFestivals = useMemo(() => {
    return festivals.filter(f => {
      // Month filter (Solar month)
      if (selectedMonth !== 'All' && f.month_solar !== selectedMonth) {
        return false;
      }
      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = f.name.toLowerCase().includes(q);
        const matchProv = f.province_name.toLowerCase().includes(q);
        const matchLoc = f.location && f.location.toLowerCase().includes(q);
        return matchName || matchProv || matchLoc;
      }
      return true;
    });
  }, [festivals, selectedMonth, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <MainNavbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Banner Section */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-pink-300 dark:border-pink-800 bg-gradient-to-r from-rose-900 via-pink-900 to-rose-950 p-6 sm:p-10 text-white">
          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/30 border border-pink-400/40 text-pink-200 text-xs font-black uppercase tracking-wider backdrop-blur-xs">
              <SparklesIcon className="w-4 h-4 text-pink-300" />
              <span>TRADITIONAL FESTIVALS • 12 THÁNG NGUYÊN BẢN</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
              Lễ Hội Truyền Thống & <span className="bg-gradient-to-r from-pink-300 via-rose-200 to-amber-200 bg-clip-text text-transparent">Di Sản Văn Hóa Việt Nam</span>
            </h1>
            <p className="text-xs sm:text-sm text-pink-100/90 leading-relaxed">
              Hành hương theo dòng chảy lịch sử và văn hóa tâm linh 34 tỉnh thành: Giỗ Tổ Hùng Vương, Lễ hội Chùa Hương, Lễ hội Yên Tử, Festival Huế, Lễ hội Pháo hoa Đà Nẵng, Festival Hoa Đà Lạt đến Vía Bà Chúa Xứ Núi Sam.
            </p>
          </div>
        </div>

        {/* Month Selector Bar */}
        <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Search */}
            <div className="relative w-full sm:w-80">
              <MagnifyingGlassIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm lễ hội, địa điểm, tỉnh thành..."
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all font-medium"
              />
            </div>

            <div className="text-xs font-bold text-slate-500">
              Hiển thị {filteredFestivals.length} lễ hội truyền thống
            </div>
          </div>

          {/* 12 Months Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            <button
              type="button"
              onClick={() => setSelectedMonth('All')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedMonth === 'All'
                  ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              Cả năm (12 Tháng)
            </button>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(m => (
              <button
                key={m}
                type="button"
                onClick={() => setSelectedMonth(m)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedMonth === m
                    ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                Tháng {m}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <div className="py-20 text-center space-y-3">
            <div className="w-10 h-10 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-xs font-bold text-slate-500">Đang tải danh sách lễ hội truyền thống...</p>
          </div>
        ) : filteredFestivals.length === 0 ? (
          <div className="py-16 text-center bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 p-8 space-y-2">
            <p className="text-sm font-bold text-slate-600 dark:text-slate-300">Không tìm thấy lễ hội nào trong tháng đã chọn</p>
            <button
              onClick={() => { setSelectedMonth('All'); setSearchQuery(''); }}
              className="px-4 py-2 rounded-xl text-xs font-bold text-pink-600 hover:underline"
            >
              Xem tất cả lễ hội trong năm
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredFestivals.map(fest => (
              <div
                key={fest.id}
                className="bg-white dark:bg-slate-900 rounded-3xl border-2 border-slate-200 dark:border-slate-800 hover:border-pink-400 dark:hover:border-pink-600 transition-all duration-300 shadow-sm hover:shadow-xl p-6 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  {/* Top Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-xl bg-pink-100 dark:bg-pink-950/70 text-pink-700 dark:text-pink-300 text-xs font-black border border-pink-200 dark:border-pink-900/60 flex items-center gap-1.5">
                      <CalendarDaysIcon className="w-4 h-4" />
                      <span>Tháng {fest.month_solar} Dương lịch • Tháng {fest.month_lunar} Âm lịch</span>
                    </span>

                    <span className="text-[11px] font-bold text-slate-500 flex items-center gap-1">
                      <MapPinIcon className="w-3.5 h-3.5 text-pink-600" />
                      <span>{fest.province_name}</span>
                    </span>
                  </div>

                  {/* Title & Timing */}
                  <div>
                    <h3 className="text-xl font-black text-slate-900 dark:text-white leading-tight">
                      {fest.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-pink-700 dark:text-pink-400 font-extrabold mt-1">
                      <ClockIcon className="w-4 h-4" />
                      <span>{fest.time_details}</span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-2xl border border-slate-200 dark:border-slate-700/60">
                    <span className="font-bold">📍 Địa điểm:</span> {fest.location}
                  </div>

                  {/* Cultural Significance */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {fest.significance}
                  </p>

                  {/* Activities */}
                  {fest.activities && (
                    <div className="space-y-1">
                      <div className="text-[11px] font-bold text-slate-800 dark:text-slate-200">
                        🎯 Hoạt động đặc sắc:
                      </div>
                      <p className="text-[11.5px] text-pink-800 dark:text-pink-300 font-medium leading-relaxed bg-pink-50/50 dark:bg-pink-950/30 p-2.5 rounded-xl border border-pink-100 dark:border-pink-900/40">
                        {fest.activities}
                      </p>
                    </div>
                  )}

                  {/* Dress Code & Etiquette */}
                  {fest.dress_code_tips && (
                    <div className="text-[11px] text-amber-800 dark:text-amber-300 font-medium bg-amber-50 dark:bg-amber-950/30 p-2.5 rounded-xl border border-amber-200 dark:border-amber-800/50 flex items-start gap-2">
                      <ShieldExclamationIcon className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span><span className="font-bold">Lưu ý trang phục:</span> {fest.dress_code_tips}</span>
                    </div>
                  )}
                </div>

                {/* Bottom Action */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                  <Link
                    href="/"
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white text-xs font-black transition-all shadow-xs flex items-center justify-center gap-1.5"
                  >
                    <span>Lập kế hoạch tham gia lễ hội</span>
                    <ArrowRightIcon className="w-4 h-4" />
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
