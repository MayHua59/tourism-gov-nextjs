import React from "react";
import HeroSection from "../../components/HeroSectionIT";
import AboutSection from "@/components/it/home/AboutSection";
import WeatherWidget from "@/components/it/home/WeatherWidget";
import DigitalServiceSection from "@/components/it/home/DigitalServiceSection";
import ExploreSection from "@/components/it/home/ExploreSection";
import WhyVisitMyanmarSection from "@/components/it/home/WhyVisitMyanmarSection";
import TourismDevelopmentSection from "@/components/it/home/TourismDevelopmentSection";
import MyanmarInPicturesSection from "@/components/it/home/MyanmarInPicturesSection";
import TravelerInformationSection from "@/components/it/home/TravelerInformationSection";
import TourismNewsSection from "@/components/it/home/TourismNewsSection";
import LatestNewsSection from "@/components/it/home/LatestNewsSection";
import LatestAnnouncementsSection from "@/components/it/home/LatestAnnouncementsSection";

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
