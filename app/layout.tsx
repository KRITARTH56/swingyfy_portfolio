import type { Metadata } from 'next'
import { Inter, Poppins, Sora } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins' 
})
const sora = Sora({ 
  subsets: ['latin'],
  variable: '--font-sora' 
})

export const metadata: Metadata = {
  title: 'SwingyFy - Modern HRMS to Empower Growing Teams',
  description: 'SwingyFy helps companies manage payroll, employees, attendance, hiring and productivity with automation and insights. The complete HRMS for growing companies.',
  keywords: 'HRMS, HR software, payroll management, employee management, attendance tracking, recruitment, HR automation, SaaS HR',
  authors: [{ name: 'SwingyFy' }],
  icons: {
    icon: '/logo-icon.svg',
    apple: '/logo-icon.svg',
  },
  openGraph: {
    title: 'SwingyFy - Modern HRMS to Empower Growing Teams',
    description: 'The complete HRMS for growing companies. Manage payroll, employees, attendance, hiring and productivity.',
    url: 'https://swingyfy.com',
    siteName: 'SwingyFy',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SwingyFy HRMS',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SwingyFy - Modern HRMS to Empower Growing Teams',
    description: 'The complete HRMS for growing companies.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${poppins.variable} ${sora.variable} antialiased bg-deep-charcoal`}>
        <Navbar />
        <main className="min-h-screen bg-deep-charcoal">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'SwingyFy',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.7',
                ratingCount: '1250',
              },
              description: 'Modern HRMS to Empower Growing Teams',
            }),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function ensureVisibility() {
                  const section = document.querySelector('main section:first-of-type');
                  if (section) {
                    const allElements = section.querySelectorAll('*');
                    allElements.forEach(function(el) {
                      if (el instanceof HTMLElement) {
                        el.style.setProperty('opacity', '1', 'important');
                        el.style.setProperty('visibility', 'visible', 'important');
                      }
                    });
                  }
                }
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', ensureVisibility);
                } else {
                  ensureVisibility();
                }
                setTimeout(ensureVisibility, 0);
                setTimeout(ensureVisibility, 50);
                setTimeout(ensureVisibility, 100);
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}

