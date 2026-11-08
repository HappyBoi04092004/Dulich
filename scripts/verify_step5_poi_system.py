import os
import time
from playwright.sync_api import sync_playwright

output_dir = r'C:\Users\Admin\.gemini\antigravity\brain\bd277f97-2604-4468-8980-0e9192e06c9d'

with sync_playwright() as p:
    browser = p.chromium.launch(channel='msedge', headless=True)
    page = browser.new_page(viewport={'width': 1400, 'height': 950})
    
    print('Navigating to http://localhost:3000...')
    page.goto('http://localhost:3000', wait_until='networkidle')
    page.wait_for_timeout(1000)
    
    # Step 1 -> Step 2
    step1_next = page.locator('button', has_text='Tiếp tục: Khám phá bản đồ Việt Nam')
    if step1_next.count() > 0:
        step1_next.first.click()
        page.wait_for_timeout(1500)
        
    # Step 2 -> Step 3
    step2_next = page.locator('button', has_text='Bước 3: Khám phá ẩm thực & văn hóa')
    if step2_next.count() > 0:
        step2_next.first.click()
        page.wait_for_timeout(1500)
        
    # Step 3 -> Step 4
    step3_next = page.locator('button', has_text='Tiếp tục: Chọn phương tiện di chuyển')
    if step3_next.count() > 0:
        step3_next.first.click()
        page.wait_for_timeout(1500)
        
    # Step 4 -> Step 5 (Tiện ích & POI)
    step4_next = page.locator('button', has_text='Tiếp tục: Bản đồ tiện ích & Nhà thuốc')
    if step4_next.count() > 0:
        step4_next.first.click()
        page.wait_for_timeout(2000)
        
        # 1. Capture Step 5 Overview (Pharmacy default or All)
        p_step5 = os.path.join(output_dir, 'verify_step5_poi_overview.png')
        page.screenshot(path=p_step5)
        print(f'Captured Step 5 Overview -> {p_step5}')
        
        # 2. Click Restaurant category (🍲 Quán ăn & Nhà hàng)
        rest_tab = page.locator('button', has_text='Quán ăn & Nhà hàng')
        if rest_tab.count() > 0:
            rest_tab.first.click()
            page.wait_for_timeout(1000)
            p_rest = os.path.join(output_dir, 'verify_step5_poi_restaurants.png')
            page.screenshot(path=p_rest)
            print(f'Captured Restaurants 5-Star -> {p_rest}')
            
        # 3. Click Gas Station category (⛽ Trạm xăng dầu)
        gas_tab = page.locator('button', has_text='Trạm xăng dầu')
        if gas_tab.count() > 0:
            gas_tab.first.click()
            page.wait_for_timeout(1000)
            p_gas = os.path.join(output_dir, 'verify_step5_poi_gas.png')
            page.screenshot(path=p_gas)
            print(f'Captured Gas Stations -> {p_gas}')
            
        # 4. Click Hospital category (🏥 Bệnh viện & Cấp cứu)
        hosp_tab = page.locator('button', has_text='Bệnh viện & Cấp cứu')
        if hosp_tab.count() > 0:
            hosp_tab.first.click()
            page.wait_for_timeout(1000)
            p_hosp = os.path.join(output_dir, 'verify_step5_poi_hospitals.png')
            page.screenshot(path=p_hosp)
            print(f'Captured Hospitals -> {p_hosp}')

    browser.close()
    print('Completed Step 5 POI visual validation!')

