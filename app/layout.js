import './globals.css';

export const metadata = {
  title: 'Point and Profit — See What It\'s Worth',
  description: 'Point your phone at anything and instantly discover its market value. AI-powered universal appraiser for coins, antiques, collectibles, real estate, and more.',
  keywords: 'appraiser, identify, value, coins, antiques, collectibles, resale, thrift, flip, scanner, AI',
  openGraph: {
    title: 'Point and Profit — See What It\'s Worth',
    description: 'Point your phone at anything and instantly discover its market value.',
    url: 'https://pointandprofit.app',
    siteName: 'Point and Profit',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Point and Profit — See What It\'s Worth',
    description: 'Point your phone at anything and instantly discover its market value.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
