import "../globals.css";



import Header from "@/components/vn/Header";
import HeaderMobile from "@/components/vn/HeaderMobile";
import Footer from "@/components/vn/Footer";
import ScrollToTop from "@/components/ScrollToTopButton";




export const metadata = {
  title: "Bộ Khách sạn và Du lịch",
  description: "Bộ Khách sạn và Du lịch",
};

export default function VNLayout({ children }) {
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