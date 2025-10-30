import React from "react";
import Header from "../../components/ru/Header";
import HeroSectionRU from "../../components/HeroSectionRU";
import AboutSection from "../../components/ru/home/AboutSection";
import WeatherWidget from "../../components/ru/home/WeatherWidget";
import DigitalServiceSection from "../../components/ru/home/DigitalServiceSection";
import ExploreSection from "../../components/ru/home/ExploreSection";
import WhyVisitMyanmarSection from "../../components/ru/home/WhyVisitMyanmarSection";
import TourismDevelopmentSection from "../../components/ru/home/TourismDevelopmentSection";
import MyanmarInPicturesSection from "../../components/ru/home/MyanmarInPicturesSection";
import CallActionSection from "../../components/ru/home/CallActionSection";
import TravelerInformationSection from "../../components/ru/home/TravelerInformationSection";
import TourismNewsSection from "../../components/ru/home/TourismNewsSection";
import LatestNewsSection from "../../components/ru/home/LatestNewsSection";
import LatestAnnouncementsSection from "@/components/ru/home/LatestAnnouncementsSection";
import Marquee from '@/components/ru/Marquee';
import Countdown from '@/components/ru/Countdown';

const Page = () => {
  return (
    <>
     <HeroSectionRU/>
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
