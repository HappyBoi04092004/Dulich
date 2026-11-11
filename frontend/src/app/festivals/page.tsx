'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import MainNavbar from '@/components/navigation/MainNavbar';
import { API_ENDPOINTS } from '@/config/api';
import { VIETNAM_FESTIVALS_MASTER, MasterFestivalItem } from '@/data/vietnamFestivalsMaster';
import {
  CalendarDaysIcon,
  SparklesIcon,
  MapPinIcon,
  MagnifyingGlassIcon,
  ClockIcon,
  ShieldExclamationIcon,
  ArrowRightIcon,
  SunIcon
} from '@heroicons/react/24/outline';

export default function FestivalsPage() {
  const [festivals, setFestivals] = useState<MasterFestivalItem[]>(VIETNAM_FESTIVALS_MASTER);
  const [selectedMonth, setSelectedMonth] = useState<number | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function loadFestivals() {
      try {
        const res = await fetch(API_ENDPOINTS.festivals);
        const data = await res.json();
        if (data.status === 'success' && data.data && data.data.length > 0) {
          setFestivals(data.data);
        }
      } catch (err) {
        console.log('Using static master festivals data');
      }
    }
    loadFestivals();
  }, []);

  // Filter festivals based on lunar or solar month and search query
  const filteredFestivals = useMemo(() => {
    return festivals.filter(f => {
      // Month filter: Match either solar or lunar month so du khách dễ tìm
      if (selectedMonth !== 'All') {
        const matchSolar = f.month_solar === selectedMonth;
        const matchLunar = f.month_lunar === selectedMonth;
        if (!matchSolar && !matchLunar) {
          return false;
        }
      }

      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = f.name.toLowerCase().includes(q);
        const matchProv = f.province_name.toLowerCase().includes(q);
        const matchLoc = f.location && f.location.toLowerCase().includes(q);
        const matchAct = f.activities && f.activities.toLowerCase().includes(q);
        return matchName || matchProv || matchLoc || matchAct;
      }

      return true;
    });
  }, [festivals, selectedMonth, searchQuery]);

  // Count festivals per month
  const monthCounts = useMemo(() => {
    const counts: Record<number, number> = {};
    for (let m = 1; m <= 12; m++) {
      counts[m] = festivals.filter(f => f.month_solar === m || f.month_lunar === m).length;
    }
    return counts;
  }, [festivals]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <MainNavbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Banner Section */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-pink-300 dark:border-pink-800 bg-gradient-to-r from-rose-900 via-pink-900 to-rose-950 p-6 sm:p-10 text-white">
          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/30 border border-pink-400/40 text-pink-200 text-xs font-black uppercase tracking-wider backdrop-blur-xs">
              <SparklesIcon className="w-4 h-4 text-pink-300" />
              <span>TRADITIONAL FESTIVALS • ĐẦY ĐỦ 12 THÁNG TRONG NĂM</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
              Lễ Hội Truyền Thống & <span className="bg-gradient-to-r from-pink-300 via-rose-200 to-amber-200 bg-clip-text text-transparent">Di Sản Văn Hóa 12 Tháng</span>
            </h1>
            <p className="text-xs sm:text-sm text-pink-100/90 leading-relaxed">
              Trọn vẹn các lễ hội linh thiêng và ngày hội văn hóa rực rỡ suốt 12 tháng: Giỗ Tổ Hùng Vương (Phú Thọ), Lễ hội Chùa Hương (Hà Nội), Lễ hội Yên Tử (Quảng Ninh), Hội Lim (Bắc Ninh), Festival Huế, Lễ hội Pháo hoa Đà Nẵng, Vía Bà Chúa Xứ Núi Sam (An Giang), Festival Hoa Đà Lạt, Lễ hội Oóc Om Bóc (Cần Thơ)...
            </p>
          </div>
        </div>

        {/* Month Selector Bar */}
        <div className="bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full sm:w-96">
              <MagnifyingGlassIcon className="w-5 h-5 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm lễ hội, địa điểm (Đền Hùng, Chùa Hương, Yên Tử...)"
                className="w-full pl-11 pr-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all font-medium"
              />
            </div>

            <div className="text-xs font-black text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Hiển thị <strong>{filteredFestivals.length}</strong> / <strong>{festivals.length}</strong> lễ hội truyền thống</span>
            </div>
          </div>

          {/* 12 Months Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar border-t border-slate-100 dark:border-slate-800 pt-3">
            <button
              type="button"
              onClick={() => setSelectedMonth('All')}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
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
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedMonth === m
                    ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                <span>Tháng {m}</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                  selectedMonth === m
                    ? 'bg-white/30 text-white'
                    : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                }`}>
                  {monthCounts[m] || 0}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {filteredFestivals.length === 0 ? (
          <div className="py-16 text-center bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 p-8 space-y-2">
            <p className="text-sm font-bold text-slate-600 dark:text-slate-300">Không tìm thấy lễ hội nào trong tháng đã chọn</p>
            <button
              onClick={() => { setSelectedMonth('All'); setSearchQuery(''); }}
              className="px-4 py-2 rounded-xl text-xs font-bold text-pink-600 hover:underline cursor-pointer"
            >
              Xem tất cả lễ hội trong năm
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFestivals.map(f => (
              <div
                key={f.id}
                className="group bg-white dark:bg-slate-900 rounded-3xl border-2 border-slate-200 dark:border-slate-800 hover:border-pink-500 dark:hover:border-pink-500 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between overflow-hidden"
              >
                {/* Image & Header */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                  <img
                    src={f.image_url || '/logo.png'}
                    alt={f.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-black/30" />

                  {/* Province Badge */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded-lg bg-pink-600 text-white text-[10px] font-black uppercase tracking-wider shadow-xs">
                      {f.province_name}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-pink-200 text-[10px] font-black uppercase tracking-wider border border-white/20">
                      Tháng {f.month_lunar} Âm / Tháng {f.month_solar} Dương
                    </span>
                  </div>

                  {/* Title on Image */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-base sm:text-lg font-black text-white leading-snug drop-shadow-md">
                      {f.name}
                    </h3>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4 text-xs">
                  <div className="space-y-3">
                    {/* Time & Location */}
                    <div className="space-y-1.5 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-2xl border border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-white">
                        <ClockIcon className="w-4 h-4 text-pink-600 flex-shrink-0" />
                        <span>{f.time_details}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                        <MapPinIcon className="w-4 h-4 text-pink-500 flex-shrink-0" />
                        <span className="line-clamp-1">{f.location}</span>
                      </div>
                    </div>

                    {/* Significance */}
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                      {f.significance}
                    </p>

                    {/* Key Activities */}
                    <div className="text-[11px] text-slate-600 dark:text-slate-400 bg-pink-50/50 dark:bg-pink-950/30 p-2.5 rounded-xl border border-pink-200/60 dark:border-pink-900/40">
                      <strong className="text-pink-700 dark:text-pink-300 block mb-0.5">Nghi lễ & Hoạt động chính:</strong>
                      <span>{f.activities}</span>
                    </div>

                    {/* Dress Code Tip */}
                    {f.dress_code_tips && (
                      <div className="text-[10.5px] text-amber-800 dark:text-amber-200 flex items-center gap-1 font-medium">
                        <ShieldExclamationIcon className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                        <span>Trang phục: {f.dress_code_tips}</span>
                      </div>
                    )}
                  </div>

                  {/* Plan CTA */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-[10px] text-slate-400 font-bold uppercase">
                      Di sản văn hóa Việt Nam
                    </span>
                    <Link
                      href="/"
                      className="inline-flex items-center gap-1 text-xs font-black text-pink-600 hover:text-pink-700 hover:underline"
                    >
                      <span>Lên lịch trình dịp này</span>
                      <ArrowRightIcon className="w-3.5 h-3.5" />
                    </Link>
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
