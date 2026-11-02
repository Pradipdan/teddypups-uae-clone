import json

testimonials = [
  {
    "id": 1,
    "quote": "TeddyPups truly made our dream a reality. They supported us at every step of the import journey. Our Maltipoo arrived healthy, cheerful, and absolutely perfect. Having 24/7 support throughout the process gave us complete peace of mind.",
    "author": "Sarah M.",
    "location": "Downtown Dubai, UAE",
    "puppy": "Lulu (Maltipoo)",
    "image": "https://puppy.instabizweb.com/media/TUslu26Ueaq-/9c3516c040/edb2f5_6627857aca7e495ea37d9f62d814d323-mv2.jpeg",
    "caption": "Lulu 🧸 with her new mummy ❤️"
  },
  {
    "id": 2,
    "quote": "From our first visit to the Dubai showroom to picking up our Pomeranian, the team was extraordinarily professional and transparent. All medical records were in order, and our puppy settled right in on night one!",
    "author": "Rashid Al Mansoori",
    "location": "Jumeirah, Dubai",
    "puppy": "Milo (Teacup Pomeranian)",
    "image": "https://puppy.instabizweb.com/media/OcgEePeBmGuu/41fb22320b/edb2f5_adf88f7400c848249d60698fca0336e9-mv2.jpeg",
    "caption": "Adorable Maltipoo baby 🧸❤️"
  },
  {
    "id": 3,
    "quote": "We were nervous about ordering an imported Korean teacup puppy, but TeddyPups shared flight details, daily video updates, vet documents, and personal flight nanny assistance. Outstanding care!",
    "author": "Elena & Christian",
    "location": "Dubai Marina, UAE",
    "puppy": "Chloe (Korean Poodle)",
    "image": "https://puppy.instabizweb.com/media/RYkyuv4DBCTC/d9e02a0dc8/edb2f5_7ed2ee1ba89b4230b52f5e3981b1b198-mv2.jpeg",
    "caption": "My new teddy puppy 🥰🧸"
  },
  {
    "id": 4,
    "quote": "The entire process was seamless and loving. We couldn't imagine adopting from anywhere else in the Emirates. Highest recommendation for anyone seeking a purebred, happy, healthy puppy.",
    "author": "Mariam K.",
    "location": "Abu Dhabi, UAE",
    "puppy": "Leo & Bella (Cavapoos)",
    "image": "https://puppy.instabizweb.com/media/d267R4d3lMSv/96d8604ca3/edb2f5_02b95a69a2c24c7e81b60e6d8c01baf7-mv2.jpeg",
    "caption": "Our new puppies 🧸🥰🤗"
  },
  {
    "id": 5,
    "quote": "Such a warm, honest experience. They truly treat every puppy like family, and the post-adoption follow-up has been incredible with nutrition and vaccination advice.",
    "author": "Tariq H.",
    "location": "Palm Jumeirah, Dubai",
    "puppy": "Simba (Shih Tzu)",
    "image": "https://puppy.instabizweb.com/media/XqxhmNftVKic/5adf2f28fe/edb2f5_37f5218f73e842b88ee3ae0c911bcafa-mv2.jpeg",
    "caption": "New puppy 🧸😍"
  },
  {
    "id": 6,
    "quote": "We adopted two puppies together and they are the light of our home. Healthy, playful, and so full of love. Thank you TeddyPups!",
    "author": "The Campbell Family",
    "location": "Emirates Hills, Dubai",
    "puppy": "Ollie & Daisy",
    "image": "https://puppy.instabizweb.com/media/1II_yVrwWdOG/c07a8ef9f1/edb2f5_258010c661f64f3b8b952c5a2f7677de-mv2.jpeg",
    "caption": "Gang of 3 😍🧸"
  },
  {
    "id": 7,
    "quote": "Everything promised was delivered with perfection. Clean bill of health from Dubai municipality vet upon arrival.",
    "author": "Sophie L.",
    "location": "Dubai Hills Estate",
    "puppy": "Cookie (Toy Poodle)",
    "image": "https://puppy.instabizweb.com/media/bKP7vwN0R2OU/1aa47534b5/edb2f5_b8d76dffb97f46b5a9f2aaf9c1067b4b-mv2.jpeg",
    "caption": "So happy 😍😍"
  },
  {
    "id": 8,
    "quote": "Best decision we ever made! Our little Maltipoo brings so much happiness to our children every single day.",
    "author": "Ahmad & Nour",
    "location": "Downtown Dubai, UAE",
    "puppy": "Teddy (Maltipoo)",
    "image": "https://puppy.instabizweb.com/media/ToVkYw_K3UrY/81a2bd9ac1/edb2f5_582a3767e5eb408f9684a7e623229dc4-mv2.jpeg",
    "caption": "New pup 🤗💫"
  }
]

with open('src/data/testimonials.js', 'w', encoding='utf-8') as f:
    f.write("export const testimonials = " + json.dumps(testimonials, indent=2) + ";\n")

print("Generated src/data/testimonials.js")

faqs = [
  {
    "id": 1,
    "question": "Are your puppies vaccinated and health-checked?",
    "answer": "Yes. All our puppies come with a verified health certificate from licensed vets. Every puppy is vaccinated, dewormed, and thoroughly checked before joining your family.",
    "category": "Health & Care"
  },
  {
    "id": 2,
    "question": "Can I meet a puppy before I decide?",
    "answer": "Yes. Come meet our locally available puppies in our Downtown Dubai showroom and spend time bonding before making your decision.",
    "category": "Showroom"
  },
  {
    "id": 3,
    "question": "Can I take my puppy home the same day?",
    "answer": "Local puppies are available immediately, so you can take your puppy home the same day.",
    "category": "Adoption"
  },
  {
    "id": 4,
    "question": "Do you import puppies from abroad?",
    "answer": "Yes. Through our Order Upon Request service we source rare and premium teacup breeds from the most reputable, certified breeders across Europe, Korea, and beyond – and we handle the import for you.",
    "category": "Import Process"
  },
  {
    "id": 5,
    "question": "How does an imported puppy travel to Dubai?",
    "answer": "We manage every part of the import process, including health checks, travel arrangements, and the necessary documentation, so your puppy arrives happy, healthy, and stress-free.",
    "category": "Import Process"
  },
  {
    "id": 6,
    "question": "Will I see photos and health details first?",
    "answer": "Yes. Photos, videos, and health certificates are shared before your puppy travels, and our team sends real photos and health details directly on WhatsApp.",
    "category": "Health & Care"
  },
  {
    "id": 7,
    "question": "Do you deliver?",
    "answer": "Yes. We deliver within Dubai, and our trusted international cargo partners deliver puppies safely to loving homes all around the world.",
    "category": "Delivery"
  },
  {
    "id": 8,
    "question": "Which breeds do you usually have?",
    "answer": "Breeds we regularly have include Maltipoo, Pomeranian, Poodle and Bichon, plus rare teacup lines such as Korean teacup poodles, Maltese, Pom and Yorkie.",
    "category": "Breeds"
  },
  {
    "id": 9,
    "question": "Is there help after my puppy comes home?",
    "answer": "Yes. Our team is available 24/7 and offers advice on training, nutrition, and general care to ensure a smooth transition for you and your new furry friend.",
    "category": "Support"
  }
]

with open('src/data/faqs.js', 'w', encoding='utf-8') as f:
    f.write("export const faqsData = " + json.dumps(faqs, indent=2) + ";\n")

print("Generated src/data/faqs.js")
