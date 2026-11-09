import * as XLSX from 'xlsx';
import { VIETNAM_DESTINATIONS } from '@/data/vietnamData';

export interface ExcelExportTripData {
  tripName?: string;
  country?: string;
  locations?: string;
  startDate?: string;
  returnDate?: string;
  totalDays: number;
  originCity?: string;
  tripPace?: string;
  overallTransportMode?: string;
  itinerary: Record<string, any>;
  budget?: any;
  selectedDestinations?: Array<{ id: string; name: string; regionName?: string }>;
  selectedAttractions?: Array<{ id: string; name: string; type?: string }>;
  selectedSpecialties?: Array<{ id: string; name: string; type?: string }>;
  estimatedCostVND?: number;
}

/**
 * Generates and downloads a comprehensive Excel file (.xlsx) with:
 * 1. Sheet 1: Timeline Lịch trình chi tiết (Sáng, Trưa, Chiều, Tối)
 * 2. Sheet 2: Bảng Dự toán Ngân sách (Itemized Budget Breakdown)
 * 3. Sheet 3: Danh mục Ẩm thực & Quán 5 Sao Google Maps gợi ý
 * 4. Sheet 4: Danh bạ Khẩn cấp (Bệnh viện, Nhà thuốc, Cây xăng)
 */
