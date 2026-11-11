import os
import sys
import sqlite3

# Define regional cost matrix for all 34 provinces
# Tier 1: Major Metropolitan & Top-tier Tourism Hubs
TIER_1_BIG_CITIES = ['hanoi', 'hochiminh', 'danang', 'khanhhoa', 'quangninh', 'lamdong']

# Tier 2: Satellite Urban & Red River Delta
TIER_2_URBAN = ['haiphong', 'bacninh', 'hungyen', 'ninhbinh', 'dongnai', 'tayninh']

# Tier 3: Central Region & Central Highlands
TIER_3_CENTRAL = ['thanhhoa', 'nghean', 'hatinh', 'quangtri', 'hue', 'quangngai', 'gialai', 'daklak']

# Tier 4: Northern Mountainous & Mekong Delta (Northwest, Northeast & Western Riverlands)
# ['caobang', 'tuyenquang', 'dienbien', 'laichau', 'sonla', 'laocai', 'thainguyen', 'langson', 'phutho', 'dongthap', 'vinhlong', 'angiang', 'cantho', 'camau']

def get_costs_for_province(province_id):
    p_id = province_id.lower()
    
    if p_id in TIER_1_BIG_CITIES:
        return {
            'hotel_economy': 220000,    # Nhà nghỉ, homestay bình dân, phòng sạch sẽ
            'hotel_standard': 480000,   # Khách sạn 3 sao, căn hộ dịch vụ tiện nghi
            'hotel_luxury': 1800000,   # Khách sạn 4-5 sao / resort
            'meal_avg': 180000,        # Standard: 180k/ngày (sáng 40k, trưa 70k, tối 70k) -> Economy tính 60% = ~110k
            'transport_avg': 100000,   # Standard: 100k/ngày (Grab/taxi) -> Economy tính 55% = 55k
            'budget_economy': 290000,
            'budget_standard': 580000,
            'budget_luxury': 1800000
        }
    elif p_id in TIER_2_URBAN:
        return {
            'hotel_economy': 180000,
            'hotel_standard': 380000,
            'hotel_luxury': 1400000,
            'meal_avg': 150000,        # Standard: 150k -> Economy: 90k
            'transport_avg': 80000,    # Standard: 80k -> Economy: 45k
            'budget_economy': 250000,
            'budget_standard': 490000,
            'budget_luxury': 1400000
        }
    elif p_id in TIER_3_CENTRAL:
        return {
            'hotel_economy': 160000,    # Miền Trung & Tây Nguyên chi phí rất mềm
            'hotel_standard': 340000,
            'hotel_luxury': 1300000,
            'meal_avg': 140000,        # Standard: 140k -> Economy: 85k
            'transport_avg': 75000,    # Standard: 75k -> Economy: 40k
            'budget_economy': 230000,
            'budget_standard': 450000,
            'budget_luxury': 1300000
        }
    else: # TIER 4: Vùng núi Tây Bắc, Đông Bắc & Miền Tây sông nước
        return {
            'hotel_economy': 150000,    # Homestay bản địa / nhà nghỉ 150k/đêm
            'hotel_standard': 320000,   # Khách sạn 3 sao / homestay bungalow 320k/đêm
            'hotel_luxury': 1200000,
            'meal_avg': 130000,        # Standard: 130k -> Economy: 78k (bình dân 25k-30k/bữa)
            'transport_avg': 70000,    # Thuê xe máy phượt
            'budget_economy': 210000,
            'budget_standard': 420000,
            'budget_luxury': 1200000
        }

def update_database():
    db_path = os.path.abspath('backend/instance/travel_planner.db')
    if not os.path.exists(db_path):
        print(f"Database not found at {db_path}")
        return

    conn = sqlite3.connect(db_path)
    c = conn.cursor()

    c.execute("SELECT id FROM provinces")
    provinces = [row[0] for row in c.fetchall()]
    print(f"Found {len(provinces)} provinces in database.")

    updated_count = 0
    for p_id in provinces:
        costs = get_costs_for_province(p_id)
        c.execute("""
            UPDATE cost_guidelines
            SET hotel_avg_economy = ?,
                hotel_avg_standard = ?,
                hotel_avg_luxury = ?,
                meal_avg_per_day = ?,
                transport_local_avg = ?,
                daily_budget_economy = ?,
                daily_budget_standard = ?,
                daily_budget_luxury = ?
            WHERE province_id = ?
        """, (
            costs['hotel_economy'],
            costs['hotel_standard'],
            costs['hotel_luxury'],
            costs['meal_avg'],
            costs['transport_avg'],
            costs['budget_economy'],
            costs['budget_standard'],
            costs['budget_luxury'],
            p_id
        ))
        updated_count += 1

    conn.commit()
    conn.close()
    print(f"✓ Successfully updated realistic regional travel costs for {updated_count} provinces in SQLite!")

if __name__ == '__main__':
    update_database()
