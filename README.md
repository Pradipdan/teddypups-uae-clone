# TeddyPups U.A.E. – Website Clone

> **Technical Assignment Submission for Insta Biz Web**  
> **Candidate Name:** Meet Panchal  
> **Reference Website:** [https://puppy.instabizweb.com/](https://puppy.instabizweb.com/)  
> **Live Website URL:** [https://pradipdan.github.io/teddypups-uae-clone/](https://pradipdan.github.io/teddypups-uae-clone/)  
> **GitHub Repository:** [https://github.com/Pradipdan/teddypups-uae-clone](https://github.com/Pradipdan/teddypups-uae-clone)

---

## 🌟 Project Overview

This project is a pixel-perfect, fully responsive clone of the **TeddyPups U.A.E.** luxury boutique pet website. The application faithfully reproduces the design language, warm aesthetic, typographic hierarchy, responsive layout, interactive features, and rich catalog of the original website.

### 🎯 Key Pages & Features Implemented:
1. **Homepage (`/`)**:
   - Announcement banner ("every puppy is family" & UAE Ministry licensing tag).
   - Luxury hero banner with typography (Fraunces & Figtree), call-to-actions, and trust metrics.
   - **Meet the pups**: Dynamic breed-filter pills (All, Maltipoo, Pomeranian, Poodle, Cavapoo, Shih Tzu) and puppy cards.
   - **Two ways to meet your puppy**: Local Downtown Dubai Showroom vs. Imported for You concierge.
   - **Your puppy journey**: 3-step concierge process with an interactive WhatsApp chat preview simulator.
   - **Why families trust TeddyPups**: Verified health guarantees, flight nanny logistics, and 24/7 support.
   - **Happy families & puppies**: Real client testimonials and heartwarming photo gallery.
   - **Questions, answered**: Accordion FAQ with smooth expand/collapse.
   - **Call-to-Action Banner**: Direct WhatsApp and Contact shortcuts.

2. **Available Puppies Catalog (`/puppies`)**:
   - Complete database of **42+ puppies** with genuine high-resolution images, names, ages, and origins.
   - Real-time instant search input (name, breed, keywords).
   - Multi-criteria filter controls: Breed selection, Gender (Boy/Girl), Origin (Dubai Showroom vs. Imported).
   - Clear filters chip & active match counter.

3. **Puppy Profile Details (`/puppies/:slug`)**:
   - Breadcrumb navigation.
   - Multi-image photo gallery carousel with interactive thumbnails and slide controls.
   - Puppy specifications card (Breed, Gender, Age, Origin, Medical package).
   - **What comes with your puppy**: Health book, vaccination, deworming, vet certificate.
   - **The Way Home**: 4-step adoption timeline.
   - **Interactive Inquiry Letter ("dear TeddyPups...")**: Contact form with auto-filled puppy details and instant WhatsApp redirection.
   - Previous & Next puppy switcher links.
   - "You may also love" related puppies carousel.

4. **Gone Home (`/gone-home`)**:
   - Hall of fame for adopted puppies.
   - **Vintage Boarding Ticket cards style** ("home ♥ | admit one | one ticket home") faithful to original branding.
   - Instant search and adopted puppy count.

5. **Happy Families (`/happy-families`)**:
   - Real client reviews from Dubai Marina, Downtown Dubai, Jumeirah, and Abu Dhabi.
   - Interactive Photo Gallery with full-screen Lightbox viewer.

6. **How It Works (`/how-it-works`)**:
   - Dual-pathway toggle: **In Dubai (Meet in person)** vs. **Imported (Order upon request)**.
   - 4-step breakdown for both local adoption and international import with flight nannies.
   - Delivery & collection logistics (Same-day Dubai pickup, climate-controlled cargo, worldwide shipping).

7. **Questions & Answers FAQ (`/faq`)**:
   - Search bar ("sniff out a question...").
   - Categorized topics (Health & Care, Showroom, Adoption, Import Process, Delivery, Support).
   - Smooth accordion collapse/expand with question counter.

8. **Visit & Contact (`/contact`)**:
   - Interactive letter-style inquiry form ("Dear TeddyPups, my name is...").
   - Showroom details in Downtown Dubai with Google Maps link.
   - 24/7 WhatsApp and direct phone calling triggers.

9. **Global Usability**:
   - Desktop floating WhatsApp button with live pulse effect and tooltip.
   - Sticky mobile action bar ("WhatsApp us" + "Call").
   - Responsive slide-over navigation drawer.

---

## 🛠️ Technologies & Tools Used

| Layer | Technology |
|---|---|
| **Framework & Core** | React 18, Vite 5 (ultra-fast build and zero-latency HMR) |
| **Styling & Design** | Tailwind CSS 3, Typography plugin, Custom Fraunces + Figtree typography |
| **Icons** | Lucide React |
| **Routing** | HTML5 History API with normalized subpath handling for GitHub Pages & custom domains |
| **Data Extraction** | Python 3 (custom crawler scripts for sitemaps, RSC payloads, and media paths) |
| **Deployment & CI/CD**| GitHub Actions automated Pages pipeline |

---

## 🤖 AI Tools & Workflow

### AI Tools Utilized:
- **Google Antigravity / Gemini 3.8 Flash**: Employed for architectural analysis, asset mapping, reverse-engineering Next.js RSC data structures, generating structured JSON schemas, and writing modern modular React components.

### Prompts & AI Directives Provided:
1. *"Extract all routes from the reference website sitemap.xml and analyze the tech stack, fonts, styling, and color variables."*
2. *"Inspect the Next.js React Server Component (RSC) chunks to extract complete structured puppy data, including breeds, origins, ages, genders, descriptions, and media URLs."*
3. *"Build a clean, high-performance Vite React architecture replicating all sections, micro-interactions, responsive mobile menus, vintage boarding ticket cards, and contact letter inputs."*
4. *"Ensure seamless SPA client-side routing on GitHub Pages with relative asset bundling and 404 fallback."*

---

## 💡 Implementation Decisions & Challenges Faced

1. **Next.js RSC Data Extraction**:
   - *Challenge*: The reference website was built on Next.js App Router where page content is streamed as serialized RSC payload strings rather than standard HTML or static JSON endpoints.
   - *Solution*: Developed a dedicated Python extraction script to parse the RSC strings and retrieve all 42 puppy entries with genuine high-resolution images, descriptions, and metadata.

2. **Typography & Luxury Aesthetic**:
   - *Challenge*: TeddyPups uses a distinctive luxury look combining the editorial serif font **Fraunces**, modern sans **Figtree**, and hand-drawn script **Shantell Sans**.
   - *Solution*: Embedded the exact Google Fonts weights and configured Tailwind CSS font family variables to match the reference site.

3. **Routing Across Platforms (Local vs GitHub Pages)**:
   - *Challenge*: GitHub Pages serves projects from a repository subpath (`/teddypups-uae-clone/`), which can break standard root-relative routing and assets.
   - *Solution*: Implemented relative Vite asset resolution (`base: './'`) and normalized pathname resolution in `App.jsx`, along with automated `404.html` redirection in the GitHub Actions workflow.

---

## 🧪 Testing & Deployment

- **Cross-browser Testing**: Verified on Chrome, Edge, Safari, and Firefox.
- **Responsive Testing**: Tested across Mobile (375px - 414px), Tablet (768px - 1024px), and Desktop (1280px+).
- **Automated CI/CD**: Pushing to the `master` branch triggers the GitHub Actions workflow, building the production bundle and publishing directly to GitHub Pages.

---

## 🚀 How to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/Pradipdan/teddypups-uae-clone.git
cd teddypups-uae-clone

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Build for production
npm run build
```

---
© 2026 TeddyPups U.A.E. Clone — Built with passion and attention to detail.

