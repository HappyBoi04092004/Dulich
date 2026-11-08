'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import MainNavbar from '@/components/navigation/MainNavbar';
import {
  BookOpenIcon,
  SunIcon,
  CloudIcon,
  PhoneIcon,
  ShieldCheckIcon,
  SparklesIcon,
  MapPinIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const SEASONS_DATA = [
  {
    id: 'autumn-north',
    title: 'Mùa thu vàng Tây Bắc & Đông Bắc (Tháng 9 - Tháng 11)',
    badge: 'MÙA LÚA CHÍN & SĂN MÂY',
    highlightPlaces: ['Lào Cai (Sa Pa, Y Tý)', 'Hà Giang (Hoàng Su Phì)', 'Cao Bằng (Thác Bản Giốc)', 'Sơn La (Mộc Châu)'],
    description: 'Thời điểm các thung lũng vùng cao nhuộm vàng rực rỡ bởi những thửa ruộng bậc thang kỳ vĩ. Không khí se lạnh, trời trong xanh, ít mưa và là mùa hoa tam giác mạch bung nở đón gió heo may.',
    tips: 'Nên thuê xe máy hoặc ô tô gầm cao; đặt phòng trước 3 tuần tại các homestay ven thung lũng Mường Hoa hoặc Tả Van.'
  },
  {
    id: 'spring-heritage',
    title: 'Mùa lễ hội xuân & tâm linh Đất Bắc (Tháng 1 - Tháng 3 Âm lịch)',
    badge: 'HÀNH HƯƠNG ĐẦU XUÂN',
    highlightPlaces: ['Hà Nội (Chùa Hương)', 'Quảng Ninh (Yên Tử)', 'Ninh Bình (Tràng An, Bái Đính)', 'Phú Thọ (Đền Hùng)'],
    description: 'Tiết trời ấm áp, mưa phùn nhẹ mang sinh khí đầu năm mới. Cả ngàn du khách trẩy hội hành hương cầu quốc thái dân an, tài lộc và may mắn nơi chốn bồng lai tiên cảnh.',
    tips: 'Trang phục trang nhã kín đáo, chuẩn bị giày bệt êm chân để leo núi; chuẩn bị tiền mặt lẻ gửi xe và dâng lễ.'
  },
  {
    id: 'summer-beach',
    title: 'Mùa hè biển xanh cát trắng miền Trung & Hải đảo (Tháng 4 - Tháng 8)',
    badge: 'THIÊN ĐƯỜNG NGHỈ DƯỠNG',
    highlightPlaces: ['Đà Nẵng & Hội An', 'Quảng Ninh (Hạ Long)', 'Khánh Hòa (Nha Trang)', 'An Giang (Đảo ngọc Phú Quốc)'],
    description: 'Nắng vàng biển êm, nước biển trong vắt như pha lê, hoàn hảo cho các hoạt động lặn ngắm san hô, chèo SUP, tour cano lướt sóng và thưởng thức hải sản tươi sống bên bờ biển.',
    tips: 'Luôn mang kem chống nắng SPF50+, kính râm, đồ bơi và kiểm tra dự báo thời tiết biển trước khi đặt tour cano.'
  },
  {
    id: 'floating-delta',
    title: 'Mùa nước nổi & Miệt vườn sông nước Cửu Long (Tháng 9 - Tháng 11)',
    badge: 'ĐẶC SẢN MIỀN TÂY',
    highlightPlaces: ['Cần Thơ (Cái Răng)', 'An Giang (Rừng tràm Trà Sư)', 'Đồng Tháp (Tràm Chim)', 'Cà Mau (Đất Mũi)'],
    description: 'Con nước đỏ nặng phù sa từ thượng nguồn tràn về mang theo nguồn thủy sản dồi dào, hoa súng bung nở rực rỡ và những cánh đồng sen ngát hương. Đi thuyền ba lá len lỏi trong rừng tràm xanh ngắt.',
    tips: 'Mặc áo bà ba hoặc quần áo mau khô, mang theo thuốc chống muỗi và đừng quên thử món lẩu cá linh bông điên điển.'
  },
  {
    id: 'winter-fog',
    title: 'Mùa hoa ngàn & Sương mù Cao nguyên (Tháng 11 - Tháng 1)',
    badge: 'LÃNG MẠN ĐÀ LẠT & TÂY NGUYÊN',
    highlightPlaces: ['Lâm Đồng (Đà Lạt)', 'Gia Lai (Pleiku)', 'Đắk Lắk (Buôn Ma Thuột)'],
    description: 'Khi mùa khô Tây Nguyên bắt đầu, hoa dã quỳ vàng rực khắp triền đồi, đồi chè Cầu Đất ngập trong biển mây bồng bềnh và hoa mai anh đào chớm nở đón tết.',
    tips: 'Nhiệt độ sáng sớm và đêm xuống dưới 15°C, cần áo ấm và găng tay khi đi xe máy đón bình minh săn mây.'
  }
];

const EMERGENCY_HOTLINES = [
  { name: 'Cấp cứu Y tế Toàn quốc', number: '115', desc: 'Hỗ trợ xe cấp cứu và y tế 24/7' },
  { name: 'Cảnh sát & An ninh', number: '113', desc: 'Can thiệp an ninh trật tự khẩn cấp' },
  { name: 'Cứu hỏa & Cứu nạn', number: '114', desc: 'Cứu nạn cứu hộ sạt lở, cháy nổ' },
  { name: 'Đường dây nóng Du lịch Việt Nam', number: '1900 88 88 55', desc: 'Phản ánh chất lượng dịch vụ du lịch' }
];

export default function HandbookPage() {
  const [selectedSeason, setSelectedSeason] = useState(0);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <MainNavbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        {/* Banner Section */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-pink-300 dark:border-pink-800 bg-gradient-to-r from-rose-900 via-pink-900 to-rose-950 p-6 sm:p-10 text-white">
          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/30 border border-pink-400/40 text-pink-200 text-xs font-black uppercase tracking-wider backdrop-blur-xs">
              <BookOpenIcon className="w-4 h-4 text-pink-300" />
              <span>CẨM NANG DU LỊCH TOÀN DIỆN VIỆT NAM</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
              Mùa Nào Đi Đâu Đẹp Nhất & <span className="bg-gradient-to-r from-pink-300 via-rose-200 to-amber-200 bg-clip-text text-transparent">Kinh Nghiệm Thực Tế</span>
            </h1>
            <p className="text-xs sm:text-sm text-pink-100/90 leading-relaxed">
              Tổng hợp thời điểm vàng du lịch 34 tỉnh/thành, kinh nghiệm chuẩn bị hành lý, lưu ý di chuyển địa hình và đường dây nóng hỗ trợ khẩn cấp dành cho du khách.
            </p>
          </div>
        </div>

        {/* 1. Mùa nào đi đâu đẹp nhất (Seasons Guide) */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              <SunIcon className="w-6 h-6 text-amber-500" />
              <span>Bản đồ thời điểm vàng: Mùa nào đi đâu đẹp nhất?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Season Pills */}
            <div className="lg:col-span-4 space-y-2">
              {SEASONS_DATA.map((s, idx) => (
                <div
                  key={s.id}
                  onClick={() => setSelectedSeason(idx)}
                  className={`p-4 rounded-2xl border text-xs cursor-pointer transition-all ${
                    selectedSeason === idx
                      ? 'border-pink-500 bg-white dark:bg-slate-900 shadow-md ring-2 ring-pink-500/20'
                      : 'border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 hover:border-slate-300'
                  }`}
                >
                  <span className="text-[10px] font-black uppercase text-pink-600 dark:text-pink-400 block mb-1">
                    {s.badge}
                  </span>
                  <div className="font-black text-slate-900 dark:text-white leading-snug">
                    {s.title}
                  </div>
                </div>
              ))}
            </div>

            {/* Right Detailed Season Card */}
            <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-3xl border-2 border-pink-200 dark:border-pink-900/60 p-6 sm:p-8 shadow-sm space-y-5">
              <div className="space-y-2">
                <span className="px-3 py-1 rounded-xl bg-pink-100 dark:bg-pink-950 text-pink-700 dark:text-pink-300 text-xs font-black inline-block">
                  {SEASONS_DATA[selectedSeason].badge}
                </span>
                <h3 className="text-xl font-black text-slate-900 dark:text-white">
                  {SEASONS_DATA[selectedSeason].title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {SEASONS_DATA[selectedSeason].description}
              </p>

              {/* Highlight Places */}
              <div className="space-y-2">
                <div className="text-xs font-black text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                  <MapPinIcon className="w-4 h-4 text-pink-600" />
                  <span>Điểm đến lý tưởng nhất trong mùa này:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {SEASONS_DATA[selectedSeason].highlightPlaces.map((place, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold border border-slate-200 dark:border-slate-700"
                    >
                      ⭐ {place}
                    </span>
                  ))}
                </div>
              </div>

              {/* Practical Tips */}
              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/50 text-xs space-y-1">
                <div className="font-black text-amber-900 dark:text-amber-200 flex items-center gap-1.5">
                  <SparklesIcon className="w-4 h-4 text-amber-600" />
                  <span>Mẹo bỏ túi từ người bản địa:</span>
                </div>
                <p className="text-amber-800 dark:text-amber-300 leading-relaxed">
                  {SEASONS_DATA[selectedSeason].tips}
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white text-xs font-black shadow-xs transition-all"
                >
                  <span>Lập kế hoạch du lịch mùa này</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Emergency Hotlines & Support */}
        <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border-2 border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              <PhoneIcon className="w-5 h-5 text-rose-600" />
              <span>Đường dây nóng & An toàn du khách khẩn cấp</span>
            </h2>
            <p className="text-xs text-slate-500">
              Lưu lại các đầu số khẩn cấp toàn quốc hoạt động 24/7 để nhận hỗ trợ kịp thời khi cần thiết.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {EMERGENCY_HOTLINES.map((h, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-2 text-center"
              >
                <div className="text-2xl font-black text-pink-600 dark:text-pink-400">
                  {h.number}
                </div>
                <div className="font-bold text-xs text-slate-900 dark:text-white">
                  {h.name}
                </div>
                <div className="text-[11px] text-slate-500">
                  {h.desc}
                </div>
                <a
                  href={`tel:${h.number.replace(/\s/g, '')}`}
                  className="inline-block mt-2 px-4 py-1.5 rounded-xl bg-pink-100 hover:bg-pink-200 text-pink-700 text-xs font-black transition-colors"
                >
                  Gọi ngay
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Checklist Chuẩn bị Hành lý */}
        <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border-2 border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h2 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <ShieldCheckIcon className="w-5 h-5 text-emerald-600" />
            <span>Checklist 5 quy tắc vàng khi du lịch Việt Nam:</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {[
              'Thanh toán số tiện lợi: Hầu hết các tỉnh thành đều chấp nhận chuyển khoản QR VietQR, MoMo hoặc ZaloPay, tuy nhiên hãy mang theo 300k - 500k tiền mặt để gửi xe hoặc mua sắm chợ phiên.',
              'Trang phục tâm linh: Khi viếng chùa, đền, lăng tẩm hoàng cung phải mặc áo có tay, quần hoặc váy dài quá đầu gối.',
              'Chống nắng & Côn trùng: Luôn có sẵn kem chống nắng SPF50+ và chai xịt chống muỗi côn trùng khi đi rừng (Cúc Phương, Trà Sư, Ba Bể).',
              'Đặt chỗ sớm mùa cao điểm: Các chặng tàu hỏa (Hà Nội - Sa Pa, Đà Nẵng - Huế) và vé máy bay dịp lễ 30/4, Tết Nguyên đán cần đặt trước tối thiểu 1 tháng.',
              'Bảo vệ môi trường tự nhiên: Không xả rác tại các bãi biển và đường trekking vùng cao; tôn trọng phong tục tập quán của các đồng bào dân tộc thiểu số.'
            ].map((rule, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700/50">
                <CheckCircleIcon className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{rule}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

