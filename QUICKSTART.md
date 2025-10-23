# Quick Start Guide - Speech0 Website

## What You Got

A fully functional, modern landing page with:
- **Light/Dark theme toggle** (defaults to light)
- **Gradient product cards** using your 4 images as backgrounds
- **Navigation header** with theme switcher
- **Hero section** with clean, minimal design
- **Products grid** showcasing your 4 main offerings
- **Founder video section** (R2 storage ready)
- **Case studies section** with 3 placeholder projects
- **Contact section** with form + Calendly integration

## Immediate Next Steps

### 1. Start the Dev Server
```bash
npm run dev
```
Visit: http://localhost:3000 (or 3001/3002 if port is occupied)

### 2. Update Your Content

Edit `lib/constants.ts`:
```typescript
export const SITE_CONFIG = {
  founderVideoUrl: "YOUR_R2_VIDEO_URL_HERE",
  calendlyUrl: "YOUR_CALENDLY_URL_HERE",
}
```

### 3. Test Theme Switching
Click the sun/moon icon in the top-right navigation to toggle between light and dark modes.

## Key Features

✅ **Light theme by default** (white background, black text)
✅ **Dark mode support** (smooth transition)
✅ **Your 4 gradient images** used as product card backgrounds:
   - `/images/2.png` → AI Call Agents
   - `/images/3.png` → RAG Chatbots  
   - `/images/4.png` → AI-Driven CRMs
   - `/images/1.png` → Enterprise Consulting

✅ **Fully responsive** mobile, tablet, desktop
✅ **Production ready** - build tested and successful
✅ **Custom cursor** with smooth animations

## File Structure

```
Key Files:
├── components/
│   ├── navigation.tsx          ← Header with theme toggle
│   ├── theme-toggle.tsx        ← Light/Dark switcher
│   ├── theme-provider.tsx      ← Theme context
│   └── sections/
│       ├── hero-v2.tsx         ← Clean hero section
│       ├── products-grid.tsx   ← 4 gradient cards
│       ├── founder-video.tsx   ← Video section
│       ├── case-studies.tsx    ← Case studies
│       └── contact.tsx         ← Form + Calendly
├── lib/constants.ts            ← ALL CONTENT HERE
├── app/page.tsx                ← Main page
└── public/images/              ← Your gradient images
```

## Customization Guide

### Change Text/Content
All content is in [lib/constants.ts](lib/constants.ts):
- Site name, tagline, description
- Products list (4 main offerings)
- Case studies (3 placeholder projects)
- Video + Calendly URLs

### Change Colors
Light mode colors are in [app/globals.css](app/globals.css):
- Currently: White background, black text
- Accent: Purple/blue gradients
- Modify `:root` CSS variables for light theme
- Modify `.dark` CSS variables for dark theme

### Add/Remove Sections
Edit [app/page.tsx](app/page.tsx) - just import/export components

## Deploy to Production

### Option 1: Vercel (Recommended)
1. Push to GitHub
2. Import on vercel.com
3. Deploy (automatic)

### Option 2: Build Manually
```bash
npm run build
npm start
```

## Need Help?

- Full docs: [claude.md](claude.md)
- README: [README.md](README.md)

## Dev Server Running?
Currently running on: **http://localhost:3002**
(Check terminal for exact port)

---

Built with Next.js 14 + TypeScript + Tailwind CSS + Framer Motion
