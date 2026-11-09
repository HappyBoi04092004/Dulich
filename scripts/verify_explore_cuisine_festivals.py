import os
import time
from playwright.sync_api import sync_playwright

OUTPUT_DIR = r"C:\Users\Admin\.gemini\antigravity\brain\bd277f97-2604-4468-8980-0e9192e06c9d"

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch(executable_path=r"C:\Program Files\Google\Chrome\Application\chrome.exe", headless=True)
        page = browser.new_page(viewport={'width': 1280, 'height': 800})

        # 1. VERIFY EXPLORE 34 PROVINCES
        print("\n=== 1. VERIFYING /explore ===")
        page.goto('http://localhost:3000/explore', wait_until='networkidle')
        time.sleep(1.5)
        page.screenshot(path=os.path.join(OUTPUT_DIR, "verify_34_provinces_explore.png"))
        
        # Check province cards count
        province_names = [h3.inner_text().strip() for h3 in page.locator('h3').all()]
        print(f"Total provinces rendered on /explore: {len(province_names)}")
        print("Sample provinces:", province_names[:8])
        assert len(province_names) == 34, f"Expected 34 provinces, got {len(province_names)}!"
        print("✓ All 34 provinces verified on /explore!")

        # 2. VERIFY CUISINE 34 PROVINCES
        print("\n=== 2. VERIFYING /cuisine ===")
        page.goto('http://localhost:3000/cuisine', wait_until='networkidle')
        time.sleep(1.5)
        page.screenshot(path=os.path.join(OUTPUT_DIR, "verify_34_provinces_cuisine.png"))

        cuisine_names = [h3.inner_text().strip() for h3 in page.locator('h3').all()]
        print(f"Total cuisines rendered on /cuisine: {len(cuisine_names)}")
        print("Sample cuisines:", cuisine_names[:8])
        assert len(cuisine_names) >= 300, f"Expected ~304 cuisines, got {len(cuisine_names)}!"
        print(f"✓ All {len(cuisine_names)} authentic cuisines verified on /cuisine!")

        # Test filtering by province (e.g. Hue)
        prov_select = page.locator('select')
        prov_select.select_option('hue')
        time.sleep(1)
        hue_dishes = [h3.inner_text().strip() for h3 in page.locator('h3').all()]
        print(f"Hue dishes filtered: {len(hue_dishes)} ({hue_dishes[:5]})")
        assert len(hue_dishes) > 0, "Hue filter returned 0 dishes!"

        # 3. VERIFY FESTIVALS 12 MONTHS
        print("\n=== 3. VERIFYING /festivals ===")
        page.goto('http://localhost:3000/festivals', wait_until='networkidle')
        time.sleep(1.5)
        page.screenshot(path=os.path.join(OUTPUT_DIR, "verify_12_months_festivals.png"))

        festival_names = [h3.inner_text().strip() for h3 in page.locator('h3').all()]
        print(f"Total festivals rendered on /festivals: {len(festival_names)}")
        print("Sample festivals:", festival_names[:8])
        assert len(festival_names) >= 34, f"Expected at least 34 festivals, got {len(festival_names)}!"

        # Verify all 12 months buttons exist and click Month 3 (Giỗ Tổ Hùng Vương)
        for m in range(1, 13):
            m_btn = page.locator(f'button:has-text("Tháng {m}")').first
            assert m_btn.is_visible(), f"Month {m} button not visible!"

        m3_btn = page.locator('button:has-text("Tháng 3")').first
        m3_btn.click()
        time.sleep(1)
        m3_festivals = [h3.inner_text().strip() for h3 in page.locator('h3').all()]
        print(f"Month 3 festivals: {len(m3_festivals)} ({m3_festivals})")
        assert any("Hùng Vương" in name for name in m3_festivals), "Month 3 missing Giỗ Tổ Hùng Vương!"
        page.screenshot(path=os.path.join(OUTPUT_DIR, "verify_festivals_month3.png"))

        print("\nALL 3 PAGES VERIFIED AND PASSED 100%!")
        browser.close()

if __name__ == '__main__':
    verify()
