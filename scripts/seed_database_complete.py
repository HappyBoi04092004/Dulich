# -*- coding: utf-8 -*-
import sys
import os
import re
import json

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'backend')))

from app import app, db
from models import User, Province, TouristDestination, Cuisine, Festival, CostGuideline
from enhance_all_34_provinces import CLUSTERS_DATA

CATEGORY_MAP = {
    'Di sản & Ẩm thực': ('heritage', 'Di tích lịch sử & Ẩm thực'),
    'Lịch sử & Thư giãn': ('scenery', 'Danh lam thắng cảnh & Lịch sử'),
    'Sinh thái & Làng nghề': ('ecotourism', 'Du lịch sinh thái & Làng nghề'),
    'Tâm linh & Cội nguồn': ('temple', 'Chùa chiền & Địa điểm tâm linh'),
    'Nghỉ dưỡng & Sống ảo': ('resort', 'Khu nghỉ dưỡng & Check-in'),
    'Núi rừng & Thác nước': ('mountain', 'Núi, Đồi & Thác nước'),
    'Biển đảo & Vui chơi': ('beach', 'Biển đảo & Khu vui chơi'),
    'Hang động & Khám phá': ('cave', 'Hang động & Khám phá'),
    'Sông nước & Miệt vườn': ('lake_river', 'Hồ, Sông & Miệt vườn'),
    'Ẩm thực & Chợ đêm': ('dining', 'Ẩm thực & Quán ăn đêm'),
    'Vui chơi & Giải trí': ('amusement', 'Khu vui chơi & Giải trí'),
    'Check-in sống ảo': ('checkin', 'Địa điểm check-in')
}

