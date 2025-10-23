# Speech0 - AI Automation Agency Website

## Project Overview

Speech0 is a modern, elegant landing page for an AI automation agency built with Next.js 14, TypeScript, Tailwind CSS, and custom animated components. Features a clean light theme with dark mode support.

### Design Philosophy
- **Light theme by default** with white backgrounds and black text
- **Dark mode support** via next-themes toggle
- **Gradient cards** using provided images as backgrounds for products
- **Clean, minimal design** inspired by modern SaaS landing pages
- **Elegant typography** with smooth animations

### Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Theme Management**: next-themes
- **External Integrations**: Calendly (for scheduling)

---

## Project Structure

```
speech0land/
├── app/
│   ├── layout.tsx          # Root layout with metadata & cursor
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles & custom CSS
├── components/
│   ├── sections/
│   │   ├── hero.tsx        # Hero section with gradient bg
│   │   ├── founder-video.tsx  # Video section with R2 placeholder
│   │   ├── case-studies.tsx   # Case studies grid
│   │   └── contact.tsx     # Contact form & Calendly
│   ├── magicui/
│   │   ├── cursor-trail.tsx   # Custom animated cursor
│   │   ├── fade-in.tsx     # Scroll-triggered fade animations
│   │   ├── gradient-bg.tsx # Animated gradient backgrounds
│   │   └── shimmer-button.tsx # Animated CTA button
│   └── ui/                 # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── textarea.tsx
├── lib/
│   ├── utils.ts            # Utility functions (cn)
│   └── constants.ts        # Site config & content data
├── public/
│   └── images/
│       ├── 1.png          # Hero background gradient
│       ├── 2.png          # Case study 1 image
│       ├── 3.png          # Case study 2 image
│       └── 4.png          # Case study 3 image
└── references/
    └── image.png          # Original design reference
```

---

## Setup Instructions

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

---

## Configuration

### 1. Update Site Information

Edit `lib/constants.ts`:

```typescript
export const SITE_CONFIG = {
  name: "Speech0",
  tagline: "AI Automation Agency",
  description: "Transform your business with cutting-edge AI automation solutions",
  founderVideoUrl: "https://your-r2-storage-url.com/founder-video.mp4", // ← UPDATE THIS
  calendlyUrl: "https://calendly.com/your-username", // ← UPDATE THIS
}
```

### 2. Update Founder Video URL

**Steps to add your video:**
1. Upload your video to Cloudflare R2 (or any cloud storage)
2. Get the public URL
3. Update `founderVideoUrl` in `lib/constants.ts`
4. The video will automatically appear in the FounderVideo section

### 3. Update Calendly Integration

