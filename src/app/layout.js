

import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Script from "next/script"; // <-- import Script
import localFont from 'next/font/local';
// import { Inter } from "next/font/google";
// import ScrollToTop from '../components/ScrollToTopButton';
// import Header from '../components/eng/Header';
// import HeaderMobile from '../components/eng/HeaderMobile';
// import Footer from '../components/eng/Footer';
// Define the local Pyidaungsu font
const pyidaungsu = localFont({
  src: [
    {
      path: '../../public/fonts/pyidaungsu-regular.ttf',
      weight: '400', // Assign a weight for the regular style
      style: 'normal',
    },
    {
      path: '../../public/fonts/pyidaungsu-bold.ttf',
      weight: '700', // Assign a weight for the bold style
      style: 'normal',
    },
  ],
  display: 'swap', // This is a best practice for font loading
  variable: '--font-pyidaungsu', // Optional: Define a CSS variable for Tailwind or CSS modules
});

export const metadata = {
  metadataBase: new URL('https://tourism.gov.mm'),
  title: "Ministry of Hotels and Tourism",
  description: "Official tourism website for Myanmar.",
  openGraph: {
    images: [
      {
        url: "/assets/images/moht-logo.png",
        width: 1200,
        height: 630,
        alt: "MOHT Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/images/moht-logo.png"],
  },
};

const GA_MEASUREMENT_ID = "G-E9YKVCCKHY"; // replace with your ID
export default function RootLayout({ children }) {
  return (
    <html lang="en"  className={pyidaungsu.className}>

      <head>
        {/* Google Analytics Scripts */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body>
        
        {children}
      </body>
    </html>
  );
}