import "../globals.css";



import Header from "../../components/ru/Header";
import HeaderMobile from "../../components/ru/HeaderMobile";
import Footer from "../../components/ru/Footer";
import ScrollToTop from "../../components/ScrollToTopButton";




export const metadata = {
  title: "Ministry of Hotels and Tourism",
  description: "The official tourism website for Russia.",
};

export default function RULayout({ children }) {
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