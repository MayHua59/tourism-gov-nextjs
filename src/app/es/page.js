import React from "react";
import HeroSection from "../../components/HeroSectionES";
import AboutSection from "@/components/es/home/AboutSection";
import WeatherWidget from "@/components/es/home/WeatherWidget";
import DigitalServiceSection from "@/components/es/home/DigitalServiceSection";
import ExploreSection from "@/components/es/home/ExploreSection";
import WhyVisitMyanmarSection from "@/components/es/home/WhyVisitMyanmarSection";
import TourismDevelopmentSection from "@/components/es/home/TourismDevelopmentSection";
import MyanmarInPicturesSection from "@/components/es/home/MyanmarInPicturesSection";
import TravelerInformationSection from "@/components/es/home/TravelerInformationSection";
import TourismNewsSection from "@/components/es/home/TourismNewsSection";
import LatestNewsSection from "@/components/es/home/LatestNewsSection";
import LatestAnnouncementsSection from "@/components/es/home/LatestAnnouncementsSection";

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
