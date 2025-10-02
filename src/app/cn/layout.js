import "../globals.css";



import Header from "../../components/eng/Header";
import HeaderMobile from "../../components/eng/HeaderMobile";
import Footer from "../../components/eng/Footer";
import ScrollToTop from "../../components/ScrollToTopButton";




export const metadata = {
  title: "Ministry of Hotels and Tourism",
  description: "The official tourism website for Myanmar.",
};

export default function CNLayout({ children }) {
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

