export interface FamousSpot {
  name: string;
  address: string;
  rating: number;
  price?: string;
}

export interface MasterCuisineItem {
  id: number;
  province_id: string;
  province_name: string;
  region: string;
  name: string;
  dish_type: string;
  description: string;
  price_range: string;
  famous_spots: FamousSpot[];
  is_gift_suitable: boolean;
  image_url: string;
}

export const VIETNAM_CUISINES_MASTER: MasterCuisineItem[] = [
  {
    "id": 1,
    "province_id": "hanoi",
    "province_name": "TP. Hà Nội",
    "region": "North",
    "name": "Phở bò Bát Đàn",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Hà Nội, thuộc cụm danh thắng Quần thể Hồ Gươm & 36 Phố Phường.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Phở bò Bát Đàn Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Hồ Gươm & 36 Phố Phường, TP. Hà Nội",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Hà Nội",
        "address": "Đại lộ ẩm thực trung tâm, TP. Hà Nội",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 2,
    "province_id": "hanoi",
    "province_name": "TP. Hà Nội",
    "region": "North",
    "name": "Bún chả Hàng Mành",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Hà Nội, thuộc cụm danh thắng Quần thể Hồ Gươm & 36 Phố Phường.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bún chả Hàng Mành Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Hồ Gươm & 36 Phố Phường, TP. Hà Nội",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Hà Nội",
        "address": "Đại lộ ẩm thực trung tâm, TP. Hà Nội",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 3,
    "province_id": "hanoi",
    "province_name": "TP. Hà Nội",
    "region": "North",
    "name": "Chả cá Lã Vọng",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Hà Nội, thuộc cụm danh thắng Quần thể Hồ Gươm & 36 Phố Phường.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Chả cá Lã Vọng Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Hồ Gươm & 36 Phố Phường, TP. Hà Nội",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Hà Nội",
        "address": "Đại lộ ẩm thực trung tâm, TP. Hà Nội",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 4,
    "province_id": "hanoi",
    "province_name": "TP. Hà Nội",
    "region": "North",
    "name": "Cà phê trứng Giảng",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Hà Nội, thuộc cụm danh thắng Quần thể Hồ Gươm & 36 Phố Phường.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cà phê trứng Giảng Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Hồ Gươm & 36 Phố Phường, TP. Hà Nội",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Hà Nội",
        "address": "Đại lộ ẩm thực trung tâm, TP. Hà Nội",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 5,
    "province_id": "hanoi",
    "province_name": "TP. Hà Nội",
    "region": "North",
    "name": "Bánh cuốn Thanh Trì",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Hà Nội, thuộc cụm danh thắng Quần thể Hồ Gươm & 36 Phố Phường.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh cuốn Thanh Trì Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Hồ Gươm & 36 Phố Phường, TP. Hà Nội",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Hà Nội",
        "address": "Đại lộ ẩm thực trung tâm, TP. Hà Nội",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 6,
    "province_id": "hanoi",
    "province_name": "TP. Hà Nội",
    "region": "North",
    "name": "Bánh tôm Hồ Tây",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Hà Nội, thuộc cụm danh thắng Quần thể Ba Đình - Tây Hồ & Văn Miếu.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh tôm Hồ Tây Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Ba Đình - Tây Hồ & Văn Miếu, TP. Hà Nội",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Hà Nội",
        "address": "Đại lộ ẩm thực trung tâm, TP. Hà Nội",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 7,
    "province_id": "hanoi",
    "province_name": "TP. Hà Nội",
    "region": "North",
    "name": "Bún ốc nguội Tây Hồ",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Hà Nội, thuộc cụm danh thắng Quần thể Ba Đình - Tây Hồ & Văn Miếu.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bún ốc nguội Tây Hồ Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Ba Đình - Tây Hồ & Văn Miếu, TP. Hà Nội",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Hà Nội",
        "address": "Đại lộ ẩm thực trung tâm, TP. Hà Nội",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 8,
    "province_id": "hanoi",
    "province_name": "TP. Hà Nội",
    "region": "North",
    "name": "Cốm xanh Làng Vòng",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Hà Nội, thuộc cụm danh thắng Quần thể Ba Đình - Tây Hồ & Văn Miếu.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cốm xanh Làng Vòng Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Ba Đình - Tây Hồ & Văn Miếu, TP. Hà Nội",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Hà Nội",
        "address": "Đại lộ ẩm thực trung tâm, TP. Hà Nội",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 9,
    "province_id": "hanoi",
    "province_name": "TP. Hà Nội",
    "region": "North",
    "name": "Trà sen Tây Hồ",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Hà Nội, thuộc cụm danh thắng Quần thể Ba Đình - Tây Hồ & Văn Miếu.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Trà sen Tây Hồ Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Ba Đình - Tây Hồ & Văn Miếu, TP. Hà Nội",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Hà Nội",
        "address": "Đại lộ ẩm thực trung tâm, TP. Hà Nội",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 10,
    "province_id": "hanoi",
    "province_name": "TP. Hà Nội",
    "region": "North",
    "name": "Rau sắng Chùa Hương",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Hà Nội, thuộc cụm danh thắng Quần thể Di tích Chùa Hương (Mỹ Đức).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Rau sắng Chùa Hương Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Di tích Chùa Hương (Mỹ Đức), TP. Hà Nội",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Hà Nội",
        "address": "Đại lộ ẩm thực trung tâm, TP. Hà Nội",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 11,
    "province_id": "hanoi",
    "province_name": "TP. Hà Nội",
    "region": "North",
    "name": "Chè củ mài",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Hà Nội, thuộc cụm danh thắng Quần thể Di tích Chùa Hương (Mỹ Đức).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Chè củ mài Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Di tích Chùa Hương (Mỹ Đức), TP. Hà Nội",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Hà Nội",
        "address": "Đại lộ ẩm thực trung tâm, TP. Hà Nội",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 12,
    "province_id": "hanoi",
    "province_name": "TP. Hà Nội",
    "region": "North",
    "name": "Mơ Hương Tích",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Hà Nội, thuộc cụm danh thắng Quần thể Di tích Chùa Hương (Mỹ Đức).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Mơ Hương Tích Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Di tích Chùa Hương (Mỹ Đức), TP. Hà Nội",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Hà Nội",
        "address": "Đại lộ ẩm thực trung tâm, TP. Hà Nội",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 13,
    "province_id": "hanoi",
    "province_name": "TP. Hà Nội",
    "region": "North",
    "name": "Thịt dê núi Mỹ Đức",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Hà Nội, thuộc cụm danh thắng Quần thể Di tích Chùa Hương (Mỹ Đức).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Thịt dê núi Mỹ Đức Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Di tích Chùa Hương (Mỹ Đức), TP. Hà Nội",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Hà Nội",
        "address": "Đại lộ ẩm thực trung tâm, TP. Hà Nội",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 14,
    "province_id": "hcm",
    "province_name": "hcm",
    "region": "North",
    "name": "Cơm tấm sườn bì chả Ba Ghiền",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân hcm, thuộc cụm danh thắng Trung tâm Bến Nghé & Bến Bạch Đằng.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cơm tấm sườn bì chả Ba Ghiền Gia Truyền",
        "address": "Khu phố ẩm thực Trung tâm Bến Nghé & Bến Bạch Đằng, hcm",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản hcm",
        "address": "Đại lộ ẩm thực trung tâm, hcm",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 15,
    "province_id": "hcm",
    "province_name": "hcm",
    "region": "North",
    "name": "Bánh mì Huỳnh Hoa",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân hcm, thuộc cụm danh thắng Trung tâm Bến Nghé & Bến Bạch Đằng.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh mì Huỳnh Hoa Gia Truyền",
        "address": "Khu phố ẩm thực Trung tâm Bến Nghé & Bến Bạch Đằng, hcm",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản hcm",
        "address": "Đại lộ ẩm thực trung tâm, hcm",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 16,
    "province_id": "hcm",
    "province_name": "hcm",
    "region": "North",
    "name": "Hủ tiếu Nam Vang",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân hcm, thuộc cụm danh thắng Trung tâm Bến Nghé & Bến Bạch Đằng.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Hủ tiếu Nam Vang Gia Truyền",
        "address": "Khu phố ẩm thực Trung tâm Bến Nghé & Bến Bạch Đằng, hcm",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản hcm",
        "address": "Đại lộ ẩm thực trung tâm, hcm",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 17,
    "province_id": "hcm",
    "province_name": "hcm",
    "region": "North",
    "name": "Phá lấu bò",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân hcm, thuộc cụm danh thắng Trung tâm Bến Nghé & Bến Bạch Đằng.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Phá lấu bò Gia Truyền",
        "address": "Khu phố ẩm thực Trung tâm Bến Nghé & Bến Bạch Đằng, hcm",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản hcm",
        "address": "Đại lộ ẩm thực trung tâm, hcm",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 18,
    "province_id": "hcm",
    "province_name": "hcm",
    "region": "North",
    "name": "Bánh khọt Vũng Tàu",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân hcm, thuộc cụm danh thắng Thành phố Biển Vũng Tàu.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh khọt Vũng Tàu Gia Truyền",
        "address": "Khu phố ẩm thực Thành phố Biển Vũng Tàu, hcm",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản hcm",
        "address": "Đại lộ ẩm thực trung tâm, hcm",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 19,
    "province_id": "hcm",
    "province_name": "hcm",
    "region": "North",
    "name": "Lẩu cá đuối măng chua",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân hcm, thuộc cụm danh thắng Thành phố Biển Vũng Tàu.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Lẩu cá đuối măng chua Gia Truyền",
        "address": "Khu phố ẩm thực Thành phố Biển Vũng Tàu, hcm",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản hcm",
        "address": "Đại lộ ẩm thực trung tâm, hcm",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 20,
    "province_id": "hcm",
    "province_name": "hcm",
    "region": "North",
    "name": "Bông lan trứng muối Gốc Cột Điện",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân hcm, thuộc cụm danh thắng Thành phố Biển Vũng Tàu.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bông lan trứng muối Gốc Cột Điện Gia Truyền",
        "address": "Khu phố ẩm thực Thành phố Biển Vũng Tàu, hcm",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản hcm",
        "address": "Đại lộ ẩm thực trung tâm, hcm",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 21,
    "province_id": "hcm",
    "province_name": "hcm",
    "region": "North",
    "name": "Gỏi cá mai",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân hcm, thuộc cụm danh thắng Thành phố Biển Vũng Tàu.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Gỏi cá mai Gia Truyền",
        "address": "Khu phố ẩm thực Thành phố Biển Vũng Tàu, hcm",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản hcm",
        "address": "Đại lộ ẩm thực trung tâm, hcm",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 22,
    "province_id": "hcm",
    "province_name": "hcm",
    "region": "North",
    "name": "Dimsum & Vịt quay",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân hcm, thuộc cụm danh thắng Chợ Lớn (Quận 5) & Khu ẩm thực Hoa.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Dimsum & Vịt quay Gia Truyền",
        "address": "Khu phố ẩm thực Chợ Lớn (Quận 5) & Khu ẩm thực Hoa, hcm",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản hcm",
        "address": "Đại lộ ẩm thực trung tâm, hcm",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 23,
    "province_id": "hcm",
    "province_name": "hcm",
    "region": "North",
    "name": "Sủi cảo Hà Tôn Quyền",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân hcm, thuộc cụm danh thắng Chợ Lớn (Quận 5) & Khu ẩm thực Hoa.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Sủi cảo Hà Tôn Quyền Gia Truyền",
        "address": "Khu phố ẩm thực Chợ Lớn (Quận 5) & Khu ẩm thực Hoa, hcm",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản hcm",
        "address": "Đại lộ ẩm thực trung tâm, hcm",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 24,
    "province_id": "hcm",
    "province_name": "hcm",
    "region": "North",
    "name": "Mì vịt tiềm",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân hcm, thuộc cụm danh thắng Chợ Lớn (Quận 5) & Khu ẩm thực Hoa.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Mì vịt tiềm Gia Truyền",
        "address": "Khu phố ẩm thực Chợ Lớn (Quận 5) & Khu ẩm thực Hoa, hcm",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản hcm",
        "address": "Đại lộ ẩm thực trung tâm, hcm",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 25,
    "province_id": "hcm",
    "province_name": "hcm",
    "region": "North",
    "name": "Chè người Hoa",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân hcm, thuộc cụm danh thắng Chợ Lớn (Quận 5) & Khu ẩm thực Hoa.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Chè người Hoa Gia Truyền",
        "address": "Khu phố ẩm thực Chợ Lớn (Quận 5) & Khu ẩm thực Hoa, hcm",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản hcm",
        "address": "Đại lộ ẩm thực trung tâm, hcm",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 26,
    "province_id": "danang",
    "province_name": "TP. Đà Nẵng",
    "region": "Central",
    "name": "Buffet đỉnh Bà Nà",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Đà Nẵng, thuộc cụm danh thắng Quần thể Bà Nà Hills & Cầu Vàng.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Buffet đỉnh Bà Nà Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Bà Nà Hills & Cầu Vàng, TP. Đà Nẵng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Đà Nẵng",
        "address": "Đại lộ ẩm thực trung tâm, TP. Đà Nẵng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 27,
    "province_id": "danang",
    "province_name": "TP. Đà Nẵng",
    "region": "Central",
    "name": "Xúc xích Đức nướng than",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Đà Nẵng, thuộc cụm danh thắng Quần thể Bà Nà Hills & Cầu Vàng.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Xúc xích Đức nướng than Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Bà Nà Hills & Cầu Vàng, TP. Đà Nẵng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Đà Nẵng",
        "address": "Đại lộ ẩm thực trung tâm, TP. Đà Nẵng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 28,
    "province_id": "danang",
    "province_name": "TP. Đà Nẵng",
    "region": "Central",
    "name": "Bia thủ công Bà Nà",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Đà Nẵng, thuộc cụm danh thắng Quần thể Bà Nà Hills & Cầu Vàng.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bia thủ công Bà Nà Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Bà Nà Hills & Cầu Vàng, TP. Đà Nẵng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Đà Nẵng",
        "address": "Đại lộ ẩm thực trung tâm, TP. Đà Nẵng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 29,
    "province_id": "danang",
    "province_name": "TP. Đà Nẵng",
    "region": "Central",
    "name": "Cao lầu Hội An",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Đà Nẵng, thuộc cụm danh thắng Đô thị cổ Hội An (Quảng Nam).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cao lầu Hội An Gia Truyền",
        "address": "Khu phố ẩm thực Đô thị cổ Hội An (Quảng Nam), TP. Đà Nẵng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Đà Nẵng",
        "address": "Đại lộ ẩm thực trung tâm, TP. Đà Nẵng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 30,
    "province_id": "danang",
    "province_name": "TP. Đà Nẵng",
    "region": "Central",
    "name": "Mì Quảng ếch Bếp Trang",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Đà Nẵng, thuộc cụm danh thắng Đô thị cổ Hội An (Quảng Nam).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Mì Quảng ếch Bếp Trang Gia Truyền",
        "address": "Khu phố ẩm thực Đô thị cổ Hội An (Quảng Nam), TP. Đà Nẵng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Đà Nẵng",
        "address": "Đại lộ ẩm thực trung tâm, TP. Đà Nẵng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 31,
    "province_id": "danang",
    "province_name": "TP. Đà Nẵng",
    "region": "Central",
    "name": "Cơm gà Bà Buội",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Đà Nẵng, thuộc cụm danh thắng Đô thị cổ Hội An (Quảng Nam).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cơm gà Bà Buội Gia Truyền",
        "address": "Khu phố ẩm thực Đô thị cổ Hội An (Quảng Nam), TP. Đà Nẵng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Đà Nẵng",
        "address": "Đại lộ ẩm thực trung tâm, TP. Đà Nẵng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 32,
    "province_id": "danang",
    "province_name": "TP. Đà Nẵng",
    "region": "Central",
    "name": "Bánh mì Phượng",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Đà Nẵng, thuộc cụm danh thắng Đô thị cổ Hội An (Quảng Nam).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh mì Phượng Gia Truyền",
        "address": "Khu phố ẩm thực Đô thị cổ Hội An (Quảng Nam), TP. Đà Nẵng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Đà Nẵng",
        "address": "Đại lộ ẩm thực trung tâm, TP. Đà Nẵng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 33,
    "province_id": "danang",
    "province_name": "TP. Đà Nẵng",
    "region": "Central",
    "name": "Nước thảo mộc Mót",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Đà Nẵng, thuộc cụm danh thắng Đô thị cổ Hội An (Quảng Nam).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Nước thảo mộc Mót Gia Truyền",
        "address": "Khu phố ẩm thực Đô thị cổ Hội An (Quảng Nam), TP. Đà Nẵng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Đà Nẵng",
        "address": "Đại lộ ẩm thực trung tâm, TP. Đà Nẵng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 34,
    "province_id": "danang",
    "province_name": "TP. Đà Nẵng",
    "region": "Central",
    "name": "Bánh tráng cuốn thịt heo hai đầu da",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Đà Nẵng, thuộc cụm danh thắng Bán đảo Sơn Trà & Bãi biển Mỹ Khê.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh tráng cuốn thịt heo hai đầu da Gia Truyền",
        "address": "Khu phố ẩm thực Bán đảo Sơn Trà & Bãi biển Mỹ Khê, TP. Đà Nẵng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Đà Nẵng",
        "address": "Đại lộ ẩm thực trung tâm, TP. Đà Nẵng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 35,
    "province_id": "danang",
    "province_name": "TP. Đà Nẵng",
    "region": "Central",
    "name": "Hải sản tươi Năm Đảnh",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Đà Nẵng, thuộc cụm danh thắng Bán đảo Sơn Trà & Bãi biển Mỹ Khê.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Hải sản tươi Năm Đảnh Gia Truyền",
        "address": "Khu phố ẩm thực Bán đảo Sơn Trà & Bãi biển Mỹ Khê, TP. Đà Nẵng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Đà Nẵng",
        "address": "Đại lộ ẩm thực trung tâm, TP. Đà Nẵng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 36,
    "province_id": "danang",
    "province_name": "TP. Đà Nẵng",
    "region": "Central",
    "name": "Bún chả cá Đà Nẵng",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Đà Nẵng, thuộc cụm danh thắng Bán đảo Sơn Trà & Bãi biển Mỹ Khê.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bún chả cá Đà Nẵng Gia Truyền",
        "address": "Khu phố ẩm thực Bán đảo Sơn Trà & Bãi biển Mỹ Khê, TP. Đà Nẵng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Đà Nẵng",
        "address": "Đại lộ ẩm thực trung tâm, TP. Đà Nẵng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 37,
    "province_id": "danang",
    "province_name": "TP. Đà Nẵng",
    "region": "Central",
    "name": "Chè sầu Liên",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Đà Nẵng, thuộc cụm danh thắng Bán đảo Sơn Trà & Bãi biển Mỹ Khê.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Chè sầu Liên Gia Truyền",
        "address": "Khu phố ẩm thực Bán đảo Sơn Trà & Bãi biển Mỹ Khê, TP. Đà Nẵng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Đà Nẵng",
        "address": "Đại lộ ẩm thực trung tâm, TP. Đà Nẵng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 38,
    "province_id": "haiphong",
    "province_name": "TP. Hải Phòng",
    "region": "North",
    "name": "Tu hài Cát Bà nướng mỡ hành",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Hải Phòng, thuộc cụm danh thắng Quần đảo Cát Bà & Vịnh Lan Hạ.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Tu hài Cát Bà nướng mỡ hành Gia Truyền",
        "address": "Khu phố ẩm thực Quần đảo Cát Bà & Vịnh Lan Hạ, TP. Hải Phòng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Hải Phòng",
        "address": "Đại lộ ẩm thực trung tâm, TP. Hải Phòng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 39,
    "province_id": "haiphong",
    "province_name": "TP. Hải Phòng",
    "region": "North",
    "name": "Bề bề rang muối",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Hải Phòng, thuộc cụm danh thắng Quần đảo Cát Bà & Vịnh Lan Hạ.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bề bề rang muối Gia Truyền",
        "address": "Khu phố ẩm thực Quần đảo Cát Bà & Vịnh Lan Hạ, TP. Hải Phòng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Hải Phòng",
        "address": "Đại lộ ẩm thực trung tâm, TP. Hải Phòng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 40,
    "province_id": "haiphong",
    "province_name": "TP. Hải Phòng",
    "region": "North",
    "name": "Cá song hấp xì dầu",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Hải Phòng, thuộc cụm danh thắng Quần đảo Cát Bà & Vịnh Lan Hạ.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cá song hấp xì dầu Gia Truyền",
        "address": "Khu phố ẩm thực Quần đảo Cát Bà & Vịnh Lan Hạ, TP. Hải Phòng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Hải Phòng",
        "address": "Đại lộ ẩm thực trung tâm, TP. Hải Phòng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 41,
    "province_id": "haiphong",
    "province_name": "TP. Hải Phòng",
    "region": "North",
    "name": "Mực một nắng",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Hải Phòng, thuộc cụm danh thắng Quần đảo Cát Bà & Vịnh Lan Hạ.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Mực một nắng Gia Truyền",
        "address": "Khu phố ẩm thực Quần đảo Cát Bà & Vịnh Lan Hạ, TP. Hải Phòng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Hải Phòng",
        "address": "Đại lộ ẩm thực trung tâm, TP. Hải Phòng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 42,
    "province_id": "haiphong",
    "province_name": "TP. Hải Phòng",
    "region": "North",
    "name": "Bánh đa cua bể Hải Phòng",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Hải Phòng, thuộc cụm danh thắng Thiên đường Food Tour Hải Phòng.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh đa cua bể Hải Phòng Gia Truyền",
        "address": "Khu phố ẩm thực Thiên đường Food Tour Hải Phòng, TP. Hải Phòng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Hải Phòng",
        "address": "Đại lộ ẩm thực trung tâm, TP. Hải Phòng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 43,
    "province_id": "haiphong",
    "province_name": "TP. Hải Phòng",
    "region": "North",
    "name": "Bánh mì cay Pate",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Hải Phòng, thuộc cụm danh thắng Thiên đường Food Tour Hải Phòng.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh mì cay Pate Gia Truyền",
        "address": "Khu phố ẩm thực Thiên đường Food Tour Hải Phòng, TP. Hải Phòng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Hải Phòng",
        "address": "Đại lộ ẩm thực trung tâm, TP. Hải Phòng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 44,
    "province_id": "haiphong",
    "province_name": "TP. Hải Phòng",
    "region": "North",
    "name": "Cà phê cốt dừa",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Hải Phòng, thuộc cụm danh thắng Thiên đường Food Tour Hải Phòng.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cà phê cốt dừa Gia Truyền",
        "address": "Khu phố ẩm thực Thiên đường Food Tour Hải Phòng, TP. Hải Phòng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Hải Phòng",
        "address": "Đại lộ ẩm thực trung tâm, TP. Hải Phòng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 45,
    "province_id": "haiphong",
    "province_name": "TP. Hải Phòng",
    "region": "North",
    "name": "Dừa dầm",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Hải Phòng, thuộc cụm danh thắng Thiên đường Food Tour Hải Phòng.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Dừa dầm Gia Truyền",
        "address": "Khu phố ẩm thực Thiên đường Food Tour Hải Phòng, TP. Hải Phòng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Hải Phòng",
        "address": "Đại lộ ẩm thực trung tâm, TP. Hải Phòng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 46,
    "province_id": "haiphong",
    "province_name": "TP. Hải Phòng",
    "region": "North",
    "name": "Ốc xào cay Hải Phòng",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Hải Phòng, thuộc cụm danh thắng Thiên đường Food Tour Hải Phòng.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Ốc xào cay Hải Phòng Gia Truyền",
        "address": "Khu phố ẩm thực Thiên đường Food Tour Hải Phòng, TP. Hải Phòng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Hải Phòng",
        "address": "Đại lộ ẩm thực trung tâm, TP. Hải Phòng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 47,
    "province_id": "haiphong",
    "province_name": "TP. Hải Phòng",
    "region": "North",
    "name": "Bánh đậu xanh Rồng Vàng",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Hải Phòng, thuộc cụm danh thắng Quần thể Di tích Côn Sơn - Kiếp Bạc (Hải Dương).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh đậu xanh Rồng Vàng Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Di tích Côn Sơn - Kiếp Bạc (Hải Dương), TP. Hải Phòng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Hải Phòng",
        "address": "Đại lộ ẩm thực trung tâm, TP. Hải Phòng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 48,
    "province_id": "haiphong",
    "province_name": "TP. Hải Phòng",
    "region": "North",
    "name": "Bánh gai Ninh Giang",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Hải Phòng, thuộc cụm danh thắng Quần thể Di tích Côn Sơn - Kiếp Bạc (Hải Dương).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh gai Ninh Giang Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Di tích Côn Sơn - Kiếp Bạc (Hải Dương), TP. Hải Phòng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Hải Phòng",
        "address": "Đại lộ ẩm thực trung tâm, TP. Hải Phòng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 49,
    "province_id": "haiphong",
    "province_name": "TP. Hải Phòng",
    "region": "North",
    "name": "Rươi Tứ Kỳ",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Hải Phòng, thuộc cụm danh thắng Quần thể Di tích Côn Sơn - Kiếp Bạc (Hải Dương).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Rươi Tứ Kỳ Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Di tích Côn Sơn - Kiếp Bạc (Hải Dương), TP. Hải Phòng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Hải Phòng",
        "address": "Đại lộ ẩm thực trung tâm, TP. Hải Phòng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 50,
    "province_id": "haiphong",
    "province_name": "TP. Hải Phòng",
    "region": "North",
    "name": "Vải thiều Thanh Hà",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Hải Phòng, thuộc cụm danh thắng Quần thể Di tích Côn Sơn - Kiếp Bạc (Hải Dương).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Vải thiều Thanh Hà Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Di tích Côn Sơn - Kiếp Bạc (Hải Dương), TP. Hải Phòng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Hải Phòng",
        "address": "Đại lộ ẩm thực trung tâm, TP. Hải Phòng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 51,
    "province_id": "cantho",
    "province_name": "TP. Cần Thơ",
    "region": "South",
    "name": "Lẩu mắm Dạ Lý Cần Thơ",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Cần Thơ, thuộc cụm danh thắng Chợ nổi Cái Răng & Bến Ninh Kiều.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Lẩu mắm Dạ Lý Cần Thơ Gia Truyền",
        "address": "Khu phố ẩm thực Chợ nổi Cái Răng & Bến Ninh Kiều, TP. Cần Thơ",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Cần Thơ",
        "address": "Đại lộ ẩm thực trung tâm, TP. Cần Thơ",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 52,
    "province_id": "cantho",
    "province_name": "TP. Cần Thơ",
    "region": "South",
    "name": "Vịt nấu chao Thành Giao",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Cần Thơ, thuộc cụm danh thắng Chợ nổi Cái Răng & Bến Ninh Kiều.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Vịt nấu chao Thành Giao Gia Truyền",
        "address": "Khu phố ẩm thực Chợ nổi Cái Răng & Bến Ninh Kiều, TP. Cần Thơ",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Cần Thơ",
        "address": "Đại lộ ẩm thực trung tâm, TP. Cần Thơ",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 53,
    "province_id": "cantho",
    "province_name": "TP. Cần Thơ",
    "region": "South",
    "name": "Bánh cống Cần Thơ",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Cần Thơ, thuộc cụm danh thắng Chợ nổi Cái Răng & Bến Ninh Kiều.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh cống Cần Thơ Gia Truyền",
        "address": "Khu phố ẩm thực Chợ nổi Cái Răng & Bến Ninh Kiều, TP. Cần Thơ",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Cần Thơ",
        "address": "Đại lộ ẩm thực trung tâm, TP. Cần Thơ",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 54,
    "province_id": "cantho",
    "province_name": "TP. Cần Thơ",
    "region": "South",
    "name": "Hủ tiếu pizza chiên giòn",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Cần Thơ, thuộc cụm danh thắng Chợ nổi Cái Răng & Bến Ninh Kiều.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Hủ tiếu pizza chiên giòn Gia Truyền",
        "address": "Khu phố ẩm thực Chợ nổi Cái Răng & Bến Ninh Kiều, TP. Cần Thơ",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Cần Thơ",
        "address": "Đại lộ ẩm thực trung tâm, TP. Cần Thơ",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 55,
    "province_id": "cantho",
    "province_name": "TP. Cần Thơ",
    "region": "South",
    "name": "Bánh pía Sóc Trăng sầu riêng trứng muối",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Cần Thơ, thuộc cụm danh thắng Quần thể Chùa Khmer & Chùa Dơi (Sóc Trăng).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh pía Sóc Trăng sầu riêng trứng muối Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Chùa Khmer & Chùa Dơi (Sóc Trăng), TP. Cần Thơ",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Cần Thơ",
        "address": "Đại lộ ẩm thực trung tâm, TP. Cần Thơ",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 56,
    "province_id": "cantho",
    "province_name": "TP. Cần Thơ",
    "region": "South",
    "name": "Bún nước lèo Sóc Trăng",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Cần Thơ, thuộc cụm danh thắng Quần thể Chùa Khmer & Chùa Dơi (Sóc Trăng).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bún nước lèo Sóc Trăng Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Chùa Khmer & Chùa Dơi (Sóc Trăng), TP. Cần Thơ",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Cần Thơ",
        "address": "Đại lộ ẩm thực trung tâm, TP. Cần Thơ",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 57,
    "province_id": "cantho",
    "province_name": "TP. Cần Thơ",
    "region": "South",
    "name": "Bánh cóng Đại Tâm",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Cần Thơ, thuộc cụm danh thắng Quần thể Chùa Khmer & Chùa Dơi (Sóc Trăng).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh cóng Đại Tâm Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Chùa Khmer & Chùa Dơi (Sóc Trăng), TP. Cần Thơ",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Cần Thơ",
        "address": "Đại lộ ẩm thực trung tâm, TP. Cần Thơ",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 58,
    "province_id": "hue",
    "province_name": "TP. Huế",
    "region": "Central",
    "name": "Bún bò Huế Mụ Rơi",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Huế, thuộc cụm danh thắng Quần thể Di tích Cố đô & Đại Nội Huế.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bún bò Huế Mụ Rơi Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Di tích Cố đô & Đại Nội Huế, TP. Huế",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Huế",
        "address": "Đại lộ ẩm thực trung tâm, TP. Huế",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 59,
    "province_id": "hue",
    "province_name": "TP. Huế",
    "region": "Central",
    "name": "Bánh bèo, nậm, lọc",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Huế, thuộc cụm danh thắng Quần thể Di tích Cố đô & Đại Nội Huế.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh bèo, nậm, lọc Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Di tích Cố đô & Đại Nội Huế, TP. Huế",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Huế",
        "address": "Đại lộ ẩm thực trung tâm, TP. Huế",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 60,
    "province_id": "hue",
    "province_name": "TP. Huế",
    "region": "Central",
    "name": "Cơm hến Cồn Hến",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Huế, thuộc cụm danh thắng Quần thể Di tích Cố đô & Đại Nội Huế.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cơm hến Cồn Hến Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Di tích Cố đô & Đại Nội Huế, TP. Huế",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Huế",
        "address": "Đại lộ ẩm thực trung tâm, TP. Huế",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 61,
    "province_id": "hue",
    "province_name": "TP. Huế",
    "region": "Central",
    "name": "Chè bột lọc bọc heo quay",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Huế, thuộc cụm danh thắng Quần thể Di tích Cố đô & Đại Nội Huế.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Chè bột lọc bọc heo quay Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Di tích Cố đô & Đại Nội Huế, TP. Huế",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Huế",
        "address": "Đại lộ ẩm thực trung tâm, TP. Huế",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 62,
    "province_id": "hue",
    "province_name": "TP. Huế",
    "region": "Central",
    "name": "Mè xửng Thiên Hương",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Huế, thuộc cụm danh thắng Quần thể Di tích Cố đô & Đại Nội Huế.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Mè xửng Thiên Hương Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Di tích Cố đô & Đại Nội Huế, TP. Huế",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Huế",
        "address": "Đại lộ ẩm thực trung tâm, TP. Huế",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 63,
    "province_id": "hue",
    "province_name": "TP. Huế",
    "region": "Central",
    "name": "Nem lụi chợ Đông Ba",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Huế, thuộc cụm danh thắng Dòng Sông Hương & Các Lăng Tẩm Hoàng Gia.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Nem lụi chợ Đông Ba Gia Truyền",
        "address": "Khu phố ẩm thực Dòng Sông Hương & Các Lăng Tẩm Hoàng Gia, TP. Huế",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Huế",
        "address": "Đại lộ ẩm thực trung tâm, TP. Huế",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 64,
    "province_id": "hue",
    "province_name": "TP. Huế",
    "region": "Central",
    "name": "Bánh khoái hoàng cung",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Huế, thuộc cụm danh thắng Dòng Sông Hương & Các Lăng Tẩm Hoàng Gia.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh khoái hoàng cung Gia Truyền",
        "address": "Khu phố ẩm thực Dòng Sông Hương & Các Lăng Tẩm Hoàng Gia, TP. Huế",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Huế",
        "address": "Đại lộ ẩm thực trung tâm, TP. Huế",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 65,
    "province_id": "hue",
    "province_name": "TP. Huế",
    "region": "Central",
    "name": "Trà Cung Đình Huế",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Huế, thuộc cụm danh thắng Dòng Sông Hương & Các Lăng Tẩm Hoàng Gia.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Trà Cung Đình Huế Gia Truyền",
        "address": "Khu phố ẩm thực Dòng Sông Hương & Các Lăng Tẩm Hoàng Gia, TP. Huế",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Huế",
        "address": "Đại lộ ẩm thực trung tâm, TP. Huế",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 66,
    "province_id": "hue",
    "province_name": "TP. Huế",
    "region": "Central",
    "name": "Bánh ép Huế",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân TP. Huế, thuộc cụm danh thắng Dòng Sông Hương & Các Lăng Tẩm Hoàng Gia.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh ép Huế Gia Truyền",
        "address": "Khu phố ẩm thực Dòng Sông Hương & Các Lăng Tẩm Hoàng Gia, TP. Huế",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản TP. Huế",
        "address": "Đại lộ ẩm thực trung tâm, TP. Huế",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 67,
    "province_id": "ninhbinh",
    "province_name": "Tỉnh Ninh Bình",
    "region": "North",
    "name": "Thịt dê núi nướng tảng",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Ninh Bình, thuộc cụm danh thắng Cố đô Hoa Lư (Khu Di tích Lịch sử).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Thịt dê núi nướng tảng Gia Truyền",
        "address": "Khu phố ẩm thực Cố đô Hoa Lư (Khu Di tích Lịch sử), Tỉnh Ninh Bình",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Ninh Bình",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Ninh Bình",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 68,
    "province_id": "ninhbinh",
    "province_name": "Tỉnh Ninh Bình",
    "region": "North",
    "name": "Cơm cháy giòn chấm sốt dê",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Ninh Bình, thuộc cụm danh thắng Cố đô Hoa Lư (Khu Di tích Lịch sử).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cơm cháy giòn chấm sốt dê Gia Truyền",
        "address": "Khu phố ẩm thực Cố đô Hoa Lư (Khu Di tích Lịch sử), Tỉnh Ninh Bình",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Ninh Bình",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Ninh Bình",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 69,
    "province_id": "ninhbinh",
    "province_name": "Tỉnh Ninh Bình",
    "region": "North",
    "name": "Rượu Kim Sơn",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Ninh Bình, thuộc cụm danh thắng Cố đô Hoa Lư (Khu Di tích Lịch sử).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Rượu Kim Sơn Gia Truyền",
        "address": "Khu phố ẩm thực Cố đô Hoa Lư (Khu Di tích Lịch sử), Tỉnh Ninh Bình",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Ninh Bình",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Ninh Bình",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 70,
    "province_id": "ninhbinh",
    "province_name": "Tỉnh Ninh Bình",
    "region": "North",
    "name": "Nem chua Yên Mạc",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Ninh Bình, thuộc cụm danh thắng Cố đô Hoa Lư (Khu Di tích Lịch sử).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Nem chua Yên Mạc Gia Truyền",
        "address": "Khu phố ẩm thực Cố đô Hoa Lư (Khu Di tích Lịch sử), Tỉnh Ninh Bình",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Ninh Bình",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Ninh Bình",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 71,
    "province_id": "ninhbinh",
    "province_name": "Tỉnh Ninh Bình",
    "region": "North",
    "name": "Ốc núi luộc sả ớt",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Ninh Bình, thuộc cụm danh thắng Quần thể Danh thắng Tràng An & Hang Múa.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Ốc núi luộc sả ớt Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Danh thắng Tràng An & Hang Múa, Tỉnh Ninh Bình",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Ninh Bình",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Ninh Bình",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 72,
    "province_id": "ninhbinh",
    "province_name": "Tỉnh Ninh Bình",
    "region": "North",
    "name": "Cá rô Tổng Trường chiên xù",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Ninh Bình, thuộc cụm danh thắng Quần thể Danh thắng Tràng An & Hang Múa.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cá rô Tổng Trường chiên xù Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Danh thắng Tràng An & Hang Múa, Tỉnh Ninh Bình",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Ninh Bình",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Ninh Bình",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 73,
    "province_id": "ninhbinh",
    "province_name": "Tỉnh Ninh Bình",
    "region": "North",
    "name": "Gà đồi Tràng An nướng mật ong",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Ninh Bình, thuộc cụm danh thắng Quần thể Danh thắng Tràng An & Hang Múa.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Gà đồi Tràng An nướng mật ong Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Danh thắng Tràng An & Hang Múa, Tỉnh Ninh Bình",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Ninh Bình",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Ninh Bình",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 74,
    "province_id": "ninhbinh",
    "province_name": "Tỉnh Ninh Bình",
    "region": "North",
    "name": "Cơm chay Bái Đính",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Ninh Bình, thuộc cụm danh thắng Quần thể Tâm linh Bái Đính - Tam Chúc.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cơm chay Bái Đính Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Tâm linh Bái Đính - Tam Chúc, Tỉnh Ninh Bình",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Ninh Bình",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Ninh Bình",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 75,
    "province_id": "ninhbinh",
    "province_name": "Tỉnh Ninh Bình",
    "region": "North",
    "name": "Bánh đa cua Phủ Lý",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Ninh Bình, thuộc cụm danh thắng Quần thể Tâm linh Bái Đính - Tam Chúc.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh đa cua Phủ Lý Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Tâm linh Bái Đính - Tam Chúc, Tỉnh Ninh Bình",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Ninh Bình",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Ninh Bình",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 76,
    "province_id": "ninhbinh",
    "province_name": "Tỉnh Ninh Bình",
    "region": "North",
    "name": "Chuối ngự Đại Hoàng",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Ninh Bình, thuộc cụm danh thắng Quần thể Tâm linh Bái Đính - Tam Chúc.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Chuối ngự Đại Hoàng Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Tâm linh Bái Đính - Tam Chúc, Tỉnh Ninh Bình",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Ninh Bình",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Ninh Bình",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 77,
    "province_id": "ninhbinh",
    "province_name": "Tỉnh Ninh Bình",
    "region": "North",
    "name": "Cá kho làng Vũ Đại",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Ninh Bình, thuộc cụm danh thắng Quần thể Tâm linh Bái Đính - Tam Chúc.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cá kho làng Vũ Đại Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Tâm linh Bái Đính - Tam Chúc, Tỉnh Ninh Bình",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Ninh Bình",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Ninh Bình",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 78,
    "province_id": "laocai",
    "province_name": "Tỉnh Lào Cai",
    "region": "North",
    "name": "Lẩu cá hồi & cá tầm Sa Pa",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Lào Cai, thuộc cụm danh thắng Thị trấn Sa Pa & Nóc nhà Đông Dương Fansipan.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Lẩu cá hồi & cá tầm Sa Pa Gia Truyền",
        "address": "Khu phố ẩm thực Thị trấn Sa Pa & Nóc nhà Đông Dương Fansipan, Tỉnh Lào Cai",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Lào Cai",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Lào Cai",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 79,
    "province_id": "laocai",
    "province_name": "Tỉnh Lào Cai",
    "region": "North",
    "name": "Thịt lợn cắp nách nướng than",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Lào Cai, thuộc cụm danh thắng Thị trấn Sa Pa & Nóc nhà Đông Dương Fansipan.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Thịt lợn cắp nách nướng than Gia Truyền",
        "address": "Khu phố ẩm thực Thị trấn Sa Pa & Nóc nhà Đông Dương Fansipan, Tỉnh Lào Cai",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Lào Cai",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Lào Cai",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 80,
    "province_id": "laocai",
    "province_name": "Tỉnh Lào Cai",
    "region": "North",
    "name": "Thắng cố ngựa Mường Khương",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Lào Cai, thuộc cụm danh thắng Thị trấn Sa Pa & Nóc nhà Đông Dương Fansipan.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Thắng cố ngựa Mường Khương Gia Truyền",
        "address": "Khu phố ẩm thực Thị trấn Sa Pa & Nóc nhà Đông Dương Fansipan, Tỉnh Lào Cai",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Lào Cai",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Lào Cai",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 81,
    "province_id": "laocai",
    "province_name": "Tỉnh Lào Cai",
    "region": "North",
    "name": "Cơm lam nướng ống tre",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Lào Cai, thuộc cụm danh thắng Thị trấn Sa Pa & Nóc nhà Đông Dương Fansipan.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cơm lam nướng ống tre Gia Truyền",
        "address": "Khu phố ẩm thực Thị trấn Sa Pa & Nóc nhà Đông Dương Fansipan, Tỉnh Lào Cai",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Lào Cai",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Lào Cai",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 82,
    "province_id": "laocai",
    "province_name": "Tỉnh Lào Cai",
    "region": "North",
    "name": "Xôi nếp nương Tú Lệ",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Lào Cai, thuộc cụm danh thắng Danh thắng Ruộng bậc thang Mù Cang Chải (Yên Bái).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Xôi nếp nương Tú Lệ Gia Truyền",
        "address": "Khu phố ẩm thực Danh thắng Ruộng bậc thang Mù Cang Chải (Yên Bái), Tỉnh Lào Cai",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Lào Cai",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Lào Cai",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 83,
    "province_id": "laocai",
    "province_name": "Tỉnh Lào Cai",
    "region": "North",
    "name": "Cốm xanh Tú Lệ",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Lào Cai, thuộc cụm danh thắng Danh thắng Ruộng bậc thang Mù Cang Chải (Yên Bái).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cốm xanh Tú Lệ Gia Truyền",
        "address": "Khu phố ẩm thực Danh thắng Ruộng bậc thang Mù Cang Chải (Yên Bái), Tỉnh Lào Cai",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Lào Cai",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Lào Cai",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 84,
    "province_id": "laocai",
    "province_name": "Tỉnh Lào Cai",
    "region": "North",
    "name": "Thịt trâu gác bếp",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Lào Cai, thuộc cụm danh thắng Danh thắng Ruộng bậc thang Mù Cang Chải (Yên Bái).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Thịt trâu gác bếp Gia Truyền",
        "address": "Khu phố ẩm thực Danh thắng Ruộng bậc thang Mù Cang Chải (Yên Bái), Tỉnh Lào Cai",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Lào Cai",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Lào Cai",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 85,
    "province_id": "laocai",
    "province_name": "Tỉnh Lào Cai",
    "region": "North",
    "name": "Cá suối chiên giòn",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Lào Cai, thuộc cụm danh thắng Danh thắng Ruộng bậc thang Mù Cang Chải (Yên Bái).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cá suối chiên giòn Gia Truyền",
        "address": "Khu phố ẩm thực Danh thắng Ruộng bậc thang Mù Cang Chải (Yên Bái), Tỉnh Lào Cai",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Lào Cai",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Lào Cai",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 86,
    "province_id": "quangninh",
    "province_name": "Tỉnh Quảng Ninh",
    "region": "North",
    "name": "Chả mực Hạ Long giã tay",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Quảng Ninh, thuộc cụm danh thắng Di sản Thiên nhiên Thế giới Vịnh Hạ Long.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Chả mực Hạ Long giã tay Gia Truyền",
        "address": "Khu phố ẩm thực Di sản Thiên nhiên Thế giới Vịnh Hạ Long, Tỉnh Quảng Ninh",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Quảng Ninh",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Quảng Ninh",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 87,
    "province_id": "quangninh",
    "province_name": "Tỉnh Quảng Ninh",
    "region": "North",
    "name": "Sá sùng xào tỏi",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Quảng Ninh, thuộc cụm danh thắng Di sản Thiên nhiên Thế giới Vịnh Hạ Long.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Sá sùng xào tỏi Gia Truyền",
        "address": "Khu phố ẩm thực Di sản Thiên nhiên Thế giới Vịnh Hạ Long, Tỉnh Quảng Ninh",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Quảng Ninh",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Quảng Ninh",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 88,
    "province_id": "quangninh",
    "province_name": "Tỉnh Quảng Ninh",
    "region": "North",
    "name": "Sam biển nướng mỡ hành",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Quảng Ninh, thuộc cụm danh thắng Di sản Thiên nhiên Thế giới Vịnh Hạ Long.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Sam biển nướng mỡ hành Gia Truyền",
        "address": "Khu phố ẩm thực Di sản Thiên nhiên Thế giới Vịnh Hạ Long, Tỉnh Quảng Ninh",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Quảng Ninh",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Quảng Ninh",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 89,
    "province_id": "quangninh",
    "province_name": "Tỉnh Quảng Ninh",
    "region": "North",
    "name": "Bún bề bề Hạ Long",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Quảng Ninh, thuộc cụm danh thắng Di sản Thiên nhiên Thế giới Vịnh Hạ Long.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bún bề bề Hạ Long Gia Truyền",
        "address": "Khu phố ẩm thực Di sản Thiên nhiên Thế giới Vịnh Hạ Long, Tỉnh Quảng Ninh",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Quảng Ninh",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Quảng Ninh",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 90,
    "province_id": "quangninh",
    "province_name": "Tỉnh Quảng Ninh",
    "region": "North",
    "name": "Sữa chua trân châu Hạ Long",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Quảng Ninh, thuộc cụm danh thắng Trung tâm Du lịch Bãi Cháy & Sun World.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Sữa chua trân châu Hạ Long Gia Truyền",
        "address": "Khu phố ẩm thực Trung tâm Du lịch Bãi Cháy & Sun World, Tỉnh Quảng Ninh",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Quảng Ninh",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Quảng Ninh",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 91,
    "province_id": "quangninh",
    "province_name": "Tỉnh Quảng Ninh",
    "region": "North",
    "name": "Bánh gật gù Tiên Yên",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Quảng Ninh, thuộc cụm danh thắng Trung tâm Du lịch Bãi Cháy & Sun World.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh gật gù Tiên Yên Gia Truyền",
        "address": "Khu phố ẩm thực Trung tâm Du lịch Bãi Cháy & Sun World, Tỉnh Quảng Ninh",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Quảng Ninh",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Quảng Ninh",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 92,
    "province_id": "quangninh",
    "province_name": "Tỉnh Quảng Ninh",
    "region": "North",
    "name": "Cù kỳ hấp sả",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Quảng Ninh, thuộc cụm danh thắng Trung tâm Du lịch Bãi Cháy & Sun World.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cù kỳ hấp sả Gia Truyền",
        "address": "Khu phố ẩm thực Trung tâm Du lịch Bãi Cháy & Sun World, Tỉnh Quảng Ninh",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Quảng Ninh",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Quảng Ninh",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 93,
    "province_id": "quangninh",
    "province_name": "Tỉnh Quảng Ninh",
    "region": "North",
    "name": "Măng trúc Yên Tử",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Quảng Ninh, thuộc cụm danh thắng Khu Di tích Danh thắng Yên Tử.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Măng trúc Yên Tử Gia Truyền",
        "address": "Khu phố ẩm thực Khu Di tích Danh thắng Yên Tử, Tỉnh Quảng Ninh",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Quảng Ninh",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Quảng Ninh",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 94,
    "province_id": "quangninh",
    "province_name": "Tỉnh Quảng Ninh",
    "region": "North",
    "name": "Chè lam Yên Tử",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Quảng Ninh, thuộc cụm danh thắng Khu Di tích Danh thắng Yên Tử.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Chè lam Yên Tử Gia Truyền",
        "address": "Khu phố ẩm thực Khu Di tích Danh thắng Yên Tử, Tỉnh Quảng Ninh",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Quảng Ninh",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Quảng Ninh",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 95,
    "province_id": "quangninh",
    "province_name": "Tỉnh Quảng Ninh",
    "region": "North",
    "name": "Rượu mơ Yên Tử",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Quảng Ninh, thuộc cụm danh thắng Khu Di tích Danh thắng Yên Tử.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Rượu mơ Yên Tử Gia Truyền",
        "address": "Khu phố ẩm thực Khu Di tích Danh thắng Yên Tử, Tỉnh Quảng Ninh",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Quảng Ninh",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Quảng Ninh",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 96,
    "province_id": "caobang",
    "province_name": "Tỉnh Cao Bằng",
    "region": "North",
    "name": "Vịt quay 7 vị Cao Bằng",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Cao Bằng, thuộc cụm danh thắng Quần thể Thác Bản Giốc & Động Ngườm Ngao.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Vịt quay 7 vị Cao Bằng Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Thác Bản Giốc & Động Ngườm Ngao, Tỉnh Cao Bằng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Cao Bằng",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Cao Bằng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 97,
    "province_id": "caobang",
    "province_name": "Tỉnh Cao Bằng",
    "region": "North",
    "name": "Cá trầm hương nướng sông Quây Sơn",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Cao Bằng, thuộc cụm danh thắng Quần thể Thác Bản Giốc & Động Ngườm Ngao.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cá trầm hương nướng sông Quây Sơn Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Thác Bản Giốc & Động Ngườm Ngao, Tỉnh Cao Bằng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Cao Bằng",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Cao Bằng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 98,
    "province_id": "caobang",
    "province_name": "Tỉnh Cao Bằng",
    "region": "North",
    "name": "Bánh cuốn canh Cao Bằng",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Cao Bằng, thuộc cụm danh thắng Quần thể Thác Bản Giốc & Động Ngườm Ngao.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh cuốn canh Cao Bằng Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Thác Bản Giốc & Động Ngườm Ngao, Tỉnh Cao Bằng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Cao Bằng",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Cao Bằng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 99,
    "province_id": "caobang",
    "province_name": "Tỉnh Cao Bằng",
    "region": "North",
    "name": "Hạt dẻ Trùng Khánh nướng",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Cao Bằng, thuộc cụm danh thắng Quần thể Thác Bản Giốc & Động Ngườm Ngao.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Hạt dẻ Trùng Khánh nướng Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Thác Bản Giốc & Động Ngườm Ngao, Tỉnh Cao Bằng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Cao Bằng",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Cao Bằng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 100,
    "province_id": "caobang",
    "province_name": "Tỉnh Cao Bằng",
    "region": "North",
    "name": "Bánh áp chao Cao Bằng",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Cao Bằng, thuộc cụm danh thắng Khu Di tích Lịch sử Pác Bó & Suối Lê-nin.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh áp chao Cao Bằng Gia Truyền",
        "address": "Khu phố ẩm thực Khu Di tích Lịch sử Pác Bó & Suối Lê-nin, Tỉnh Cao Bằng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Cao Bằng",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Cao Bằng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 101,
    "province_id": "caobang",
    "province_name": "Tỉnh Cao Bằng",
    "region": "North",
    "name": "Khẩu sli Nà Sặm",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Cao Bằng, thuộc cụm danh thắng Khu Di tích Lịch sử Pác Bó & Suối Lê-nin.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Khẩu sli Nà Sặm Gia Truyền",
        "address": "Khu phố ẩm thực Khu Di tích Lịch sử Pác Bó & Suối Lê-nin, Tỉnh Cao Bằng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Cao Bằng",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Cao Bằng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 102,
    "province_id": "caobang",
    "province_name": "Tỉnh Cao Bằng",
    "region": "North",
    "name": "Rau dạ hiến xào thịt bò",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Cao Bằng, thuộc cụm danh thắng Khu Di tích Lịch sử Pác Bó & Suối Lê-nin.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Rau dạ hiến xào thịt bò Gia Truyền",
        "address": "Khu phố ẩm thực Khu Di tích Lịch sử Pác Bó & Suối Lê-nin, Tỉnh Cao Bằng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Cao Bằng",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Cao Bằng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 103,
    "province_id": "caobang",
    "province_name": "Tỉnh Cao Bằng",
    "region": "North",
    "name": "Miến dong Phia Đén",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Cao Bằng, thuộc cụm danh thắng Khu Di tích Lịch sử Pác Bó & Suối Lê-nin.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Miến dong Phia Đén Gia Truyền",
        "address": "Khu phố ẩm thực Khu Di tích Lịch sử Pác Bó & Suối Lê-nin, Tỉnh Cao Bằng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Cao Bằng",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Cao Bằng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 104,
    "province_id": "lamdong",
    "province_name": "Tỉnh Lâm Đồng",
    "region": "Central",
    "name": "Lẩu gà lá é Tao Ngộ",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Lâm Đồng, thuộc cụm danh thắng Thành phố ngàn hoa Đà Lạt & Hồ Xuân Hương.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Lẩu gà lá é Tao Ngộ Gia Truyền",
        "address": "Khu phố ẩm thực Thành phố ngàn hoa Đà Lạt & Hồ Xuân Hương, Tỉnh Lâm Đồng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Lâm Đồng",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Lâm Đồng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 105,
    "province_id": "lamdong",
    "province_name": "Tỉnh Lâm Đồng",
    "region": "Central",
    "name": "Lẩu bò Ba Toa quán Gỗ",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Lâm Đồng, thuộc cụm danh thắng Thành phố ngàn hoa Đà Lạt & Hồ Xuân Hương.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Lẩu bò Ba Toa quán Gỗ Gia Truyền",
        "address": "Khu phố ẩm thực Thành phố ngàn hoa Đà Lạt & Hồ Xuân Hương, Tỉnh Lâm Đồng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Lâm Đồng",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Lâm Đồng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 106,
    "province_id": "lamdong",
    "province_name": "Tỉnh Lâm Đồng",
    "region": "Central",
    "name": "Bánh ướt lòng gà",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Lâm Đồng, thuộc cụm danh thắng Thành phố ngàn hoa Đà Lạt & Hồ Xuân Hương.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh ướt lòng gà Gia Truyền",
        "address": "Khu phố ẩm thực Thành phố ngàn hoa Đà Lạt & Hồ Xuân Hương, Tỉnh Lâm Đồng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Lâm Đồng",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Lâm Đồng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 107,
    "province_id": "lamdong",
    "province_name": "Tỉnh Lâm Đồng",
    "region": "Central",
    "name": "Bánh tráng nướng",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Lâm Đồng, thuộc cụm danh thắng Thành phố ngàn hoa Đà Lạt & Hồ Xuân Hương.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh tráng nướng Gia Truyền",
        "address": "Khu phố ẩm thực Thành phố ngàn hoa Đà Lạt & Hồ Xuân Hương, Tỉnh Lâm Đồng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Lâm Đồng",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Lâm Đồng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 108,
    "province_id": "lamdong",
    "province_name": "Tỉnh Lâm Đồng",
    "region": "Central",
    "name": "Dâu tây tươi Đà Lạt",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Lâm Đồng, thuộc cụm danh thắng Thành phố ngàn hoa Đà Lạt & Hồ Xuân Hương.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Dâu tây tươi Đà Lạt Gia Truyền",
        "address": "Khu phố ẩm thực Thành phố ngàn hoa Đà Lạt & Hồ Xuân Hương, Tỉnh Lâm Đồng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Lâm Đồng",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Lâm Đồng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 109,
    "province_id": "lamdong",
    "province_name": "Tỉnh Lâm Đồng",
    "region": "Central",
    "name": "Lẩu thả Mũi Né",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Lâm Đồng, thuộc cụm danh thắng Đồi cát bay Mũi Né & Phan Thiết (Bình Thuận).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Lẩu thả Mũi Né Gia Truyền",
        "address": "Khu phố ẩm thực Đồi cát bay Mũi Né & Phan Thiết (Bình Thuận), Tỉnh Lâm Đồng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Lâm Đồng",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Lâm Đồng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 110,
    "province_id": "lamdong",
    "province_name": "Tỉnh Lâm Đồng",
    "region": "Central",
    "name": "Bánh quai vạc",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Lâm Đồng, thuộc cụm danh thắng Đồi cát bay Mũi Né & Phan Thiết (Bình Thuận).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh quai vạc Gia Truyền",
        "address": "Khu phố ẩm thực Đồi cát bay Mũi Né & Phan Thiết (Bình Thuận), Tỉnh Lâm Đồng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Lâm Đồng",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Lâm Đồng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 111,
    "province_id": "lamdong",
    "province_name": "Tỉnh Lâm Đồng",
    "region": "Central",
    "name": "Gỏi cá mai Phan Thiết",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Lâm Đồng, thuộc cụm danh thắng Đồi cát bay Mũi Né & Phan Thiết (Bình Thuận).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Gỏi cá mai Phan Thiết Gia Truyền",
        "address": "Khu phố ẩm thực Đồi cát bay Mũi Né & Phan Thiết (Bình Thuận), Tỉnh Lâm Đồng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Lâm Đồng",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Lâm Đồng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 112,
    "province_id": "lamdong",
    "province_name": "Tỉnh Lâm Đồng",
    "region": "Central",
    "name": "Răng mực nướng giòn",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Lâm Đồng, thuộc cụm danh thắng Đồi cát bay Mũi Né & Phan Thiết (Bình Thuận).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Răng mực nướng giòn Gia Truyền",
        "address": "Khu phố ẩm thực Đồi cát bay Mũi Né & Phan Thiết (Bình Thuận), Tỉnh Lâm Đồng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Lâm Đồng",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Lâm Đồng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 113,
    "province_id": "lamdong",
    "province_name": "Tỉnh Lâm Đồng",
    "region": "Central",
    "name": "Cá lăng nướng than lòng hồ",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Lâm Đồng, thuộc cụm danh thắng Hồ Tà Đùng - Vịnh Hạ Long Tây Nguyên (Đắk Nông).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cá lăng nướng than lòng hồ Gia Truyền",
        "address": "Khu phố ẩm thực Hồ Tà Đùng - Vịnh Hạ Long Tây Nguyên (Đắk Nông), Tỉnh Lâm Đồng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Lâm Đồng",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Lâm Đồng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 114,
    "province_id": "lamdong",
    "province_name": "Tỉnh Lâm Đồng",
    "region": "Central",
    "name": "Cơm lam gà đồi nướng",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Lâm Đồng, thuộc cụm danh thắng Hồ Tà Đùng - Vịnh Hạ Long Tây Nguyên (Đắk Nông).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cơm lam gà đồi nướng Gia Truyền",
        "address": "Khu phố ẩm thực Hồ Tà Đùng - Vịnh Hạ Long Tây Nguyên (Đắk Nông), Tỉnh Lâm Đồng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Lâm Đồng",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Lâm Đồng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 115,
    "province_id": "lamdong",
    "province_name": "Tỉnh Lâm Đồng",
    "region": "Central",
    "name": "Rượu cần Tây Nguyên",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Lâm Đồng, thuộc cụm danh thắng Hồ Tà Đùng - Vịnh Hạ Long Tây Nguyên (Đắk Nông).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Rượu cần Tây Nguyên Gia Truyền",
        "address": "Khu phố ẩm thực Hồ Tà Đùng - Vịnh Hạ Long Tây Nguyên (Đắk Nông), Tỉnh Lâm Đồng",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Lâm Đồng",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Lâm Đồng",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 116,
    "province_id": "khanhhoa",
    "province_name": "Tỉnh Khánh Hòa",
    "region": "Central",
    "name": "Nem nướng Ninh Hòa Đặng Văn Quyên",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Khánh Hòa, thuộc cụm danh thắng Vịnh biển Nha Trang & Quần đảo Hòn Mun.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Nem nướng Ninh Hòa Đặng Văn Quyên Gia Truyền",
        "address": "Khu phố ẩm thực Vịnh biển Nha Trang & Quần đảo Hòn Mun, Tỉnh Khánh Hòa",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Khánh Hòa",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Khánh Hòa",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 117,
    "province_id": "khanhhoa",
    "province_name": "Tỉnh Khánh Hòa",
    "region": "Central",
    "name": "Bún sứa chả cá Nha Trang",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Khánh Hòa, thuộc cụm danh thắng Vịnh biển Nha Trang & Quần đảo Hòn Mun.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bún sứa chả cá Nha Trang Gia Truyền",
        "address": "Khu phố ẩm thực Vịnh biển Nha Trang & Quần đảo Hòn Mun, Tỉnh Khánh Hòa",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Khánh Hòa",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Khánh Hòa",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 118,
    "province_id": "khanhhoa",
    "province_name": "Tỉnh Khánh Hòa",
    "region": "Central",
    "name": "Bánh căn mực trứng",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Khánh Hòa, thuộc cụm danh thắng Vịnh biển Nha Trang & Quần đảo Hòn Mun.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh căn mực trứng Gia Truyền",
        "address": "Khu phố ẩm thực Vịnh biển Nha Trang & Quần đảo Hòn Mun, Tỉnh Khánh Hòa",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Khánh Hòa",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Khánh Hòa",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 119,
    "province_id": "khanhhoa",
    "province_name": "Tỉnh Khánh Hòa",
    "region": "Central",
    "name": "Yến sào Khánh Hòa",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Khánh Hòa, thuộc cụm danh thắng Vịnh biển Nha Trang & Quần đảo Hòn Mun.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Yến sào Khánh Hòa Gia Truyền",
        "address": "Khu phố ẩm thực Vịnh biển Nha Trang & Quần đảo Hòn Mun, Tỉnh Khánh Hòa",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Khánh Hòa",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Khánh Hòa",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 120,
    "province_id": "khanhhoa",
    "province_name": "Tỉnh Khánh Hòa",
    "region": "Central",
    "name": "Tiệc buffet quốc tế đỉnh đồi",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Khánh Hòa, thuộc cụm danh thắng Thiên đường giải trí VinWonders Hòn Tre.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Tiệc buffet quốc tế đỉnh đồi Gia Truyền",
        "address": "Khu phố ẩm thực Thiên đường giải trí VinWonders Hòn Tre, Tỉnh Khánh Hòa",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Khánh Hòa",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Khánh Hòa",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 121,
    "province_id": "khanhhoa",
    "province_name": "Tỉnh Khánh Hòa",
    "region": "Central",
    "name": "Hải sản nướng trên đảo",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Khánh Hòa, thuộc cụm danh thắng Thiên đường giải trí VinWonders Hòn Tre.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Hải sản nướng trên đảo Gia Truyền",
        "address": "Khu phố ẩm thực Thiên đường giải trí VinWonders Hòn Tre, Tỉnh Khánh Hòa",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Khánh Hòa",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Khánh Hòa",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 122,
    "province_id": "khanhhoa",
    "province_name": "Tỉnh Khánh Hòa",
    "region": "Central",
    "name": "Bánh xèo mực nhảy Phan Rang",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Khánh Hòa, thuộc cụm danh thắng Vịnh Vĩnh Hy & Hang Rái (Ninh Thuận).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh xèo mực nhảy Phan Rang Gia Truyền",
        "address": "Khu phố ẩm thực Vịnh Vĩnh Hy & Hang Rái (Ninh Thuận), Tỉnh Khánh Hòa",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Khánh Hòa",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Khánh Hòa",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 123,
    "province_id": "khanhhoa",
    "province_name": "Tỉnh Khánh Hòa",
    "region": "Central",
    "name": "Nho tươi & Rượu nho Ninh Thuận",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Khánh Hòa, thuộc cụm danh thắng Vịnh Vĩnh Hy & Hang Rái (Ninh Thuận).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Nho tươi & Rượu nho Ninh Thuận Gia Truyền",
        "address": "Khu phố ẩm thực Vịnh Vĩnh Hy & Hang Rái (Ninh Thuận), Tỉnh Khánh Hòa",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Khánh Hòa",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Khánh Hòa",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 124,
    "province_id": "khanhhoa",
    "province_name": "Tỉnh Khánh Hòa",
    "region": "Central",
    "name": "Thịt cừu nướng thảo mộc",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Khánh Hòa, thuộc cụm danh thắng Vịnh Vĩnh Hy & Hang Rái (Ninh Thuận).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Thịt cừu nướng thảo mộc Gia Truyền",
        "address": "Khu phố ẩm thực Vịnh Vĩnh Hy & Hang Rái (Ninh Thuận), Tỉnh Khánh Hòa",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Khánh Hòa",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Khánh Hòa",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 125,
    "province_id": "angiang",
    "province_name": "Tỉnh An Giang",
    "region": "South",
    "name": "Gỏi cá trích Phú Quốc",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh An Giang, thuộc cụm danh thắng Thành phố Đảo Phú Quốc (Đảo Ngọc).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Gỏi cá trích Phú Quốc Gia Truyền",
        "address": "Khu phố ẩm thực Thành phố Đảo Phú Quốc (Đảo Ngọc), Tỉnh An Giang",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh An Giang",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh An Giang",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 126,
    "province_id": "angiang",
    "province_name": "Tỉnh An Giang",
    "region": "South",
    "name": "Bún quậy Kiến Xây",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh An Giang, thuộc cụm danh thắng Thành phố Đảo Phú Quốc (Đảo Ngọc).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bún quậy Kiến Xây Gia Truyền",
        "address": "Khu phố ẩm thực Thành phố Đảo Phú Quốc (Đảo Ngọc), Tỉnh An Giang",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh An Giang",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh An Giang",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 127,
    "province_id": "angiang",
    "province_name": "Tỉnh An Giang",
    "region": "South",
    "name": "Còi biên mai nướng muối ớt",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh An Giang, thuộc cụm danh thắng Thành phố Đảo Phú Quốc (Đảo Ngọc).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Còi biên mai nướng muối ớt Gia Truyền",
        "address": "Khu phố ẩm thực Thành phố Đảo Phú Quốc (Đảo Ngọc), Tỉnh An Giang",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh An Giang",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh An Giang",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 128,
    "province_id": "angiang",
    "province_name": "Tỉnh An Giang",
    "region": "South",
    "name": "Nước mắm Phú Quốc truyền thống",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh An Giang, thuộc cụm danh thắng Thành phố Đảo Phú Quốc (Đảo Ngọc).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Nước mắm Phú Quốc truyền thống Gia Truyền",
        "address": "Khu phố ẩm thực Thành phố Đảo Phú Quốc (Đảo Ngọc), Tỉnh An Giang",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh An Giang",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh An Giang",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 129,
    "province_id": "angiang",
    "province_name": "Tỉnh An Giang",
    "region": "South",
    "name": "Bún cá Châu Đốc",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh An Giang, thuộc cụm danh thắng Rừng tràm Trà Sư & Miếu Bà Chúa Xứ (An Giang).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bún cá Châu Đốc Gia Truyền",
        "address": "Khu phố ẩm thực Rừng tràm Trà Sư & Miếu Bà Chúa Xứ (An Giang), Tỉnh An Giang",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh An Giang",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh An Giang",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 130,
    "province_id": "angiang",
    "province_name": "Tỉnh An Giang",
    "region": "South",
    "name": "Bánh bò thốt nốt nướng",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh An Giang, thuộc cụm danh thắng Rừng tràm Trà Sư & Miếu Bà Chúa Xứ (An Giang).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh bò thốt nốt nướng Gia Truyền",
        "address": "Khu phố ẩm thực Rừng tràm Trà Sư & Miếu Bà Chúa Xứ (An Giang), Tỉnh An Giang",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh An Giang",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh An Giang",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 131,
    "province_id": "angiang",
    "province_name": "Tỉnh An Giang",
    "region": "South",
    "name": "Gỏi sầu đâu khô cá sặc",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh An Giang, thuộc cụm danh thắng Rừng tràm Trà Sư & Miếu Bà Chúa Xứ (An Giang).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Gỏi sầu đâu khô cá sặc Gia Truyền",
        "address": "Khu phố ẩm thực Rừng tràm Trà Sư & Miếu Bà Chúa Xứ (An Giang), Tỉnh An Giang",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh An Giang",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh An Giang",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 132,
    "province_id": "angiang",
    "province_name": "Tỉnh An Giang",
    "region": "South",
    "name": "Mắm cá linh, cá lóc Châu Đốc",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh An Giang, thuộc cụm danh thắng Rừng tràm Trà Sư & Miếu Bà Chúa Xứ (An Giang).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Mắm cá linh, cá lóc Châu Đốc Gia Truyền",
        "address": "Khu phố ẩm thực Rừng tràm Trà Sư & Miếu Bà Chúa Xứ (An Giang), Tỉnh An Giang",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh An Giang",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh An Giang",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 133,
    "province_id": "tuyenquang",
    "province_name": "Tỉnh Tuyên Quang",
    "region": "North",
    "name": "Bánh tam giác mạch nướng",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Tuyên Quang, thuộc cụm danh thắng Cao nguyên đá Đồng Văn & Đèo Mã Pí Lèng (Hà Giang).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh tam giác mạch nướng Gia Truyền",
        "address": "Khu phố ẩm thực Cao nguyên đá Đồng Văn & Đèo Mã Pí Lèng (Hà Giang), Tỉnh Tuyên Quang",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Tuyên Quang",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Tuyên Quang",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 134,
    "province_id": "tuyenquang",
    "province_name": "Tỉnh Tuyên Quang",
    "region": "North",
    "name": "Thắng dền Đồng Văn",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Tuyên Quang, thuộc cụm danh thắng Cao nguyên đá Đồng Văn & Đèo Mã Pí Lèng (Hà Giang).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Thắng dền Đồng Văn Gia Truyền",
        "address": "Khu phố ẩm thực Cao nguyên đá Đồng Văn & Đèo Mã Pí Lèng (Hà Giang), Tỉnh Tuyên Quang",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Tuyên Quang",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Tuyên Quang",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 135,
    "province_id": "tuyenquang",
    "province_name": "Tỉnh Tuyên Quang",
    "region": "North",
    "name": "Thịt lợn đen gác bếp",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Tuyên Quang, thuộc cụm danh thắng Cao nguyên đá Đồng Văn & Đèo Mã Pí Lèng (Hà Giang).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Thịt lợn đen gác bếp Gia Truyền",
        "address": "Khu phố ẩm thực Cao nguyên đá Đồng Văn & Đèo Mã Pí Lèng (Hà Giang), Tỉnh Tuyên Quang",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Tuyên Quang",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Tuyên Quang",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 136,
    "province_id": "tuyenquang",
    "province_name": "Tỉnh Tuyên Quang",
    "region": "North",
    "name": "Cháo ấu tẩu",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Tuyên Quang, thuộc cụm danh thắng Cao nguyên đá Đồng Văn & Đèo Mã Pí Lèng (Hà Giang).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cháo ấu tẩu Gia Truyền",
        "address": "Khu phố ẩm thực Cao nguyên đá Đồng Văn & Đèo Mã Pí Lèng (Hà Giang), Tỉnh Tuyên Quang",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Tuyên Quang",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Tuyên Quang",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 137,
    "province_id": "tuyenquang",
    "province_name": "Tỉnh Tuyên Quang",
    "region": "North",
    "name": "Cá lăng Na Hang nướng",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Tuyên Quang, thuộc cụm danh thắng Khu sinh thái Hồ Na Hang - Lâm Bình.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cá lăng Na Hang nướng Gia Truyền",
        "address": "Khu phố ẩm thực Khu sinh thái Hồ Na Hang - Lâm Bình, Tỉnh Tuyên Quang",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Tuyên Quang",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Tuyên Quang",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 138,
    "province_id": "tuyenquang",
    "province_name": "Tỉnh Tuyên Quang",
    "region": "North",
    "name": "Thịt trâu khô Tuyên Quang",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Tuyên Quang, thuộc cụm danh thắng Khu sinh thái Hồ Na Hang - Lâm Bình.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Thịt trâu khô Tuyên Quang Gia Truyền",
        "address": "Khu phố ẩm thực Khu sinh thái Hồ Na Hang - Lâm Bình, Tỉnh Tuyên Quang",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Tuyên Quang",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Tuyên Quang",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 139,
    "province_id": "tuyenquang",
    "province_name": "Tỉnh Tuyên Quang",
    "region": "North",
    "name": "Gỏi cá bỗng sông Lô",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Tuyên Quang, thuộc cụm danh thắng Khu sinh thái Hồ Na Hang - Lâm Bình.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Gỏi cá bỗng sông Lô Gia Truyền",
        "address": "Khu phố ẩm thực Khu sinh thái Hồ Na Hang - Lâm Bình, Tỉnh Tuyên Quang",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Tuyên Quang",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Tuyên Quang",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 140,
    "province_id": "tuyenquang",
    "province_name": "Tỉnh Tuyên Quang",
    "region": "North",
    "name": "Bánh gai Chiêm Hóa",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Tuyên Quang, thuộc cụm danh thắng Khu sinh thái Hồ Na Hang - Lâm Bình.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh gai Chiêm Hóa Gia Truyền",
        "address": "Khu phố ẩm thực Khu sinh thái Hồ Na Hang - Lâm Bình, Tỉnh Tuyên Quang",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Tuyên Quang",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Tuyên Quang",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 141,
    "province_id": "thainguyen",
    "province_name": "Tỉnh Thái Nguyên",
    "region": "North",
    "name": "Cá mương nướng kẹp tre",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Thái Nguyên, thuộc cụm danh thắng Vườn quốc gia & Hồ Ba Bể (Bắc Kạn).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cá mương nướng kẹp tre Gia Truyền",
        "address": "Khu phố ẩm thực Vườn quốc gia & Hồ Ba Bể (Bắc Kạn), Tỉnh Thái Nguyên",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Thái Nguyên",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Thái Nguyên",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 142,
    "province_id": "thainguyen",
    "province_name": "Tỉnh Thái Nguyên",
    "region": "North",
    "name": "Tép chua Ba Bể",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Thái Nguyên, thuộc cụm danh thắng Vườn quốc gia & Hồ Ba Bể (Bắc Kạn).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Tép chua Ba Bể Gia Truyền",
        "address": "Khu phố ẩm thực Vườn quốc gia & Hồ Ba Bể (Bắc Kạn), Tỉnh Thái Nguyên",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Thái Nguyên",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Thái Nguyên",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 143,
    "province_id": "thainguyen",
    "province_name": "Tỉnh Thái Nguyên",
    "region": "North",
    "name": "Lợn sữa quay mắc mật",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Thái Nguyên, thuộc cụm danh thắng Vườn quốc gia & Hồ Ba Bể (Bắc Kạn).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Lợn sữa quay mắc mật Gia Truyền",
        "address": "Khu phố ẩm thực Vườn quốc gia & Hồ Ba Bể (Bắc Kạn), Tỉnh Thái Nguyên",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Thái Nguyên",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Thái Nguyên",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 144,
    "province_id": "thainguyen",
    "province_name": "Tỉnh Thái Nguyên",
    "region": "North",
    "name": "Miến dong Na Rì",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Thái Nguyên, thuộc cụm danh thắng Vườn quốc gia & Hồ Ba Bể (Bắc Kạn).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Miến dong Na Rì Gia Truyền",
        "address": "Khu phố ẩm thực Vườn quốc gia & Hồ Ba Bể (Bắc Kạn), Tỉnh Thái Nguyên",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Thái Nguyên",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Thái Nguyên",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 145,
    "province_id": "thainguyen",
    "province_name": "Tỉnh Thái Nguyên",
    "region": "North",
    "name": "Trà Đinh Tân Cương thượng hạng",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Thái Nguyên, thuộc cụm danh thắng Vùng đồi chè đặc sản Tân Cương & Hồ Núi Cốc.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Trà Đinh Tân Cương thượng hạng Gia Truyền",
        "address": "Khu phố ẩm thực Vùng đồi chè đặc sản Tân Cương & Hồ Núi Cốc, Tỉnh Thái Nguyên",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Thái Nguyên",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Thái Nguyên",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 146,
    "province_id": "thainguyen",
    "province_name": "Tỉnh Thái Nguyên",
    "region": "North",
    "name": "Cơm lam Định Hóa",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Thái Nguyên, thuộc cụm danh thắng Vùng đồi chè đặc sản Tân Cương & Hồ Núi Cốc.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cơm lam Định Hóa Gia Truyền",
        "address": "Khu phố ẩm thực Vùng đồi chè đặc sản Tân Cương & Hồ Núi Cốc, Tỉnh Thái Nguyên",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Thái Nguyên",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Thái Nguyên",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 147,
    "province_id": "thainguyen",
    "province_name": "Tỉnh Thái Nguyên",
    "region": "North",
    "name": "Bánh chưng Bờ Đậu",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Thái Nguyên, thuộc cụm danh thắng Vùng đồi chè đặc sản Tân Cương & Hồ Núi Cốc.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh chưng Bờ Đậu Gia Truyền",
        "address": "Khu phố ẩm thực Vùng đồi chè đặc sản Tân Cương & Hồ Núi Cốc, Tỉnh Thái Nguyên",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Thái Nguyên",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Thái Nguyên",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 148,
    "province_id": "thainguyen",
    "province_name": "Tỉnh Thái Nguyên",
    "region": "North",
    "name": "Nem chua Đại Từ",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Thái Nguyên, thuộc cụm danh thắng Vùng đồi chè đặc sản Tân Cương & Hồ Núi Cốc.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Nem chua Đại Từ Gia Truyền",
        "address": "Khu phố ẩm thực Vùng đồi chè đặc sản Tân Cương & Hồ Núi Cốc, Tỉnh Thái Nguyên",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Thái Nguyên",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Thái Nguyên",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 149,
    "province_id": "phutho",
    "province_name": "Tỉnh Phú Thọ",
    "region": "North",
    "name": "Thịt chua Thanh Sơn",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Phú Thọ, thuộc cụm danh thắng Khu Di tích Lịch sử Đền Hùng.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Thịt chua Thanh Sơn Gia Truyền",
        "address": "Khu phố ẩm thực Khu Di tích Lịch sử Đền Hùng, Tỉnh Phú Thọ",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Phú Thọ",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Phú Thọ",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 150,
    "province_id": "phutho",
    "province_name": "Tỉnh Phú Thọ",
    "region": "North",
    "name": "Bánh tai Phú Thọ",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Phú Thọ, thuộc cụm danh thắng Khu Di tích Lịch sử Đền Hùng.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh tai Phú Thọ Gia Truyền",
        "address": "Khu phố ẩm thực Khu Di tích Lịch sử Đền Hùng, Tỉnh Phú Thọ",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Phú Thọ",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Phú Thọ",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 151,
    "province_id": "phutho",
    "province_name": "Tỉnh Phú Thọ",
    "region": "North",
    "name": "Cá anh vũ tiến vua",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Phú Thọ, thuộc cụm danh thắng Khu Di tích Lịch sử Đền Hùng.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cá anh vũ tiến vua Gia Truyền",
        "address": "Khu phố ẩm thực Khu Di tích Lịch sử Đền Hùng, Tỉnh Phú Thọ",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Phú Thọ",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Phú Thọ",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 152,
    "province_id": "phutho",
    "province_name": "Tỉnh Phú Thọ",
    "region": "North",
    "name": "Búp khoai kho tương",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Phú Thọ, thuộc cụm danh thắng Khu Di tích Lịch sử Đền Hùng.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Búp khoai kho tương Gia Truyền",
        "address": "Khu phố ẩm thực Khu Di tích Lịch sử Đền Hùng, Tỉnh Phú Thọ",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Phú Thọ",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Phú Thọ",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 153,
    "province_id": "phutho",
    "province_name": "Tỉnh Phú Thọ",
    "region": "North",
    "name": "Ngọn su su xào tỏi",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Phú Thọ, thuộc cụm danh thắng Khu nghỉ dưỡng Tam Đảo (Vĩnh Phúc).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Ngọn su su xào tỏi Gia Truyền",
        "address": "Khu phố ẩm thực Khu nghỉ dưỡng Tam Đảo (Vĩnh Phúc), Tỉnh Phú Thọ",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Phú Thọ",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Phú Thọ",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 154,
    "province_id": "phutho",
    "province_name": "Tỉnh Phú Thọ",
    "region": "North",
    "name": "Gà đồi Tam Đảo nướng bọc giấy bạc",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Phú Thọ, thuộc cụm danh thắng Khu nghỉ dưỡng Tam Đảo (Vĩnh Phúc).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Gà đồi Tam Đảo nướng bọc giấy bạc Gia Truyền",
        "address": "Khu phố ẩm thực Khu nghỉ dưỡng Tam Đảo (Vĩnh Phúc), Tỉnh Phú Thọ",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Phú Thọ",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Phú Thọ",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 155,
    "province_id": "phutho",
    "province_name": "Tỉnh Phú Thọ",
    "region": "North",
    "name": "Thịt lợn mán nướng",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Phú Thọ, thuộc cụm danh thắng Khu nghỉ dưỡng Tam Đảo (Vĩnh Phúc).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Thịt lợn mán nướng Gia Truyền",
        "address": "Khu phố ẩm thực Khu nghỉ dưỡng Tam Đảo (Vĩnh Phúc), Tỉnh Phú Thọ",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Phú Thọ",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Phú Thọ",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 156,
    "province_id": "phutho",
    "province_name": "Tỉnh Phú Thọ",
    "region": "North",
    "name": "Rượu ngô Tây Thiên",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Phú Thọ, thuộc cụm danh thắng Khu nghỉ dưỡng Tam Đảo (Vĩnh Phúc).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Rượu ngô Tây Thiên Gia Truyền",
        "address": "Khu phố ẩm thực Khu nghỉ dưỡng Tam Đảo (Vĩnh Phúc), Tỉnh Phú Thọ",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Phú Thọ",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Phú Thọ",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 157,
    "province_id": "phutho",
    "province_name": "Tỉnh Phú Thọ",
    "region": "North",
    "name": "Cơm lam nếp nương Mai Châu",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Phú Thọ, thuộc cụm danh thắng Thung lũng Mai Châu (Hòa Bình).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cơm lam nếp nương Mai Châu Gia Truyền",
        "address": "Khu phố ẩm thực Thung lũng Mai Châu (Hòa Bình), Tỉnh Phú Thọ",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Phú Thọ",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Phú Thọ",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 158,
    "province_id": "phutho",
    "province_name": "Tỉnh Phú Thọ",
    "region": "North",
    "name": "Cá suối nướng Pa Pỉnh Tộp",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Phú Thọ, thuộc cụm danh thắng Thung lũng Mai Châu (Hòa Bình).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cá suối nướng Pa Pỉnh Tộp Gia Truyền",
        "address": "Khu phố ẩm thực Thung lũng Mai Châu (Hòa Bình), Tỉnh Phú Thọ",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Phú Thọ",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Phú Thọ",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 159,
    "province_id": "phutho",
    "province_name": "Tỉnh Phú Thọ",
    "region": "North",
    "name": "Thịt lợn cắp nách nướng hạt dổi",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Phú Thọ, thuộc cụm danh thắng Thung lũng Mai Châu (Hòa Bình).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Thịt lợn cắp nách nướng hạt dổi Gia Truyền",
        "address": "Khu phố ẩm thực Thung lũng Mai Châu (Hòa Bình), Tỉnh Phú Thọ",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Phú Thọ",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Phú Thọ",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 160,
    "province_id": "phutho",
    "province_name": "Tỉnh Phú Thọ",
    "region": "North",
    "name": "Rượu cần Mường",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Phú Thọ, thuộc cụm danh thắng Thung lũng Mai Châu (Hòa Bình).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Rượu cần Mường Gia Truyền",
        "address": "Khu phố ẩm thực Thung lũng Mai Châu (Hòa Bình), Tỉnh Phú Thọ",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Phú Thọ",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Phú Thọ",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 161,
    "province_id": "bacninh",
    "province_name": "Tỉnh Bắc Ninh",
    "region": "North",
    "name": "Bánh phu thê Đình Bảng",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Bắc Ninh, thuộc cụm danh thắng Cái nôi Quan Họ & Các ngôi Chùa Cổ Kinh Bắc.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh phu thê Đình Bảng Gia Truyền",
        "address": "Khu phố ẩm thực Cái nôi Quan Họ & Các ngôi Chùa Cổ Kinh Bắc, Tỉnh Bắc Ninh",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Bắc Ninh",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Bắc Ninh",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 162,
    "province_id": "bacninh",
    "province_name": "Tỉnh Bắc Ninh",
    "region": "North",
    "name": "Nem bùi Ninh Xá",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Bắc Ninh, thuộc cụm danh thắng Cái nôi Quan Họ & Các ngôi Chùa Cổ Kinh Bắc.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Nem bùi Ninh Xá Gia Truyền",
        "address": "Khu phố ẩm thực Cái nôi Quan Họ & Các ngôi Chùa Cổ Kinh Bắc, Tỉnh Bắc Ninh",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Bắc Ninh",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Bắc Ninh",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 163,
    "province_id": "bacninh",
    "province_name": "Tỉnh Bắc Ninh",
    "region": "North",
    "name": "Bánh tẻ làng Chờ",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Bắc Ninh, thuộc cụm danh thắng Cái nôi Quan Họ & Các ngôi Chùa Cổ Kinh Bắc.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh tẻ làng Chờ Gia Truyền",
        "address": "Khu phố ẩm thực Cái nôi Quan Họ & Các ngôi Chùa Cổ Kinh Bắc, Tỉnh Bắc Ninh",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Bắc Ninh",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Bắc Ninh",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 164,
    "province_id": "bacninh",
    "province_name": "Tỉnh Bắc Ninh",
    "region": "North",
    "name": "Gà Hồ Thuận Thành tiến vua",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Bắc Ninh, thuộc cụm danh thắng Cái nôi Quan Họ & Các ngôi Chùa Cổ Kinh Bắc.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Gà Hồ Thuận Thành tiến vua Gia Truyền",
        "address": "Khu phố ẩm thực Cái nôi Quan Họ & Các ngôi Chùa Cổ Kinh Bắc, Tỉnh Bắc Ninh",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Bắc Ninh",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Bắc Ninh",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 165,
    "province_id": "bacninh",
    "province_name": "Tỉnh Bắc Ninh",
    "region": "North",
    "name": "Vải thiều Lục Ngạn",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Bắc Ninh, thuộc cụm danh thắng Khu Di tích Tâm linh Tây Yên Tử (Bắc Giang).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Vải thiều Lục Ngạn Gia Truyền",
        "address": "Khu phố ẩm thực Khu Di tích Tâm linh Tây Yên Tử (Bắc Giang), Tỉnh Bắc Ninh",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Bắc Ninh",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Bắc Ninh",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 166,
    "province_id": "bacninh",
    "province_name": "Tỉnh Bắc Ninh",
    "region": "North",
    "name": "Bánh đa Kế",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Bắc Ninh, thuộc cụm danh thắng Khu Di tích Tâm linh Tây Yên Tử (Bắc Giang).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh đa Kế Gia Truyền",
        "address": "Khu phố ẩm thực Khu Di tích Tâm linh Tây Yên Tử (Bắc Giang), Tỉnh Bắc Ninh",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Bắc Ninh",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Bắc Ninh",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 167,
    "province_id": "bacninh",
    "province_name": "Tỉnh Bắc Ninh",
    "region": "North",
    "name": "Mì Chũ Lục Ngạn",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Bắc Ninh, thuộc cụm danh thắng Khu Di tích Tâm linh Tây Yên Tử (Bắc Giang).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Mì Chũ Lục Ngạn Gia Truyền",
        "address": "Khu phố ẩm thực Khu Di tích Tâm linh Tây Yên Tử (Bắc Giang), Tỉnh Bắc Ninh",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Bắc Ninh",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Bắc Ninh",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 168,
    "province_id": "bacninh",
    "province_name": "Tỉnh Bắc Ninh",
    "region": "North",
    "name": "Rượu làng Vân",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Bắc Ninh, thuộc cụm danh thắng Khu Di tích Tâm linh Tây Yên Tử (Bắc Giang).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Rượu làng Vân Gia Truyền",
        "address": "Khu phố ẩm thực Khu Di tích Tâm linh Tây Yên Tử (Bắc Giang), Tỉnh Bắc Ninh",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Bắc Ninh",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Bắc Ninh",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 169,
    "province_id": "hungyen",
    "province_name": "Tỉnh Hưng Yên",
    "region": "North",
    "name": "Nhãn lồng Hưng Yên",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Hưng Yên, thuộc cụm danh thắng Quần thể Di tích Phố Hiến cổ danh tiếng.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Nhãn lồng Hưng Yên Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Di tích Phố Hiến cổ danh tiếng, Tỉnh Hưng Yên",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Hưng Yên",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Hưng Yên",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 170,
    "province_id": "hungyen",
    "province_name": "Tỉnh Hưng Yên",
    "region": "North",
    "name": "Chè hạt sen long nhãn",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Hưng Yên, thuộc cụm danh thắng Quần thể Di tích Phố Hiến cổ danh tiếng.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Chè hạt sen long nhãn Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Di tích Phố Hiến cổ danh tiếng, Tỉnh Hưng Yên",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Hưng Yên",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Hưng Yên",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 171,
    "province_id": "hungyen",
    "province_name": "Tỉnh Hưng Yên",
    "region": "North",
    "name": "Bún thang lươn Phố Hiến",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Hưng Yên, thuộc cụm danh thắng Quần thể Di tích Phố Hiến cổ danh tiếng.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bún thang lươn Phố Hiến Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Di tích Phố Hiến cổ danh tiếng, Tỉnh Hưng Yên",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Hưng Yên",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Hưng Yên",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 172,
    "province_id": "hungyen",
    "province_name": "Tỉnh Hưng Yên",
    "region": "North",
    "name": "Gà Đông Tảo chân khủng",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Hưng Yên, thuộc cụm danh thắng Quần thể Di tích Phố Hiến cổ danh tiếng.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Gà Đông Tảo chân khủng Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Di tích Phố Hiến cổ danh tiếng, Tỉnh Hưng Yên",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Hưng Yên",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Hưng Yên",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 173,
    "province_id": "hungyen",
    "province_name": "Tỉnh Hưng Yên",
    "region": "North",
    "name": "Bánh cáy Làng Nguyễn",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Hưng Yên, thuộc cụm danh thắng Quần thể Chùa Keo & Đền Trần (Thái Bình).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh cáy Làng Nguyễn Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Chùa Keo & Đền Trần (Thái Bình), Tỉnh Hưng Yên",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Hưng Yên",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Hưng Yên",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 174,
    "province_id": "hungyen",
    "province_name": "Tỉnh Hưng Yên",
    "region": "North",
    "name": "Canh cá Quỳnh Côi",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Hưng Yên, thuộc cụm danh thắng Quần thể Chùa Keo & Đền Trần (Thái Bình).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Canh cá Quỳnh Côi Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Chùa Keo & Đền Trần (Thái Bình), Tỉnh Hưng Yên",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Hưng Yên",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Hưng Yên",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 175,
    "province_id": "hungyen",
    "province_name": "Tỉnh Hưng Yên",
    "region": "North",
    "name": "Ổi Bo Thái Bình",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Hưng Yên, thuộc cụm danh thắng Quần thể Chùa Keo & Đền Trần (Thái Bình).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Ổi Bo Thái Bình Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Chùa Keo & Đền Trần (Thái Bình), Tỉnh Hưng Yên",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Hưng Yên",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Hưng Yên",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 176,
    "province_id": "hungyen",
    "province_name": "Tỉnh Hưng Yên",
    "region": "North",
    "name": "Nộm sứa Thái Thụy",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Hưng Yên, thuộc cụm danh thắng Quần thể Chùa Keo & Đền Trần (Thái Bình).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Nộm sứa Thái Thụy Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Chùa Keo & Đền Trần (Thái Bình), Tỉnh Hưng Yên",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Hưng Yên",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Hưng Yên",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 177,
    "province_id": "quangtri",
    "province_name": "Tỉnh Quảng Trị",
    "region": "Central",
    "name": "Cháo canh cá lóc Quảng Bình",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Quảng Trị, thuộc cụm danh thắng Vườn quốc gia Phong Nha - Kẻ Bàng & Sơn Đoòng (Quảng Bình).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cháo canh cá lóc Quảng Bình Gia Truyền",
        "address": "Khu phố ẩm thực Vườn quốc gia Phong Nha - Kẻ Bàng & Sơn Đoòng (Quảng Bình), Tỉnh Quảng Trị",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Quảng Trị",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Quảng Trị",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 178,
    "province_id": "quangtri",
    "province_name": "Tỉnh Quảng Trị",
    "region": "Central",
    "name": "Bánh lọc bột sắn",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Quảng Trị, thuộc cụm danh thắng Vườn quốc gia Phong Nha - Kẻ Bàng & Sơn Đoòng (Quảng Bình).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh lọc bột sắn Gia Truyền",
        "address": "Khu phố ẩm thực Vườn quốc gia Phong Nha - Kẻ Bàng & Sơn Đoòng (Quảng Bình), Tỉnh Quảng Trị",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Quảng Trị",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Quảng Trị",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 179,
    "province_id": "quangtri",
    "province_name": "Tỉnh Quảng Trị",
    "region": "Central",
    "name": "Gà nướng muối cheo",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Quảng Trị, thuộc cụm danh thắng Vườn quốc gia Phong Nha - Kẻ Bàng & Sơn Đoòng (Quảng Bình).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Gà nướng muối cheo Gia Truyền",
        "address": "Khu phố ẩm thực Vườn quốc gia Phong Nha - Kẻ Bàng & Sơn Đoòng (Quảng Bình), Tỉnh Quảng Trị",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Quảng Trị",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Quảng Trị",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 180,
    "province_id": "quangtri",
    "province_name": "Tỉnh Quảng Trị",
    "region": "Central",
    "name": "Khoai dẻo",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Quảng Trị, thuộc cụm danh thắng Vườn quốc gia Phong Nha - Kẻ Bàng & Sơn Đoòng (Quảng Bình).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Khoai dẻo Gia Truyền",
        "address": "Khu phố ẩm thực Vườn quốc gia Phong Nha - Kẻ Bàng & Sơn Đoòng (Quảng Bình), Tỉnh Quảng Trị",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Quảng Trị",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Quảng Trị",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 181,
    "province_id": "quangtri",
    "province_name": "Tỉnh Quảng Trị",
    "region": "Central",
    "name": "Bánh ướt Phương Lang",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Quảng Trị, thuộc cụm danh thắng Vùng đất lửa Lịch sử Quảng Trị.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh ướt Phương Lang Gia Truyền",
        "address": "Khu phố ẩm thực Vùng đất lửa Lịch sử Quảng Trị, Tỉnh Quảng Trị",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Quảng Trị",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Quảng Trị",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 182,
    "province_id": "quangtri",
    "province_name": "Tỉnh Quảng Trị",
    "region": "Central",
    "name": "Cháo bột Hải Lăng",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Quảng Trị, thuộc cụm danh thắng Vùng đất lửa Lịch sử Quảng Trị.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cháo bột Hải Lăng Gia Truyền",
        "address": "Khu phố ẩm thực Vùng đất lửa Lịch sử Quảng Trị, Tỉnh Quảng Trị",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Quảng Trị",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Quảng Trị",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 183,
    "province_id": "quangtri",
    "province_name": "Tỉnh Quảng Trị",
    "region": "Central",
    "name": "Thịt trâu lá trơng",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Quảng Trị, thuộc cụm danh thắng Vùng đất lửa Lịch sử Quảng Trị.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Thịt trâu lá trơng Gia Truyền",
        "address": "Khu phố ẩm thực Vùng đất lửa Lịch sử Quảng Trị, Tỉnh Quảng Trị",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Quảng Trị",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Quảng Trị",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 184,
    "province_id": "quangtri",
    "province_name": "Tỉnh Quảng Trị",
    "region": "Central",
    "name": "Tiêu Cùa",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Quảng Trị, thuộc cụm danh thắng Vùng đất lửa Lịch sử Quảng Trị.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Tiêu Cùa Gia Truyền",
        "address": "Khu phố ẩm thực Vùng đất lửa Lịch sử Quảng Trị, Tỉnh Quảng Trị",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Quảng Trị",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Quảng Trị",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 185,
    "province_id": "quangngai",
    "province_name": "Tỉnh Quảng Ngãi",
    "region": "Central",
    "name": "Gỏi tỏi Lý Sơn",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Quảng Ngãi, thuộc cụm danh thắng Đảo núi lửa Lý Sơn (Vương quốc tỏi).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Gỏi tỏi Lý Sơn Gia Truyền",
        "address": "Khu phố ẩm thực Đảo núi lửa Lý Sơn (Vương quốc tỏi), Tỉnh Quảng Ngãi",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Quảng Ngãi",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Quảng Ngãi",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 186,
    "province_id": "quangngai",
    "province_name": "Tỉnh Quảng Ngãi",
    "region": "Central",
    "name": "Cua Huỳnh Đế hấp",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Quảng Ngãi, thuộc cụm danh thắng Đảo núi lửa Lý Sơn (Vương quốc tỏi).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cua Huỳnh Đế hấp Gia Truyền",
        "address": "Khu phố ẩm thực Đảo núi lửa Lý Sơn (Vương quốc tỏi), Tỉnh Quảng Ngãi",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Quảng Ngãi",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Quảng Ngãi",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 187,
    "province_id": "quangngai",
    "province_name": "Tỉnh Quảng Ngãi",
    "region": "Central",
    "name": "Ốc cừ xào sả ớt",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Quảng Ngãi, thuộc cụm danh thắng Đảo núi lửa Lý Sơn (Vương quốc tỏi).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Ốc cừ xào sả ớt Gia Truyền",
        "address": "Khu phố ẩm thực Đảo núi lửa Lý Sơn (Vương quốc tỏi), Tỉnh Quảng Ngãi",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Quảng Ngãi",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Quảng Ngãi",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 188,
    "province_id": "quangngai",
    "province_name": "Tỉnh Quảng Ngãi",
    "region": "Central",
    "name": "Chả cá đỏ củ",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Quảng Ngãi, thuộc cụm danh thắng Đảo núi lửa Lý Sơn (Vương quốc tỏi).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Chả cá đỏ củ Gia Truyền",
        "address": "Khu phố ẩm thực Đảo núi lửa Lý Sơn (Vương quốc tỏi), Tỉnh Quảng Ngãi",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Quảng Ngãi",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Quảng Ngãi",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 189,
    "province_id": "quangngai",
    "province_name": "Tỉnh Quảng Ngãi",
    "region": "Central",
    "name": "Gà nướng cơm lam Măng Đen",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Quảng Ngãi, thuộc cụm danh thắng Khu sinh thái Măng Đen - Đà Lạt thứ hai (Kon Tum).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Gà nướng cơm lam Măng Đen Gia Truyền",
        "address": "Khu phố ẩm thực Khu sinh thái Măng Đen - Đà Lạt thứ hai (Kon Tum), Tỉnh Quảng Ngãi",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Quảng Ngãi",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Quảng Ngãi",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 190,
    "province_id": "quangngai",
    "province_name": "Tỉnh Quảng Ngãi",
    "region": "Central",
    "name": "Lẩu cá tầm măng chua",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Quảng Ngãi, thuộc cụm danh thắng Khu sinh thái Măng Đen - Đà Lạt thứ hai (Kon Tum).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Lẩu cá tầm măng chua Gia Truyền",
        "address": "Khu phố ẩm thực Khu sinh thái Măng Đen - Đà Lạt thứ hai (Kon Tum), Tỉnh Quảng Ngãi",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Quảng Ngãi",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Quảng Ngãi",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 191,
    "province_id": "quangngai",
    "province_name": "Tỉnh Quảng Ngãi",
    "region": "Central",
    "name": "Nộm hoa chuối rừng",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Quảng Ngãi, thuộc cụm danh thắng Khu sinh thái Măng Đen - Đà Lạt thứ hai (Kon Tum).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Nộm hoa chuối rừng Gia Truyền",
        "address": "Khu phố ẩm thực Khu sinh thái Măng Đen - Đà Lạt thứ hai (Kon Tum), Tỉnh Quảng Ngãi",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Quảng Ngãi",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Quảng Ngãi",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 192,
    "province_id": "quangngai",
    "province_name": "Tỉnh Quảng Ngãi",
    "region": "Central",
    "name": "Rượu sim Măng Đen",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Quảng Ngãi, thuộc cụm danh thắng Khu sinh thái Măng Đen - Đà Lạt thứ hai (Kon Tum).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Rượu sim Măng Đen Gia Truyền",
        "address": "Khu phố ẩm thực Khu sinh thái Măng Đen - Đà Lạt thứ hai (Kon Tum), Tỉnh Quảng Ngãi",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Quảng Ngãi",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Quảng Ngãi",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 193,
    "province_id": "gialai",
    "province_name": "Tỉnh Gia Lai",
    "region": "Central",
    "name": "Bánh xèo tôm nhảy Rau Mầm",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Gia Lai, thuộc cụm danh thắng Vịnh biển Kỳ Co - Eo Gió & Quy Nhơn (Bình Định).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh xèo tôm nhảy Rau Mầm Gia Truyền",
        "address": "Khu phố ẩm thực Vịnh biển Kỳ Co - Eo Gió & Quy Nhơn (Bình Định), Tỉnh Gia Lai",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Gia Lai",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Gia Lai",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 194,
    "province_id": "gialai",
    "province_name": "Tỉnh Gia Lai",
    "region": "Central",
    "name": "Chả ram tôm đất Bình Định",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Gia Lai, thuộc cụm danh thắng Vịnh biển Kỳ Co - Eo Gió & Quy Nhơn (Bình Định).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Chả ram tôm đất Bình Định Gia Truyền",
        "address": "Khu phố ẩm thực Vịnh biển Kỳ Co - Eo Gió & Quy Nhơn (Bình Định), Tỉnh Gia Lai",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Gia Lai",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Gia Lai",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 195,
    "province_id": "gialai",
    "province_name": "Tỉnh Gia Lai",
    "region": "Central",
    "name": "Bún chả cá Quy Nhơn",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Gia Lai, thuộc cụm danh thắng Vịnh biển Kỳ Co - Eo Gió & Quy Nhơn (Bình Định).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bún chả cá Quy Nhơn Gia Truyền",
        "address": "Khu phố ẩm thực Vịnh biển Kỳ Co - Eo Gió & Quy Nhơn (Bình Định), Tỉnh Gia Lai",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Gia Lai",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Gia Lai",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 196,
    "province_id": "gialai",
    "province_name": "Tỉnh Gia Lai",
    "region": "Central",
    "name": "Bánh ít lá gai",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Gia Lai, thuộc cụm danh thắng Vịnh biển Kỳ Co - Eo Gió & Quy Nhơn (Bình Định).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh ít lá gai Gia Truyền",
        "address": "Khu phố ẩm thực Vịnh biển Kỳ Co - Eo Gió & Quy Nhơn (Bình Định), Tỉnh Gia Lai",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Gia Lai",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Gia Lai",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 197,
    "province_id": "gialai",
    "province_name": "Tỉnh Gia Lai",
    "region": "Central",
    "name": "Phở khô Gia Lai (Phở hai tô)",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Gia Lai, thuộc cụm danh thắng Biển Hồ Pleiku (T’nưng) & Núi lửa Chư Đăng Ya.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Phở khô Gia Lai (Phở hai tô) Gia Truyền",
        "address": "Khu phố ẩm thực Biển Hồ Pleiku (T’nưng) & Núi lửa Chư Đăng Ya, Tỉnh Gia Lai",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Gia Lai",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Gia Lai",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 198,
    "province_id": "gialai",
    "province_name": "Tỉnh Gia Lai",
    "region": "Central",
    "name": "Bò một nắng chấm muối kiến vàng",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Gia Lai, thuộc cụm danh thắng Biển Hồ Pleiku (T’nưng) & Núi lửa Chư Đăng Ya.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bò một nắng chấm muối kiến vàng Gia Truyền",
        "address": "Khu phố ẩm thực Biển Hồ Pleiku (T’nưng) & Núi lửa Chư Đăng Ya, Tỉnh Gia Lai",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Gia Lai",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Gia Lai",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 199,
    "province_id": "gialai",
    "province_name": "Tỉnh Gia Lai",
    "region": "Central",
    "name": "Gà nướng sa lửa",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Gia Lai, thuộc cụm danh thắng Biển Hồ Pleiku (T’nưng) & Núi lửa Chư Đăng Ya.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Gà nướng sa lửa Gia Truyền",
        "address": "Khu phố ẩm thực Biển Hồ Pleiku (T’nưng) & Núi lửa Chư Đăng Ya, Tỉnh Gia Lai",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Gia Lai",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Gia Lai",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 200,
    "province_id": "gialai",
    "province_name": "Tỉnh Gia Lai",
    "region": "Central",
    "name": "Cà phê Robusta Pleiku",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Gia Lai, thuộc cụm danh thắng Biển Hồ Pleiku (T’nưng) & Núi lửa Chư Đăng Ya.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cà phê Robusta Pleiku Gia Truyền",
        "address": "Khu phố ẩm thực Biển Hồ Pleiku (T’nưng) & Núi lửa Chư Đăng Ya, Tỉnh Gia Lai",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Gia Lai",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Gia Lai",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 201,
    "province_id": "daklak",
    "province_name": "Tỉnh Đắk Lắk",
    "region": "Central",
    "name": "Mắt cá ngừ đại dương hầm thuốc bắc",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Đắk Lắk, thuộc cụm danh thắng Gành Đá Đĩa & Mũi Điện Đại Lãnh (Phú Yên).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Mắt cá ngừ đại dương hầm thuốc bắc Gia Truyền",
        "address": "Khu phố ẩm thực Gành Đá Đĩa & Mũi Điện Đại Lãnh (Phú Yên), Tỉnh Đắk Lắk",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Đắk Lắk",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Đắk Lắk",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 202,
    "province_id": "daklak",
    "province_name": "Tỉnh Đắk Lắk",
    "region": "Central",
    "name": "Bánh canh hẹ Sông Cầu",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Đắk Lắk, thuộc cụm danh thắng Gành Đá Đĩa & Mũi Điện Đại Lãnh (Phú Yên).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh canh hẹ Sông Cầu Gia Truyền",
        "address": "Khu phố ẩm thực Gành Đá Đĩa & Mũi Điện Đại Lãnh (Phú Yên), Tỉnh Đắk Lắk",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Đắk Lắk",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Đắk Lắk",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 203,
    "province_id": "daklak",
    "province_name": "Tỉnh Đắk Lắk",
    "region": "Central",
    "name": "Gỏi cá mai đầm Ô Loan",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Đắk Lắk, thuộc cụm danh thắng Gành Đá Đĩa & Mũi Điện Đại Lãnh (Phú Yên).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Gỏi cá mai đầm Ô Loan Gia Truyền",
        "address": "Khu phố ẩm thực Gành Đá Đĩa & Mũi Điện Đại Lãnh (Phú Yên), Tỉnh Đắk Lắk",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Đắk Lắk",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Đắk Lắk",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 204,
    "province_id": "daklak",
    "province_name": "Tỉnh Đắk Lắk",
    "region": "Central",
    "name": "Bò một nắng Phú Yên",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Đắk Lắk, thuộc cụm danh thắng Gành Đá Đĩa & Mũi Điện Đại Lãnh (Phú Yên).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bò một nắng Phú Yên Gia Truyền",
        "address": "Khu phố ẩm thực Gành Đá Đĩa & Mũi Điện Đại Lãnh (Phú Yên), Tỉnh Đắk Lắk",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Đắk Lắk",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Đắk Lắk",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 205,
    "province_id": "daklak",
    "province_name": "Tỉnh Đắk Lắk",
    "region": "Central",
    "name": "Bún đỏ Buôn Ma Thuột",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Đắk Lắk, thuộc cụm danh thắng Thủ phủ Cà phê Buôn Ma Thuột & Hồ Lắk.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bún đỏ Buôn Ma Thuột Gia Truyền",
        "address": "Khu phố ẩm thực Thủ phủ Cà phê Buôn Ma Thuột & Hồ Lắk, Tỉnh Đắk Lắk",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Đắk Lắk",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Đắk Lắk",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 206,
    "province_id": "daklak",
    "province_name": "Tỉnh Đắk Lắk",
    "region": "Central",
    "name": "Gà nướng Bản Đôn chấm muối ớt rừng",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Đắk Lắk, thuộc cụm danh thắng Thủ phủ Cà phê Buôn Ma Thuột & Hồ Lắk.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Gà nướng Bản Đôn chấm muối ớt rừng Gia Truyền",
        "address": "Khu phố ẩm thực Thủ phủ Cà phê Buôn Ma Thuột & Hồ Lắk, Tỉnh Đắk Lắk",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Đắk Lắk",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Đắk Lắk",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 207,
    "province_id": "daklak",
    "province_name": "Tỉnh Đắk Lắk",
    "region": "Central",
    "name": "Cà phê chồn Buôn Ma Thuột",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Đắk Lắk, thuộc cụm danh thắng Thủ phủ Cà phê Buôn Ma Thuột & Hồ Lắk.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cà phê chồn Buôn Ma Thuột Gia Truyền",
        "address": "Khu phố ẩm thực Thủ phủ Cà phê Buôn Ma Thuột & Hồ Lắk, Tỉnh Đắk Lắk",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Đắk Lắk",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Đắk Lắk",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 208,
    "province_id": "daklak",
    "province_name": "Tỉnh Đắk Lắk",
    "region": "Central",
    "name": "Cơm lam",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Đắk Lắk, thuộc cụm danh thắng Thủ phủ Cà phê Buôn Ma Thuột & Hồ Lắk.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cơm lam Gia Truyền",
        "address": "Khu phố ẩm thực Thủ phủ Cà phê Buôn Ma Thuột & Hồ Lắk, Tỉnh Đắk Lắk",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Đắk Lắk",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Đắk Lắk",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 209,
    "province_id": "dongnai",
    "province_name": "Tỉnh Đồng Nai",
    "region": "South",
    "name": "Cá lăng sông Đồng Nai",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Đồng Nai, thuộc cụm danh thắng Vườn quốc gia Cát Tiên.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cá lăng sông Đồng Nai Gia Truyền",
        "address": "Khu phố ẩm thực Vườn quốc gia Cát Tiên, Tỉnh Đồng Nai",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Đồng Nai",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Đồng Nai",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 210,
    "province_id": "dongnai",
    "province_name": "Tỉnh Đồng Nai",
    "region": "South",
    "name": "Rau rừng chấm kho quẹt",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Đồng Nai, thuộc cụm danh thắng Vườn quốc gia Cát Tiên.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Rau rừng chấm kho quẹt Gia Truyền",
        "address": "Khu phố ẩm thực Vườn quốc gia Cát Tiên, Tỉnh Đồng Nai",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Đồng Nai",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Đồng Nai",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 211,
    "province_id": "dongnai",
    "province_name": "Tỉnh Đồng Nai",
    "region": "South",
    "name": "Gỏi bưởi Tân Triều",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Đồng Nai, thuộc cụm danh thắng Vườn quốc gia Cát Tiên.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Gỏi bưởi Tân Triều Gia Truyền",
        "address": "Khu phố ẩm thực Vườn quốc gia Cát Tiên, Tỉnh Đồng Nai",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Đồng Nai",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Đồng Nai",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 212,
    "province_id": "dongnai",
    "province_name": "Tỉnh Đồng Nai",
    "region": "South",
    "name": "Rượu bưởi Đồng Nai",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Đồng Nai, thuộc cụm danh thắng Vườn quốc gia Cát Tiên.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Rượu bưởi Đồng Nai Gia Truyền",
        "address": "Khu phố ẩm thực Vườn quốc gia Cát Tiên, Tỉnh Đồng Nai",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Đồng Nai",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Đồng Nai",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 213,
    "province_id": "dongnai",
    "province_name": "Tỉnh Đồng Nai",
    "region": "South",
    "name": "Bưởi Tân Triều",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Đồng Nai, thuộc cụm danh thắng Khu du lịch Suối Mơ & Thác Giang Điền.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bưởi Tân Triều Gia Truyền",
        "address": "Khu phố ẩm thực Khu du lịch Suối Mơ & Thác Giang Điền, Tỉnh Đồng Nai",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Đồng Nai",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Đồng Nai",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 214,
    "province_id": "dongnai",
    "province_name": "Tỉnh Đồng Nai",
    "region": "South",
    "name": "Trái cây Long Khánh",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Đồng Nai, thuộc cụm danh thắng Khu du lịch Suối Mơ & Thác Giang Điền.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Trái cây Long Khánh Gia Truyền",
        "address": "Khu phố ẩm thực Khu du lịch Suối Mơ & Thác Giang Điền, Tỉnh Đồng Nai",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Đồng Nai",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Đồng Nai",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 215,
    "province_id": "dongnai",
    "province_name": "Tỉnh Đồng Nai",
    "region": "South",
    "name": "Gà thả vườn nướng muối ớt",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Đồng Nai, thuộc cụm danh thắng Khu du lịch Suối Mơ & Thác Giang Điền.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Gà thả vườn nướng muối ớt Gia Truyền",
        "address": "Khu phố ẩm thực Khu du lịch Suối Mơ & Thác Giang Điền, Tỉnh Đồng Nai",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Đồng Nai",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Đồng Nai",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 216,
    "province_id": "dongnai",
    "province_name": "Tỉnh Đồng Nai",
    "region": "South",
    "name": "Chả đùm",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Đồng Nai, thuộc cụm danh thắng Khu du lịch Suối Mơ & Thác Giang Điền.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Chả đùm Gia Truyền",
        "address": "Khu phố ẩm thực Khu du lịch Suối Mơ & Thác Giang Điền, Tỉnh Đồng Nai",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Đồng Nai",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Đồng Nai",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 217,
    "province_id": "tayninh",
    "province_name": "Tỉnh Tây Ninh",
    "region": "South",
    "name": "Bánh tráng phơi sương Trảng Bàng",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Tây Ninh, thuộc cụm danh thắng Quần thể Danh thắng Núi Bà Đen.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh tráng phơi sương Trảng Bàng Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Danh thắng Núi Bà Đen, Tỉnh Tây Ninh",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Tây Ninh",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Tây Ninh",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 218,
    "province_id": "tayninh",
    "province_name": "Tỉnh Tây Ninh",
    "region": "South",
    "name": "Bò tơ Tây Ninh nướng",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Tây Ninh, thuộc cụm danh thắng Quần thể Danh thắng Núi Bà Đen.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bò tơ Tây Ninh nướng Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Danh thắng Núi Bà Đen, Tỉnh Tây Ninh",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Tây Ninh",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Tây Ninh",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 219,
    "province_id": "tayninh",
    "province_name": "Tỉnh Tây Ninh",
    "region": "South",
    "name": "Muối tôm Tây Ninh",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Tây Ninh, thuộc cụm danh thắng Quần thể Danh thắng Núi Bà Đen.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Muối tôm Tây Ninh Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Danh thắng Núi Bà Đen, Tỉnh Tây Ninh",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Tây Ninh",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Tây Ninh",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 220,
    "province_id": "tayninh",
    "province_name": "Tỉnh Tây Ninh",
    "region": "South",
    "name": "Mãng cầu Bà Đen",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Tây Ninh, thuộc cụm danh thắng Quần thể Danh thắng Núi Bà Đen.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Mãng cầu Bà Đen Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Danh thắng Núi Bà Đen, Tỉnh Tây Ninh",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Tây Ninh",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Tây Ninh",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 221,
    "province_id": "tayninh",
    "province_name": "Tỉnh Tây Ninh",
    "region": "South",
    "name": "Nem bưởi Tây Ninh",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Tây Ninh, thuộc cụm danh thắng Tòa Thánh Cao Đài & Làng nổi Tân Lập (Long An).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Nem bưởi Tây Ninh Gia Truyền",
        "address": "Khu phố ẩm thực Tòa Thánh Cao Đài & Làng nổi Tân Lập (Long An), Tỉnh Tây Ninh",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Tây Ninh",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Tây Ninh",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 222,
    "province_id": "tayninh",
    "province_name": "Tỉnh Tây Ninh",
    "region": "South",
    "name": "Thèo lèo Tây Ninh",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Tây Ninh, thuộc cụm danh thắng Tòa Thánh Cao Đài & Làng nổi Tân Lập (Long An).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Thèo lèo Tây Ninh Gia Truyền",
        "address": "Khu phố ẩm thực Tòa Thánh Cao Đài & Làng nổi Tân Lập (Long An), Tỉnh Tây Ninh",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Tây Ninh",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Tây Ninh",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 223,
    "province_id": "tayninh",
    "province_name": "Tỉnh Tây Ninh",
    "region": "South",
    "name": "Lẩu mắm Long An",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Tây Ninh, thuộc cụm danh thắng Tòa Thánh Cao Đài & Làng nổi Tân Lập (Long An).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Lẩu mắm Long An Gia Truyền",
        "address": "Khu phố ẩm thực Tòa Thánh Cao Đài & Làng nổi Tân Lập (Long An), Tỉnh Tây Ninh",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Tây Ninh",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Tây Ninh",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 224,
    "province_id": "tayninh",
    "province_name": "Tỉnh Tây Ninh",
    "region": "South",
    "name": "Cá lóc nướng trui",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Tây Ninh, thuộc cụm danh thắng Tòa Thánh Cao Đài & Làng nổi Tân Lập (Long An).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cá lóc nướng trui Gia Truyền",
        "address": "Khu phố ẩm thực Tòa Thánh Cao Đài & Làng nổi Tân Lập (Long An), Tỉnh Tây Ninh",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Tây Ninh",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Tây Ninh",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 225,
    "province_id": "dongthap",
    "province_name": "Tỉnh Đồng Tháp",
    "region": "South",
    "name": "Hủ tiếu Sa Đéc Bà Sẩm",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Đồng Tháp, thuộc cụm danh thắng Làng hoa kiểng Sa Đéc & Nhà cổ Huỳnh Thủy Lê.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Hủ tiếu Sa Đéc Bà Sẩm Gia Truyền",
        "address": "Khu phố ẩm thực Làng hoa kiểng Sa Đéc & Nhà cổ Huỳnh Thủy Lê, Tỉnh Đồng Tháp",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Đồng Tháp",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Đồng Tháp",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 226,
    "province_id": "dongthap",
    "province_name": "Tỉnh Đồng Tháp",
    "region": "South",
    "name": "Nem Lai Vung chua ngọt",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Đồng Tháp, thuộc cụm danh thắng Làng hoa kiểng Sa Đéc & Nhà cổ Huỳnh Thủy Lê.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Nem Lai Vung chua ngọt Gia Truyền",
        "address": "Khu phố ẩm thực Làng hoa kiểng Sa Đéc & Nhà cổ Huỳnh Thủy Lê, Tỉnh Đồng Tháp",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Đồng Tháp",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Đồng Tháp",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 227,
    "province_id": "dongthap",
    "province_name": "Tỉnh Đồng Tháp",
    "region": "South",
    "name": "Bánh phồng tôm Sa Giang",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Đồng Tháp, thuộc cụm danh thắng Làng hoa kiểng Sa Đéc & Nhà cổ Huỳnh Thủy Lê.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh phồng tôm Sa Giang Gia Truyền",
        "address": "Khu phố ẩm thực Làng hoa kiểng Sa Đéc & Nhà cổ Huỳnh Thủy Lê, Tỉnh Đồng Tháp",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Đồng Tháp",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Đồng Tháp",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 228,
    "province_id": "dongthap",
    "province_name": "Tỉnh Đồng Tháp",
    "region": "South",
    "name": "Vịt nướng Sa Đéc",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Đồng Tháp, thuộc cụm danh thắng Làng hoa kiểng Sa Đéc & Nhà cổ Huỳnh Thủy Lê.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Vịt nướng Sa Đéc Gia Truyền",
        "address": "Khu phố ẩm thực Làng hoa kiểng Sa Đéc & Nhà cổ Huỳnh Thủy Lê, Tỉnh Đồng Tháp",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Đồng Tháp",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Đồng Tháp",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 229,
    "province_id": "dongthap",
    "province_name": "Tỉnh Đồng Tháp",
    "region": "South",
    "name": "Cá lóc nướng trui cuốn lá sen non",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Đồng Tháp, thuộc cụm danh thắng Vườn quốc gia Tràm Chim & Cù lao Thới Sơn (Tiền Giang).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cá lóc nướng trui cuốn lá sen non Gia Truyền",
        "address": "Khu phố ẩm thực Vườn quốc gia Tràm Chim & Cù lao Thới Sơn (Tiền Giang), Tỉnh Đồng Tháp",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Đồng Tháp",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Đồng Tháp",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 230,
    "province_id": "dongthap",
    "province_name": "Tỉnh Đồng Tháp",
    "region": "South",
    "name": "Lẩu cua đồng hoa điên điển",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Đồng Tháp, thuộc cụm danh thắng Vườn quốc gia Tràm Chim & Cù lao Thới Sơn (Tiền Giang).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Lẩu cua đồng hoa điên điển Gia Truyền",
        "address": "Khu phố ẩm thực Vườn quốc gia Tràm Chim & Cù lao Thới Sơn (Tiền Giang), Tỉnh Đồng Tháp",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Đồng Tháp",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Đồng Tháp",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 231,
    "province_id": "dongthap",
    "province_name": "Tỉnh Đồng Tháp",
    "region": "South",
    "name": "Hủ tiếu Mỹ Tho",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Đồng Tháp, thuộc cụm danh thắng Vườn quốc gia Tràm Chim & Cù lao Thới Sơn (Tiền Giang).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Hủ tiếu Mỹ Tho Gia Truyền",
        "address": "Khu phố ẩm thực Vườn quốc gia Tràm Chim & Cù lao Thới Sơn (Tiền Giang), Tỉnh Đồng Tháp",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Đồng Tháp",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Đồng Tháp",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 232,
    "province_id": "dongthap",
    "province_name": "Tỉnh Đồng Tháp",
    "region": "South",
    "name": "Ốc treo giàn bếp",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Đồng Tháp, thuộc cụm danh thắng Vườn quốc gia Tràm Chim & Cù lao Thới Sơn (Tiền Giang).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Ốc treo giàn bếp Gia Truyền",
        "address": "Khu phố ẩm thực Vườn quốc gia Tràm Chim & Cù lao Thới Sơn (Tiền Giang), Tỉnh Đồng Tháp",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Đồng Tháp",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Đồng Tháp",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 233,
    "province_id": "vinhlong",
    "province_name": "Tỉnh Vĩnh Long",
    "region": "South",
    "name": "Kẹo dừa Bến Tre",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Vĩnh Long, thuộc cụm danh thắng Xứ dừa Bến Tre & Cồn Phụng Đạo Dừa.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Kẹo dừa Bến Tre Gia Truyền",
        "address": "Khu phố ẩm thực Xứ dừa Bến Tre & Cồn Phụng Đạo Dừa, Tỉnh Vĩnh Long",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Vĩnh Long",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Vĩnh Long",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 234,
    "province_id": "vinhlong",
    "province_name": "Tỉnh Vĩnh Long",
    "region": "South",
    "name": "Cơm trái dừa tôm rim",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Vĩnh Long, thuộc cụm danh thắng Xứ dừa Bến Tre & Cồn Phụng Đạo Dừa.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cơm trái dừa tôm rim Gia Truyền",
        "address": "Khu phố ẩm thực Xứ dừa Bến Tre & Cồn Phụng Đạo Dừa, Tỉnh Vĩnh Long",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Vĩnh Long",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Vĩnh Long",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 235,
    "province_id": "vinhlong",
    "province_name": "Tỉnh Vĩnh Long",
    "region": "South",
    "name": "Gỏi củ hủ dừa",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Vĩnh Long, thuộc cụm danh thắng Xứ dừa Bến Tre & Cồn Phụng Đạo Dừa.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Gỏi củ hủ dừa Gia Truyền",
        "address": "Khu phố ẩm thực Xứ dừa Bến Tre & Cồn Phụng Đạo Dừa, Tỉnh Vĩnh Long",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Vĩnh Long",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Vĩnh Long",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 236,
    "province_id": "vinhlong",
    "province_name": "Tỉnh Vĩnh Long",
    "region": "South",
    "name": "Bánh xèo ốc gạo Chợ Lách",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Vĩnh Long, thuộc cụm danh thắng Xứ dừa Bến Tre & Cồn Phụng Đạo Dừa.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh xèo ốc gạo Chợ Lách Gia Truyền",
        "address": "Khu phố ẩm thực Xứ dừa Bến Tre & Cồn Phụng Đạo Dừa, Tỉnh Vĩnh Long",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Vĩnh Long",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Vĩnh Long",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 237,
    "province_id": "vinhlong",
    "province_name": "Tỉnh Vĩnh Long",
    "region": "South",
    "name": "Khoai lang tím Bình Tân",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Vĩnh Long, thuộc cụm danh thắng Làng gốm đỏ Mang Thít & Chợ nổi Trà Ôn.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Khoai lang tím Bình Tân Gia Truyền",
        "address": "Khu phố ẩm thực Làng gốm đỏ Mang Thít & Chợ nổi Trà Ôn, Tỉnh Vĩnh Long",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Vĩnh Long",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Vĩnh Long",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 238,
    "province_id": "vinhlong",
    "province_name": "Tỉnh Vĩnh Long",
    "region": "South",
    "name": "Bánh tráng nem cù lao Lục Sĩ",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Vĩnh Long, thuộc cụm danh thắng Làng gốm đỏ Mang Thít & Chợ nổi Trà Ôn.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh tráng nem cù lao Lục Sĩ Gia Truyền",
        "address": "Khu phố ẩm thực Làng gốm đỏ Mang Thít & Chợ nổi Trà Ôn, Tỉnh Vĩnh Long",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Vĩnh Long",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Vĩnh Long",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 239,
    "province_id": "vinhlong",
    "province_name": "Tỉnh Vĩnh Long",
    "region": "South",
    "name": "Cá cháy Trà Ôn",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Vĩnh Long, thuộc cụm danh thắng Làng gốm đỏ Mang Thít & Chợ nổi Trà Ôn.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cá cháy Trà Ôn Gia Truyền",
        "address": "Khu phố ẩm thực Làng gốm đỏ Mang Thít & Chợ nổi Trà Ôn, Tỉnh Vĩnh Long",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Vĩnh Long",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Vĩnh Long",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 240,
    "province_id": "vinhlong",
    "province_name": "Tỉnh Vĩnh Long",
    "region": "South",
    "name": "Bưởi năm roi Bình Minh",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Vĩnh Long, thuộc cụm danh thắng Làng gốm đỏ Mang Thít & Chợ nổi Trà Ôn.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bưởi năm roi Bình Minh Gia Truyền",
        "address": "Khu phố ẩm thực Làng gốm đỏ Mang Thít & Chợ nổi Trà Ôn, Tỉnh Vĩnh Long",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Vĩnh Long",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Vĩnh Long",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 241,
    "province_id": "camau",
    "province_name": "Tỉnh Cà Mau",
    "region": "South",
    "name": "Cua biển Năm Căn Cà Mau",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Cà Mau, thuộc cụm danh thắng Cột mốc Tọa độ Quốc gia Mũi Cà Mau & Rừng U Minh.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cua biển Năm Căn Cà Mau Gia Truyền",
        "address": "Khu phố ẩm thực Cột mốc Tọa độ Quốc gia Mũi Cà Mau & Rừng U Minh, Tỉnh Cà Mau",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Cà Mau",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Cà Mau",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 242,
    "province_id": "camau",
    "province_name": "Tỉnh Cà Mau",
    "region": "South",
    "name": "Cá thòi lòi nướng muối ớt",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Cà Mau, thuộc cụm danh thắng Cột mốc Tọa độ Quốc gia Mũi Cà Mau & Rừng U Minh.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cá thòi lòi nướng muối ớt Gia Truyền",
        "address": "Khu phố ẩm thực Cột mốc Tọa độ Quốc gia Mũi Cà Mau & Rừng U Minh, Tỉnh Cà Mau",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Cà Mau",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Cà Mau",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 243,
    "province_id": "camau",
    "province_name": "Tỉnh Cà Mau",
    "region": "South",
    "name": "Mật ong rừng U Minh Hạ",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Cà Mau, thuộc cụm danh thắng Cột mốc Tọa độ Quốc gia Mũi Cà Mau & Rừng U Minh.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Mật ong rừng U Minh Hạ Gia Truyền",
        "address": "Khu phố ẩm thực Cột mốc Tọa độ Quốc gia Mũi Cà Mau & Rừng U Minh, Tỉnh Cà Mau",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Cà Mau",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Cà Mau",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 244,
    "province_id": "camau",
    "province_name": "Tỉnh Cà Mau",
    "region": "South",
    "name": "Ba khía muối Rạch Gốc",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Cà Mau, thuộc cụm danh thắng Cột mốc Tọa độ Quốc gia Mũi Cà Mau & Rừng U Minh.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Ba khía muối Rạch Gốc Gia Truyền",
        "address": "Khu phố ẩm thực Cột mốc Tọa độ Quốc gia Mũi Cà Mau & Rừng U Minh, Tỉnh Cà Mau",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Cà Mau",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Cà Mau",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 245,
    "province_id": "camau",
    "province_name": "Tỉnh Cà Mau",
    "region": "South",
    "name": "Bánh tằm bì Bạc Liêu",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Cà Mau, thuộc cụm danh thắng Dinh thự Công tử Bạc Liêu & Cánh đồng quạt gió (Bạc Liêu).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh tằm bì Bạc Liêu Gia Truyền",
        "address": "Khu phố ẩm thực Dinh thự Công tử Bạc Liêu & Cánh đồng quạt gió (Bạc Liêu), Tỉnh Cà Mau",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Cà Mau",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Cà Mau",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 246,
    "province_id": "camau",
    "province_name": "Tỉnh Cà Mau",
    "region": "South",
    "name": "Bún bò cay Ánh Nguyệt",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Cà Mau, thuộc cụm danh thắng Dinh thự Công tử Bạc Liêu & Cánh đồng quạt gió (Bạc Liêu).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bún bò cay Ánh Nguyệt Gia Truyền",
        "address": "Khu phố ẩm thực Dinh thự Công tử Bạc Liêu & Cánh đồng quạt gió (Bạc Liêu), Tỉnh Cà Mau",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Cà Mau",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Cà Mau",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 247,
    "province_id": "camau",
    "province_name": "Tỉnh Cà Mau",
    "region": "South",
    "name": "Bánh củ cải Bạc Liêu",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Cà Mau, thuộc cụm danh thắng Dinh thự Công tử Bạc Liêu & Cánh đồng quạt gió (Bạc Liêu).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh củ cải Bạc Liêu Gia Truyền",
        "address": "Khu phố ẩm thực Dinh thự Công tử Bạc Liêu & Cánh đồng quạt gió (Bạc Liêu), Tỉnh Cà Mau",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Cà Mau",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Cà Mau",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 248,
    "province_id": "camau",
    "province_name": "Tỉnh Cà Mau",
    "region": "South",
    "name": "Nhãn da bò Bạc Liêu",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Cà Mau, thuộc cụm danh thắng Dinh thự Công tử Bạc Liêu & Cánh đồng quạt gió (Bạc Liêu).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Nhãn da bò Bạc Liêu Gia Truyền",
        "address": "Khu phố ẩm thực Dinh thự Công tử Bạc Liêu & Cánh đồng quạt gió (Bạc Liêu), Tỉnh Cà Mau",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Cà Mau",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Cà Mau",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 249,
    "province_id": "langson",
    "province_name": "Tỉnh Lạng Sơn",
    "region": "North",
    "name": "Vịt quay Lạng Sơn mắc mật",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Lạng Sơn, thuộc cụm danh thắng Khu du lịch Đỉnh Mẫu Sơn tuyết phủ.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Vịt quay Lạng Sơn mắc mật Gia Truyền",
        "address": "Khu phố ẩm thực Khu du lịch Đỉnh Mẫu Sơn tuyết phủ, Tỉnh Lạng Sơn",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Lạng Sơn",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Lạng Sơn",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 250,
    "province_id": "langson",
    "province_name": "Tỉnh Lạng Sơn",
    "region": "North",
    "name": "Khau nhục Lạng Sơn",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Lạng Sơn, thuộc cụm danh thắng Khu du lịch Đỉnh Mẫu Sơn tuyết phủ.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Khau nhục Lạng Sơn Gia Truyền",
        "address": "Khu phố ẩm thực Khu du lịch Đỉnh Mẫu Sơn tuyết phủ, Tỉnh Lạng Sơn",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Lạng Sơn",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Lạng Sơn",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 251,
    "province_id": "langson",
    "province_name": "Tỉnh Lạng Sơn",
    "region": "North",
    "name": "Rượu Mẫu Sơn",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Lạng Sơn, thuộc cụm danh thắng Khu du lịch Đỉnh Mẫu Sơn tuyết phủ.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Rượu Mẫu Sơn Gia Truyền",
        "address": "Khu phố ẩm thực Khu du lịch Đỉnh Mẫu Sơn tuyết phủ, Tỉnh Lạng Sơn",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Lạng Sơn",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Lạng Sơn",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 252,
    "province_id": "langson",
    "province_name": "Tỉnh Lạng Sơn",
    "region": "North",
    "name": "Đào chuông Mẫu Sơn",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Lạng Sơn, thuộc cụm danh thắng Khu du lịch Đỉnh Mẫu Sơn tuyết phủ.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Đào chuông Mẫu Sơn Gia Truyền",
        "address": "Khu phố ẩm thực Khu du lịch Đỉnh Mẫu Sơn tuyết phủ, Tỉnh Lạng Sơn",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Lạng Sơn",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Lạng Sơn",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 253,
    "province_id": "langson",
    "province_name": "Tỉnh Lạng Sơn",
    "region": "North",
    "name": "Phở chua Lạng Sơn",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Lạng Sơn, thuộc cụm danh thắng Quần thể Động Tam Thanh, Nhị Thanh & Đền Mẫu.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Phở chua Lạng Sơn Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Động Tam Thanh, Nhị Thanh & Đền Mẫu, Tỉnh Lạng Sơn",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Lạng Sơn",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Lạng Sơn",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 254,
    "province_id": "langson",
    "province_name": "Tỉnh Lạng Sơn",
    "region": "North",
    "name": "Bánh áp chao Lạng Sơn",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Lạng Sơn, thuộc cụm danh thắng Quần thể Động Tam Thanh, Nhị Thanh & Đền Mẫu.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh áp chao Lạng Sơn Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Động Tam Thanh, Nhị Thanh & Đền Mẫu, Tỉnh Lạng Sơn",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Lạng Sơn",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Lạng Sơn",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 255,
    "province_id": "langson",
    "province_name": "Tỉnh Lạng Sơn",
    "region": "North",
    "name": "Nem nướng Hữu Lũng",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Lạng Sơn, thuộc cụm danh thắng Quần thể Động Tam Thanh, Nhị Thanh & Đền Mẫu.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Nem nướng Hữu Lũng Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Động Tam Thanh, Nhị Thanh & Đền Mẫu, Tỉnh Lạng Sơn",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Lạng Sơn",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Lạng Sơn",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 256,
    "province_id": "langson",
    "province_name": "Tỉnh Lạng Sơn",
    "region": "North",
    "name": "Măng ớt Lạng Sơn",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Lạng Sơn, thuộc cụm danh thắng Quần thể Động Tam Thanh, Nhị Thanh & Đền Mẫu.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Măng ớt Lạng Sơn Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Động Tam Thanh, Nhị Thanh & Đền Mẫu, Tỉnh Lạng Sơn",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Lạng Sơn",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Lạng Sơn",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 257,
    "province_id": "laichau",
    "province_name": "Tỉnh Lai Châu",
    "region": "North",
    "name": "Thịt trâu sấy gác bếp Lai Châu",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Lai Châu, thuộc cụm danh thắng Đèo Ô Quý Hồ (Cổng trời Lai Châu) & Cầu kính Rồng Mây.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Thịt trâu sấy gác bếp Lai Châu Gia Truyền",
        "address": "Khu phố ẩm thực Đèo Ô Quý Hồ (Cổng trời Lai Châu) & Cầu kính Rồng Mây, Tỉnh Lai Châu",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Lai Châu",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Lai Châu",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 258,
    "province_id": "laichau",
    "province_name": "Tỉnh Lai Châu",
    "region": "North",
    "name": "Pa pỉnh tộp (Cá suối nướng)",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Lai Châu, thuộc cụm danh thắng Đèo Ô Quý Hồ (Cổng trời Lai Châu) & Cầu kính Rồng Mây.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Pa pỉnh tộp (Cá suối nướng) Gia Truyền",
        "address": "Khu phố ẩm thực Đèo Ô Quý Hồ (Cổng trời Lai Châu) & Cầu kính Rồng Mây, Tỉnh Lai Châu",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Lai Châu",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Lai Châu",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 259,
    "province_id": "laichau",
    "province_name": "Tỉnh Lai Châu",
    "region": "North",
    "name": "Xôi tím Lai Châu",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Lai Châu, thuộc cụm danh thắng Đèo Ô Quý Hồ (Cổng trời Lai Châu) & Cầu kính Rồng Mây.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Xôi tím Lai Châu Gia Truyền",
        "address": "Khu phố ẩm thực Đèo Ô Quý Hồ (Cổng trời Lai Châu) & Cầu kính Rồng Mây, Tỉnh Lai Châu",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Lai Châu",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Lai Châu",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 260,
    "province_id": "laichau",
    "province_name": "Tỉnh Lai Châu",
    "region": "North",
    "name": "Rượu ngô Sùng Phài",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Lai Châu, thuộc cụm danh thắng Đèo Ô Quý Hồ (Cổng trời Lai Châu) & Cầu kính Rồng Mây.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Rượu ngô Sùng Phài Gia Truyền",
        "address": "Khu phố ẩm thực Đèo Ô Quý Hồ (Cổng trời Lai Châu) & Cầu kính Rồng Mây, Tỉnh Lai Châu",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Lai Châu",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Lai Châu",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 261,
    "province_id": "laichau",
    "province_name": "Tỉnh Lai Châu",
    "region": "North",
    "name": "Mèn mén người Mông",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Lai Châu, thuộc cụm danh thắng Bản du lịch cộng đồng Sin Suối Hồ.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Mèn mén người Mông Gia Truyền",
        "address": "Khu phố ẩm thực Bản du lịch cộng đồng Sin Suối Hồ, Tỉnh Lai Châu",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Lai Châu",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Lai Châu",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 262,
    "province_id": "laichau",
    "province_name": "Tỉnh Lai Châu",
    "region": "North",
    "name": "Bánh ngô nướng",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Lai Châu, thuộc cụm danh thắng Bản du lịch cộng đồng Sin Suối Hồ.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh ngô nướng Gia Truyền",
        "address": "Khu phố ẩm thực Bản du lịch cộng đồng Sin Suối Hồ, Tỉnh Lai Châu",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Lai Châu",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Lai Châu",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 263,
    "province_id": "laichau",
    "province_name": "Tỉnh Lai Châu",
    "region": "North",
    "name": "Lợn cắp nách hấp sả",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Lai Châu, thuộc cụm danh thắng Bản du lịch cộng đồng Sin Suối Hồ.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Lợn cắp nách hấp sả Gia Truyền",
        "address": "Khu phố ẩm thực Bản du lịch cộng đồng Sin Suối Hồ, Tỉnh Lai Châu",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Lai Châu",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Lai Châu",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 264,
    "province_id": "laichau",
    "province_name": "Tỉnh Lai Châu",
    "region": "North",
    "name": "Măng đắng xào thịt bò",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Lai Châu, thuộc cụm danh thắng Bản du lịch cộng đồng Sin Suối Hồ.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Măng đắng xào thịt bò Gia Truyền",
        "address": "Khu phố ẩm thực Bản du lịch cộng đồng Sin Suối Hồ, Tỉnh Lai Châu",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Lai Châu",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Lai Châu",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 265,
    "province_id": "dienbien",
    "province_name": "Tỉnh Điện Biên",
    "region": "North",
    "name": "Thịt trâu gác bếp Điện Biên",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Điện Biên, thuộc cụm danh thắng Quần thể Chiến trường Điện Biên Phủ.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Thịt trâu gác bếp Điện Biên Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Chiến trường Điện Biên Phủ, Tỉnh Điện Biên",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Điện Biên",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Điện Biên",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 266,
    "province_id": "dienbien",
    "province_name": "Tỉnh Điện Biên",
    "region": "North",
    "name": "Gạo tiến vua Điện Biên",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Điện Biên, thuộc cụm danh thắng Quần thể Chiến trường Điện Biên Phủ.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Gạo tiến vua Điện Biên Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Chiến trường Điện Biên Phủ, Tỉnh Điện Biên",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Điện Biên",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Điện Biên",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 267,
    "province_id": "dienbien",
    "province_name": "Tỉnh Điện Biên",
    "region": "North",
    "name": "Chẩm chéo Tây Bắc",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Điện Biên, thuộc cụm danh thắng Quần thể Chiến trường Điện Biên Phủ.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Chẩm chéo Tây Bắc Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Chiến trường Điện Biên Phủ, Tỉnh Điện Biên",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Điện Biên",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Điện Biên",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 268,
    "province_id": "dienbien",
    "province_name": "Tỉnh Điện Biên",
    "region": "North",
    "name": "Sâu chít ngâm rượu",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Điện Biên, thuộc cụm danh thắng Quần thể Chiến trường Điện Biên Phủ.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Sâu chít ngâm rượu Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Chiến trường Điện Biên Phủ, Tỉnh Điện Biên",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Điện Biên",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Điện Biên",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 269,
    "province_id": "dienbien",
    "province_name": "Tỉnh Điện Biên",
    "region": "North",
    "name": "Cơm lam gạo nương Điện Biên",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Điện Biên, thuộc cụm danh thắng Cánh đồng Mường Thanh & Đèo Pha Đin.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cơm lam gạo nương Điện Biên Gia Truyền",
        "address": "Khu phố ẩm thực Cánh đồng Mường Thanh & Đèo Pha Đin, Tỉnh Điện Biên",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Điện Biên",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Điện Biên",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 270,
    "province_id": "dienbien",
    "province_name": "Tỉnh Điện Biên",
    "region": "North",
    "name": "Cá chép nướng úp Pa Pỉnh Tộp",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Điện Biên, thuộc cụm danh thắng Cánh đồng Mường Thanh & Đèo Pha Đin.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cá chép nướng úp Pa Pỉnh Tộp Gia Truyền",
        "address": "Khu phố ẩm thực Cánh đồng Mường Thanh & Đèo Pha Đin, Tỉnh Điện Biên",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Điện Biên",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Điện Biên",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 271,
    "province_id": "dienbien",
    "province_name": "Tỉnh Điện Biên",
    "region": "North",
    "name": "Nộm hoa ban rừng",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Điện Biên, thuộc cụm danh thắng Cánh đồng Mường Thanh & Đèo Pha Đin.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Nộm hoa ban rừng Gia Truyền",
        "address": "Khu phố ẩm thực Cánh đồng Mường Thanh & Đèo Pha Đin, Tỉnh Điện Biên",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Điện Biên",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Điện Biên",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 272,
    "province_id": "dienbien",
    "province_name": "Tỉnh Điện Biên",
    "region": "North",
    "name": "Măng đắng",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Điện Biên, thuộc cụm danh thắng Cánh đồng Mường Thanh & Đèo Pha Đin.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Măng đắng Gia Truyền",
        "address": "Khu phố ẩm thực Cánh đồng Mường Thanh & Đèo Pha Đin, Tỉnh Điện Biên",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Điện Biên",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Điện Biên",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 273,
    "province_id": "sonla",
    "province_name": "Tỉnh Sơn La",
    "region": "North",
    "name": "Bê chao Mộc Châu",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Sơn La, thuộc cụm danh thắng Cao nguyên Mộc Châu & Đồi chè Trái Tim.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bê chao Mộc Châu Gia Truyền",
        "address": "Khu phố ẩm thực Cao nguyên Mộc Châu & Đồi chè Trái Tim, Tỉnh Sơn La",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Sơn La",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Sơn La",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 274,
    "province_id": "sonla",
    "province_name": "Tỉnh Sơn La",
    "region": "North",
    "name": "Cá hồi Mộc Châu",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Sơn La, thuộc cụm danh thắng Cao nguyên Mộc Châu & Đồi chè Trái Tim.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cá hồi Mộc Châu Gia Truyền",
        "address": "Khu phố ẩm thực Cao nguyên Mộc Châu & Đồi chè Trái Tim, Tỉnh Sơn La",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Sơn La",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Sơn La",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 275,
    "province_id": "sonla",
    "province_name": "Tỉnh Sơn La",
    "region": "North",
    "name": "Sữa tươi & Sữa chua nếp cẩm Mộc Châu",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Sơn La, thuộc cụm danh thắng Cao nguyên Mộc Châu & Đồi chè Trái Tim.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Sữa tươi & Sữa chua nếp cẩm Mộc Châu Gia Truyền",
        "address": "Khu phố ẩm thực Cao nguyên Mộc Châu & Đồi chè Trái Tim, Tỉnh Sơn La",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Sơn La",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Sơn La",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 276,
    "province_id": "sonla",
    "province_name": "Tỉnh Sơn La",
    "region": "North",
    "name": "Mận hậu Mộc Châu",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Sơn La, thuộc cụm danh thắng Cao nguyên Mộc Châu & Đồi chè Trái Tim.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Mận hậu Mộc Châu Gia Truyền",
        "address": "Khu phố ẩm thực Cao nguyên Mộc Châu & Đồi chè Trái Tim, Tỉnh Sơn La",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Sơn La",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Sơn La",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 277,
    "province_id": "sonla",
    "province_name": "Tỉnh Sơn La",
    "region": "North",
    "name": "Thịt lợn bản nướng hạt dổi",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Sơn La, thuộc cụm danh thắng Cầu kính Bạch Long (Cầu kính dài nhất thế giới).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Thịt lợn bản nướng hạt dổi Gia Truyền",
        "address": "Khu phố ẩm thực Cầu kính Bạch Long (Cầu kính dài nhất thế giới), Tỉnh Sơn La",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Sơn La",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Sơn La",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 278,
    "province_id": "sonla",
    "province_name": "Tỉnh Sơn La",
    "region": "North",
    "name": "Gà đồi nướng than",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Sơn La, thuộc cụm danh thắng Cầu kính Bạch Long (Cầu kính dài nhất thế giới).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Gà đồi nướng than Gia Truyền",
        "address": "Khu phố ẩm thực Cầu kính Bạch Long (Cầu kính dài nhất thế giới), Tỉnh Sơn La",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Sơn La",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Sơn La",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 279,
    "province_id": "sonla",
    "province_name": "Tỉnh Sơn La",
    "region": "North",
    "name": "Cơm lam nếp Mộc Châu",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Sơn La, thuộc cụm danh thắng Cầu kính Bạch Long (Cầu kính dài nhất thế giới).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cơm lam nếp Mộc Châu Gia Truyền",
        "address": "Khu phố ẩm thực Cầu kính Bạch Long (Cầu kính dài nhất thế giới), Tỉnh Sơn La",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Sơn La",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Sơn La",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 280,
    "province_id": "sonla",
    "province_name": "Tỉnh Sơn La",
    "region": "North",
    "name": "Xôi ngũ sắc",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Sơn La, thuộc cụm danh thắng Cầu kính Bạch Long (Cầu kính dài nhất thế giới).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Xôi ngũ sắc Gia Truyền",
        "address": "Khu phố ẩm thực Cầu kính Bạch Long (Cầu kính dài nhất thế giới), Tỉnh Sơn La",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Sơn La",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Sơn La",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 281,
    "province_id": "thanhhoa",
    "province_name": "Tỉnh Thanh Hóa",
    "region": "Central",
    "name": "Vịt Cổ Lũng nướng than hoa",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Thanh Hóa, thuộc cụm danh thắng Khu bảo tồn Thiên nhiên Pù Luông.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Vịt Cổ Lũng nướng than hoa Gia Truyền",
        "address": "Khu phố ẩm thực Khu bảo tồn Thiên nhiên Pù Luông, Tỉnh Thanh Hóa",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Thanh Hóa",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Thanh Hóa",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 282,
    "province_id": "thanhhoa",
    "province_name": "Tỉnh Thanh Hóa",
    "region": "Central",
    "name": "Cơm lam Pù Luông",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Thanh Hóa, thuộc cụm danh thắng Khu bảo tồn Thiên nhiên Pù Luông.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cơm lam Pù Luông Gia Truyền",
        "address": "Khu phố ẩm thực Khu bảo tồn Thiên nhiên Pù Luông, Tỉnh Thanh Hóa",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Thanh Hóa",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Thanh Hóa",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 283,
    "province_id": "thanhhoa",
    "province_name": "Tỉnh Thanh Hóa",
    "region": "Central",
    "name": "Canh đắng lòng cá",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Thanh Hóa, thuộc cụm danh thắng Khu bảo tồn Thiên nhiên Pù Luông.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Canh đắng lòng cá Gia Truyền",
        "address": "Khu phố ẩm thực Khu bảo tồn Thiên nhiên Pù Luông, Tỉnh Thanh Hóa",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Thanh Hóa",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Thanh Hóa",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 284,
    "province_id": "thanhhoa",
    "province_name": "Tỉnh Thanh Hóa",
    "region": "Central",
    "name": "Cá suối nướng",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Thanh Hóa, thuộc cụm danh thắng Khu bảo tồn Thiên nhiên Pù Luông.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cá suối nướng Gia Truyền",
        "address": "Khu phố ẩm thực Khu bảo tồn Thiên nhiên Pù Luông, Tỉnh Thanh Hóa",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Thanh Hóa",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Thanh Hóa",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 285,
    "province_id": "thanhhoa",
    "province_name": "Tỉnh Thanh Hóa",
    "region": "Central",
    "name": "Nem chua Thanh Hóa",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Thanh Hóa, thuộc cụm danh thắng Di sản Thế giới Thành Nhà Hồ & Biển Sầm Sơn.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Nem chua Thanh Hóa Gia Truyền",
        "address": "Khu phố ẩm thực Di sản Thế giới Thành Nhà Hồ & Biển Sầm Sơn, Tỉnh Thanh Hóa",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Thanh Hóa",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Thanh Hóa",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 286,
    "province_id": "thanhhoa",
    "province_name": "Tỉnh Thanh Hóa",
    "region": "Central",
    "name": "Chả tôm Thanh Hóa",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Thanh Hóa, thuộc cụm danh thắng Di sản Thế giới Thành Nhà Hồ & Biển Sầm Sơn.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Chả tôm Thanh Hóa Gia Truyền",
        "address": "Khu phố ẩm thực Di sản Thế giới Thành Nhà Hồ & Biển Sầm Sơn, Tỉnh Thanh Hóa",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Thanh Hóa",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Thanh Hóa",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 287,
    "province_id": "thanhhoa",
    "province_name": "Tỉnh Thanh Hóa",
    "region": "Central",
    "name": "Bánh khoái tép nồi gang",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Thanh Hóa, thuộc cụm danh thắng Di sản Thế giới Thành Nhà Hồ & Biển Sầm Sơn.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh khoái tép nồi gang Gia Truyền",
        "address": "Khu phố ẩm thực Di sản Thế giới Thành Nhà Hồ & Biển Sầm Sơn, Tỉnh Thanh Hóa",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Thanh Hóa",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Thanh Hóa",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 288,
    "province_id": "thanhhoa",
    "province_name": "Tỉnh Thanh Hóa",
    "region": "Central",
    "name": "Mực nhảy Sầm Sơn nướng",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Thanh Hóa, thuộc cụm danh thắng Di sản Thế giới Thành Nhà Hồ & Biển Sầm Sơn.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Mực nhảy Sầm Sơn nướng Gia Truyền",
        "address": "Khu phố ẩm thực Di sản Thế giới Thành Nhà Hồ & Biển Sầm Sơn, Tỉnh Thanh Hóa",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Thanh Hóa",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Thanh Hóa",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 289,
    "province_id": "nghean",
    "province_name": "Tỉnh Nghệ An",
    "region": "Central",
    "name": "Nhút Thanh Chương",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Nghệ An, thuộc cụm danh thắng Khu Di tích Quốc gia Kim Liên - Nam Đàn.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Nhút Thanh Chương Gia Truyền",
        "address": "Khu phố ẩm thực Khu Di tích Quốc gia Kim Liên - Nam Đàn, Tỉnh Nghệ An",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Nghệ An",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Nghệ An",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 290,
    "province_id": "nghean",
    "province_name": "Tỉnh Nghệ An",
    "region": "Central",
    "name": "Tương Nam Đàn",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Nghệ An, thuộc cụm danh thắng Khu Di tích Quốc gia Kim Liên - Nam Đàn.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Tương Nam Đàn Gia Truyền",
        "address": "Khu phố ẩm thực Khu Di tích Quốc gia Kim Liên - Nam Đàn, Tỉnh Nghệ An",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Nghệ An",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Nghệ An",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 291,
    "province_id": "nghean",
    "province_name": "Tỉnh Nghệ An",
    "region": "Central",
    "name": "Cam Xã Đoài",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Nghệ An, thuộc cụm danh thắng Khu Di tích Quốc gia Kim Liên - Nam Đàn.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cam Xã Đoài Gia Truyền",
        "address": "Khu phố ẩm thực Khu Di tích Quốc gia Kim Liên - Nam Đàn, Tỉnh Nghệ An",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Nghệ An",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Nghệ An",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 292,
    "province_id": "nghean",
    "province_name": "Tỉnh Nghệ An",
    "region": "Central",
    "name": "Bánh ngào Nghệ An",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Nghệ An, thuộc cụm danh thắng Khu Di tích Quốc gia Kim Liên - Nam Đàn.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh ngào Nghệ An Gia Truyền",
        "address": "Khu phố ẩm thực Khu Di tích Quốc gia Kim Liên - Nam Đàn, Tỉnh Nghệ An",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Nghệ An",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Nghệ An",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 293,
    "province_id": "nghean",
    "province_name": "Tỉnh Nghệ An",
    "region": "Central",
    "name": "Súp lươn & Cháo lươn xứ Nghệ",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Nghệ An, thuộc cụm danh thắng Đảo chè Thanh Chương & Bãi biển Cửa Lò.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Súp lươn & Cháo lươn xứ Nghệ Gia Truyền",
        "address": "Khu phố ẩm thực Đảo chè Thanh Chương & Bãi biển Cửa Lò, Tỉnh Nghệ An",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Nghệ An",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Nghệ An",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 294,
    "province_id": "nghean",
    "province_name": "Tỉnh Nghệ An",
    "region": "Central",
    "name": "Mực nhảy Cửa Lò hấp sả",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Nghệ An, thuộc cụm danh thắng Đảo chè Thanh Chương & Bãi biển Cửa Lò.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Mực nhảy Cửa Lò hấp sả Gia Truyền",
        "address": "Khu phố ẩm thực Đảo chè Thanh Chương & Bãi biển Cửa Lò, Tỉnh Nghệ An",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Nghệ An",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Nghệ An",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 295,
    "province_id": "nghean",
    "province_name": "Tỉnh Nghệ An",
    "region": "Central",
    "name": "Bánh đa Đô Lương",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Nghệ An, thuộc cụm danh thắng Đảo chè Thanh Chương & Bãi biển Cửa Lò.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh đa Đô Lương Gia Truyền",
        "address": "Khu phố ẩm thực Đảo chè Thanh Chương & Bãi biển Cửa Lò, Tỉnh Nghệ An",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Nghệ An",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Nghệ An",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 296,
    "province_id": "nghean",
    "province_name": "Tỉnh Nghệ An",
    "region": "Central",
    "name": "Cam bù Con Cuông",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Nghệ An, thuộc cụm danh thắng Đảo chè Thanh Chương & Bãi biển Cửa Lò.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cam bù Con Cuông Gia Truyền",
        "address": "Khu phố ẩm thực Đảo chè Thanh Chương & Bãi biển Cửa Lò, Tỉnh Nghệ An",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Nghệ An",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Nghệ An",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 297,
    "province_id": "hatinh",
    "province_name": "Tỉnh Hà Tĩnh",
    "region": "Central",
    "name": "Kẹo Cu Đơ Hà Tĩnh",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Hà Tĩnh, thuộc cụm danh thắng Khu Di tích Lịch sử Ngã ba Đồng Lộc.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Kẹo Cu Đơ Hà Tĩnh Gia Truyền",
        "address": "Khu phố ẩm thực Khu Di tích Lịch sử Ngã ba Đồng Lộc, Tỉnh Hà Tĩnh",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Hà Tĩnh",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Hà Tĩnh",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 298,
    "province_id": "hatinh",
    "province_name": "Tỉnh Hà Tĩnh",
    "region": "Central",
    "name": "Bánh bèo Hà Tĩnh",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Hà Tĩnh, thuộc cụm danh thắng Khu Di tích Lịch sử Ngã ba Đồng Lộc.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh bèo Hà Tĩnh Gia Truyền",
        "address": "Khu phố ẩm thực Khu Di tích Lịch sử Ngã ba Đồng Lộc, Tỉnh Hà Tĩnh",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Hà Tĩnh",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Hà Tĩnh",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 299,
    "province_id": "hatinh",
    "province_name": "Tỉnh Hà Tĩnh",
    "region": "Central",
    "name": "Ram mướt Hà Tĩnh",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Hà Tĩnh, thuộc cụm danh thắng Khu Di tích Lịch sử Ngã ba Đồng Lộc.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Ram mướt Hà Tĩnh Gia Truyền",
        "address": "Khu phố ẩm thực Khu Di tích Lịch sử Ngã ba Đồng Lộc, Tỉnh Hà Tĩnh",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Hà Tĩnh",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Hà Tĩnh",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 300,
    "province_id": "hatinh",
    "province_name": "Tỉnh Hà Tĩnh",
    "region": "Central",
    "name": "Hến sông La",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Hà Tĩnh, thuộc cụm danh thắng Khu Di tích Lịch sử Ngã ba Đồng Lộc.",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Hến sông La Gia Truyền",
        "address": "Khu phố ẩm thực Khu Di tích Lịch sử Ngã ba Đồng Lộc, Tỉnh Hà Tĩnh",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Hà Tĩnh",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Hà Tĩnh",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 301,
    "province_id": "hatinh",
    "province_name": "Tỉnh Hà Tĩnh",
    "region": "Central",
    "name": "Cam bù Hương Sơn",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Hà Tĩnh, thuộc cụm danh thắng Quần thể Chùa Hương Tích (Núi Hồng Lĩnh).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Cam bù Hương Sơn Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Chùa Hương Tích (Núi Hồng Lĩnh), Tỉnh Hà Tĩnh",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Hà Tĩnh",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Hà Tĩnh",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 302,
    "province_id": "hatinh",
    "province_name": "Tỉnh Hà Tĩnh",
    "region": "Central",
    "name": "Thịt dê núi Hồng Lĩnh",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Hà Tĩnh, thuộc cụm danh thắng Quần thể Chùa Hương Tích (Núi Hồng Lĩnh).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Thịt dê núi Hồng Lĩnh Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Chùa Hương Tích (Núi Hồng Lĩnh), Tỉnh Hà Tĩnh",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Hà Tĩnh",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Hà Tĩnh",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": false,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 303,
    "province_id": "hatinh",
    "province_name": "Tỉnh Hà Tĩnh",
    "region": "Central",
    "name": "Bánh gai Đức Thọ",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Hà Tĩnh, thuộc cụm danh thắng Quần thể Chùa Hương Tích (Núi Hồng Lĩnh).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Bánh gai Đức Thọ Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Chùa Hương Tích (Núi Hồng Lĩnh), Tỉnh Hà Tĩnh",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Hà Tĩnh",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Hà Tĩnh",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 304,
    "province_id": "hatinh",
    "province_name": "Tỉnh Hà Tĩnh",
    "region": "Central",
    "name": "Rượu nếp Can Lộc",
    "dish_type": "specialty",
    "description": "Món ngon đặc sản nức tiếng với hương vị đậm đà truyền thống của người dân Tỉnh Hà Tĩnh, thuộc cụm danh thắng Quần thể Chùa Hương Tích (Núi Hồng Lĩnh).",
    "price_range": "35.000đ - 85.000đ",
    "famous_spots": [
      {
        "name": "Quán Rượu nếp Can Lộc Gia Truyền",
        "address": "Khu phố ẩm thực Quần thể Chùa Hương Tích (Núi Hồng Lĩnh), Tỉnh Hà Tĩnh",
        "rating": 4.9,
        "price": "35.000đ - 65.000đ"
      },
      {
        "name": "Nhà Hàng Đặc Sản Tỉnh Hà Tĩnh",
        "address": "Đại lộ ẩm thực trung tâm, Tỉnh Hà Tĩnh",
        "rating": 5.0,
        "price": "60.000đ - 150.000đ"
      }
    ],
    "is_gift_suitable": true,
    "image_url": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  }
];
