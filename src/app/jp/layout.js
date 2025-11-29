import "../globals.css";



import Header from "@/components/jp/Header";
import HeaderMobile from "@/components/jp/HeaderMobile";
import Footer from "@/components/jp/Footer";
import ScrollToTop from "@/components/ScrollToTopButton";




export const metadata = {
  title: "ミャンマーの観光情報",
  description: "ミャンマーの観光情報",
};

export default function JPLayout({ children }) {
  return (
    
        
          <>
               <div className="desktop-header"><Header /></div>
                <div className="mobile-header"><HeaderMobile /></div>
              <div>
                
                {children}
              </div>
              <Footer/>
              <ScrollToTop/>
          </>
            
    
  );
}