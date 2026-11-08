import os
from playwright.sync_api import sync_playwright

output_dir = r'C:\Users\Admin\.gemini\antigravity\brain\bd277f97-2604-4468-8980-0e9192e06c9d'

with sync_playwright() as p:
    browser = p.chromium.launch(channel='msedge', headless=True)
    # Test with narrow viewport (445px width like user screenshot)
    page = browser.new_page(viewport={'width': 450, 'height': 750})
    
    page.goto('http://localhost:3000', wait_until='domcontentloaded')
    page.wait_for_timeout(1000)
    
    # Next to Step 2
    step1_next = page.locator('button', has_text='Tiếp tục: Khám phá bản đồ')
    if step1_next.count() > 0:
        step1_next.first.click()
        page.wait_for_timeout(1500)
        
    # Open fullscreen map
    fullscreen_btn = page.locator('button', has_text='Phóng to Toàn Màn hình')
    if fullscreen_btn.count() > 0:
        fullscreen_btn.first.click()
        page.wait_for_timeout(1500)
        
    page.screenshot(path=os.path.join(output_dir, 'verify_mobile_fullscreen_map.png'))
    print('Mobile fullscreen map captured')
    
    # Check AI logo position and drawer position
    circle_logo_btn = page.locator('button[title="Mở Trợ lý AI Du lịch Việt Nam"]').first
    box_logo = circle_logo_btn.bounding_box()
    print('Logo box:', box_logo)
    
    drawer = page.locator('#fullscreen-destination-drawer')
    box_drawer = drawer.bounding_box()
    print('Drawer box:', box_drawer)
    
    # Verify logo is to the right of the drawer or drawer has right margin
    assert box_logo['x'] + box_logo['width'] <= 450
    assert box_drawer['x'] + box_drawer['width'] <= box_logo['x'] + 5, f"Drawer should not overlap circular logo (Drawer right: {box_drawer['x'] + box_drawer['width']}, Logo x: {box_logo['x']})"
    
    # Open chat in mobile
    circle_logo_btn.click()
    page.wait_for_timeout(1000)
    page.screenshot(path=os.path.join(output_dir, 'verify_mobile_chat_open.png'))
    print('Mobile chat open captured')
    
    # Minimize chat in mobile
    minimize_btn = page.locator('button[title="Thu nhỏ chatbox"]').first
    minimize_btn.click()
    page.wait_for_timeout(1000)
    page.screenshot(path=os.path.join(output_dir, 'verify_mobile_after_minimize.png'))
    print('Mobile after minimize captured')
    
    browser.close()
    print('ALL MOBILE CHECKS PASSED!')
