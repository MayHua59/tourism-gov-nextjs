import React from "react";
import HeroSection from "../../components/HeroSectionJP";
import AboutSection from "@/components/jp/home/AboutSection";
import WeatherWidget from "@/components/jp/home/WeatherWidget";
import DigitalServiceSection from "@/components/jp/home/DigitalServiceSection";
import ExploreSection from "@/components/jp/home/ExploreSection";
import WhyVisitMyanmarSection from "@/components/jp/home/WhyVisitMyanmarSection";
import TourismDevelopmentSection from "@/components/jp/home/TourismDevelopmentSection";
import MyanmarInPicturesSection from "@/components/jp/home/MyanmarInPicturesSection";
import TravelerInformationSection from "@/components/jp/home/TravelerInformationSection";
import TourismNewsSection from "@/components/jp/home/TourismNewsSection";
import LatestNewsSection from "@/components/jp/home/LatestNewsSection";
import LatestAnnouncementsSection from "@/components/jp/home/LatestAnnouncementsSection";

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
