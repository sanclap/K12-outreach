# 🏆 K12 Olympiad — Automated Micro-Influencer Outreach System

> **Assignment 4 Submission** | AI-powered influencer discovery, enrichment, and personalized outreach for K12 Olympiad

---

## 🌐 Live Demo
👉 [K12 Outreach — Live on Vercel](https://k12-outreach-8pg8pbgin-sankalpbhattacharjee10-2289s-projects.vercel.app)
## 🎥 Demo Video
👉 [Watch Demo](https://drive.google.com/file/d/1jE9cEWrwPczJXbdCCg5aLOpzmMDLlFsx/view?usp=sharing)


---

## 📌 Overview

This system automates the end-to-end process of discovering Indian micro-influencers in the **Education niche**, enriching their profiles, and generating personalized collaboration outreach messages — all powered by AI.

Built for **K12 Olympiad**, targeting educational content creators whose audience is students from **Class 1 to Class 10** across India. The system features a **live email sending layer** via Resend API, unique referral link generation per influencer, AI-powered message personalization via Claude, and a 20% affiliate commission model.

---

## ✅ Assignment Requirements Covered

| Requirement | Status |
|---|---|
| Identify 50 Indian micro-influencers | ✅ 50 creators across YouTube & Instagram |
| Niche selection | ✅ Education (Class 1–10) |
| Filtering / Classification | ✅ 8 class segments, subject, platform, brand fit |
| Profile Enrichment | ✅ Followers, engagement, email, themes, niche |
| Email pitch (60–90 words) | ✅ Auto-generated per influencer |
| Instagram DM (15–30 words) | ✅ Auto-generated per influencer |
| AI-personalized messages | ✅ Via Anthropic Claude API (claude-sonnet-4) |
| Sending Layer | ✅ Resend API — live email sending |
| API integration | ✅ Claude API + Resend API + workflow documented |
| Unique referral links | ✅ Per influencer (k12oly.in/ref/handle) |

---

## 🧠 Key Features

### 👥 Influencer Discovery & Segmentation
- 50 Indian micro-influencers (26K–97K followers) in the Education niche
- Segmented into 8 class groups: Class 1–5, Class 6–8, Class 9–10, and multi-grade
- Each segment targets a different type of content creator and student audience

### 🔍 Smart Filtering System
- Filter by **Class Segment** (8 groups)
- Filter by **Subject** (Math, Science, English, GK, Hindi, Physics, Chemistry, Biology)
- Filter by **Platform** (YouTube / Instagram)
- Filter by **Brand Fit** (Very High / High / Medium)
- **Live search** by name, handle, or subject

### 📋 Profile Enrichment (per influencer)
- Platform, follower count, engagement rate
- Content themes and niche/category
- Contact email (mandatory)
- Profile links (Instagram / YouTube)
- Location, tone of content, recent content posted

### ✉️ Message Personalization
- **Template Email** (60–90 words) — references recent content, niche, student segment, 20% commission
- **Template DM** (15–30 words) — punchy Instagram DM format
- **AI-Generated Version** — Claude API rewrites both with deeper personalization
- **Tone Toggle** — switch between 🎩 Formal and 👋 Casual before generating

### 🔗 Unique Referral Links
- Every influencer gets: `k12oly.in/ref/{handle}`
- One-click copy button
- Designed for UTM tracking and 20% commission calculation

### 📤 Live Email Sending (Resend API)
- "Send Email via Resend API" button in every influencer modal
- Calls `/api/send_email` backend serverless function
- Sends personalized email in real time to influencer's email address
- Live status feedback: Sending → ✓ Sent / ✗ Failed

### 📊 3 Views
- **🃏 Cards** — visual grid with key metrics per card
- **📋 Table** — spreadsheet-style with all enrichment data
- **⚙️ Workflow** — full API pipeline diagram with 6 steps

---

## 🤖 LLM Used

| Model | Provider | Purpose |
|---|---|---|
| `claude-sonnet-4-20250514` | Anthropic | AI-powered email & DM personalization |

### How Claude is used:
- Takes influencer data (name, niche, recent content, tone, student segment) as context
- Generates a personalized outreach email (60–90 words) or Instagram DM (15–30 words)
- Tone instruction injected dynamically — Formal or Casual based on user toggle
- Always includes the 20% affiliate commission offer
- Called via `/api/generate.js` Vercel serverless function

---

## 🔧 Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| Frontend | React 18 + Vite | UI, filters, state management |
| LLM | Anthropic Claude (`claude-sonnet-4`) | AI message personalization |
| Email API | Resend | Live email sending to influencers |
| Backend | Vercel Serverless Functions | API routes for Claude + Resend |
| Deployment | Vercel | Hosting + CI/CD |
| Styling | CSS + Inline styles (dark design system) | UI theming |
| Fonts | Google Fonts (Outfit + Space Mono) | Typography |

---

## 🔌 APIs & Integrations

| API | File | Usage |
|---|---|---|
| **Anthropic Claude API** | `api/generate.js` | Generate personalized email and DM messages |
| **Resend API** | `api/send_email.js` | Send outreach emails to influencers in real time |
| **Instagram Graph API** *(planned)* | — | DM sending layer |
| **Qoruz / Winkl API** *(planned)* | — | Live influencer discovery and scraping |
| **Google Analytics** *(planned)* | — | UTM tracking for referral links |

---

## ⚙️ Outreach Workflow

```
Step 01 → Influencer Discovery
          Qoruz/Winkl APIs + hashtag search (#olympiadmath, #cbsescience)

Step 02 → Segmentation & Filtering
          NLP subject-tag matching → Class 1–5 / 6–8 / 9–10
          Filter by engagement rate (>4.5%), brand fit, platform

Step 03 → AI Message Generation
          Claude API (api/generate.js)
          → Personalized email (60–90 words) + DM (15–30 words)
          → Tone: Formal or Casual (user-selected)

Step 04 → Email Sending
          Resend API (api/send_email.js) → Real-time delivery

Step 05 → Instagram DM Layer
          Instagram Graph API / Phantombuster automation

Step 06 → Referral Tracking
          k12oly.in/ref/{handle} → UTM → 20% commission per registration
```

---

## 📁 Project Structure

```
K12-outreach/
├── api/
│   ├── generate.js        # Anthropic Claude API — AI message generation
│   └── send_email.js      # Resend API — live email sending
├── main/
│   ├── App.jsx            # Main React component — all UI, filters, modal
│   ├── App.css            # Component styles
│   ├── main.jsx           # React entry point
│   ├── index.css          # Global styles
│   └── index.html         # HTML template
├── public/
│   └── icons.svg          # App icons
├── .gitignore
├── eslint.config.js
├── package.json
├── package-lock.json
└── vite.config.js
```

---

## 🚀 Run Locally

```bash
# Clone the repo
git clone https://github.com/sanclap/K12-outreach.git
cd K12-outreach

# Install dependencies
npm install

# Add environment variables
# Create a .env file with:
RESEND_API_KEY=your_resend_key_here

# Start dev server
npm run dev
```

---

## 👤 Submitted By

**Sankalp Bhattacharjee**
Assignment 4 — Automated Micro-Influencer Outreach System
