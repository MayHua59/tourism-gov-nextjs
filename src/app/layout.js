

import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { Inter } from "next/font/google";
// import ScrollToTop from '../components/ScrollToTopButton';
// import Header from '../components/eng/Header';
// import HeaderMobile from '../components/eng/HeaderMobile';
// import Footer from '../components/eng/Footer';
export const metadata = {
  title: "Ministry of Hotels and Tourism",
  description: "Official tourism website for Myanmar.",
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