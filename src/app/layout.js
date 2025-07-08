

import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import ScrollToTop from '../components/ScrollToTopButton';
import Header from '../components/eng/Header';
import HeaderMobile from '../components/eng/HeaderMobile';
import Footer from '../components/eng/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
         <div className="desktop-header"><Header /></div>
          <div className="mobile-header"><HeaderMobile /></div>
        <div>
          
          {children}
        </div>
        <Footer/>
        <ScrollToTop/>
      </body>
    </html>
  );
}