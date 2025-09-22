import './globals.css';

export const metadata = {
  title: 'King Amato aka <Chae /> | Full Stack Developer',
  description: 'Porfolio',
  keywords: [
    'King Amato',
    'Chae',
    'Full Stack Developer',
    'Portfolio',
    'Web Development',
  ],
  openGraph: {
    title: 'King Amato aka <Chae /> | Full Stack Developer',
    description: 'Porfolio',
    url: 'https://www.mywebsite.com',
    siteName: '<Chae/>',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preload your small CSS file to prevent render blocking */}
        <link
          rel="preload"
          href="/css/bb2e23f0582de1e4.css"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>
          <link rel="stylesheet" href="/css/bb2e23f0582de1e4.css" />
        </noscript>
      </head>

      <body>
        {children}
        <footer className="py-4 text-center text-[#D9D9D9] bg-[#0E0E0E] border-t border-b border-[#B7B5C2]">
          © 2025 King Amato. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
