'use client';

import React from 'react';
import { TripWizardProvider, useTripWizard } from '@/context/TripWizardContext';
import WizardProgress from './WizardProgress';
import Step1Dates from './Step1Dates';
import Step2VietnamMap from './Step2VietnamMap';
import Step3LocalDiscovery from './Step3LocalDiscovery';
import Step4Transportation from './Step4Transportation';
import Step5POIMap from './Step5POIMap';
import Step6ReviewConfirm from './Step6ReviewConfirm';
import WizardAIChatbot from './WizardAIChatbot';
import MainNavbar from '@/components/navigation/MainNavbar';
import Link from 'next/link';
import { initGlobalErrorLogging } from '@/utils/logger';

function WizardContent() {
  const { currentStep } = useTripWizard();

  React.useEffect(() => {
    initGlobalErrorLogging();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Top Header Navbar */}
      <MainNavbar />

      {/* Step Progress Bar */}
      <WizardProgress />

      {/* Main Step Workspace with generous bottom clearance for floating AI chatbot */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-36 sm:pb-40">
        {currentStep === 1 && <Step1Dates />}
        {currentStep === 2 && <Step2VietnamMap />}
        {currentStep === 3 && <Step3LocalDiscovery />}
        {currentStep === 4 && <Step4Transportation />}
        {currentStep === 5 && <Step5POIMap />}
        {currentStep === 6 && <Step6ReviewConfirm />}
      </main>

      {/* Persistent AI Assistant */}
      <WizardAIChatbot />

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-6 bg-white dark:bg-slate-900 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© 2026 AI Vietnam Travel Planner • Nền tảng lập kế hoạch du lịch thông minh Việt Nam</p>
          <div className="flex items-center gap-3">
            <Link
              href="/logs"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:text-pink-600 hover:border-pink-300 hover:bg-pink-50/50 dark:hover:bg-pink-950/30 transition-colors font-bold text-[11px]"
            >
              <span>📋 Nhật ký Lỗi & Hệ thống (Logs)</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function VietnamTravelWizard() {
  return (
    <TripWizardProvider>
      <WizardContent />
    </TripWizardProvider>
  );
}

