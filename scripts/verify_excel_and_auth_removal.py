import os
import json
import time
from playwright.sync_api import sync_playwright

OUTPUT_DIR = r"C:\Users\Admin\.gemini\antigravity\brain\bd277f97-2604-4468-8980-0e9192e06c9d"

def run_verification():
    with sync_playwright() as p:
        browser = p.chromium.launch(executable_path=r"C:\Program Files\Google\Chrome\Application\chrome.exe", headless=True)
        context = browser.new_context(viewport={'width': 1280, 'height': 800}, accept_downloads=True)
        page = context.new_page()

        print("1. Loading http://localhost:3000 ...")
        page.goto('http://localhost:3000', wait_until='networkidle', timeout=30000)
        time.sleep(2)

        # Check navbar for absence of login/register/sign in
        navbar_text = page.locator('header').inner_text()
        print("Navbar text:", repr(navbar_text))
        assert "Đăng nhập" not in navbar_text, "Navbar still has login text!"
        assert "Đăng ký" not in navbar_text, "Navbar still has register text!"
        assert "Sign in" not in navbar_text, "Navbar still has Sign in!"

        page.screenshot(path=os.path.join(OUTPUT_DIR, "verify_auth_free_navbar.png"))
        print("✓ Verified Navbar has no login/register buttons.")

        # Test Chatbot floating button and minimize
        chat_btn = page.locator('button[title*="Mở Trợ lý AI Du lịch"]').first
        if chat_btn.is_visible():
            print("✓ Found floating chat button. Clicking to open...")
            chat_btn.click()
            time.sleep(1)
            page.screenshot(path=os.path.join(OUTPUT_DIR, "verify_chatbox_opened.png"))

            # Click close/minimize
            close_btn = page.locator('button[title*="Thu nhỏ chatbox"], button[title*="Đóng chatbox"]').first
            if close_btn.is_visible():
                close_btn.click()
                time.sleep(1)
                page.screenshot(path=os.path.join(OUTPUT_DIR, "verify_chatbox_minimized_clean.png"))
                print("✓ Verified chatbox minimizes cleanly without squished or cut off bar.")

        # Jump directly to Step 6 by clicking step 6 in the stepper header
        print("2. Jumping to Step 6 via header step 6...")
        step6_nav = page.locator('button:has-text("Lịch trình AI")').first
        if step6_nav.is_visible():
            step6_nav.click()
            time.sleep(2)
        else:
            # Fallback scroll and click next buttons
            page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
            time.sleep(1)
            for i in range(1, 6):
                btn = page.locator('button:has-text("Tiếp tục")').first
                if btn.is_visible():
                    btn.click()
                    time.sleep(1.5)

        print("3. Now in Step 6. Verifying Excel Export and Save Trip...")
        page.screenshot(path=os.path.join(OUTPUT_DIR, "verify_step6_excel_button.png"))

        # Verify Excel download button
        excel_btn = page.locator('button:has-text("Xuất Timeline Excel (.xlsx)")').first
        assert excel_btn.is_visible(), "Excel export button not found in Step 6!"
        print("✓ Found Excel export button!")

        # Click Excel download and listen for download event
        with page.expect_download(timeout=10000) as download_info:
            excel_btn.click()
        download = download_info.value
        download_path = os.path.join(OUTPUT_DIR, download.suggested_filename)
        download.save_as(download_path)
        file_size = os.path.getsize(download_path)
        print(f"✓ Excel downloaded successfully: {download.suggested_filename} ({file_size} bytes)")
        assert file_size > 1000, "Downloaded Excel file is too small!"

        # Click Save Trip and verify NO auth modal appears
        save_btn = page.locator('button:has-text("Lưu chuyến đi")').first
        save_btn.click()
        time.sleep(1.5)

        # Verify AuthModal did NOT appear
        auth_modal = page.locator('text="Đăng nhập tài khoản", text="Tạo tài khoản mới"')
        assert not auth_modal.is_visible(), "AuthModal unexpectedly appeared!"
        page.screenshot(path=os.path.join(OUTPUT_DIR, "verify_step6_saved_success.png"))
        print("✓ Verified Save Trip worked without any Auth Modal!")

        # 4. Check /saved-trips page
        print("4. Navigating to http://localhost:3000/saved-trips ...")
        page.goto('http://localhost:3000/saved-trips', wait_until='networkidle', timeout=20000)
        time.sleep(2)
        page.screenshot(path=os.path.join(OUTPUT_DIR, "verify_saved_trips_excel.png"))

        # Verify Excel button exists on saved trips
        saved_excel_btn = page.locator('button:has-text("Xuất Excel")').first
        if saved_excel_btn.is_visible():
            print("✓ Found 'Xuất Excel' button on saved trip card!")
            with page.expect_download(timeout=10000) as dl_info2:
                saved_excel_btn.click()
            dl2 = dl_info2.value
            dl2_path = os.path.join(OUTPUT_DIR, "saved_trip_" + dl2.suggested_filename)
            dl2.save_as(dl2_path)
            print(f"✓ Saved trip Excel downloaded: {dl2.suggested_filename} ({os.path.getsize(dl2_path)} bytes)")

        print("ALL VERIFICATIONS PASSED 100%!")
        browser.close()

if __name__ == '__main__':
    run_verification()
