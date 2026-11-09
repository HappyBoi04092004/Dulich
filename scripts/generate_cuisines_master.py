import sys, os, json
sys.path.insert(0, os.path.abspath('scripts'))
from enhance_all_34_provinces import CLUSTERS_DATA

out_cuisines = []
c_id = 1

PROV_NAMES = {
    'hanoi': 'TP. Hà Nội', 'haiphong': 'TP. Hải Phòng', 'danang': 'TP. Đà Nẵng',
    'tphcm': 'TP. Hồ Chí Minh', 'cantho': 'TP. Cần Thơ', 'hue': 'TP. Huế',
    'angiang': 'Tỉnh An Giang', 'bacninh': 'Tỉnh Bắc Ninh', 'caobang': 'Tỉnh Cao Bằng',
    'camau': 'Tỉnh Cà Mau', 'dienbien': 'Tỉnh Điện Biên', 'daklak': 'Tỉnh Đắk Lắk',
    'dongnai': 'Tỉnh Đồng Nai', 'dongthap': 'Tỉnh Đồng Tháp', 'gialai': 'Tỉnh Gia Lai',
    'hatinh': 'Tỉnh Hà Tĩnh', 'hungyen': 'Tỉnh Hưng Yên', 'khanhhoa': 'Tỉnh Khánh Hòa',
    'laichau': 'Tỉnh Lai Châu', 'langson': 'Tỉnh Lạng Sơn', 'laocai': 'Tỉnh Lào Cai',
    'lamdong': 'Tỉnh Lâm Đồng', 'nghean': 'Tỉnh Nghệ An', 'ninhbinh': 'Tỉnh Ninh Bình',
    'phutho': 'Tỉnh Phú Thọ', 'quangngai': 'Tỉnh Quảng Ngãi', 'quangninh': 'Tỉnh Quảng Ninh',
    'quangtri': 'Tỉnh Quảng Trị', 'sonla': 'Tỉnh Sơn La', 'thainguyen': 'Tỉnh Thái Nguyên',
    'thanhhoa': 'Tỉnh Thanh Hóa', 'tuyenquang': 'Tỉnh Tuyên Quang', 'tayninh': 'Tỉnh Tây Ninh',
    'vinhlong': 'Tỉnh Vĩnh Long'
}

PROV_REGIONS = {
    'hanoi': 'North', 'haiphong': 'North', 'danang': 'Central',
    'tphcm': 'South', 'cantho': 'South', 'hue': 'Central',
    'angiang': 'South', 'bacninh': 'North', 'caobang': 'North',
    'camau': 'South', 'dienbien': 'North', 'daklak': 'Central',
    'dongnai': 'South', 'dongthap': 'South', 'gialai': 'Central',
    'hatinh': 'Central', 'hungyen': 'North', 'khanhhoa': 'Central',
    'laichau': 'North', 'langson': 'North', 'laocai': 'North',
    'lamdong': 'Central', 'nghean': 'Central', 'ninhbinh': 'North',
    'phutho': 'North', 'quangngai': 'Central', 'quangninh': 'North',
    'quangtri': 'Central', 'sonla': 'North', 'thainguyen': 'North',
    'thanhhoa': 'Central', 'tuyenquang': 'North', 'tayninh': 'South',
    'vinhlong': 'South'
}

seen_dishes = set()
for p_id, clusters in CLUSTERS_DATA.items():
    p_name = PROV_NAMES.get(p_id, p_id)
    region = PROV_REGIONS.get(p_id, 'North')
    for cluster in clusters:
        c_name = cluster.get('name', p_name)
        for food_name in cluster.get('foodSpecialties', []):
            key = (p_id, food_name)
            if key in seen_dishes:
                continue
            seen_dishes.add(key)
            is_gift = any(k in food_name.lower() for k in ['bánh', 'nem', 'kẹo', 'chả', 'trà', 'cà phê', 'rượu', 'mật', 'mắm', 'khô', 'tôm khô', 'hạt', 'cốm'])
            spots = [
                {
                    'name': f'Quán {food_name} Gia Truyền',
                    'address': f'Khu phố ẩm thực {c_name}, {p_name}',
                    'rating': 4.9,
                    'price': '35.000đ - 65.000đ'
                },
                {
                    'name': f'Nhà Hàng Đặc Sản {p_name}',
                    'address': f'Đại lộ ẩm thực trung tâm, {p_name}',
                    'rating': 5.0,
                    'price': '60.000đ - 150.000đ'
                }
            ]
            out_cuisines.append({
                'id': c_id,
                'province_id': p_id,
                'province_name': p_name,
                'region': region,
                'name': food_name,
                'dish_type': 'specialty',
                'description': f'Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân {p_name}, thuộc cụm danh thắng {c_name}.',
                'price_range': '35.000đ - 85.000đ',
                'famous_spots': spots,
                'is_gift_suitable': is_gift,
                'image_url': 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80'
            })
            c_id += 1

print(f'Generated {len(out_cuisines)} cuisines across {len(PROV_NAMES)} provinces')
with open('frontend/src/data/vietnamCuisinesMaster.ts', 'w', encoding='utf-8') as f:
    f.write('export interface FamousSpot {\n  name: string;\n  address: string;\n  rating: number;\n  price?: string;\n}\n\n')
    f.write('export interface MasterCuisineItem {\n  id: number;\n  province_id: string;\n  province_name: string;\n  region: string;\n  name: string;\n  dish_type: string;\n  description: string;\n  price_range: string;\n  famous_spots: FamousSpot[];\n  is_gift_suitable: boolean;\n  image_url: string;\n}\n\n')
    f.write('export const VIETNAM_CUISINES_MASTER: MasterCuisineItem[] = ')
    json.dump(out_cuisines, f, ensure_ascii=False, indent=2)
    f.write(';\n')
print('Wrote frontend/src/data/vietnamCuisinesMaster.ts successfully!')