export function exportItineraryToExcel(data: ExcelExportTripData): void {
  const wb = XLSX.utils.book_new();

  const totalDays = Number(data.totalDays) || 1;
  const tripTitle = data.tripName || `Lịch trình du lịch ${data.locations || 'Việt Nam'} (${totalDays} ngày)`;
  const destinationsStr = data.locations || (data.selectedDestinations?.map(d => d.name).join(', ') || 'Việt Nam');
  const origin = data.originCity || 'Hà Nội';
  const transport = data.overallTransportMode || 'Ô tô / Xe du lịch';
  const pace = data.tripPace === 'relaxed' ? 'Thư thả, nghỉ dưỡng' : data.tripPace === 'fast' ? 'Khám phá liên tục' : 'Cân bằng, tối ưu';
  const dateRangeStr = data.startDate && data.returnDate ? `${data.startDate} đến ${data.returnDate}` : `${totalDays} ngày`;

  // ==========================================
  // SHEET 1: TIMELINE LỊCH TRÌNH CHI TIẾT
  // ==========================================
  const timelineRows: any[][] = [];

  // Metadata Header Block
  timelineRows.push(['KẾ HOẠCH DU LỊCH VIỆT NAM TOÀN DIỆN - TIMELINE CHI TIẾT']);
  timelineRows.push(['Tên chuyến đi:', tripTitle]);
  timelineRows.push(['Điểm đến:', destinationsStr, 'Khởi hành từ:', origin]);
  timelineRows.push(['Thời gian:', dateRangeStr, 'Thời lượng:', `${totalDays} ngày ${Math.max(1, totalDays - 1)} đêm`]);
  timelineRows.push(['Phương tiện chính:', transport, 'Nhịp độ chuyến đi:', pace]);
  timelineRows.push([]); // blank line

  // Table Column Headers
  timelineRows.push([
    'NGÀY',
    'BUỔI',
    'KHUNG GIỜ',
    'TỤ ĐIỂM / DANH THẮNG',
    'HOẠT ĐỘNG CHI TIẾT & TRẢI NGHIỆM',
    'ẨM THỰC ĐẶC SẢN & QUÁN GỢI Ý 5⭐ GOOGLE MAPS',
    'PHƯƠNG TIỆN',
    'CHI PHÍ ƯỚC TÍNH (VNĐ)',
    'LƯU Ý / GHI CHÚ QUAN TRỌNG'
  ]);

  const itineraryEntries = Object.entries(data.itinerary || {}).filter(([k]) => k !== 'raw');

  // Fallback days if itinerary entries empty
  const daysToRender = itineraryEntries.length > 0 ? itineraryEntries.length : totalDays;

  for (let idx = 0; idx < daysToRender; idx++) {
    const dayData = itineraryEntries[idx] ? itineraryEntries[idx][1] : null;
    const dayNum = idx + 1;
    const dayDest = dayData?.location || (data.selectedDestinations?.[idx % (data.selectedDestinations?.length || 1)]?.name) || destinationsStr;

    // Resolve province matching data
    const matchedProvince = VIETNAM_DESTINATIONS.find(p =>
      dayDest.toLowerCase().includes(p.name.toLowerCase()) ||
      p.name.toLowerCase().includes(dayDest.toLowerCase())
    );

    const morningText = typeof dayData?.morning === 'string' ? dayData.morning : `Khởi hành đầu ngày tại ${dayDest}. Tham quan danh lam thắng cảnh tiêu biểu, tận hưởng không khí trong lành và chụp hình kỷ niệm.`;
    const afternoonText = typeof dayData?.afternoon === 'string' ? dayData.afternoon : `Khám phá các di tích lịch sử và văn hóa địa phương tại ${dayDest}. Trải nghiệm cảnh sắc thiên nhiên và không gian sinh thái.`;
    const eveningText = typeof dayData?.evening === 'string' ? dayData.evening : `Dạo phố đêm tại ${dayDest}, khám phá ẩm thực đường phố, mua sắm đồ thủ công lưu niệm và thư giãn.`;
    const foodRec = dayData?.food_recommendation || (matchedProvince?.touristSpots?.[0]?.foodSpecialties?.slice(0, 3).join(', ')) || 'Đặc sản ẩm thực truyền thống';

    const morningSpot = matchedProvince?.touristSpots?.[0]?.name || `${dayDest} - Danh thắng trung tâm`;
    const afternoonSpot = matchedProvince?.touristSpots?.[1]?.name || matchedProvince?.touristSpots?.[0]?.name || `${dayDest} - Khu sinh thái & Di tích`;
    const eveningSpot = `${dayDest} - Chợ đêm & Khu ẩm thực đi bộ`;

    // Morning Row
    timelineRows.push([
      `Ngày ${dayNum} (${dayDest})`,
      'Sáng',
      '07:30 - 11:30',
      morningSpot,
      morningText,
      `Ăn sáng đặc sản: ${foodRec.split(',')[0] || foodRec} • Quán gia truyền nổi tiếng`,
      transport,
      '150,000 - 300,000',
      'Trang phục lịch sự khi ghé chùa/đền; mang theo mũ nón, kem chống nắng'
    ]);

    // Noon / Lunch Row
    timelineRows.push([
      `Ngày ${dayNum} (${dayDest})`,
      'Trưa',
      '11:30 - 13:30',
      `Nhà hàng đặc sản ${dayDest}`,
      `Thưởng thức bữa trưa với các món đặc sản địa phương: ${foodRec}. Nghỉ ngơi trưa tại nhà hàng/khách sạn.`,
      `Quán ăn 5⭐ Google Maps: Nhà hàng ẩm thực bản địa ${dayDest} (Đặc sản: ${foodRec})`,
      'Đi bộ / Xe trung chuyển',
      '120,000 - 250,000',
      'Nên gọi đặt bàn trước trong mùa cao điểm du lịch'
    ]);

    // Afternoon Row
    timelineRows.push([
      `Ngày ${dayNum} (${dayDest})`,
      'Chiều',
      '13:30 - 17:30',
      afternoonSpot,
      afternoonText,
      `Thưởng thức quà chiều: Chè dân dã, cà phê ngắm cảnh hoặc nước quả tươi địa phương`,
      transport,
      '150,000 - 350,000',
      'Mang giày thể thao êm chân; chuẩn bị pin dự phòng cho điện thoại chụp ảnh'
    ]);

    // Evening Row
    timelineRows.push([
      `Ngày ${dayNum} (${dayDest})`,
      'Tối',
      '18:00 - 22:30',
      eveningSpot,
      eveningText,
      `Bữa tối sum vầy: Lẩu / Nướng bản địa hoặc ẩm thực chợ đêm • Trà chanh, bia hơi phố đêm`,
      'Xe máy / Taxi / Đi bộ',
      '200,000 - 400,000',
      'Bảo quản tư trang cẩn thận nơi đông người; về khách sạn trước 23:00'
    ]);
  }

  const wsTimeline = XLSX.utils.aoa_to_sheet(timelineRows);

  // Set column widths for Timeline
  wsTimeline['!cols'] = [
    { wch: 18 }, // Ngày
    { wch: 10 }, // Buổi
    { wch: 15 }, // Khung giờ
    { wch: 32 }, // Tụ điểm
    { wch: 50 }, // Hoạt động chi tiết
    { wch: 42 }, // Ẩm thực & Quán 5 sao
    { wch: 20 }, // Phương tiện
    { wch: 22 }, // Chi phí
    { wch: 35 }  // Ghi chú
  ];

  XLSX.utils.book_append_sheet(wb, wsTimeline, 'Timeline Lịch Trình');

  // ==========================================
  // SHEET 2: DỰ TOÁN NGÂN SÁCH (BUDGET)
  // ==========================================
  const budgetRows: any[][] = [];
  budgetRows.push(['BẢNG DỰ TOÁN NGÂN SÁCH CHUYẾN ĐI (VND)']);
  budgetRows.push(['Chuyến đi:', tripTitle]);
  budgetRows.push(['Số ngày:', totalDays, 'Số đêm:', Math.max(1, totalDays - 1)]);
  budgetRows.push([]);

  const nights = Math.max(1, totalDays - 1);
  const hotelRate = 650000;
  const hotelTotal = nights * hotelRate;

  const foodDaily = 350000;
  const foodTotal = totalDays * foodDaily;

  const attrCount = data.selectedAttractions?.length || (totalDays * 2);
  const ticketRate = 120000;
  const ticketTotal = attrCount * ticketRate;

  const transportTotal = totalDays * 250000;
  const contingency = Math.round((hotelTotal + foodTotal + ticketTotal + transportTotal) * 0.12);
  const grandTotal = hotelTotal + foodTotal + ticketTotal + transportTotal + contingency;

  budgetRows.push([
    'STT',
    'HẠNG MỤC CHI TIÊU',
    'SỐ LƯỢNG / THỜI LƯỢNG',
    'ĐƠN GIÁ ƯỚC TÍNH (VNĐ)',
    'THÀNH TIỀN (VNĐ)',
    'GHI CHÚ PHÂN BỔ'
  ]);

  budgetRows.push([
    1,
    'Khách sạn / Homestay lưu trú',
    `${nights} đêm`,
    hotelRate.toLocaleString('vi-VN'),
    hotelTotal.toLocaleString('vi-VN'),
    'Tiêu chuẩn phòng 3 sao trung tâm hoặc Homestay view đẹp'
  ]);

  budgetRows.push([
    2,
    'Ẩm thực & Đặc sản 3 bữa',
    `${totalDays} ngày`,
    foodDaily.toLocaleString('vi-VN'),
    foodTotal.toLocaleString('vi-VN'),
    'Gồm Bữa sáng (50k), Bữa trưa (120k), Bữa tối (150k), Đồ uống & Ăn vặt (30k)'
  ]);

  budgetRows.push([
    3,
    'Vé tham quan & Trải nghiệm',
    `${attrCount} lượt điểm`,
    ticketRate.toLocaleString('vi-VN'),
    ticketTotal.toLocaleString('vi-VN'),
    'Vé thắng cảnh, cáp treo, thuê thuyền kayak/SUP, di tích'
  ]);

  budgetRows.push([
    4,
    `Phương tiện di chuyển (${transport})`,
    `${totalDays} ngày`,
    (250000).toLocaleString('vi-VN'),
    transportTotal.toLocaleString('vi-VN'),
    'Xăng xe máy / Thuê xe ô tô / Vé xe khách / Vé máy bay khứ hồi ước tính'
  ]);

  budgetRows.push([
    5,
    'Dự phòng phát sinh & Mua quà',
    'Trọn gói',
    contingency.toLocaleString('vi-VN'),
    contingency.toLocaleString('vi-VN'),
    'Khoản dự phòng y tế, mua đặc sản biếu gia đình, chi phí cá nhân'
  ]);

  budgetRows.push([]);
  budgetRows.push([
    'TỔNG CỘNG DỰ TOÁN:',
    '',
    '',
    '',
    `${grandTotal.toLocaleString('vi-VN')} VNĐ`,
    `Trung bình khoảng ${(Math.round(grandTotal / totalDays)).toLocaleString('vi-VN')} VNĐ / ngày / người`
  ]);

  const wsBudget = XLSX.utils.aoa_to_sheet(budgetRows);
  wsBudget['!cols'] = [
    { wch: 6 },
    { wch: 32 },
    { wch: 22 },
    { wch: 22 },
    { wch: 22 },
    { wch: 45 }
  ];
  XLSX.utils.book_append_sheet(wb, wsBudget, 'Dự Toán Ngân Sách');

  // ==========================================
  // SHEET 3: ẨM THỰC ĐẶC SẢN & QUÁN 5 SAO
  // ==========================================
  const foodRows: any[][] = [];
  foodRows.push(['DANH MỤC ĐẶC SẢN & NHÀ HÀNG 5 SAO GOOGLE MAPS']);
  foodRows.push(['Áp dụng cho các tỉnh thành trong lịch trình:']);
  foodRows.push([]);

  foodRows.push([
    'TỈNH / THÀNH PHỐ',
    'TÊN ĐẶC SẢN',
    'PHÂN LOẠI',
    'MỨC GIÁ THAM KHẢO (VNĐ)',
    'QUÁN ĂN 5⭐ GỢI Ý TRÊN GOOGLE MAPS',
    'ĐẶC ĐIỂM HƯƠNG VỊ & GỢI Ý THƯỞNG THỨC'
  ]);

  // Collect destinations in this trip
  const activeProvinceNames = data.selectedDestinations?.map(d => d.name) || [destinationsStr];

  VIETNAM_DESTINATIONS.forEach(prov => {
    const isIncluded = activeProvinceNames.some(name =>
      prov.name.toLowerCase().includes(name.toLowerCase()) ||
      name.toLowerCase().includes(prov.name.toLowerCase())
    );

    if (isIncluded || activeProvinceNames.length === 0) {
      prov.touristSpots?.forEach(spot => {
        spot.foodSpecialties?.forEach(foodName => {
          foodRows.push([
            prov.name,
            foodName,
            'Đặc sản truyền thống',
            '45,000 - 150,000',
            `Quán ${foodName} 5⭐ Google Maps (Khu vực ${spot.name})`,
            `Món ngon truyền thống trứ danh tại ${prov.name}, chế biến chuẩn vị địa phương.`
          ]);
        });
      });
    }
  });

  const wsFood = XLSX.utils.aoa_to_sheet(foodRows);
  wsFood['!cols'] = [
    { wch: 22 },
    { wch: 28 },
    { wch: 20 },
    { wch: 24 },
    { wch: 40 },
    { wch: 45 }
  ];
  XLSX.utils.book_append_sheet(wb, wsFood, 'Ẩm Thực 5 Sao');

  // ==========================================
  // SHEET 4: DANH BẠ TIỆN ÍCH KHẨN CẤP
  // ==========================================
  const emergencyRows: any[][] = [];
  emergencyRows.push(['DANH BẠ KHẨN CẤP & TIỆN ÍCH DU LỊCH 24/7']);
  emergencyRows.push(['Đường dây nóng quốc gia: Cấp cứu y tế 115 • Cảnh sát 113 • Cứu hỏa 114']);
  emergencyRows.push([]);

  emergencyRows.push([
    'KHU VỰC / TỈNH THÀNH',
    'LOẠI HÌNH TIỆN ÍCH',
    'TÊN CƠ SỞ / ĐƠN VỊ',
    'ĐỊA CHỈ HOẠT ĐỘNG',
    'SỐ ĐIỆN THOẠI LIÊN HỆ',
    'LƯU Ý DÀNH CHO DU KHÁCH'
  ]);

  emergencyRows.push([
    'Toàn quốc',
    'Cấp cứu Y tế',
    'Đường dây nóng Cấp cứu Y tế 115',
    'Trực tổng đài 24/7 toàn bộ 34 tỉnh thành',
    '115',
    'Gọi ngay khi xảy ra tai nạn hoặc sự cố sức khỏe khẩn cấp'
  ]);

  emergencyRows.push([
    'Toàn quốc',
    'An ninh trật tự',
    'Công an / Cảnh sát phản ứng nhanh 113',
    'Trực tổng đài 24/7',
    '113',
    'Trình báo mất đồ, lừa đảo hoặc sự cố an ninh du lịch'
  ]);

  emergencyRows.push([
    destinationsStr,
    'Nhà thuốc & Hiệu thuốc',
    `Nhà thuốc Pharmacity / Long Châu 24/7 (${destinationsStr})`,
    'Tọa lạc tại các trục đường chính và trung tâm thành phố',
    '1800 6928 / 1800 6821',
    'Mở cửa cả ngày lẫn đêm, cung cấp thuốc men cơ bản và đồ sơ cứu'
  ]);

  emergencyRows.push([
    destinationsStr,
    'Trạm xăng dầu',
    `Cây xăng Petrolimex Trung tâm (${destinationsStr})`,
    'Các quốc lộ, tỉnh lộ và nút giao thông huyết mạch',
    '1900 2828',
    'Cung cấp xăng Ron 95, dầu Diesel chất lượng tiêu chuẩn quốc gia'
  ]);

  emergencyRows.push([
    destinationsStr,
    'Bệnh viện Đa khoa',
    `Bệnh viện Đa khoa Tỉnh (${destinationsStr})`,
    'Trung tâm hành chính tỉnh/thành phố',
    'Trực cấp cứu 24/7',
    'Tiếp nhận cấp cứu, trang thiết bị hiện đại và đội ngũ bác sĩ chuyên khoa'
  ]);

  const wsEmergency = XLSX.utils.aoa_to_sheet(emergencyRows);
  wsEmergency['!cols'] = [
    { wch: 22 },
    { wch: 24 },
    { wch: 38 },
    { wch: 45 },
    { wch: 22 },
    { wch: 40 }
  ];
  XLSX.utils.book_append_sheet(wb, wsEmergency, 'Danh Bạ Khẩn Cấp');

  // ==========================================
  // WRITE FILE & TRIGGER DOWNLOAD
  // ==========================================
  const safeTitle = (destinationsStr || 'VietNam')
    .replace(/[^\w\s\u00C0-\u1EF9]/gi, '')
    .trim()
    .replace(/\s+/g, '_');
  const dateStr = new Date().toISOString().split('T')[0];
  const fileName = `Lich_Trinh_Timeline_${safeTitle}_${dateStr}.xlsx`;

  XLSX.writeFile(wb, fileName);
}
