import React from "react";
import HeroSection from "../../components/HeroSectionVN";
import AboutSection from "@/components/vn/home/AboutSection";
import WeatherWidget from "@/components/vn/home/WeatherWidget";
import DigitalServiceSection from "@/components/vn/home/DigitalServiceSection";
import ExploreSection from "@/components/vn/home/ExploreSection";
import WhyVisitMyanmarSection from "@/components/vn/home/WhyVisitMyanmarSection";
import TourismDevelopmentSection from "@/components/vn/home/TourismDevelopmentSection";
import MyanmarInPicturesSection from "@/components/vn/home/MyanmarInPicturesSection";
import TravelerInformationSection from "@/components/vn/home/TravelerInformationSection";
import TourismNewsSection from "@/components/vn/home/TourismNewsSection";
import LatestNewsSection from "@/components/vn/home/LatestNewsSection";
import LatestAnnouncementsSection from "@/components/vn/home/LatestAnnouncementsSection";

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
