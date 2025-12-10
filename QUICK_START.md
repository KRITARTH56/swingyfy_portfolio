# Quick Start Guide - SwingyFy Landing Website

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation Steps

1. **Navigate to the project directory**:
   ```bash
   cd portfolio_swingyfy
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure Overview

```
portfolio_swingyfy/
├── app/                    # Next.js pages (App Router)
│   ├── page.tsx           # Home page
│   ├── features/          # Features page
│   ├── pricing/           # Pricing page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── layout.tsx         # Root layout
├── components/            # Reusable React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── FeaturesGrid.tsx
│   ├── PricingTable.tsx
│   ├── TestimonialSlider.tsx
│   └── Footer.tsx
└── public/                # Static assets
    └── logo.svg          # Logo placeholder
```

## 🎨 Theme Colors

The website uses a **pink/magenta theme** matching your HRMS dashboard:

- **Primary Pink**: `#f7598f`
- **Primary Pink Dark**: `#e03568`
- **Success Green**: `#10b981`
- **Accent Blue**: `#4FC3F7`

## ✨ Interactive Animations

The website includes:
- Parallax scroll effects
- Hover animations on cards and buttons
- Scroll-triggered animations
- Smooth transitions
- 3D transforms
- Shimmer effects

## 🎯 Customization

### Update Brand Colors
Edit `tailwind.config.ts` to change colors

### Update Content
- **Hero Section**: Edit `components/Hero.tsx`
- **Features**: Edit `components/FeaturesGrid.tsx`
- **Pricing**: Edit `components/PricingTable.tsx`
- **Testimonials**: Edit `components/TestimonialSlider.tsx`

### Add Your Logo
1. Replace `public/logo.svg` with your logo
2. Update logo references in `components/Navbar.tsx` and `components/Footer.tsx`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

### Build for Production

```bash
npm run build
npm start
```

## 📝 Next Steps

1. ✅ Replace placeholder content with real data
2. ✅ Add your actual logo and branding
3. ✅ Set up contact form backend
4. ✅ Add analytics (Google Analytics, etc.)
5. ✅ Configure email service
6. ✅ Add more pages/content as needed

## 🐛 Troubleshooting

### Port Already in Use
If port 3000 is busy, use:
```bash
npm run dev -- -p 3001
```

### Build Errors
Clear Next.js cache:
```bash
rm -rf .next
npm run build
```

### Styling Issues
Ensure Tailwind is properly configured:
- Check `tailwind.config.ts`
- Verify `postcss.config.js` exists
- Check `app/globals.css` imports Tailwind

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

