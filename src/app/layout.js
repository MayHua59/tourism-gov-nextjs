

import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { Inter } from "next/font/google";
// import ScrollToTop from '../components/ScrollToTopButton';
// import Header from '../components/eng/Header';
// import HeaderMobile from '../components/eng/HeaderMobile';
// import Footer from '../components/eng/Footer';
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
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        {children}
      </body>
    </html>
  );
}