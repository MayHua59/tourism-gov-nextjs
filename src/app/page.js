import Header from '../components/eng/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/eng/home/AboutSection';
import WeatherWidget from '../components/eng/home/WeatherWidget';
import DigitalServiceSection from '../components/eng/home/DigitalServiceSection';
import ExploreSection from "../components/eng/home/ExploreSection";
import WhyVisitMyanmarSection from '../components/eng/home/WhyVisitMyanmarSection';
import TourismDevelopmentSection from '../components/eng/home/TourismDevelopmentSection';
import MyanmarInPicturesSection from '../components/eng/home/MyanmarInPicturesSection';
import CallActionSection from '../components/eng/home/CallActionSection';
import TravelerInformationSection from '../components/eng/home/TravelerInformationSection';
import TourismNewsSection from '../components/eng/home/TourismNewsSection';
import LatestNewsSection from '../components/eng/home/LatestNewsSection';
import Footer from '../components/eng/Footer';
import HeaderMobile from '../components/eng/HeaderMobile';
import ScrollToTop from '@/components/ScrollToTopButton';
import LatestAnnouncementsSection from '@/components/eng/home/LatestAnnouncementsSection';
import Marquee from '@/components/eng/Marquee';
import Countdown from '@/components/eng/Countdown';

export default function HomePage() {
  
  return (
    <>
    <div className="desktop-header"><Header /></div>
                    <div className="mobile-header"><HeaderMobile /></div>
      <HeroSection />
       {/* <Marquee speed={10} direction="left">
      World Tourism Day 2025
(Tourism And Sustainable Transformation)&nbsp;&nbsp;&nbsp;&nbsp;World Tourism Day 2025
(Tourism And Sustainable Transformation)&nbsp;&nbsp;&nbsp;&nbsp;World Tourism Day 2025
(Tourism And Sustainable Transformation)
    </Marquee> */}
    {/* <Countdown
      end="2025-09-27T09:30:00"
      message="WORLD TOURISM DAY 2025"
slogan="(TOURISM AND SUSTAINABLE TRANSFORMATION)"
dateText="27-9-2025"
      logo="/assets/images/logo-images/world-tourism-day.png"
      finishedMessage="The event has started!"
    /> */}
      <AboutSection />
      <WeatherWidget />
      <DigitalServiceSection />
      <ExploreSection />
      <WhyVisitMyanmarSection />
      <TourismDevelopmentSection />
      <MyanmarInPicturesSection />
      {/* <CallActionSection /> */}
      <TravelerInformationSection />
      {/* <TourismNewsSection /> */}
      <LatestNewsSection /> 
      <LatestAnnouncementsSection/>
      <Footer/>
      <ScrollToTop/>
    </>
  );
}


