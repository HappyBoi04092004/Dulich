from playwright.sync_api import sync_playwright
import os

output_dir = r'C:\Users\Admin\.gemini\antigravity\brain\bd277f97-2604-4468-8980-0e9192e06c9d'

with sync_playwright() as p:
    browser = p.chromium.launch(channel='msedge', headless=True)
    page = browser.new_page(viewport={'width': 1280, 'height': 800})
    
    print('Navigating to http://localhost:3000...')
    page.goto('http://localhost:3000', wait_until='domcontentloaded')
    page.wait_for_timeout(2000)
    
    # Check Step 1 Chatbot button
    page.screenshot(path=os.path.join(output_dir, 'step1_view.png'))
    print('Step 1 captured')
    
    # Go to Step 2
    step1_btn = page.locator('button:has-text("Tiếp tục: Khám phá bản đồ")')
    if step1_btn.count() > 0:
        step1_btn.first.click()
        page.wait_for_timeout(2000)
        
    page.screenshot(path=os.path.join(output_dir, 'step2_view.png'))
    print('Step 2 captured')
    
    # Enter Fullscreen Map
    fullscreen_btn = page.locator('button:has-text("Phóng to Toàn Màn hình")')
    if fullscreen_btn.count() > 0:
        fullscreen_btn.first.click()
        page.wait_for_timeout(1500)
        
    page.screenshot(path=os.path.join(output_dir, 'step2_fullscreen_map.png'))
    print('Fullscreen map captured')
    
    # Check chatbot button in fullscreen
    ai_btn = page.locator('button[title*="Trợ lý AI Du lịch"]')
    print('AI buttons found in fullscreen:', ai_btn.count())
    if ai_btn.count() > 0:
        ai_btn.first.click()
        page.wait_for_timeout(1500)
        page.screenshot(path=os.path.join(output_dir, 'step2_fullscreen_chat_open.png'))
        print('Fullscreen chat open captured')
        
        # Click close / minimize
        close_btn = page.locator('button[title*="Thu nhỏ"]')
        if close_btn.count() > 0:
            close_btn.first.click()
            page.wait_for_timeout(1500)
            page.screenshot(path=os.path.join(output_dir, 'step2_fullscreen_chat_closed.png'))
            print('Fullscreen chat closed captured')
            
    browser.close()
    print('Finished all captures!')

