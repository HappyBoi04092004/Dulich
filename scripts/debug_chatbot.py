from playwright.sync_api import sync_playwright
import os

with sync_playwright() as p:
    browser = p.chromium.launch(channel='msedge', headless=True)
    page = browser.new_page(viewport={'width': 1280, 'height': 800})
    page.goto('http://localhost:3000', wait_until='networkidle')
    
    # Click step 1 next
    page.click('text=Tiếp tục: Khám phá bản đồ')
    page.wait_for_timeout(1000)
    
    # Enter fullscreen map
    page.click('text=Phóng to Toàn Màn hình')
    page.wait_for_timeout(1000)
    
    page.screenshot(path='fullscreen_map_view.png')
    
    # Check chatbot button
    chat_btn = page.locator('button[title*="Trợ lý AI Du lịch"]')
    print('Found chat button in fullscreen:', chat_btn.count())
    if chat_btn.count() > 0:
        box = chat_btn.first.bounding_box()
        print('Chat button bounding box:', box)
        chat_btn.first.click()
        page.wait_for_timeout(1000)
        page.screenshot(path='fullscreen_chat_opened.png')
        
        # Check minimize button
        min_btn = page.locator('button[title*="Thu nhỏ"]')
        print('Found minimize button:', min_btn.count())
        if min_btn.count() > 0:
            min_btn.first.click()
            page.wait_for_timeout(1000)
            page.screenshot(path='fullscreen_after_click_minimize.png')
            
    browser.close()
    print('Done!')
