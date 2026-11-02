import json

with open('scraped_pages/final_puppies_data.json', 'r', encoding='utf-8') as f:
    puppies = json.load(f)

js_content = f"// Complete list of {len(puppies)} puppies scraped directly from puppy.instabizweb.com\n"
js_content += "export const puppiesData = " + json.dumps(puppies, indent=2) + ";\n\n"
js_content += "export const breedsList = ['All', 'Maltipoo', 'Pomeranian', 'Poodle', 'Cavapoo', 'Shih Tzu', 'Maltese', 'Pomsky', 'Bichon'];\n"
js_content += "export const originList = ['All', 'Downtown Dubai', 'Imported for you'];\n"
js_content += "export const genderList = ['All', 'Boy', 'Girl'];\n"

import os
os.makedirs('src/data', exist_ok=True)
with open('src/data/puppies.js', 'w', encoding='utf-8') as out:
    out.write(js_content)

print(f"Generated src/data/puppies.js with {len(puppies)} puppies")
