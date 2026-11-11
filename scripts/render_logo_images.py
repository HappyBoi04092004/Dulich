import os
from playwright.sync_api import sync_playwright

def render_logo():
    svg_path = os.path.abspath("frontend/public/logo.svg")
    out_jpg = os.path.abspath("frontend/public/logo.jpg")
    out_images_jpg = os.path.abspath("frontend/public/images/logo.jpg")
    out_png = os.path.abspath("frontend/public/logo.png")

    with sync_playwright() as p:
        browser = p.chromium.launch(executable_path=r"C:\Program Files\Google\Chrome\Application\chrome.exe", headless=True)
        page = browser.new_page(viewport={'width': 512, 'height': 512}, device_scale_factor=2)
        
        # Load local SVG
        page.goto(f"file:///{svg_path.replace(os.sep, '/')}")
        page.wait_for_timeout(500)
        
        # Screenshot to PNG and JPEG
        page.screenshot(path=out_png)
        page.screenshot(path=out_jpg, type='jpeg', quality=95)
        page.screenshot(path=out_images_jpg, type='jpeg', quality=95)
        
        print("✓ Successfully generated logo.jpg, images/logo.jpg, and logo.png from AI Robot SVG!")
        browser.close()

if __name__ == '__main__':
    render_logo()

