'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import MainNavbar from '@/components/navigation/MainNavbar';
import { API_ENDPOINTS } from '@/config/api';
import {
  MagnifyingGlassIcon,
  MapPinIcon,
  SparklesIcon,
  CalendarIcon,
  ArrowRightIcon,
  XMarkIcon,
  BuildingOffice2Icon,
  SunIcon,
  CheckCircleIcon
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

export default function ExploreProvincesPage() {
  const router = useRouter();
  const [provinces, setProvinces] = useState<ProvinceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<'All' | 'North' | 'Central' | 'South' | 'City'>('All');
  const [activeProvince, setActiveProvince] = useState<any | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);

  useEffect(() => {
    async function fetchProvinces() {
      try {
        const res = await fetch(API_ENDPOINTS.provinces);
        const data = await res.json();
        if (data.status === 'success' && data.data) {
          setProvinces(data.data);
        }
      } catch (err) {
        console.error('Failed to load provinces:', err);
      } finally {
        setLoading(false);
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
    try {
      const res = await fetch(API_ENDPOINTS.provinceDetail(pId));
      const data = await res.json();
      if (data.status === 'success' && data.data) {
        setActiveProvince(data.data);
      }
    } catch (err) {
      console.error('Error fetching province detail:', err);
    } finally {
      setDetailLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <MainNavbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header Hero Section */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-pink-300 dark:border-pink-800 bg-gradient-to-r from-rose-900 via-pink-900 to-rose-950 p-6 sm:p-10 text-white">
          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/30 border border-pink-400/40 text-pink-200 text-xs font-black uppercase tracking-wider backdrop-blur-xs">
              <SparklesIcon className="w-4 h-4 text-pink-300" />
              <span>Nghị quyết 202/2025/QH15 • 34 Đơn vị Hành chính</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
              Khám Phá Toàn Diện <span className="bg-gradient-to-r from-pink-300 via-rose-200 to-amber-200 bg-clip-text text-transparent">34 Tỉnh/Thành Việt Nam</span>
            </h1>
            <p className="text-xs sm:text-sm text-pink-100/90 leading-relaxed">
              Trải nghiệm bức tranh du lịch Việt Nam thống nhất với cơ sở dữ liệu thực tế: từ Sa Pa - Fansipan mây ngàn ở Lào Cai mới, di sản thế giới Hội An ở Đà Nẵng mở rộng, đến hòn ngọc Phú Quốc thuộc An Giang mới.
            </p>
          </div>
        </div>

        {/* Search & Region Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
          {/* Search box */}
          <div className="relative w-full sm:w-80">
            <MagnifyingGlassIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm tỉnh, Sa Pa, Hội An, Phú Quốc..."
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all font-medium"
            />
          </div>

          {/* Region Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 no-scrollbar">
            {[
              { id: 'All', label: 'Tất cả 34 tỉnh' },
              { id: 'City', label: '⭐ 6 TP Trực thuộc TW' },
              { id: 'North', label: 'Miền Bắc' },
              { id: 'Central', label: 'Miền Trung' },
              { id: 'South', label: 'Miền Nam' }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedRegion(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
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

        {/* Loading Spinner */}
        {loading ? (
          <div className="py-20 text-center space-y-3">
            <div className="w-10 h-10 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-xs font-bold text-slate-500">Đang tải dữ liệu 34 tỉnh thành Việt Nam...</p>
          </div>
        ) : filteredProvinces.length === 0 ? (
          <div className="py-16 text-center bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 p-8 space-y-2">
            <p className="text-sm font-bold text-slate-600 dark:text-slate-300">Không tìm thấy tỉnh/thành nào phù hợp với từ khóa &quot;{searchQuery}&quot;</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedRegion('All'); }}
              className="px-4 py-2 rounded-xl text-xs font-bold text-pink-600 hover:underline"
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
                className="group bg-white dark:bg-slate-900 rounded-3xl border-2 border-slate-200 dark:border-slate-800 hover:border-pink-400 dark:hover:border-pink-600 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col overflow-hidden"
              >
                {/* Card Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                  <img
                    src={p.image_url || '/logo.jpg'}
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
                      <div className="text-[11px] font-semibold text-pink-700 dark:text-pink-300 bg-pink-50 dark:bg-pink-950/50 p-2 rounded-xl border border-pink-200 dark:border-pink-900/60 leading-snug">
                        🏛️ <span className="font-bold">Địa danh nổi tiếng:</span> {p.merged_from}
                      </div>
                    )}

                    {/* Short Description */}
                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                      {p.description}
                    </p>

                    {/* Best season */}
                    <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500 dark:text-slate-400">
                      <SunIcon className="w-4 h-4 text-amber-500 flex-shrink-0" />
                      <span className="truncate">Thời điểm đẹp: {p.best_season}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleOpenDetail(p.id)}
                      className="flex-1 py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-pink-50 dark:hover:bg-pink-950/60 text-slate-800 dark:text-slate-200 hover:text-pink-600 text-xs font-bold transition-colors cursor-pointer text-center"
                    >
                      Chi tiết tỉnh
                    </button>

                    <Link
                      href="/"
                      className="py-2 px-3.5 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white text-xs font-black transition-all shadow-xs flex items-center gap-1 cursor-pointer"
                      title="Lập kế hoạch du lịch cho tỉnh này"
                    >
                      <span>Lập lịch</span>
                      <ArrowRightIcon className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal Drawer for Province Detail */}
        {activeProvince && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
            <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border-2 border-pink-300 dark:border-pink-800 shadow-2xl p-6 sm:p-8 space-y-6 relative">
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveProvince(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-rose-100 text-slate-600 dark:text-slate-300 hover:text-rose-600 transition-colors cursor-pointer"
                aria-label="Đóng chi tiết"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 pr-8">
                <span className="text-[11px] font-black uppercase tracking-wider text-pink-600 dark:text-pink-400">
                  {activeProvince.region_name} • {activeProvince.province_type === 'city' ? '⭐ TP Trực thuộc TW' : '📍 Tỉnh mới'}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                  {activeProvince.name}
                </h2>
                {activeProvince.merged_from && (
                  <p className="text-xs text-pink-700 dark:text-pink-300 font-bold bg-pink-50 dark:bg-pink-950/60 p-2.5 rounded-xl border border-pink-200 dark:border-pink-900/60">
                    🏛️ Phạm vi & Vùng sáp nhập: {activeProvince.merged_from}
                  </p>
                )}
              </div>

              {/* Overview & Geography */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-1.5">
                  <div className="font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                    <MapPinIcon className="w-4 h-4 text-pink-600" />
                    <span>Vị trí & Địa hình</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {activeProvince.geography || activeProvince.description}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-1.5">
                  <div className="font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                    <SunIcon className="w-4 h-4 text-amber-500" />
                    <span>Khí hậu & Thời điểm vàng</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {activeProvince.climate} ({activeProvince.best_season})
                  </p>
                </div>
              </div>

              {/* Tourist Destinations List */}
              {activeProvince.destinations && activeProvince.destinations.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <BuildingOffice2Icon className="w-4 h-4 text-pink-600" />
                    <span>Các tụ điểm du lịch nổi bật ({activeProvince.destinations.length}):</span>
                  </h4>
                  <div className="space-y-2.5">
                    {activeProvince.destinations.map((d: any) => (
                      <div
                        key={d.id}
                        className="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/40 space-y-1.5"
                      >
                        <div className="flex items-center justify-between font-black text-xs text-slate-900 dark:text-white">
                          <span>{d.name}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-pink-100 text-pink-700 dark:bg-pink-950 dark:text-pink-300 font-bold">
                            {d.category_name}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                          {d.description}
                        </p>
                        {d.highlights && (
                          <div className="text-[11px] text-pink-700 dark:text-pink-300 font-semibold whitespace-pre-line">
                            {d.highlights}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Cuisines & Delicacies */}
              {activeProvince.cuisines && activeProvince.cuisines.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <SparklesIcon className="w-4 h-4 text-rose-500" />
                    <span>Ẩm thực & Đặc sản ({activeProvince.cuisines.length}):</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeProvince.cuisines.map((c: any) => (
                      <div
                        key={c.id}
                        className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-pink-50/40 dark:bg-pink-950/20 text-xs space-y-1"
                      >
                        <div className="font-bold text-slate-900 dark:text-white flex items-center justify-between">
                          <span>🍲 {c.name}</span>
                          <span className="text-[10px] text-pink-600 font-extrabold">{c.price_range}</span>
                        </div>
                        <p className="text-[10.5px] text-slate-500 dark:text-slate-400 truncate">
                          {c.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons in Modal */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setActiveProvince(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  Đóng
                </button>
                <Link
                  href="/"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white text-xs font-black shadow-md shadow-pink-600/30 transition-all flex items-center gap-2"
                >
                  <span>Lập kế hoạch du lịch tại đây</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

