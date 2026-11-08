'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import MainNavbar from '@/components/navigation/MainNavbar';
import { useAuth } from '@/context/AuthContext';
import { API_ENDPOINTS, getAuthHeaders } from '@/config/api';
import {
  ShieldCheckIcon,
  ChartBarIcon,
  BuildingOffice2Icon,
  SparklesIcon,
  CalendarDaysIcon,
  DocumentTextIcon,
  PlusCircleIcon,
  TrashIcon,
  ArrowPathIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

interface AdminStats {
  provinces_count: number;
  destinations_count: number;
  cuisines_count: number;
  festivals_count: number;
  users_count: number;
  saved_trips_count: number;
}

export default function AdminDashboardPage() {
  const { user, isAdmin } = useAuth();
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [destinations, setDestinations] = useState<any[]>([]);
  const [provinces, setProvinces] = useState<any[]>([]);
  const [logs, setLogs] = useState<{ backend: string[]; frontend: string[]; system_tests: string[] }>({
    backend: [],
    frontend: [],
    system_tests: []
  });
  const [activeTab, setActiveTab] = useState<'overview' | 'destinations' | 'logs'>('overview');
  const [activeLogTab, setActiveLogTab] = useState<'backend' | 'frontend' | 'system_tests'>('backend');
  const [loading, setLoading] = useState(true);
  const [actionMsg, setActionMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // New Destination Form State
  const [newDestName, setNewDestName] = useState('');
  const [newDestProvince, setNewDestProvince] = useState('hanoi');
  const [newDestCategory, setNewDestCategory] = useState('scenery');
  const [newDestTicket, setNewDestTicket] = useState('Miễn phí');
  const [newDestHours, setNewDestHours] = useState('07:00 - 18:00');
  const [newDestHighlights, setNewDestHighlights] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    loadAllData();
  }, [isAdmin, user]);

  async function loadAllData() {
    setLoading(true);
    try {
      const headers = getAuthHeaders();
      const [sRes, dRes, pRes, lRes] = await Promise.all([
        fetch(API_ENDPOINTS.adminStats, { headers }).catch(() => null),
        fetch(API_ENDPOINTS.destinations).catch(() => null),
        fetch(API_ENDPOINTS.provinces).catch(() => null),
        fetch(API_ENDPOINTS.adminLogs, { headers }).catch(() => null)
      ]);

      if (sRes && sRes.ok) {
        const sData = await sRes.json();
        if (sData.status === 'success') setStats(sData.stats);
      }
      if (dRes && dRes.ok) {
        const dData = await dRes.json();
        if (dData.status === 'success') setDestinations(dData.data || []);
      }
      if (pRes && pRes.ok) {
        const pData = await pRes.json();
        if (pData.status === 'success') setProvinces(pData.data || []);
      }
      if (lRes && lRes.ok) {
        const lData = await lRes.json();
        if (lData.status === 'success') setLogs(lData.logs || { backend: [], frontend: [], system_tests: [] });
      }
    } catch (err) {
      console.error('Failed to load admin data:', err);
    } finally {
      setLoading(false);
    }
  }

  // Handle Create Destination
  const handleCreateDestination = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDestName.trim()) return;
    setIsSubmitting(true);
    setActionMsg(null);

    try {
      const headers = {
        'Content-Type': 'application/json',
        ...getAuthHeaders()
      };
      const res = await fetch(API_ENDPOINTS.adminDestinations, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          name: newDestName.trim(),
          province_id: newDestProvince,
          category: newDestCategory,
          category_name: newDestCategory === 'mountain' ? 'Núi, Đồi & Thác' : newDestCategory === 'beach' ? 'Biển & Đảo' : 'Danh lam thắng cảnh',
          ticket_price: newDestTicket,
          opening_hours: newDestHours,
          highlights: newDestHighlights
        })
      });

      const data = await res.json();
      if (res.ok && data.status === 'success') {
        setActionMsg({ type: 'success', text: `Đã thêm thành công điểm du lịch: "${newDestName}"!` });
        setNewDestName('');
        setNewDestHighlights('');
        loadAllData();
      } else {
        setActionMsg({ type: 'error', text: data.error || 'Thêm điểm du lịch thất bại!' });
      }
    } catch (err: any) {
      setActionMsg({ type: 'error', text: err.message || 'Lỗi mạng khi kết nối server' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle Delete Destination
  const handleDeleteDestination = async (id: string, name: string) => {
    if (!confirm(`Bạn có chắc chắn muốn xóa điểm du lịch "${name}"?`)) return;

    try {
      const headers = getAuthHeaders();
      const res = await fetch(API_ENDPOINTS.adminDeleteDestination(id), {
        method: 'DELETE',
        headers
      });
      const data = await res.json();
      if (res.ok && data.status === 'success') {
        setActionMsg({ type: 'success', text: `Đã xóa thành công "${name}"!` });
        setDestinations(prev => prev.filter(d => d.id !== id));
      } else {
        setActionMsg({ type: 'error', text: data.error || 'Xóa thất bại!' });
      }
    } catch (err: any) {
      setActionMsg({ type: 'error', text: err.message });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <MainNavbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Banner Section */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-amber-300 dark:border-amber-700 bg-gradient-to-r from-slate-900 via-rose-950 to-amber-950 p-6 sm:p-10 text-white">
          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/30 border border-amber-400/40 text-amber-200 text-xs font-black uppercase tracking-wider backdrop-blur-xs">
              <ShieldCheckIcon className="w-4 h-4 text-amber-300" />
              <span>BẢNG ĐIỀU KHIỂN QUẢN TRỊ HỆ THỐNG (ADMIN DASHBOARD)</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
              Quản Trị Nền Tảng <span className="bg-gradient-to-r from-amber-300 via-rose-200 to-pink-200 bg-clip-text text-transparent">AI Travel Planner</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed">
              Quản lý tập trung 34 tỉnh/thành, cập nhật các tụ điểm du lịch, ẩm thực, lễ hội và theo dõi nhật ký hoạt động hệ thống (System & Error Logs).
            </p>
          </div>
        </div>

        {/* Action Feedback Notification */}
        {actionMsg && (
          <div className={`p-4 rounded-2xl border text-xs font-bold flex items-center justify-between ${
            actionMsg.type === 'success'
              ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 text-emerald-800 dark:text-emerald-200'
              : 'bg-rose-50 dark:bg-rose-950/60 border-rose-300 text-rose-800 dark:text-rose-200'
          }`}>
            <div className="flex items-center gap-2">
              {actionMsg.type === 'success' ? <CheckCircleIcon className="w-5 h-5 text-emerald-600" /> : <ExclamationTriangleIcon className="w-5 h-5 text-rose-600" />}
              <span>{actionMsg.text}</span>
            </div>
            <button onClick={() => setActionMsg(null)} className="text-xs font-black hover:underline cursor-pointer">
              Đóng
            </button>
          </div>
        )}

        {/* Tabs Bar */}
        <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          {[
            { id: 'overview', label: 'Tổng quan nền tảng', icon: ChartBarIcon },
            { id: 'destinations', label: `Quản lý Tụ điểm (${destinations.length})`, icon: BuildingOffice2Icon },
            { id: 'logs', label: 'Nhật ký Hệ thống (Logs)', icon: DocumentTextIcon }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Overview Stats */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { label: 'Tỉnh/Thành 2025', value: stats?.provinces_count ?? 34, icon: '🏛️', color: 'from-blue-600 to-indigo-600' },
                { label: 'Tụ điểm du lịch', value: stats?.destinations_count ?? destinations.length, icon: '📍', color: 'from-pink-600 to-rose-600' },
                { label: 'Món ăn đặc sản', value: stats?.cuisines_count ?? 304, icon: '🍲', color: 'from-amber-600 to-orange-600' },
                { label: 'Lễ hội 12 tháng', value: stats?.festivals_count ?? 12, icon: '🏮', color: 'from-purple-600 to-pink-600' },
                { label: 'Tài khoản người dùng', value: stats?.users_count ?? 1, icon: '👤', color: 'from-emerald-600 to-teal-600' },
                { label: 'Chuyến đi đã lưu', value: stats?.saved_trips_count ?? 0, icon: '🔖', color: 'from-rose-600 to-red-600' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2 text-center"
                >
                  <div className="text-2xl">{item.icon}</div>
                  <div className="text-2xl font-black text-slate-900 dark:text-white">
                    {item.value}
                  </div>
                  <div className="text-[11px] font-bold text-slate-500">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Admin Credentials Info Box */}
            <div className="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-xs text-amber-900 dark:text-amber-200 space-y-2">
              <div className="font-black flex items-center gap-1.5">
                <ShieldCheckIcon className="w-4 h-4 text-amber-600" />
                <span>Tài khoản Quản trị viên (Admin Seed Credentials):</span>
              </div>
              <p className="leading-relaxed">
                Email: <strong>admin@dulich.vn</strong> • Mật khẩu mặc định: <strong>AdminPassword@2026!</strong> (Quyền hạn: Toàn quyền CRUD địa điểm, xem nhật ký hệ thống, quản lý cơ sở dữ liệu).
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: Manage Destinations */}
        {activeTab === 'destinations' && (
          <div className="space-y-6">
            {/* Create New Destination Form */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border-2 border-pink-200 dark:border-pink-900/60 shadow-sm space-y-4">
              <h3 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                <PlusCircleIcon className="w-5 h-5 text-pink-600" />
                <span>Thêm tụ điểm du lịch mới vào cơ sở dữ liệu:</span>
              </h3>

              <form onSubmit={handleCreateDestination} className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">Tên tụ điểm du lịch *</label>
                  <input
                    type="text"
                    required
                    value={newDestName}
                    onChange={(e) => setNewDestName(e.target.value)}
                    placeholder="VD: Quần thể Du lịch Fansipan Legend"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-medium"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">Tỉnh / Thành phố *</label>
                  <select
                    value={newDestProvince}
                    onChange={(e) => setNewDestProvince(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-bold"
                  >
                    {provinces.map(p => (
                      <option key={p.id} value={p.id}>{p.name}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">Thể loại du lịch *</label>
                  <select
                    value={newDestCategory}
                    onChange={(e) => setNewDestCategory(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-bold"
                  >
                    <option value="scenery">Danh lam thắng cảnh</option>
                    <option value="mountain">Núi, Đồi & Thác nước</option>
                    <option value="beach">Biển & Đảo</option>
                    <option value="temple">Chùa & Tâm linh</option>
                    <option value="amusement">Khu vui chơi giải trí</option>
                    <option value="resort">Khu nghỉ dưỡng & Check-in</option>
                    <option value="ecotourism">Du lịch sinh thái</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">Giá vé vào cửa</label>
                  <input
                    type="text"
                    value={newDestTicket}
                    onChange={(e) => setNewDestTicket(e.target.value)}
                    placeholder="VD: 150.000đ / người hoặc Miễn phí"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-medium"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">Giờ mở cửa</label>
                  <input
                    type="text"
                    value={newDestHours}
                    onChange={(e) => setNewDestHours(e.target.value)}
                    placeholder="VD: 07:00 - 18:00"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-medium"
                  />
                </div>

                <div className="space-y-1 sm:col-span-3">
                  <label className="font-bold text-slate-700 dark:text-slate-300">Hoạt động nổi bật</label>
                  <input
                    type="text"
                    value={newDestHighlights}
                    onChange={(e) => setNewDestHighlights(e.target.value)}
                    placeholder="VD: Đi cáp treo ngắm biển mây, check-in cột cờ đỉnh Fansipan"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-medium"
                  />
                </div>

                <div className="sm:col-span-3 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 text-white font-black text-xs shadow-xs hover:from-pink-700 hover:to-rose-700 disabled:opacity-50 transition-all cursor-pointer"
                  >
                    {isSubmitting ? 'Đang lưu vào Database...' : '+ Thêm Tụ Điểm Mới'}
                  </button>
                </div>
              </form>
            </div>

            {/* List Destinations Table */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs">
              <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between font-bold text-xs">
                <span>Danh sách tụ điểm du lịch ({destinations.length})</span>
                <button
                  type="button"
                  onClick={loadAllData}
                  className="p-1 hover:bg-slate-100 rounded-lg text-slate-500"
                  title="Tải lại"
                >
                  <ArrowPathIcon className="w-4 h-4" />
                </button>
              </div>

              <div className="max-h-[500px] overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800 text-xs">
                {destinations.map(dest => (
                  <div key={dest.id} className="p-3.5 flex items-center justify-between gap-3 hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <span>{dest.name}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-pink-100 text-pink-700 dark:bg-pink-950 dark:text-pink-300">
                          {dest.category_name}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        📍 {dest.address} • Vé: {dest.ticket_price} • Giờ: {dest.opening_hours}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleDeleteDestination(dest.id, dest.name)}
                      className="p-2 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/60 rounded-xl transition-colors cursor-pointer"
                      title="Xóa điểm này"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: System Logs */}
        {activeTab === 'logs' && (
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border-2 border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                {[
                  { id: 'backend', label: `Backend Runtime (${logs.backend.length})` },
                  { id: 'frontend', label: `Frontend Client (${logs.frontend.length})` },
                  { id: 'system_tests', label: `System Tests (${logs.system_tests.length})` }
                ].map(lt => (
                  <button
                    key={lt.id}
                    type="button"
                    onClick={() => setActiveLogTab(lt.id as any)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      activeLogTab === lt.id
                        ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xs'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    {lt.label}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={loadAllData}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                <ArrowPathIcon className="w-3.5 h-3.5" />
                <span>Làm mới Logs</span>
              </button>
            </div>

            {/* Log Terminal Window */}
            <div className="bg-slate-950 text-emerald-400 p-4 rounded-2xl font-mono text-[11px] leading-relaxed max-h-[500px] overflow-y-auto space-y-1 shadow-inner border border-slate-800">
              {logs[activeLogTab].length === 0 ? (
                <div className="text-slate-500 italic py-8 text-center">
                  Chưa có dòng log nào được ghi nhận cho danh mục này.
                </div>
              ) : (
                logs[activeLogTab].map((line, idx) => (
                  <div key={idx} className="whitespace-pre-wrap break-all hover:bg-slate-900/60 py-0.5 px-1 rounded">
                    {line}
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