**Steps:**
1. Create a Calendly account at [calendly.com](https://calendly.com)
2. Get your scheduling link (e.g., `https://calendly.com/your-username/30min`)
3. Update `calendlyUrl` in `lib/constants.ts`
4. The Calendly widget will appear in the Contact section

### 4. Update Case Studies

Edit `CASE_STUDIES` array in `lib/constants.ts`:

```typescript
export const CASE_STUDIES = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Brief description of results",
    image: "/images/2.png", // Path to image in public/images
    stats: {
      metric: "70%",        // Key result metric
      label: "Description", // What the metric represents
    },
    tags: ["Tag1", "Tag2", "Tag3"], // Project categories
  },
  // Add more case studies...
]
```

### 5. Update Products

Edit `PRODUCTS` array in `lib/constants.ts`:

```typescript
export const PRODUCTS = [
  {
    title: "Product Name",
    description: "One-line description",
    icon: "phone", // Options: "phone", "message-circle", "database"
  },
  // Add more products...
]
```

---

## Component Documentation

### Hero Section
**Location**: `components/sections/hero.tsx`

**Features**:
- Animated gradient background using provided image
- Floating orbs animation
- Product cards with hover effects
- Dual CTA buttons (products + consultation)
- Scroll indicator

**Customization**:
- Headline text: Edit directly in the component
- Products: Update `PRODUCTS` in `constants.ts`
- Background: Replace `/images/1.png` with your own

### Founder Video Section
**Location**: `components/sections/founder-video.tsx`

**Features**:
- Click-to-play video player
- Rounded corners with gradient border effect
- R2 storage URL placeholder
- Responsive design

**Customization**:
- Video URL: Update `founderVideoUrl` in `constants.ts`
- Poster image: Update `poster="/images/2.png"` in component

### Case Studies Section
**Location**: `components/sections/case-studies.tsx`

**Features**:
- 3-column responsive grid
- Gradient image overlays
- Stats badges
- Tag pills
- Hover animations

**Customization**:
- Content: Update `CASE_STUDIES` in `constants.ts`
- Images: Add to `public/images/` and reference in array

### Contact Section
**Location**: `components/sections/contact.tsx`

**Features**:
- Tab switcher (Form / Calendly)
- Contact form with validation fields
- Embedded Calendly widget
- Dark mode compatible

**Customization**:
- Calendly URL: Update `calendlyUrl` in `constants.ts`
- Email: Update `stazizovs@gmail.com` in component
- Form handler: Add your form submission logic

---

## Custom Components (MagicUI-style)

### CursorTrail
**Location**: `components/magicui/cursor-trail.tsx`

Animated cursor with gradient dot and outer ring that follows mouse movement.

**To disable**: Remove `<CursorTrail />` from `app/layout.tsx`

### FadeIn
**Location**: `components/magicui/fade-in.tsx`

Scroll-triggered fade-in animation.

**Usage**:
```tsx
<FadeIn delay={0.2} direction="up">
  <YourContent />
</FadeIn>
```

### ShimmerButton
**Location**: `components/magicui/shimmer-button.tsx`

Animated button with shimmer effect.

**Usage**:
```tsx
<ShimmerButton className="px-8 py-4">
  Click Me
</ShimmerButton>
```

### GradientBg
**Location**: `components/magicui/gradient-bg.tsx`

Animated gradient background container.

**Usage**:
```tsx
<GradientBg className="h-screen">
  <YourContent />
</GradientBg>
```

---

## Styling

### Color Scheme

The site uses a purple-to-blue gradient theme:
- Primary: Purple (#a855f7)
- Secondary: Blue (#3b82f6)
- Background: Black (#000000)
- Text: White/Gray

### Custom Scrollbar

Gradient scrollbar is defined in `app/globals.css`:
```css
::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #a855f7, #3b82f6);
}
```

### Dark Mode

The site is in dark mode by default (`<html className="dark">`).

---

## Adding New Sections

1. Create component in `components/sections/`
2. Import in `app/page.tsx`
3. Add to the page:

```tsx
import { YourSection } from "@/components/sections/your-section"

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <YourSection />  {/* ← Add here */}
      <Contact />
    </main>
  )
}
```

---

## Performance Optimization

### Images
- All images in `public/images/` are optimized via Next.js Image component
- Uses `priority` flag for hero background (above-the-fold)
- Lazy loads other images automatically

### Animations
- Uses Framer Motion with hardware acceleration
- Scroll animations trigger only once (`triggerOnce: true`)
- Intersection Observer for visibility detection

### Code Splitting
- Automatic code splitting via Next.js App Router
- Client components marked with `"use client"`
- Server components by default

---

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import on [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

```bash
npm run build
```

Deploy the `.next` folder + `public` directory.

**Environment Variables**: None required (unless you add API integrations)

---

## Troubleshooting

### Video Not Playing
- Ensure video URL is publicly accessible
- Check browser console for CORS errors
- Update `founderVideoUrl` in `constants.ts`

### Calendly Widget Not Showing
- Verify Calendly URL is correct
- Ensure it's a public scheduling link
- Check network tab for blocked requests

### Animations Not Working
- Ensure Framer Motion is installed: `npm install framer-motion`
- Check browser supports IntersectionObserver
- Verify client components have `"use client"` directive

### Images Not Loading
- Verify images exist in `public/images/`
- Check file paths are relative to `public/`
- Use `/images/filename.png` not `public/images/filename.png`

---

## Future Enhancements

- [ ] Add blog/content section
- [ ] Integrate form submission API (Formspree, Web3Forms, etc.)
- [ ] Add testimonials section
- [ ] Create product detail pages
- [ ] Add analytics (Vercel Analytics, Google Analytics)
- [ ] SEO optimization (meta tags, schema markup)
- [ ] Add newsletter signup
- [ ] Create case study detail pages

---

## Support & Maintenance

### Updating Content
- Products: Edit `lib/constants.ts` → `PRODUCTS`
- Case Studies: Edit `lib/constants.ts` → `CASE_STUDIES`
- Site Info: Edit `lib/constants.ts` → `SITE_CONFIG`

### Adding Images
1. Place in `public/images/`
2. Reference as `/images/filename.png`
3. Use Next.js Image component for optimization

### Updating Styles
- Global styles: `app/globals.css`
- Component styles: Tailwind classes in TSX files
- Theme colors: `app/globals.css` → `:root` and `.dark`

---

## Credits

**Built with**:
- Next.js by Vercel
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Lucide Icons
- React Calendly

**Design Inspiration**: MagicUI & modern SaaS landing pages

---

## License

© 2024 Speech0. All rights reserved.

---

## Contact

For questions or support, contact: stazizovs@gmail.com
