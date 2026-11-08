'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserMenu } from '@/components/auth';
import { ThemeToggle } from '@/components/ui';
import { useAuth } from '@/context/AuthContext';
import {
  MapIcon,
  GlobeAsiaAustraliaIcon,
  SparklesIcon,
  CalendarDaysIcon,
  CurrencyDollarIcon,
  BookOpenIcon,
  BookmarkIcon,
  ShieldCheckIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';

const NAV_LINKS = [
  { href: '/', label: 'Lập lịch trình', icon: MapIcon },
  { href: '/explore', label: 'Khám phá 34 tỉnh', icon: GlobeAsiaAustraliaIcon },
  { href: '/cuisine', label: 'Ẩm thực 34 tỉnh', icon: SparklesIcon },
  { href: '/festivals', label: 'Lễ hội 12 tháng', icon: CalendarDaysIcon },
  { href: '/costs', label: 'Dự toán chi phí', icon: CurrencyDollarIcon },
  { href: '/handbook', label: 'Cẩm nang du lịch', icon: BookOpenIcon }
];

export default function MainNavbar() {
  const pathname = usePathname();
  const { user, isAdmin } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b-2 border-pink-200/80 dark:border-pink-900/60 sticky top-0 z-40 shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 group">
            <div
              style={{
                backgroundColor: '#db2777',
                backgroundImage: 'linear-gradient(135deg, #e11d48 0%, #db2777 50%, #ec4899 100%)'
              }}
              className="relative w-11 h-11 rounded-full p-[2.5px] shadow-md shadow-pink-500/30 group-hover:scale-105 transition-transform flex-shrink-0 ring-2 ring-pink-400/50"
            >
              <img
                src="/logo.jpg"
                alt="Logo AI Vietnam Travel Planner"
                className="w-full h-full object-cover object-top rounded-full bg-slate-900"
              />
            </div>
            <div>
              <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 dark:text-white block leading-tight">
                AI Vietnam <span className="bg-gradient-to-r from-pink-600 via-rose-600 to-pink-500 bg-clip-text text-transparent">Travel Planner</span>
              </span>
              <span className="text-[10px] sm:text-[10.5px] text-pink-700 dark:text-pink-400 font-extrabold uppercase tracking-wider block">
                Nền tảng du lịch 34 Tỉnh/Thành
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1.5">
          {NAV_LINKS.map(link => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-sm shadow-pink-600/30 scale-102'
                    : 'text-slate-700 dark:text-slate-300 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-50/70 dark:hover:bg-pink-950/40'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-pink-600 dark:text-pink-400'}`} />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Action Icons & Auth */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/saved-trips"
            className={`hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
              pathname === '/saved-trips'
                ? 'bg-pink-600 text-white shadow-xs'
                : 'text-pink-700 dark:text-pink-300 bg-pink-50 dark:bg-pink-950/60 hover:bg-pink-100 dark:hover:bg-pink-900/80 border border-pink-200 dark:border-pink-800'
            }`}
            title="Xem các chuyến đi đã lưu"
          >
            <BookmarkIcon className="w-4 h-4 text-pink-600 dark:text-pink-400" />
            <span className="hidden lg:inline">Chuyến đi đã lưu</span>
          </Link>

          {isAdmin && (
            <Link
              href="/admin"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shadow-xs ${
                pathname === '/admin'
                  ? 'bg-amber-600 text-white'
                  : 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-700 hover:bg-amber-100'
              }`}
              title="Khu vực quản trị hệ thống"
            >
              <ShieldCheckIcon className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span className="hidden sm:inline">Quản trị</span>
            </Link>
          )}

          <ThemeToggle />
          <UserMenu />

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-pink-50 dark:hover:bg-pink-950/50 hover:text-pink-600 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6 text-pink-600" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-pink-100 dark:border-pink-900/60 bg-white dark:bg-slate-900 px-4 pt-3 pb-5 space-y-1.5 shadow-xl animate-fadeIn">
          {NAV_LINKS.map(link => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-sm'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-pink-50 dark:hover:bg-pink-950/40 hover:text-pink-600'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-pink-600'}`} />
                <span>{link.label}</span>
              </Link>
            );
          })}

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <Link
              href="/saved-trips"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-pink-600 dark:text-pink-400"
            >
              <BookmarkIcon className="w-4 h-4" />
              <span>Chuyến đi đã lưu</span>
            </Link>

            <Link
              href="/logs"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[11px] font-semibold text-slate-500 hover:text-pink-600"
            >
              📋 Nhật ký hệ thống
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
