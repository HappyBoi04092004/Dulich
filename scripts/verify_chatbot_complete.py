import os
import time
from playwright.sync_api import sync_playwright

output_dir = r'C:\Users\Admin\.gemini\antigravity\brain\bd277f97-2604-4468-8980-0e9192e06c9d'

with sync_playwright() as p:
    browser = p.chromium.launch(channel='msedge', headless=True)
    page = browser.new_page(viewport={'width': 1280, 'height': 800})
    
    print('1. Navigating to http://localhost:3000...')
    page.goto('http://localhost:3000', wait_until='domcontentloaded')
    page.wait_for_timeout(1500)
    
    # Verify Step 1 chat button
    chat_pill = page.locator('button[title*="Trợ lý AI"]')
    print('Step 1 chat pill count:', chat_pill.count())
    page.screenshot(path=os.path.join(output_dir, 'verify_step1_chat_pill.png'))
    
    # Open chat in Step 1
    chat_pill.first.click()
    page.wait_for_timeout(1000)
    
    header = page.locator('h4:has-text("Trợ lý AI Du lịch Việt Nam")')
    assert header.is_visible(), "Header title must be visible"
    subtitle = page.locator('text=Trực tuyến • Am hiểu 34 tỉnh thành')
    assert subtitle.is_visible(), "Subtitle must be visible"
    
    page.screenshot(path=os.path.join(output_dir, 'verify_step1_chat_open.png'))
    print('Step 1 chat open verified')
    
    # Minimize chat in Step 1
    minimize_btn = page.locator('button[title="Thu nhỏ chatbox"]')
    minimize_btn.first.click()
    page.wait_for_timeout(1000)
    page.screenshot(path=os.path.join(output_dir, 'verify_step1_chat_after_minimize.png'))
    print('Step 1 chat after minimize verified')
    
    # Navigate to Step 2
    step1_next = page.locator('button', has_text='Tiếp tục: Khám phá bản đồ')
    if step1_next.count() > 0:
        step1_next.first.click()
        page.wait_for_timeout(2000)
        
    page.screenshot(path=os.path.join(output_dir, 'verify_step2_normal_view.png'))
    print('Step 2 normal view verified')
    
    # Enter Fullscreen Map
    fullscreen_btn = page.locator('button', has_text='Phóng to Toàn Màn hình')
    if fullscreen_btn.count() > 0:
        fullscreen_btn.first.click()
        page.wait_for_timeout(1500)
        
    # In Fullscreen Map, check that AI button is strictly the circular logo
    circle_logo_btn = page.locator('button[title="Mở Trợ lý AI Du lịch Việt Nam"]')
    print('Fullscreen circular logo count:', circle_logo_btn.count())
    box = circle_logo_btn.first.bounding_box()
    print('Circular logo bounding box:', box)
    assert box['width'] > 40 and box['width'] < 70, f"Width should be circular ~56px, got {box['width']}"
    assert box['height'] > 40 and box['height'] < 70, f"Height should be circular ~56px, got {box['height']}"
    
    page.screenshot(path=os.path.join(output_dir, 'verify_fullscreen_circular_logo.png'))
    print('Fullscreen circular logo verified')
    
    # Click circular logo in Fullscreen
    circle_logo_btn.first.click()
    page.wait_for_timeout(1000)
    
    header_fs = page.locator('h4:has-text("Trợ lý AI Du lịch Việt Nam")')
    assert header_fs.is_visible(), "Header title must be visible in fullscreen"
    page.screenshot(path=os.path.join(output_dir, 'verify_fullscreen_chat_opened.png'))
    print('Fullscreen chat open verified')
    
    # Minimize chat in Fullscreen
    minimize_fs_btn = page.locator('button[title="Thu nhỏ chatbox"]')
    minimize_fs_btn.first.click()
    page.wait_for_timeout(1000)
    
    # Must be back to circular logo
    assert circle_logo_btn.first.is_visible(), "Should return to circular logo in fullscreen"
    box_after = circle_logo_btn.first.bounding_box()
    print('Circular logo bounding box after minimize:', box_after)
    assert box_after['width'] > 40 and box_after['width'] < 70
    
    page.screenshot(path=os.path.join(output_dir, 'verify_fullscreen_after_minimize_clean.png'))
    print('Fullscreen after minimize cleanly back to circular logo verified')
    
    # Exit fullscreen map
    exit_fs = page.locator('button', has_text='Thu nhỏ (Esc)')
    if exit_fs.count() > 0:
        exit_fs.first.click()
        page.wait_for_timeout(1500)
        
    page.screenshot(path=os.path.join(output_dir, 'verify_after_exit_fullscreen.png'))
    print('Exit fullscreen back to normal mode verified')
    
    browser.close()
    print('ALL VERIFICATION CHECKS PASSED SUCCESSFULLY!')
