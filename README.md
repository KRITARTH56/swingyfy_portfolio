# SwingyFy - Modern HRMS Landing Website

A premium dark-themed SaaS landing website for SwingyFy HRMS, built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Premium dark theme with glassmorphism effects and pink/magenta accents
- **Responsive**: Fully responsive design for all devices
- **SEO Optimized**: Complete SEO setup with metadata, sitemap, and robots.txt
- **Animations**: Smooth animations using Framer Motion
- **TypeScript**: Full TypeScript support for type safety
- **Performance**: Optimized for speed and performance

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📦 Installation

1. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
portfolio_swingyfy/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── features/          # Features page
│   ├── pricing/           # Pricing page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── sitemap.ts         # Sitemap generation
│   └── robots.ts          # Robots.txt generation
├── components/            # Reusable components
│   ├── Navbar.tsx         # Navigation bar
│   ├── Hero.tsx           # Hero section
│   ├── FeaturesGrid.tsx   # Features grid
│   ├── PricingTable.tsx   # Pricing table
│   ├── TestimonialSlider.tsx # Testimonials
│   └── Footer.tsx         # Footer
├── public/                # Static assets
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

## 🎨 Design System

### Colors

- **Primary**: Pink/Magenta (#f7598f, #e03568)
- **Success**: Green (#10b981)
- **Accent**: Blue (#4FC3F7)
- **Backgrounds**: Deep Charcoal (#0F1116), Graphite Dark (#1A1D25)
- **Text**: Soft White (#F5F7FA), Muted Grey (#A5AABB)

### Typography

- **Headings**: Poppins (Bold, Semi-Bold)
- **Body**: Inter
- **Display**: Sora (Optional)

## 📄 Pages

- **Home** (`/`): Main landing page with hero, features, pricing preview, and testimonials
- **Features** (`/features`): Detailed features page
- **Pricing** (`/pricing`): Full pricing table with monthly/yearly toggle
- **About** (`/about`): About page with company information
- **Contact** (`/contact`): Contact form and information

## 🔧 Configuration

### Update Domain

Update the `baseUrl` in `app/sitemap.ts` and `app/robots.ts` with your actual domain.

### Update Metadata

Edit metadata in each page file (`app/**/page.tsx`) to match your SEO requirements.

### Customize Colors

Modify colors in `tailwind.config.ts` to match your brand.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📝 Notes

- Replace placeholder company logos in `TrustBar` component
- Update contact information in `Footer` and `Contact` page
- Add actual logo files to `/public` directory
- Customize testimonials with real customer reviews
- Update pricing plans as needed

## 🎯 Next Steps

1. Add your actual logo and branding assets
2. Replace placeholder content with real data
3. Set up analytics (Google Analytics, etc.)
4. Configure email service for contact form
5. Add more pages as needed (Blog, Case Studies, etc.)

## 📄 License

This project is private and proprietary.

## 🤝 Support

For support, email hello@swingyfy.com or visit our website.

