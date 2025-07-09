import "../globals.css";
import { Inter } from "next/font/google";


import Header from "../../components/mm/Header"; 
import HeaderMobile from "../../components/mm/HeaderMobile";
import Footer from "../../components/mm/Footer";
import ScrollToTop from "../../components/ScrollToTopButton";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "ဟိုတယ်နှင့်ခရီးသွားလာရေးဝန်ကြီးဌာန",
  description: "မြန်မာနိုင်ငံ၏ တရားဝင်ခရီးသွားလုပ်ငန်း ဝဘ်ဆိုဒ်",
};

export default function MMLayout({ children }) {
  return (
    <html lang="mm"> 
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