import React from "react";
import HeroSection from "../../components/HeroSection";
import AboutSection from "../../components/kr/home/AboutSection";
import WeatherWidget from "../../components/kr/home/WeatherWidget";
import DigitalServiceSection from "../../components/kr/home/DigitalServiceSection";
import ExploreSection from "../../components/kr/home/ExploreSection";
import WhyVisitMyanmarSection from "../../components/kr/home/WhyVisitMyanmarSection";
import TourismDevelopmentSection from "../../components/kr/home/TourismDevelopmentSection";
import MyanmarInPicturesSection from "../../components/kr/home/MyanmarInPicturesSection";
import TravelerInformationSection from "../../components/kr/home/TravelerInformationSection";
import TourismNewsSection from "../../components/kr/home/TourismNewsSection";
import LatestNewsSection from "../../components/kr/home/LatestNewsSection";
import LatestAnnouncementsSection from "@/components/kr/home/LatestAnnouncementsSection";
import Marquee from '@/components/kr/Marquee';
import Countdown from '@/components/kr/Countdown';

const Page = () => {
  return (
    <>
     <HeroSection/>
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
<AboutSection/>
<WeatherWidget/>
<DigitalServiceSection/>
<ExploreSection/>
<WhyVisitMyanmarSection/>
<TourismDevelopmentSection/>
<MyanmarInPicturesSection/>
{/* <CallActionSection/> */}
<TravelerInformationSection/>
{/* <TourismNewsSection/> */}
<LatestNewsSection/>
<LatestAnnouncementsSection/>
    </>
  );
};

export default Page;
