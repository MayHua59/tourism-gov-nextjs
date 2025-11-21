import React from "react";
import HeroSection from "../../components/HeroSectionTH";
import AboutSection from "@/components/th/home/AboutSection";
import WeatherWidget from "@/components/th/home/WeatherWidget";
import DigitalServiceSection from "@/components/th/home/DigitalServiceSection";
import ExploreSection from "@/components/th/home/ExploreSection";
import WhyVisitMyanmarSection from "@/components/th/home/WhyVisitMyanmarSection";
import TourismDevelopmentSection from "@/components/th/home/TourismDevelopmentSection";
import MyanmarInPicturesSection from "@/components/th/home/MyanmarInPicturesSection";
import TravelerInformationSection from "@/components/th/home/TravelerInformationSection";
import TourismNewsSection from "@/components/th/home/TourismNewsSection";
import LatestNewsSection from "@/components/th/home/LatestNewsSection";
import LatestAnnouncementsSection from "@/components/th/home/LatestAnnouncementsSection";

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
