import os
from playwright.sync_api import sync_playwright

artifact_dir = r"C:\Users\Admin\.gemini\antigravity\brain\bd277f97-2604-4468-8980-0e9192e06c9d"

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch(executable_path=r"C:\Program Files\Google\Chrome\Application\chrome.exe", headless=True)
        page = browser.new_page(viewport={'width': 1280, 'height': 850})

        # =========================================================================
        # Test 1: Explore 34 provinces -> Click "Lập lịch trình" at Phú Thọ
        # =========================================================================
        print("Testing Explore -> Start trip at province...")
        page.goto("http://localhost:3000/explore", wait_until="networkidle")
        page.wait_for_timeout(1000)

        # Search or find Phú Thọ card
        search_input = page.locator("input[placeholder*='Tìm kiếm']").first
        if search_input.is_visible():
            search_input.fill("Phú Thọ")
            page.wait_for_timeout(600)

        # Find the trip planner button in Phú Thọ card
        trip_btn = page.locator("button[title*='Lập lịch trình du lịch tại Tỉnh Phú Thọ'], button[title*='Lập lịch trình du lịch tại Phú Thọ']").first
        if not trip_btn.is_visible():
            trip_btn = page.locator("button:has-text('Khám phá tỉnh này')").first

        print("Clicking Khám phá tỉnh này or Lập lịch trình...")
        trip_btn.click()
        page.wait_for_timeout(1000)

        # If modal opened, click "✨ Lập lịch trình tại Tỉnh Phú Thọ"
        modal_plan_btn = page.locator("button:has-text('Lập lịch trình tại')")
        if modal_plan_btn.is_visible():
            print("Modal opened, clicking Lập lịch trình tại...")
            modal_plan_btn.click()
            page.wait_for_timeout(1500)

        # Take screenshot of Wizard step
        page.screenshot(path=os.path.join(artifact_dir, "verify_explore_to_wizard_phutho.png"))
        print("✓ Saved verify_explore_to_wizard_phutho.png")

        # =========================================================================
        # Test 2: Costs Estimator Page (/costs)
        # =========================================================================
        print("Testing Costs Estimator Page (/costs)...")
        page.goto("http://localhost:3000/costs", wait_until="networkidle")
        page.wait_for_timeout(1200)

        # Take initial screenshot with Phú Thọ selected
        page.screenshot(path=os.path.join(artifact_dir, "verify_costs_phutho_places.png"))
        print("✓ Saved verify_costs_phutho_places.png")

        # Test selecting another province, e.g. Tỉnh Lào Cai
        prov_select = page.locator("select").first
        prov_select.select_option(value="laocai")
        page.wait_for_timeout(1000)

        page.screenshot(path=os.path.join(artifact_dir, "verify_costs_laocai_places.png"))
        print("✓ Saved verify_costs_laocai_places.png")

        # Test clicking Standard (Tiêu chuẩn) and Economy (Tiết kiệm)
        page.locator("button:has-text('Tiêu chuẩn')").first.click()
        page.wait_for_timeout(500)
        page.screenshot(path=os.path.join(artifact_dir, "verify_costs_standard_tier.png"))
        print("✓ Saved verify_costs_standard_tier.png")

        browser.close()

if __name__ == '__main__':
    verify()
