import os
from playwright.sync_api import sync_playwright

artifact_dir = r"C:\Users\Admin\.gemini\antigravity\brain\bd277f97-2604-4468-8980-0e9192e06c9d"

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch(executable_path=r"C:\Program Files\Google\Chrome\Application\chrome.exe", headless=True)
        context = browser.new_context(viewport={'width': 1280, 'height': 850})
        page = context.new_page()

        page.goto("http://localhost:3000", wait_until="networkidle")
        page.wait_for_timeout(1000)

        # Click next to step 2
        page.locator("button:has-text('Tiếp tục: Khám phá')").click()
        page.wait_for_timeout(2000)

        page.screenshot(path=os.path.join(artifact_dir, "verify_step2_initial.png"))
        print("✓ Saved verify_step2_initial.png")

        browser.close()

if __name__ == '__main__':
    verify()
