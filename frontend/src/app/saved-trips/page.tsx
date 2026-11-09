'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { API_ENDPOINTS, getAuthHeaders } from '@/config/api';
import {
  MapPinIcon,
  CalendarDaysIcon,
  TrashIcon,
  HeartIcon,
  ArrowLeftIcon,
  PlusIcon,
  ArrowDownTrayIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { exportItineraryToExcel } from '@/utils/excelExport';

interface SavedTripItem {
  id: number;
  trip_name: string;
  country: string;
  locations?: string;
  days: number;
  origin?: string;
  start_date?: string;
  return_date?: string;
  trip_pace?: string;
  itinerary?: any;
  budget?: any;
  notes?: string;
  is_favorite: boolean;
  created_at: string;
  updated_at: string;
}

export default function SavedTripsPage() {
  const router = useRouter();
  const [trips, setTrips] = useState<SavedTripItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadSavedTrips();
  }, []);

  const loadSavedTrips = async () => {
    setIsLoading(true);
    setError('');

    // 1. Read from localStorage first (works completely offline & zero login needed)
    let localTrips: SavedTripItem[] = [];
    try {
      const stored = localStorage.getItem('saved_trips_local');
      if (stored) {
        localTrips = JSON.parse(stored);
      }
    } catch (e) {
      console.warn('Could not parse local saved trips', e);
    }

    // 2. Try fetching from backend if accessible
    try {
      const response = await axios.get(API_ENDPOINTS.getTrips, {
        headers: getAuthHeaders(),
        timeout: 4000
      });
      if (response.data?.trips && Array.isArray(response.data.trips)) {
        // Merge without duplicates
        const existingIds = new Set(localTrips.map(t => t.id));
        response.data.trips.forEach((t: SavedTripItem) => {
          if (!existingIds.has(t.id)) {
            localTrips.push(t);
          }
        });
      }
    } catch (err) {
      // Backend not running or unauthenticated — local storage is primary
    }

    // Sort by favorite first, then updated_at descending
    localTrips.sort((a, b) => {
      if (a.is_favorite === b.is_favorite) {
        return new Date(b.created_at || 0).getTime() - new Date(a.created_at || 0).getTime();
      }
      return a.is_favorite ? -1 : 1;
    });

    setTrips(localTrips);
    setIsLoading(false);
  };

  const toggleFavorite = async (tripId: number, currentFavorite: boolean) => {
    const updated = trips.map(t => t.id === tripId ? { ...t, is_favorite: !currentFavorite } : t);
    setTrips(updated);
    try {
      localStorage.setItem('saved_trips_local', JSON.stringify(updated));
      await axios.put(
        API_ENDPOINTS.updateTrip(tripId),
        { is_favorite: !currentFavorite },
        { headers: getAuthHeaders() }
      );
    } catch (err) {
      // Ignore backend error
    }
  };

  const deleteTrip = async (tripId: number) => {
    if (!confirm('Bạn có chắc chắn muốn xóa chuyến đi này khỏi danh sách đã lưu?')) return;

    const filtered = trips.filter(t => t.id !== tripId);
    setTrips(filtered);
    localStorage.setItem('saved_trips_local', JSON.stringify(filtered));

    try {
      await axios.delete(API_ENDPOINTS.deleteTrip(tripId), {
        headers: getAuthHeaders()
      });
    } catch (err) {
      // Ignore backend error
    }
  };

  const handleExportTripExcel = (trip: SavedTripItem, e: React.MouseEvent) => {
    e.stopPropagation();
    exportItineraryToExcel({
      tripName: trip.trip_name,
      country: trip.country,
      locations: trip.locations,
      startDate: trip.start_date,
      returnDate: trip.return_date,
      totalDays: trip.days,
      originCity: trip.origin,
      tripPace: trip.trip_pace,
      itinerary: trip.itinerary || {},
      budget: trip.budget
    });
  };

  const viewTrip = (trip: SavedTripItem) => {
    const tripData = {
      result: {
        itinerary: trip.itinerary || {},
        budget: trip.budget || {}
      },
      country: trip.country,
      locations: trip.locations,
      days: trip.days,
      origin: trip.origin,
      startDate: trip.start_date
    };

    sessionStorage.setItem('tripData', JSON.stringify(tripData));
    router.push('/trip');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-8 animate-fadeIn">
        {/* Header */}
        <div>
          <button
            type="button"
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-pink-600 transition-colors mb-3 cursor-pointer"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            <span>Về trang chủ</span>
          </button>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-pink-200/80 dark:border-pink-900/60 pb-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                Chuyến đi <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">đã lưu của bạn</span>
              </h1>
              <p className="mt-1 text-sm font-semibold text-slate-600 dark:text-slate-400">
                Lưu trữ tự động trên thiết bị của bạn. Hoàn toàn miễn phí, không yêu cầu đăng nhập.
              </p>
            </div>

            <button
              type="button"
              onClick={() => router.push('/')}
              style={{
                backgroundColor: '#db2777',
                backgroundImage: 'linear-gradient(135deg, #e11d48 0%, #db2777 50%, #ec4899 100%)',
                color: '#ffffff'
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-black text-white shadow-lg shadow-pink-900/30 hover:scale-105 transition-all cursor-pointer"
            >
              <PlusIcon className="w-5 h-5" />
              <span>Lập lịch trình mới</span>
            </button>
          </div>
        </div>

        {/* Content */}
        {isLoading ? (
          <div className="py-20 text-center text-slate-500 font-bold text-sm">
            Đang tải danh sách chuyến đi...
          </div>
        ) : trips.length === 0 ? (
          <div className="p-12 sm:p-16 rounded-3xl bg-white dark:bg-slate-900 border-2 border-pink-200 dark:border-pink-900 shadow-sm text-center max-w-xl mx-auto space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-pink-100 dark:bg-pink-950/80 text-pink-600 flex items-center justify-center mx-auto text-2xl">
              🗺️
            </div>
            <h3 className="text-xl font-black text-slate-900 dark:text-white">
              Chưa có chuyến đi nào được lưu
            </h3>
            <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
              Hãy bắt đầu thiết kế chuyến phiêu lưu khám phá 34 tỉnh thành Việt Nam với trợ lý AI và lưu lại kế hoạch hoàn hảo của bạn!
            </p>
            <button
              type="button"
              onClick={() => router.push('/')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-black text-white bg-pink-600 hover:bg-pink-700 shadow-md shadow-pink-900/25 transition-all cursor-pointer"
            >
              Tạo chuyến đi đầu tiên
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trips.map(trip => (
              <div
                key={trip.id}
                onClick={() => viewTrip(trip)}
                className="group relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border-2 border-pink-100 dark:border-pink-900/60 hover:border-pink-500 dark:hover:border-pink-500 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
              >
                {/* Header banner */}
                <div
                  style={{
                    backgroundColor: '#db2777',
                    backgroundImage: 'linear-gradient(135deg, #be123c 0%, #db2777 50%, #e11d48 100%)',
                    color: '#ffffff'
                  }}
                  className="p-5 text-white relative"
                >
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(trip.id, trip.is_favorite);
                    }}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors cursor-pointer"
                    title={trip.is_favorite ? 'Bỏ yêu thích' : 'Đánh dấu yêu thích'}
                  >
                    {trip.is_favorite ? (
                      <HeartSolidIcon className="w-4 h-4 text-rose-300" />
                    ) : (
                      <HeartIcon className="w-4 h-4 text-white" />
                    )}
                  </button>

                  <span className="inline-block text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-white/20 text-white mb-2">
                    {trip.days} ngày {Math.max(1, trip.days - 1)} đêm
                  </span>

                  <h3 className="text-base font-black line-clamp-1 drop-shadow-xs">
                    {trip.trip_name}
                  </h3>
                </div>

                {/* Body info */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                      <MapPinIcon className="w-4 h-4 text-pink-600 flex-shrink-0" />
                      <span className="line-clamp-1">{trip.locations || 'Việt Nam'}</span>
                    </div>

                    {trip.start_date && (
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-medium">
                        <CalendarDaysIcon className="w-4 h-4 text-pink-500 flex-shrink-0" />
                        <span>Khởi hành: {trip.start_date}</span>
                      </div>
                    )}

                    {trip.notes && (
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 italic">
                        {trip.notes}
                      </p>
                    )}
                  </div>

                  {/* Actions footer */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={(e) => handleExportTripExcel(trip, e)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-colors cursor-pointer"
                      title="Xuất file Excel Timeline (.xlsx)"
                    >
                      <ArrowDownTrayIcon className="w-3.5 h-3.5" />
                      <span>Xuất Excel</span>
                    </button>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteTrip(trip.id);
                      }}
                      className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-lg transition-colors cursor-pointer"
                      title="Xóa chuyến đi này"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
