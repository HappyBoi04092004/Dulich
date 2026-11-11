import os
from playwright.sync_api import sync_playwright

artifact_dir = r"C:\Users\Admin\.gemini\antigravity\brain\bd277f97-2604-4468-8980-0e9192e06c9d"

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch(executable_path=r"C:\Program Files\Google\Chrome\Application\chrome.exe", headless=True)
        
        # 1. 1280x800 (Laptop)
        page1280 = browser.new_page(viewport={'width': 1280, 'height': 800})
        page1280.goto("http://localhost:3000", wait_until="networkidle")
        page1280.wait_for_timeout(1000)
        page1280.screenshot(path=os.path.join(artifact_dir, "verify_navbar_1280.png"))
        print("✓ Saved verify_navbar_1280.png")
        page1280.close()

        # 2. 1440x900 (Large Desktop)
        page1440 = browser.new_page(viewport={'width': 1440, 'height': 900})
        page1440.goto("http://localhost:3000", wait_until="networkidle")
        page1440.wait_for_timeout(1000)
        page1440.screenshot(path=os.path.join(artifact_dir, "verify_navbar_1440.png"))
        print("✓ Saved verify_navbar_1440.png")
        page1440.close()

        # 3. 768x1024 (iPad)
        page768 = browser.new_page(viewport={'width': 768, 'height': 1024})
        page768.goto("http://localhost:3000", wait_until="networkidle")
        page768.wait_for_timeout(1000)
        page768.screenshot(path=os.path.join(artifact_dir, "verify_navbar_768.png"))
        print("✓ Saved verify_navbar_768.png")
        page768.close()

        browser.close()

if __name__ == '__main__':
    verify()
