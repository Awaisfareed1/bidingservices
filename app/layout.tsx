import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Script from 'next/script';
import { Toaster } from 'react-hot-toast';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>

        {/* ✅ Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7D6QXY2SW9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7D6QXY2SW9');
          `}
        </Script>

        {/* Layout */}
        <Navbar />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />

        {/* 🔥 TOASTER (added only this) */}
        <Toaster
          position="bottom-right" // ✅ changed from top-center
          toastOptions={{
            duration: 5000,
            style: {
              background: '#111',
              color: '#fff',
              border: '1px solid #222',
              borderRadius: '10px',
            },
            success: {
              style: {
                background: '#16a34a',
              },
            },
            error: {
              style: {
                background: '#dc2626',
              },
            },
          }}
        />

      </body>
    </html>
  );
}