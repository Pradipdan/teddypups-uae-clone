import re
import json

with open('scraped_pages/happy-families.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Find customer cards and images
imgs = re.findall(r'(/media/[a-zA-Z0-9_-]+/[a-zA-Z0-9_-]+/[a-zA-Z0-9_.-]+)', html)
clean_imgs = []
for img in imgs:
    c = img.rstrip('\\')
    if c.endswith(('.jpg', '.jpeg', '.webp', '.png', '.avif')) and c not in clean_imgs:
        clean_imgs.append(f"https://puppy.instabizweb.com{c}")

print(f"Found {len(clean_imgs)} happy families photos")
for img in clean_imgs[:10]:
    print(' ', img)
