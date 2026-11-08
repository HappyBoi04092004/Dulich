import os
from playwright.sync_api import sync_playwright

output_dir = r'C:\Users\Admin\.gemini\antigravity\brain\bd277f97-2604-4468-8980-0e9192e06c9d'
os.makedirs(output_dir, exist_ok=True)

routes_to_test = [
    ('/', 'verify_page_home.png', 'Lập kế hoạch du lịch'),
    ('/explore', 'verify_page_explore.png', 'Khám Phá Toàn Diện 34 Tỉnh/Thành'),
    ('/cuisine', 'verify_page_cuisine.png', 'Hương Vị Ẩm Thực & Quán Ăn 5 Sao'),
    ('/festivals', 'verify_page_festivals.png', 'Lễ Hội Truyền Thống'),
    ('/costs', 'verify_page_costs.png', 'Dự toán Ngân sách'),
    ('/handbook', 'verify_page_handbook.png', 'Cẩm nang Du lịch'),
    ('/admin', 'verify_page_admin.png', 'Quản Trị Nền Tảng')
]

with sync_playwright() as p:
    browser = p.chromium.launch(channel='msedge', headless=True)
    page = browser.new_page(viewport={'width': 1366, 'height': 850})
    
    for route, filename, expected_text in routes_to_test:
        url = f"http://localhost:3000{route}"
        print(f"Testing route: {url}...")
        res = page.goto(url, wait_until='networkidle')
        page.wait_for_timeout(2000)
        
        assert res.status == 200, f"Route {route} returned status {res.status}"
        body_text = page.inner_text('body')
        assert expected_text.lower() in body_text.lower(), f"Expected text '{expected_text}' not found in {route}"
        
        save_path = os.path.join(output_dir, filename)
        page.screenshot(path=save_path, full_page=False)
        print(f"✅ Route {route} OK -> Screenshot: {filename}")
        
    browser.close()
    print("\n🎉 ALL MASTER PAGES TESTED & VERIFIED 100% SUCCESSFULLY!")
