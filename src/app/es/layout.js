import "../globals.css";



import Header from "@/components/es/Header";
import HeaderMobile from "@/components/es/HeaderMobile";
import Footer from "@/components/es/Footer";
import ScrollToTop from "@/components/ScrollToTopButton";




export const metadata = {
  title: "Ministry of Hotels and Tourism",
  description: "The official tourism website for Myanmar.",
};

export default function EsLayout({ children }) {
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