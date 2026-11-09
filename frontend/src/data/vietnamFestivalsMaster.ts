export interface MasterFestivalItem {
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

export const VIETNAM_FESTIVALS_MASTER: MasterFestivalItem[] = [
  // ==========================================
  // THÁNG 1 (THÁNG GIÊNG)
  // ==========================================
  {
    id: 101,
    province_id: "hanoi",
    province_name: "TP. Hà Nội",
    name: "Lễ hội Chùa Hương (Hương Sơn)",
    month_lunar: 1,
    month_solar: 2,
    time_details: "Mùng 6 tháng Giêng kéo dài đến hết tháng 3 Âm lịch",
    location: "Quần thể Thắng cảnh Hương Sơn, Huyện Mỹ Đức, Hà Nội",
    significance: "Lễ hội hành hương Phật giáo dài ngày và quy mô nhất Việt Nam, cầu quốc thái dân an, tài lộc phúc lành đầu xuân.",
    activities: "Đi thuyền vãn cảnh dòng suối Yến thơ mộng, leo núi chiêm bái Động Hương Tích 'Nam thiên đệ nhất động', lễ Phật Chùa Thiên Trù.",
    dress_code_tips: "Áo dài lam hoặc trang phục trang nghiêm kín đáo; mang áo khoác giữ ấm khi ngồi thuyền suối.",
    image_url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 102,
    province_id: "quangninh",
    province_name: "Tỉnh Quảng Ninh",
    name: "Lễ hội Xuân Yên Tử (Cội nguồn Thiền phái Trúc Lâm)",
    month_lunar: 1,
    month_solar: 2,
    time_details: "Mùng 10 tháng Giêng đến hết tháng 3 Âm lịch",
    location: "Khu di tích Danh thắng Núi Yên Tử, TP. Uông Bí, Quảng Ninh",
    significance: "Tôn vinh công đức Phật hoàng Trần Nhân Tông - vị vua anh minh khai sáng Thiền phái Trúc Lâm Yên Tử đậm đà bản sắc Việt.",
    activities: "Lễ khai hội rước kiệu, lễ cầu an quốc thái dân an, leo bộ hoặc cáp treo chinh phục Chùa Đồng trên đỉnh Phù Vân 1.068m.",
    dress_code_tips: "Trang phục chỉnh tề, giày thể thao có độ bám dốc cao, mang gậy đi bộ nếu leo dốc đá.",
    image_url: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 103,
    province_id: "bacninh",
    province_name: "Tỉnh Bắc Ninh",
    name: "Hội Lim Quan họ Kinh Bắc",
    month_lunar: 1,
    month_solar: 2,
    time_details: "Ngày 12 và 13 tháng Giêng Âm lịch",
    location: "Núi Hồng Vân (Núi Lim), Thị trấn Lim, Huyện Tiên Du, Bắc Ninh",
    significance: "Lễ hội tôn vinh Dân ca Quan họ Bắc Ninh - Di sản Văn hóa Phi vật thể đại diện của nhân loại được UNESCO vinh danh.",
    activities: "Hát đối đáp giao duyên trên thuyền rồng, hát canh tại cửa đình chùa, têm trầu cánh phượng, trò chơi dân gian đu tiên, đấu vật, cờ người.",
    dress_code_tips: "Khuyến khích mặc áo tứ thân, khăn mỏ quạ hoặc áo dài truyền thống; chuẩn bị máy ảnh ghi lại khoảnh khắc văn hóa độc đáo.",
    image_url: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 104,
    province_id: "tayninh",
    province_name: "Tỉnh Tây Ninh",
    name: "Hội Xuân Núi Bà Đen Tây Ninh",
    month_lunar: 1,
    month_solar: 2,
    time_details: "Mùng 4 Tết đến hết tháng Giêng Âm lịch",
    location: "Quần thể Di tích Núi Bà Đen, TP. Tây Ninh",
    significance: "Lễ hội xuân tâm linh lớn nhất Đông Nam Bộ, chiêm bái Linh Sơn Thánh Mẫu và Đại tượng Phật Bà Tây Bổ Đà Sơn kỷ lục châu Á.",
    activities: "Đi cáp treo ngắm biển mây Tây Ninh, dâng hoa đăng cầu bình an tại quảng trường đỉnh núi, lễ bái Linh Sơn Tiên Thạch Tự.",
    dress_code_tips: "Trang phục lịch sự nơi cửa Phật, mang áo khoác mỏng vì đỉnh núi Bà Đen gió lộng và se lạnh về chiều.",
    image_url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },

  // ==========================================
  // THÁNG 2
  // ==========================================
  {
    id: 201,
    province_id: "ninhbinh",
    province_name: "Tỉnh Ninh Bình",
    name: "Lễ hội Truyền thống Cố đô Hoa Lư (Trường Yên)",
    month_lunar: 2,
    month_solar: 3,
    time_details: "Mùng 6 đến mùng 10 tháng 2 Âm lịch",
    location: "Khu Di tích Quốc gia Đặc biệt Cố đô Hoa Lư, Huyện Hoa Lư, Ninh Bình",
    significance: "Tưởng niệm công đức Vua Đinh Tiên Hoàng dẹp loạn 12 sứ quân thống nhất giang sơn và Vua Lê Đại Hành phá Tống bình Chiêm.",
    activities: "Lễ rước nước từ sông Hoàng Long, lễ tế cổ truyền, diễn trò 'Cờ lau tập trận', thi chèo thuyền rồng, biểu diễn múa lân sư rồng.",
    dress_code_tips: "Trang phục lịch sự, mang giày đi bộ thoải mái để tham quan Đền Vua Đinh và Đền Vua Lê.",
    image_url: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 202,
    province_id: "camau",
    province_name: "Tỉnh Cà Mau",
    name: "Lễ hội Nghinh Ông Sông Đốc",
    month_lunar: 2,
    month_solar: 3,
    time_details: "Ngày 14 đến 16 tháng 2 Âm lịch",
    location: "Thị trấn Sông Đốc, Huyện Trần Văn Thời, Cà Mau",
    significance: "Lễ hội cầu ngư lớn nhất vùng bán đảo Cà Mau, tạ ơn 'Đại Tướng quân Nam Hải' phù hộ ngư dân sóng yên biển lặng, cá tôm đầy khoang.",
    activities: "Hàng trăm tàu cá trang hoàng cờ hoa rực rỡ xuất bến nghinh Ông trên biển Tây, lễ rước kiệu thần trang trọng, giao lưu văn nghệ miệt biển.",
    dress_code_tips: "Áo phông hoặc đồ dã ngoại thoáng mát, mang nón rộng vành và thuốc chống say sóng khi lên thuyền rước.",
    image_url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 203,
    province_id: "quangninh",
    province_name: "Tỉnh Quảng Ninh",
    name: "Lễ hội Đền Cửa Ông (Hưng Nhượng Đại Vương)",
    month_lunar: 2,
    month_solar: 3,
    time_details: "Mùng 3 và mùng 4 tháng 2 Âm lịch",
    location: "Khu Di tích Đền Cửa Ông, TP. Cẩm Phả, Quảng Ninh",
    significance: "Tôn vinh công lao bảo vệ biên cương bờ cõi Đông Bắc của Đức ông Trần Quốc Tảng thời nhà Trần.",
    activities: "Lễ rước kiệu Thánh vi hành ngắm Vịnh Bái Tử Long, múa rồng lân khai hội, các hội thi nấu cơm thi kéo co truyền thống.",
    dress_code_tips: "Trang phục nghiêm túc, kín đáo nơi đền phủ di tích lịch sử linh thiêng.",
    image_url: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80"
  },

  // ==========================================
  // THÁNG 3
  // ==========================================
  {
    id: 301,
    province_id: "phutho",
    province_name: "Tỉnh Phú Thọ",
    name: "Giỗ Tổ Hùng Vương - Lễ hội Đền Hùng",
    month_lunar: 3,
    month_solar: 4,
    time_details: "Mùng 10 tháng 3 Âm lịch (Quốc lễ cả nước)",
    location: "Khu Di tích Lịch sử Đền Hùng, TP. Việt Trì, Phú Thọ",
    significance: "Quốc giỗ thiêng liêng tưởng nhớ công ơn 18 đời Vua Hùng dựng nước Văn Lang, cội nguồn con Lạc cháu Hồng dân tộc Việt Nam.",
    activities: "Lễ dâng hương lãnh đạo Đảng Nhà nước tại Đền Thượng, rước kiệu cổ truyền thống, thi gói bánh chưng giã bánh giầy, biểu diễn Hát Xoan UNESCO.",
    dress_code_tips: "Trang phục lịch sự, đi giày bệt hoặc giày thể thao vì cần leo gần 500 bậc đá lên Đền Thượng.",
    image_url: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 302,
    province_id: "khanhhoa",
    province_name: "Tỉnh Khánh Hòa",
    name: "Lễ hội Tháp Bà Ponagar Nha Trang",
    month_lunar: 3,
    month_solar: 4,
    time_details: "Ngày 20 đến 23 tháng 3 Âm lịch",
    location: "Quần thể Tháp Bà Ponagar, TP. Nha Trang, Khánh Hòa",
    significance: "Tôn vinh Mẹ xứ sở Thiên Y A Na - người dạy dân cấy cày dệt vải chăn tằm, biểu tượng gắn kết văn hóa Việt - Chăm đặc sắc.",
    activities: "Lễ thay yếm áo Mẫu, dâng hoa quả cúng tế, múa Chăm bóng quạt truyền thống theo điệu kèn Saranai và trống Paranưng.",
    dress_code_tips: "Mặc quần áo dài kín đáo; cởi giày dép khi vào bên trong tháp chính dâng hương.",
    image_url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 303,
    province_id: "danang",
    province_name: "TP. Đà Nẵng",
    name: "Lễ hội Quán Thế Âm Ngũ Hành Sơn",
    month_lunar: 2,
    month_solar: 3,
    time_details: "Ngày 19 tháng 2 - đầu tháng 3 Âm lịch",
    location: "Chùa Quán Thế Âm, Quần thể Ngũ Hành Sơn, Đà Nẵng",
    significance: "Di sản Văn hóa Phi vật thể Quốc gia, cầu nguyện thế giới hòa bình, quốc thái dân an, mưa thuận gió hòa.",
    activities: "Lễ rước tượng Bồ Tát Quán Thế Âm, thả đèn hoa đăng lung linh trên sông Cổ Cò, hội thi cờ tướng, triển lãm điêu khắc đá mỹ nghệ Non Nước.",
    dress_code_tips: "Trang phục Phật tử trang nhã, áo tràng lam hoặc đồ kín đáo.",
    image_url: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=800&q=80"
  },

  // ==========================================
  // THÁNG 4
  // ==========================================
  {
    id: 401,
    province_id: "hue",
    province_name: "TP. Huế",
    name: "Festival Huế - Tinh hoa Cố đô Di sản",
    month_lunar: 3,
    month_solar: 4,
    time_details: "Tháng 4 Dương lịch (Định kỳ mùa hè)",
    location: "Đại Nội Huế, Cầu Trường Tiền & Bờ sông Hương, TP. Huế",
    significance: "Lễ hội văn hóa nghệ thuật quốc tế lớn nhất miền Trung, quảng bá Nhã nhạc Cung đình và nét đẹp ngàn năm xứ Thần Kinh.",
    activities: "Tái hiện Đêm Hoàng Cung lộng lẫy, Lễ tế Giao cổ kính, Lễ hội Áo dài trên cầu Trường Tiền, thả đèn hoa đăng sông Hương thơ mộng.",
    dress_code_tips: "Áo dài truyền thống hoặc đồ thanh lịch; mang theo dù che nắng nhẹ khi xem biểu diễn ngoài trời.",
    image_url: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 402,
    province_id: "angiang",
    province_name: "Tỉnh An Giang",
    name: "Lễ hội Vía Bà Chúa Xứ Núi Sam",
    month_lunar: 4,
    month_solar: 5,
    time_details: "Ngày 23 đến 27 tháng 4 Âm lịch",
    location: "Miếu Bà Chúa Xứ Núi Sam, TP. Châu Đốc, An Giang",
    significance: "Lễ hội tâm linh miền Tây quy tụ hàng triệu lượt khách hành hương, Di sản Văn hóa Phi vật thể cấp Quốc gia.",
    activities: "Lễ tắm Bà lúc nửa đêm huyền ảo trang trọng, lễ thỉnh sắc thần Thoại Ngọc Hầu, dâng hương hoa tạ ơn Bà phù trợ bình an làm ăn phát đạt.",
    dress_code_tips: "Trang phục chỉnh tề, giữ gìn tư trang cẩn thận giữa biển người chiêm bái.",
    image_url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 403,
    province_id: "tuyenquang",
    province_name: "Tỉnh Tuyên Quang",
    name: "Lễ hội Chợ Tình Khau Vai",
    month_lunar: 3,
    month_solar: 4,
    time_details: "Ngày 27 tháng 3 Âm lịch hàng năm",
    location: "Thung lũng Khau Vai, Huyện Mèo Vạc (Khu vực Đông Bắc Tuyên Quang - Cao Bằng)",
    significance: "Chợ tình huyền thoại trăm năm nơi những mối tình dang dở của đồng bào H'Mông, Dao, Tày tìm về gặp lại bạn xưa không ghen tuông hờn giận.",
    activities: "Thổi khèn lá trao duyên, dâng hương miếu Ông miếu Bà, thưởng thức thịt treo gác bếp và rượu ngô men lá nồng nàn.",
    dress_code_tips: "Trang phục thổ cẩm rực rỡ, mang giày thể thao êm chân vì địa hình đồi núi.",
    image_url: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80"
  },

  // ==========================================
  // THÁNG 5
  // ==========================================
  {
    id: 501,
    province_id: "tphcm",
    province_name: "TP. Hồ Chí Minh",
    name: "Lễ hội Trái cây Nam Bộ",
    month_lunar: 4,
    month_solar: 5,
    time_details: "Bắt đầu từ ngày 1/6 (đầu tháng 5 Âm lịch) kéo dài suốt mùa hè",
    location: "Khu Du lịch Văn hóa Suối Tiên, TP. Thủ Đức, TP. Hồ Chí Minh",
    significance: "Tôn vinh thành quả lao động của nhà nông Nam Bộ với hàng trăm loại trái cây ngọt lành trĩu quả khắp miệt vườn đồng bằng.",
    activities: "Chợ nổi trái cây bán giá ưu đãi, hội thi nghệ thuật tạo hình bằng trái cây khổng lồ, diễu hành bách quả tứ quý rực rỡ sắc màu.",
    dress_code_tips: "Quần áo mát mẻ mùa hè, nón mũ rộng vành, kính râm khi tham quan ngoài trời.",
    image_url: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 502,
    province_id: "dongthap",
    province_name: "Tỉnh Đồng Tháp",
    name: "Lễ hội Sen Đồng Tháp & Tết Đoan Ngọ Miệt Vườn",
    month_lunar: 5,
    month_solar: 5,
    time_details: "Dịp Tết Đoan Ngọ mùng 5 tháng 5 Âm lịch",
    location: "TP. Cao Lãnh & Đồng Sen Tháp Mười, Tỉnh Đồng Tháp",
    significance: "Tôn vinh biểu tượng 'Đất Sen Hồng' và tập tục ăn bánh bá trạng, bánh ú, tắm sông diệt sâu bọ truyền thống phương Nam.",
    activities: "Chèo xuồng giữa đầm sen bạt ngàn ngát hương, thưởng thức 200 món ăn kỷ lục chế biến từ sen, tham gia ngày hội hái trái cây chín cây.",
    dress_code_tips: "Áo bà ba khăn rằn Nam Bộ, mang dép bệt dễ di chuyển trên cầu khỉ cầu ván miệt vườn.",
    image_url: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 503,
    province_id: "hatinh",
    province_name: "Tỉnh Hà Tĩnh",
    name: "Lễ hội Đua thuyền Truyền thống Sông La",
    month_lunar: 4,
    month_solar: 5,
    time_details: "Tháng 5 Dương lịch",
    location: "Bến Tam Soa, Dòng sông La, Huyện Đức Thọ, Hà Tĩnh",
    significance: "Biểu dương tinh thần đoàn kết thượng võ sông nước và lòng kiên cường vượt khó của người dân miền Trung xứ Nghệ.",
    activities: "Hội đua thuyền rồng tốc độ gay cấn trong tiếng reo hò trống gõ vang dội hai bờ sông, biểu diễn ca trù và dân ca ví giặm Hà Tĩnh.",
    dress_code_tips: "Trang phục dã ngoại năng động, mang mũ nón và kem chống nắng.",
    image_url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },

  // ==========================================
  // THÁNG 6
  // ==========================================
  {
    id: 601,
    province_id: "danang",
    province_name: "TP. Đà Nẵng",
    name: "Lễ hội Pháo hoa Quốc tế Đà Nẵng (DIFF)",
    month_lunar: 5,
    month_solar: 6,
    time_details: "Các đêm cuối tuần tháng 6 đến tháng 7 Dương lịch hàng năm",
    location: "Sân khấu bờ sông Hàn & Khán đài đường Trần Hưng Đạo, Đà Nẵng",
    significance: "Sự kiện văn hóa du lịch đẳng cấp thế giới, đưa thương hiệu 'Thành phố ánh sáng và sự kiện' Đà Nẵng vươn tầm toàn cầu.",
    activities: "Các đội pháo hoa hàng đầu thế giới (Pháp, Ý, Mỹ, Úc, Việt Nam) trình diễn trên nền nhạc giao hưởng sống động, lễ hội ẩm thực quốc tế đường phố.",
    dress_code_tips: "Trang phục trẻ trung sành điệu, nên đến sớm trước 18:30 để chọn vị trí ngắm pháo hoa đẹp nhất.",
    image_url: "https://images.unsplash.com/photo-1533230807127-71669734d68b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 602,
    province_id: "vinhlong",
    province_name: "Tỉnh Vĩnh Long",
    name: "Ngày hội Trái cây Miệt vườn Cù lao An Bình",
    month_lunar: 5,
    month_solar: 6,
    time_details: "Tháng 6 Dương lịch mùa chôm chôm chín đỏ",
    location: "Cù lao An Bình & Bến đò Vĩnh Long, Tỉnh Vĩnh Long",
    significance: "Trải nghiệm văn hóa miệt vườn trù phú nhất sông Tiền, thưởng thức chôm chôm, sầu riêng, măng cụt chín cây ngọt lịm.",
    activities: "Bao bụng vào vườn tự tay hái và ăn trái cây thỏa thích, chèo ghe ba lá len lỏi trong rạch dừa nước, nghe đờn ca tài tử tại nhà cổ Nam Bộ.",
    dress_code_tips: "Quần áo thoải mái, giày chống trượt khi đi trong vườn cây ăn trái đất phù sa.",
    image_url: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80"
  },

  // ==========================================
  // THÁNG 7
  // ==========================================
  {
    id: 701,
    province_id: "hanoi",
    province_name: "TP. Hà Nội",
    name: "Đại lễ Vu Lan Báo Hiếu & Lễ Bông Hồng Cài Áo",
    month_lunar: 7,
    month_solar: 8,
    time_details: "Rằm tháng Bảy Âm lịch (15/7 Âm lịch)",
    location: "Chùa Quán Sứ, Chùa Trấn Quốc & các đại tự tại Hà Nội, TP.HCM",
    significance: "Truyền thống đạo hiếu ngàn đời của dân tộc Việt Nam, tri ân công đức sinh thành dưỡng dục của cha mẹ tổ tiên.",
    activities: "Nghi thức Bông hồng cài áo thiêng liêng, thả đèn hoa đăng cầu an trên mặt hồ Tây và sông Hồng, tụng kinh Vu Lan bồn, phóng sinh cứu vớt muôn loài.",
    dress_code_tips: "Trang phục màu lam hoặc đồ kín đáo trang trọng, đi nhẹ nói khẽ nơi chốn linh nghiêm.",
    image_url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 702,
    province_id: "angiang",
    province_name: "Tỉnh An Giang",
    name: "Lễ hội Đua bò Bảy Núi Vùng Thất Sơn",
    month_lunar: 8,
    month_solar: 9,
    time_details: "Dịp Lễ Dolta của đồng bào Khmer (Cuối tháng 8 - tháng 9 Dương lịch)",
    location: "Sân đua bò Chùa Rô, Huyện Tịnh Biên & Tri Tôn, An Giang",
    significance: "Di sản Văn hóa Phi vật thể Quốc gia, nét văn hóa nông nghiệp lúa nước độc nhất vô nhị của đồng bào Khmer vùng biên viễn Tây Nam.",
    activities: "Các đôi bò dũng mãnh tranh tài với tốc độ xé gió té nước bùn ngập trời trên ruộng ngập lụt, tiếng reo hò cuồng nhiệt của hàng vạn khán giả.",
    dress_code_tips: "Đồ dã ngoại chịu được bùn bắn, ủng hoặc giày không thấm nước, mang theo kính bảo hộ mắt.",
    image_url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 703,
    province_id: "khanhhoa",
    province_name: "Tỉnh Khánh Hòa",
    name: "Lễ hội Katê Đồng bào Chăm",
    month_lunar: 7,
    month_solar: 10,
    time_details: "Tháng 7 lịch Chăm (Khoảng tháng 9 - 10 Dương lịch)",
    location: "Các tháp Chăm cổ tại Khánh Hòa & Ninh Thuận",
    significance: "Lễ hội truyền thống lớn nhất của người Chăm tưởng nhớ các vị thần linh, vua chúa có công đào mương dẫn thủy nhập điền.",
    activities: "Rước y phục Thần Mẫu, điệu múa quạt thướt tha hòa cùng tiếng trống Ghi-năng và tiếng kèn Saranai réo rắt khắp đồi tháp cổ kính.",
    dress_code_tips: "Trang phục tôn trọng nghi lễ bản địa; tuyệt đối không chạm tay vào các linh vật trên bệ thờ linga - yoni.",
    image_url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
  },

  // ==========================================
  // THÁNG 8
  // ==========================================
  {
    id: 801,
    province_id: "tayninh",
    province_name: "Tỉnh Tây Ninh",
    name: "Đại lễ Hội Yến Diêu Trì Cung (Toà Thánh Tây Ninh)",
    month_lunar: 8,
    month_solar: 9,
    time_details: "Rằm tháng Tám Âm lịch (Đúng đêm Tết Trung thu)",
    location: "Tòa Thánh Tây Ninh, Thị xã Hòa Thành, Tỉnh Tây Ninh",
    significance: "Đại lễ tôn giáo lớn nhất của Đạo Cao Đài đón hơn 25 vạn tín đồ và du khách thập phương tụ hội tạ ơn Đức Phật Mẫu.",
    activities: "Xem đại lễ diễu hành Rồng Nhang múa lượn rực lửa ngời sáng, chiêm ngưỡng 100 gian quả phẩm chay tạo hình rồng phượng tinh xảo, thọ cơm chay miễn phí thanh tịnh.",
    dress_code_tips: "Mặc áo dài trắng hoặc trang phục màu sáng lịch sự; cởi bỏ giày dép bên ngoài trước khi bước vào Tòa Thánh.",
    image_url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 802,
    province_id: "hungyen",
    province_name: "Tỉnh Hưng Yên",
    name: "Lễ hội Đền Trần & Di tích Đền Kiếp Bạc Mùa Thu",
    month_lunar: 8,
    month_solar: 9,
    time_details: "Ngày 15 đến 20 tháng Tám Âm lịch (Giỗ Đức Thánh Trần)",
    location: "Quần thể Đền Trần & Kiếp Bạc (Khu vực giáp ranh Hưng Yên - Hải Dương)",
    significance: "Tưởng niệm ngày hóa thân của Anh hùng dân tộc Hưng Đạo Đại Vương Trần Quốc Tuấn - bách chiến bách thắng giặc Nguyên Mông.",
    activities: "Lễ rước kiệu thần linh ứng, hội quân trên sông Lục Đầu với hàng trăm thuyền buồm cờ hoa tái hiện hào khí Đông A oai hùng.",
    dress_code_tips: "Trang phục trang nghiêm, kín đáo.",
    image_url: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 803,
    province_id: "danang",
    province_name: "TP. Đà Nẵng",
    name: "Lễ hội Đèn lồng Phố Cổ Hội An & Đêm Rằm Trung Thu",
    month_lunar: 8,
    month_solar: 9,
    time_details: "Đêm 14 và 15 tháng Tám Âm lịch (Rằm Trung thu)",
    location: "Phố cổ Hội An (Phạm vi Đà Nẵng mới) & Bờ sông Hoài",
    significance: "Không gian cổ kính huyền ảo lung linh bậc nhất châu Á khi toàn bộ phố cổ tắt đèn điện chỉ thắp hàng ngàn lồng đèn rực rỡ.",
    activities: "Đi thuyền thả hoa đăng ước nguyện trên sông Hoài, xem múa lân sư rồng rước đèn ông sao, thưởng thức cao lầu và bánh bao bánh vạc.",
    dress_code_tips: "Áo dài truyền thống màu sáng để chụp hình lung linh dưới ánh đèn lồng.",
    image_url: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=800&q=80"
  },

  // ==========================================
  // THÁNG 9
  // ==========================================
  {
    id: 901,
    province_id: "haiphong",
    province_name: "TP. Hải Phòng",
    name: "Lễ hội Chọi trâu Đồ Sơn Truyền thống",
    month_lunar: 9,
    month_solar: 10,
    time_details: "Mùng 9 tháng 9 Âm lịch hàng năm",
    location: "Sân vận động Trung tâm Quận Đồ Sơn, TP. Hải Phòng",
    significance: "Di sản Văn hóa Phi vật thể Quốc gia đậm chất thượng võ và tinh thần quả cảm kiên cường của người miền biển Bạch Đằng Giang.",
    activities: "Lễ tế thần Điểm Tước, các trận so sừng nảy lửa nghẹt thở giữa các 'ông Trâu' đại diện các phường, lễ hiến tế trâu nhất cầu bình an.",
    dress_code_tips: "Trang phục năng động thoải mái, mang nón bảo hiểm hoặc mũ che nắng, đến sân trước 07:00 sáng vì khán đài rất đông.",
    image_url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 902,
    province_id: "sonla",
    province_name: "Tỉnh Sơn La",
    name: "Tết Độc Lập Người H'Mông Mộc Châu",
    month_lunar: 8,
    month_solar: 9,
    time_details: "Dịp Quốc khánh mùng 2 tháng 9 Dương lịch",
    location: "Cao nguyên Mộc Châu & Thị trấn Nông trường, Tỉnh Sơn La",
    significance: "Ngày hội lớn nhất trong năm của cộng đồng các dân tộc Tây Bắc tri ân Bác Hồ và ngày khai sinh nước Việt Nam Dân chủ Cộng hòa.",
    activities: "Hàng vạn đồng bào xúng xính váy hoa thổ cẩm dạo chợ phiên, thi giã bánh dày truyền thống, nhảy sạp, ném pa pao tỏ tình lãng mạn.",
    dress_code_tips: "Mặc váy hoa thổ cẩm hoặc trang phục rực rỡ để hòa mình trọn vẹn vào không khí hội hè vùng cao.",
    image_url: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80"
  },

  // ==========================================
  // THÁNG 10
  // ==========================================
  {
    id: 1001,
    province_id: "cantho",
    province_name: "TP. Cần Thơ",
    name: "Lễ hội Oóc Om Bóc & Đua ghe Ngo Khmer Nam Bộ",
    month_lunar: 10,
    month_solar: 11,
    time_details: "Rằm tháng Mười Âm lịch (15/10 Âm lịch)",
    location: "Bến Ninh Kiều & Khúc sông Maspero (Phạm vi Cần Thơ - Sóc Trăng)",
    significance: "Lễ cúng Trăng tạ ơn Thần Mặt Trăng sau mùa vụ bội thu, Di sản Văn hóa Phi vật thể Quốc gia đặc sắc của miền Tây sông nước.",
    activities: "Lễ đút cốm dẹp cho trẻ em cầu điều ước may mắn, cuộc thi đua ghe Ngo gay cấn nghẹt thở với hàng chục mái dầm nhịp nhàng xé nước.",
    dress_code_tips: "Áo phông cộc tay thoáng mát, chọn chỗ đứng ven bờ sông trước 11:00 trưa để cổ vũ cuộc đua hào hứng.",
    image_url: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 1002,
    province_id: "caobang",
    province_name: "Tỉnh Cao Bằng",
    name: "Lễ hội Hoa Tam Giác Mạch & Trùng Khánh Miền Biên Cương",
    month_lunar: 10,
    month_solar: 11,
    time_details: "Tháng 10 đến tháng 11 Dương lịch mùa hoa nở rộ",
    location: "Khu vực Cao Bằng - Tuyên Quang - Hà Giang miền cực Bắc",
    significance: "Tôn vinh loài hoa kiên cường nở trên đá tai mèo, biểu tượng sức sống bất diệt của con người miền biên cương Tổ quốc.",
    activities: "Ngắm những thung lũng hoa hồng phớt bạt ngàn ôm chân núi đá, thưởng thức bánh tam giác mạch nướng thơm lừng, thi dù lượn ngắm non sông.",
    dress_code_tips: "Áo ấm mùa thu đông, khăn choàng rực rỡ nổi bật giữa sắc hoa phớt tím hồng.",
    image_url: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80"
  },

  // ==========================================
  // THÁNG 11
  // ==========================================
  {
    id: 1101,
    province_id: "lamdong",
    province_name: "Tỉnh Lâm Đồng",
    name: "Festival Hoa Đà Lạt (Thành phố Ngàn Hoa)",
    month_lunar: 10,
    month_solar: 11,
    time_details: "Tháng 11 đến tháng 12 Dương lịch (Định kỳ 2 năm một lần)",
    location: "Quảng trường Lâm Viên, Hồ Xuân Hương & Vườn hoa TP. Đà Lạt",
    significance: "Tôn vinh người trồng hoa và khẳng định vị thế thương hiệu du lịch nghỉ dưỡng lãng mạn hàng đầu Đông Nam Á của Đà Lạt.",
    activities: "Không gian hoa tươi khổng lồ quanh hồ Xuân Hương, lễ hội rượu vang và trà B'Lao, diễu hành xe hoa cổ tích, carnival ca nhạc đường phố.",
    dress_code_tips: "Trang phục mùa đông phong cách vintage, áo len măng-tô, mũ beret giữ ấm trong tiết trời se lạnh 14°C.",
    image_url: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 1102,
    province_id: "daklak",
    province_name: "Tỉnh Đắk Lắk",
    name: "Lễ hội Cà phê Buôn Ma Thuột & Không gian Cồng Chiêng",
    month_lunar: 10,
    month_solar: 11,
    time_details: "Tháng 11 Dương lịch (Mùa hái cà phê chín đỏ)",
    location: "Quảng trường 10/3, TP. Buôn Ma Thuột, Tỉnh Đắk Lắk",
    significance: "Tôn vinh hạt cà phê Robusta Việt Nam số 1 thế giới và Không gian Văn hóa Cồng chiêng Tây Nguyên kiệt tác truyền khẩu UNESCO.",
    activities: "Thưởng thức cà phê pha phin truyền thống miễn phí trên các tuyến phố, xem múa lửa cồng chiêng đêm đại ngàn, hội đua voi Bản Đôn.",
    dress_code_tips: "Trang phục dã ngoại năng động, mang áo khoác gió khi về đêm trên cao nguyên đất đỏ bazan.",
    image_url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 1103,
    province_id: "caobang",
    province_name: "Tỉnh Cao Bằng",
    name: "Lễ hội Du lịch Thác Bản Giốc Mùa Nước Trong",
    month_lunar: 10,
    month_solar: 11,
    time_details: "Tháng 11 Dương lịch",
    location: "Thác Bản Giốc, Xã Đàm Thủy, Huyện Trùng Khánh, Cao Bằng",
    significance: "Tôn vinh thác nước tự nhiên lớn thứ 4 thế giới nằm trên đường biên giới quốc gia, biểu tượng vẻ đẹp hùng vĩ của non sông Việt Nam.",
    activities: "Đi bè tre áp sát chân thác tung bọt trắng xóa như dải lụa tiên sa, lễ rước nước thiêng cầu mùa, thưởng thức hạt dẻ Trùng Khánh nướng bùi béo.",
    dress_code_tips: "Áo khoác giữ ấm, giày có đế cao su chống trượt khi đi gần bờ thác ẩm ướt.",
    image_url: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80"
  },

  // ==========================================
  // THÁNG 12
  // ==========================================
  {
    id: 1201,
    province_id: "laocai",
    province_name: "Tỉnh Lào Cai",
    name: "Lễ hội Mùa Đông Sa Pa & Săn Tuyết Fansipan",
    month_lunar: 11,
    month_solar: 12,
    time_details: "Tháng 12 Dương lịch hàng năm",
    location: "Thị xã Sa Pa & Quần thể Đỉnh Fansipan Legend 3.143m, Lào Cai",
    significance: "Trải nghiệm không gian châu Âu mùa đông độc nhất tại xứ nhiệt đới, ngắm băng tuyết phủ trắng nóc nhà Đông Dương.",
    activities: "Chinh phục đỉnh thiêng Fansipan, xem không gian tuyết nhân tạo và tuyết tự nhiên, thưởng thức lẩu cá hồi, thắng cố nóng hổi bên bếp than hồng.",
    dress_code_tips: "Áo phao đại hàn lông vũ, găng tay lót nỉ, bịt tai và ủng đi tuyết vì nhiệt độ có thể hạ xuống -2°C.",
    image_url: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 1202,
    province_id: "camau",
    province_name: "Tỉnh Cà Mau",
    name: "Ngày hội Cua Cà Mau & Khám phá Cột Mốc Đất Mũi",
    month_lunar: 11,
    month_solar: 12,
    time_details: "Tháng 12 Dương lịch",
    location: "Quảng trường TP. Cà Mau & Cột Mốc Tọa độ GPS 0001 Mũi Cà Mau",
    significance: "Tôn vinh đặc sản Cua Cà Mau nức tiếng ngọt chắc nhất nước và hệ sinh thái rừng ngập mặn cực Nam Tổ quốc.",
    activities: "Cuộc thi 'Cua Cà Mau lớn nhất', xác lập kỷ lục 69 món ăn thượng hạng chế biến từ cua biển, đi cano xuyên rừng đước nguyên sinh.",
    dress_code_tips: "Trang phục dã ngoại thoáng mát, mang theo kem chống muỗi khi đi rừng ngập mặn.",
    image_url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 1203,
    province_id: "tphcm",
    province_name: "TP. Hồ Chí Minh",
    name: "Festival Chào Năm Mới & Đại nhạc hội Countdown",
    month_lunar: 11,
    month_solar: 12,
    time_details: "Đêm 31 tháng 12 Dương lịch đón Giao thừa Tết Dương lịch",
    location: "Phố đi bộ Nguyễn Huệ & Bến Bạch Đằng, Quận 1, TP. Hồ Chí Minh (và Hồ Gươm Hà Nội)",
    significance: "Đại tiệc âm thanh ánh sáng rực rỡ tiễn năm cũ, đón chào năm mới với niềm tin thịnh vượng, hạnh phúc cho toàn thể người dân và du khách.",
    activities: "Đếm ngược mừng năm mới cùng các nghệ sĩ hàng đầu, chiêm ngưỡng màn pháo hoa nghệ thuật tầm cao mãn nhãn soi bóng sông Sài Gòn.",
    dress_code_tips: "Trang phục lộng lẫy dự tiệc đêm, mang giày thể thao êm chân vì phố đi bộ cấm xe và đi bộ nhiều giờ.",
    image_url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  }
];