# 12 Months Festivals Master Data
ANNUAL_FESTIVALS = [
    {
        "province_id": "phutho",
        "name": "Giỗ Tổ Hùng Vương - Lễ hội Đền Hùng",
        "month_lunar": 3,
        "month_solar": 4,
        "time_details": "Mùng 10 tháng 3 Âm lịch (Chính hội)",
        "location": "Khu Di tích Quốc gia Đặc biệt Đền Hùng, TP. Việt Trì",
        "significance": "Quốc giỗ thiêng liêng tưởng nhớ công đức dựng nước của 18 đời Vua Hùng, cội nguồn non sông gấm vóc Việt Nam.",
        "activities": "Lễ dâng hương tưởng niệm trên đỉnh Nghĩa Lĩnh, rước kiệu truyền thống các làng ven Đền Hùng, thi gói nấu bánh chưng giã bánh giầy, hát Xoan Phú Thọ di sản UNESCO.",
        "dress_code_tips": "Trang phục trang nghiêm, kín đáo, đi giày thể thao có độ bám tốt để leo gần 500 bậc đá lên Đền Thượng.",
        "image_url": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80"
    },
    {
        "province_id": "hanoi",
        "name": "Lễ hội Chùa Hương (Hương Sơn)",
        "month_lunar": 1,
        "month_solar": 2,
        "time_details": "Mùng 6 tháng Giêng kéo dài đến hết tháng 3 Âm lịch",
        "location": "Quần thể Thắng cảnh Hương Sơn, Mỹ Đức, Hà Nội",
        "significance": "Lễ hội hành hương Phật giáo dài nhất Việt Nam, cầu quốc thái dân an và phúc lành đầu xuân.",
        "activities": "Chèo thuyền vãn cảnh dòng suối Yến thơ mộng rợp hoa súng, leo núi vào Động Hương Tích 'Nam thiên đệ nhất động', lễ bái Chùa Thiên Trù.",
        "dress_code_tips": "Áo dài lam hoặc đồ lịch sự, mang áo khoác nhẹ phòng gió lạnh trên suối, chuẩn bị tiền lẻ làm lễ.",
        "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
    },
    {
        "province_id": "quangninh",
        "name": "Lễ hội Yên Tử (Cội nguồn Thiền phái Trúc Lâm)",
        "month_lunar": 1,
        "month_solar": 2,
        "time_details": "Mùng 10 tháng Giêng đến hết tháng 3 Âm lịch",
        "location": "Khu di tích Núi Yên Tử, TP. Uông Bí, Quảng Ninh",
        "significance": "Hành hương về kinh đô Phật giáo Trúc Lâm do Phật hoàng Trần Nhân Tông sáng lập, tôn vinh tinh thần nhập thế hòa quang đồng trần.",
        "activities": "Leo núi vượt đường tùng cổ thụ hoặc cáp treo lên Chùa Đồng ở độ cao 1.068m ngắm mây ngàn, dâng hương tháp Tổ Huệ Quang, thỉnh chuông cầu an.",
        "dress_code_tips": "Giày leo núi chuyên dụng, gậy chống, trang phục nhã nhặn tôn nghiêm nơi chốn thiền môn.",
        "image_url": "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80"
    },
    {
        "province_id": "ninhbinh",
        "name": "Lễ hội Cố đô Hoa Lư (Lễ hội Trường Yên)",
        "month_lunar": 3,
        "month_solar": 4,
        "time_details": "Mùng 8 - 10 tháng 3 Âm lịch",
        "location": "Khu di tích Cố đô Hoa Lư, Xã Trường Yên, Hoa Lư",
        "significance": "Kỷ niệm ngày Vua Đinh Tiên Hoàng dẹp loạn 12 sứ quân lên ngôi Hoàng đế dựng nước Đại Cồ Việt.",
        "activities": "Lễ rước nước từ sông Hoàng Long, rước kiệu, cờ lau tập trận, đua thuyền rồng trên sông Sào Khê, đấu vật truyền thống.",
        "dress_code_tips": "Trang phục lịch sự, mang nón lá hoặc mũ che nắng khi xem rước kiệu ngoài trời.",
        "image_url": "https://images.unsplash.com/photo-1579489225078-27977a77bf72?auto=format&fit=crop&w=800&q=80"
    },
    {
        "province_id": "danang",
        "name": "Lễ hội Pháo hoa Quốc tế Đà Nẵng (DIFF)",
        "month_lunar": 5,
        "month_solar": 6,
        "time_details": "Tháng 6 - Tháng 7 Dương lịch hàng năm",
        "location": "Bờ Đông & Bờ Tây Sông Hàn, TP. Đà Nẵng",
        "significance": "Sự kiện văn hóa giải trí đẳng cấp thế giới quy tụ các đội thi pháo hoa hàng đầu từ Anh, Pháp, Ý, Mỹ, Úc, Nhật Bản.",
        "activities": "Thưởng thức các màn pháo hoa nghệ thuật rực sáng sông Hàn theo nền nhạc giao hưởng, đại nhạc hội âm nhạc ven biển, carnival đường phố.",
        "dress_code_tips": "Trang phục năng động thoải mái, đặt vé khán đài hoặc chỗ ngồi trên du thuyền sông Hàn từ sớm.",
        "image_url": "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=800&q=80"
    },
    {
        "province_id": "hue",
        "name": "Festival Huế - Tinh hoa Cố đô",
        "month_lunar": 4,
        "month_solar": 5,
        "time_details": "Tháng 4 - Tháng 6 Dương lịch (Định kỳ 2 năm hoặc Festival 4 mùa)",
        "location": "Đại Nội Huế, Sông Hương, Cung An Định",
        "significance": "Tôn vinh di sản cung đình và văn hóa truyền thống Cố đô Huế, hội tụ nghệ thuật thế giới.",
        "activities": "Lễ hội Áo dài rực rỡ, Đêm Hoàng Cung huyền ảo, biểu diễn Nhã nhạc Cung đình Huế di sản kiệt tác nhân loại, lễ tế Giao linh thiêng.",
        "dress_code_tips": "Nên mặc áo dài truyền thống hoặc đồ thanh lịch để chụp ảnh check-in tuyệt đẹp tại Hoàng thành.",
        "image_url": "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80"
    },
    {
        "province_id": "lamdong",
        "name": "Festival Hoa Đà Lạt",
        "month_lunar": 11,
        "month_solar": 12,
        "time_details": "Tháng 12 Dương lịch (Định kỳ 2 năm một lần)",
        "location": "Quảng trường Lâm Viên, Hồ Xuân Hương & Làng hoa Vạn Thành",
        "significance": "Tôn vinh nghề trồng hoa truyền thống, người làm hoa và quảng bá thương hiệu Du lịch Thành phố ngàn hoa.",
        "activities": "Đại lộ hoa tươi rực rỡ quanh Hồ Xuân Hương, lễ hội rượu vang - trà bơ thơm lừng, chương trình khinh khí cầu ngắm toàn cảnh thung lũng sương mù.",
        "dress_code_tips": "Chuẩn bị áo khoác len, khăn choàng thời trang vì nhiệt độ Đà Lạt tháng 12 xuống khoảng 14 - 17°C về đêm.",
        "image_url": "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?auto=format&fit=crop&w=800&q=80"
    },
    {
        "province_id": "angiang",
        "name": "Lễ hội Vía Bà Chúa Xứ Núi Sam (Châu Đốc)",
        "month_lunar": 4,
        "month_solar": 5,
        "time_details": "Từ ngày 22 đến 27 tháng 4 Âm lịch",
        "location": "Miếu Bà Chúa Xứ Núi Sam, TP. Châu Đốc, Tỉnh An Giang",
        "significance": "Lễ hội tâm linh lớn nhất vùng Đồng bằng Sông Cửu Long, Di sản Văn hóa Phi vật thể Quốc gia.",
        "activities": "Lễ tắm Bà lúc nửa đêm trang trọng, rước tượng Bà từ đỉnh núi Sam xuống miếu, dâng hương cầu tài lộc sức khỏe làm ăn phát đạt.",
        "dress_code_tips": "Trang phục lịch sự, cẩn thận bảo quản tư trang trong dòng người hành hương đông đúc.",
        "image_url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    },
    {
        "province_id": "cantho",
        "name": "Lễ hội Bánh Dân gian Nam Bộ & Chợ Nổi Cái Răng",
        "month_lunar": 3,
        "month_solar": 4,
        "time_details": "Dịp Giỗ Tổ Hùng Vương tháng 4 Dương lịch",
        "location": "Quảng trường Quận Bình Thủy & Bến Ninh Kiều, Cần Thơ",
        "significance": "Bảo tồn và phát huy tinh hoa hơn 100 loại bánh dân gian truyền thống của người miền Tây chân chất hào sảng.",
        "activities": "Trực tiếp xem nghệ nhân đổ bánh xèo khổng lồ, làm bánh tét lá cẩm, bánh tằm bì; đi thuyền sớm ngắm bình minh trên chợ nổi Cái Răng.",
        "dress_code_tips": "Áo bà ba hoặc đồ mát mẻ, mang mũ nón che nắng khi đi xuồng ghe trên sông Cần Thơ.",
        "image_url": "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80"
    },
    {
        "province_id": "tayninh",
        "name": "Đại lễ Hội Yến Diêu Trì Cung (Toà Thánh Tây Ninh)",
        "month_lunar": 8,
        "month_solar": 9,
        "time_details": "Rằm tháng Tám Âm lịch (Đêm Trung thu)",
        "location": "Tòa Thánh Tây Ninh, Thị xã Hòa Thành, Tây Ninh",
        "significance": "Đại lễ tôn giáo lớn nhất của Đạo Cao Đài đón hàng trăm ngàn tín đồ và du khách thập phương.",
        "activities": "Xem diễu hành rồng nhang múa lượn rực rỡ, ngắm hàng trăm gian trưng bày quả phẩm chay tinh xảo, thưởng thức cơm chay miễn phí thanh tịnh.",
        "dress_code_tips": "Nên mặc đồ trắng hoặc trang phục màu sáng trang nhã, bỏ giày dép bên ngoài trước khi bước vào Tòa Thánh.",
        "image_url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    },
    {
        "province_id": "camau",
        "name": "Ngày hội Cua Cà Mau & Khám phá Đất Mũi",
        "month_lunar": 11,
        "month_solar": 12,
        "time_details": "Tháng 12 Dương lịch",
        "location": "Quảng trường TP. Cà Mau & Cột Mốc Tọa độ GPS 0001 Đất Mũi",
        "significance": "Tôn vinh đặc sản Cua Cà Mau ngon nhất cả nước và vẻ đẹp hoang sơ của cánh rừng đước ngập mặn cực Nam Tổ quốc.",
        "activities": "Cuộc thi 'Cua Cà Mau lớn nhất', xác lập kỷ lục ẩm thực 69 món chế biến từ cua, đi cano xuyên rừng đước nguyên sinh Vườn Quốc gia Mũi Cà Mau.",
        "dress_code_tips": "Trang phục dã ngoại thoải mái, mang theo áo gió và thuốc xịt côn trùng khi vào rừng ngập mặn.",
        "image_url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    },
    {
        "province_id": "laocai",
        "name": "Lễ hội Mùa Đông Sa Pa & Chợ Tình Tây Bắc",
        "month_lunar": 11,
        "month_solar": 12,
        "time_details": "Tháng 11 - Tháng 12 Dương lịch",
        "location": "Thị xã Sa Pa & Quần thể Fansipan Legend, Tỉnh Lào Cai",
        "significance": "Tận hưởng không gian lãng mạn mùa tuyết rơi kỳ diệu trên 'Nóc nhà Đông Dương' và nét văn hóa giao duyên của người H'Mông, Dao đỏ.",
        "activities": "Săn tuyết trắng trên đỉnh Fansipan 3.143m, thưởng thức thắng cố rượu ngô bên bếp lửa hồng, xem múa khèn tại sân quần Nhà thờ Đá.",
        "dress_code_tips": "Áo phao đại hàn lông vũ, găng tay giữ ấm, khăn quàng cổ vì nhiệt độ có thể xuống dưới 0°C.",
        "image_url": "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80"
    }
]

def load_provinces_from_ts():
    ts_file = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'frontend', 'src', 'data', 'vietnamData.ts'))
    with open(ts_file, 'r', encoding='utf-8') as f:
        text = f.read()

    pattern = re.compile(
        r"\{\s*id:\s*'([^']+)',\s*name:\s*'([^']+)',\s*province:\s*'([^']+)',\s*provinceType:\s*'([^']+)',\s*mergedFrom:\s*'([^']*)',\s*region:\s*'([^']+)',\s*regionName:\s*'([^']+)',\s*lat:\s*([0-9.]+),\s*lng:\s*([0-9.]+),\s*image:\s*'([^']*)',\s*description:\s*'([^']*)'",
        re.MULTILINE
    )
    matches = pattern.findall(text)
    provinces = []
    for m in matches:
        provinces.append({
            'id': m[0],
            'name': m[1],
            'province': m[2],
            'provinceType': m[3],
            'mergedFrom': m[4],
            'region': m[5],
            'regionName': m[6],
            'lat': float(m[7]),
            'lng': float(m[8]),
            'image': m[9],
            'description': m[10]
        })
    return provinces

def seed_complete_database():
    with app.app_context():
        print("Ensuring tables in database...")
        db.create_all()

        provinces_data = load_provinces_from_ts()
        print(f"Loaded {len(provinces_data)} consolidated provinces from vietnamData.ts!")

        print("\n--- 1. SEEDING 34 PROVINCES & COST GUIDELINES ---")
        for p in provinces_data:
            p_id = p['id']
            province = db.session.get(Province, p_id)
            if not province:
                province = Province(id=p_id)
                db.session.add(province)

            province.code = p_id.upper()
            province.name = p['name']
            province.region = p['region']
            province.region_name = p['regionName']
            province.province_type = p['provinceType']
            province.merged_from = p['mergedFrom']
            province.lat = p['lat']
            province.lng = p['lng']
            province.image_url = p['image']
            province.description = p['description']
            province.geography = f"Tọa lạc tại vùng {p['regionName']} (Tọa độ {p['lat']}°N, {p['lng']}°E). Vị trí giao thương chiến lược và địa hình phong phú."
            province.climate = f"Khí hậu nhiệt đới gió mùa vùng {p['regionName']}, phân hóa theo mùa rõ rệt, thích hợp du lịch quanh năm."
            province.best_season = "Tháng 9 - Tháng 4 (Mùa mát mẻ & lễ hội)" if p['region'] == 'North' else "Tháng 1 - Tháng 8 (Mùa khô & biển đẹp)"
            province.featured = p['provinceType'] == 'city' or p_id in ['laocai', 'quangninh', 'ninhbinh', 'lamdong', 'danang', 'khanhhoa', 'angiang']

            # Cost guidelines
            is_big_city = p['provinceType'] == 'city' or p_id in ['danang', 'lamdong', 'khanhhoa']
            cost_g = CostGuideline.query.filter_by(province_id=p_id).first()
            if not cost_g:
                cost_g = CostGuideline(province_id=p_id)
                db.session.add(cost_g)

            cost_g.daily_budget_economy = 650000 if is_big_city else 450000
            cost_g.daily_budget_standard = 1500000 if is_big_city else 1000000
            cost_g.daily_budget_luxury = 3800000 if is_big_city else 2500000
            cost_g.hotel_avg_economy = 350000 if is_big_city else 280000
            cost_g.hotel_avg_standard = 950000 if is_big_city else 700000
            cost_g.hotel_avg_luxury = 3000000 if is_big_city else 1800000
            cost_g.meal_avg_per_day = 320000 if is_big_city else 220000
            cost_g.transport_local_avg = 160000 if is_big_city else 120000

        db.session.commit()
        print(f"Successfully seeded all {len(provinces_data)} provinces with full metadata & budget guidelines!")

        print("\n--- 2. SEEDING TOURIST DESTINATIONS & CLUSTERS ---")
        dest_count = 0
        cuisine_count = 0
        for p_id, clusters in CLUSTERS_DATA.items():
            province = db.session.get(Province, p_id)
            if not province:
                continue

            for cluster in clusters:
                c_id = cluster['id']
                cat_raw = cluster.get('category', 'Di sản & Ẩm thực')
                cat_slug, cat_name = CATEGORY_MAP.get(cat_raw, ('scenery', 'Danh lam thắng cảnh'))

                dest = db.session.get(TouristDestination, c_id)
                if not dest:
                    dest = TouristDestination(id=c_id)
                    db.session.add(dest)

                dest.province_id = p_id
                dest.name = cluster['name']
                dest.category = cat_slug
                dest.category_name = cat_name
                dest.lat = float(cluster.get('lat', province.lat))
                dest.lng = float(cluster.get('lng', province.lng))
                dest.address = f"{cluster['name']}, {province.name}"
                dest.image_url = province.image_url
                dest.description = cluster.get('description', '')
                sub_locs = cluster.get('subLocations', [])
                dest.history_details = f"Tụ điểm du lịch tiêu biểu tại {province.name}, bao gồm các danh thắng: {', '.join(sub_locs)}." if sub_locs else f"Điểm đến hấp dẫn tại {province.name}."
                acts = cluster.get('activities', [])
                dest.highlights = "\n".join([f"🎯 {a}" for a in acts]) if acts else "Khám phá phong cảnh và văn hóa bản địa."
                dest.opening_hours = "06:30 - 21:00 (Mở cửa tất cả các ngày trong tuần)"
                dest.ticket_price = "80.000đ - 250.000đ / người" if cat_slug in ['amusement', 'resort'] else ("Miễn phí" if cat_slug in ['temple', 'scenery'] else "30.000đ - 100.000đ")
                dest.estimated_duration = "3 - 4 giờ"
                dest.suitable_for = "Gia đình, Cặp đôi, Khách lẻ và Đoàn tham quan"
                dest.rating = 4.9
                dest.review_count = 1850
                dest_count += 1

                # Seed Cuisines
                foods = cluster.get('foodSpecialties', [])
                for food_name in foods:
                    c_exists = Cuisine.query.filter_by(province_id=p_id, name=food_name).first()
                    if not c_exists:
                        spots = [
                            {"name": f"Quán {food_name} Nổi Tiếng", "address": f"Khu phố ẩm thực trung tâm, {province.name}", "rating": 4.9, "price": "35.000đ - 65.000đ"},
                            {"name": f"Nhà Hàng Đặc Sản {province.name}", "address": f"Đại lộ trung tâm, {province.name}", "rating": 5.0, "price": "60.000đ - 150.000đ"}
                        ]
                        new_c = Cuisine(
                            province_id=p_id,
                            name=food_name,
                            dish_type='specialty',
                            description=f"Món ăn đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân {province.name}.",
                            price_range="35.000đ - 85.000đ",
                            famous_spots=json.dumps(spots, ensure_ascii=False),
                            is_gift_suitable=any(k in food_name.lower() for k in ['bánh', 'nem', 'kẹo', 'chả', 'trà', 'cà phê', 'rượu', 'mật', 'mắm', 'khô']),
                            image_url=province.image_url
                        )
                        db.session.add(new_c)
                        cuisine_count += 1

        db.session.commit()
        print(f"Successfully seeded {dest_count} tourist clusters and {cuisine_count} authentic local dishes!")

        print("\n--- 3. SEEDING 12 MONTHS ICONIC FESTIVALS ---")
        fest_count = 0
        for fest in ANNUAL_FESTIVALS:
            f_name = fest['name']
            existing_f = Festival.query.filter_by(name=f_name).first()
            if not existing_f:
                new_f = Festival(
                    province_id=fest['province_id'],
                    name=fest['name'],
                    month_lunar=fest['month_lunar'],
                    month_solar=fest['month_solar'],
                    time_details=fest['time_details'],
                    location=fest['location'],
                    significance=fest['significance'],
                    activities=fest['activities'],
                    dress_code_tips=fest['dress_code_tips'],
                    image_url=fest['image_url']
                )
                db.session.add(new_f)
                fest_count += 1
        db.session.commit()
        print(f"Successfully verified/seeded {fest_count} iconic traditional festivals across 12 months!")

        print("\n--- 4. ENSURING ADMIN USER ACCOUNT ---")
        admin_email = "admin@dulich.vn"
        admin_user = User.query.filter_by(email=admin_email).first()
        if not admin_user:
            admin_user = User(
                email=admin_email,
                username="Admin Dulich",
                role="admin",
                is_verified=True,
                profile_picture="/logo.jpg"
            )
            admin_user.set_password("AdminPassword@2026!")
            db.session.add(admin_user)
            print(f"Created Admin account: {admin_email} (Password: AdminPassword@2026!)")
        else:
            admin_user.role = "admin"
            admin_user.set_password("AdminPassword@2026!")
            print(f"Updated Admin account: {admin_email} to role 'admin'")

        db.session.commit()
        print("\n🎉 COMPLETE TOURISM DATABASE SEEDING FINISHED 100% SUCCESSFULLY!")

if __name__ == '__main__':
    seed_complete_database()
