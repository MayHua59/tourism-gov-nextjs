import React from "react";
import Header from "../../components/cn/Header";
import HeroSectionCN from "../../components/HeroSectionCN";
import AboutSection from "../../components/cn/home/AboutSection";
import WeatherWidget from "../../components/cn/home/WeatherWidget";
import DigitalServiceSection from "../../components/cn/home/DigitalServiceSection";
import ExploreSection from "../../components/cn/home/ExploreSection";
import WhyVisitMyanmarSection from "../../components/cn/home/WhyVisitMyanmarSection";
import TourismDevelopmentSection from "../../components/cn/home/TourismDevelopmentSection";
import MyanmarInPicturesSection from "../../components/cn/home/MyanmarInPicturesSection";
import CallActionSection from "../../components/cn/home/CallActionSection";
import TravelerInformationSection from "../../components/cn/home/TravelerInformationSection";
import TourismNewsSection from "../../components/cn/home/TourismNewsSection";
import LatestNewsSection from "../../components/cn/home/LatestNewsSection";
import LatestAnnouncementsSection from "@/components/cn/home/LatestAnnouncementsSection";
import Marquee from '@/components/cn/Marquee';
import Countdown from '@/components/cn/Countdown';

const Page = () => {
  return (
    <>
     <HeroSectionCN/>
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

