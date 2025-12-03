import React from "react";
import HeroSection from "../../components/HeroSectionGerman";
import AboutSection from "@/components/german/home/AboutSection";
import WeatherWidget from "@/components/german/home/WeatherWidget";
import DigitalServiceSection from "@/components/german/home/DigitalServiceSection";
import ExploreSection from "@/components/german/home/ExploreSection";
import WhyVisitMyanmarSection from "@/components/german/home/WhyVisitMyanmarSection";
import TourismDevelopmentSection from "@/components/german/home/TourismDevelopmentSection";
import MyanmarInPicturesSection from "@/components/german/home/MyanmarInPicturesSection";
import TravelerInformationSection from "@/components/german/home/TravelerInformationSection";
import TourismNewsSection from "@/components/german/home/TourismNewsSection";
import LatestNewsSection from "@/components/german/home/LatestNewsSection";
import LatestAnnouncementsSection from "@/components/german/home/LatestAnnouncementsSection";

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
