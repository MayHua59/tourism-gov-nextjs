import React from "react";
import HeroSectionMM from "../../components/HeroSectionMM";
import AboutSection from "../../components/mm/home/AboutSection";
import WeatherWidget from "../../components/eng/home/WeatherWidget";
import DigitalServiceSection from "../../components/mm/home/DigitalServiceSection";
import ExploreSection from "../../components/mm/home/ExploreSection";
import WhyVisitMyanmarSection from "../../components/mm/home/WhyVisitMyanmarSection";
import TourismDevelopmentSection from "../../components/mm/home/TourismDevelopmentSection";
import MyanmarInPicturesSection from "../../components/mm/home/MyanmarInPicturesSection";
import CallActionSection from "../../components/mm/home/CallActionSection";
import TravelerInformationSection from "../../components/mm/home/TravelerInformationSection";
import TourismNewsSection from "../../components/mm/home/TourismNewsSection";
import LatestNewsSection from "../../components/mm/home/LatestNewsSection";
import LatestAnnouncementsSection from "@/components/mm/home/LatestAnnouncementsSection";
import Marquee from '@/components/eng/Marquee';
import Countdown from '@/components/eng/Countdown';

const Page = () => {
  return (
    <>



      <HeroSectionMM />
         {/* <Marquee speed={10} direction="left">
      ၂၀၂၅ ခုနှစ် ကမ္ဘာ့ခရီးသွားလုပ်ငန်းနေ့

(ခရီးသွားကဏ္ဍရေရှည်ဖွံ့ဖြိုးဖို့၊ စဉ်ဆက်မပြတ်ဖော်ဆောင်စို့) &nbsp;&nbsp;&nbsp;&nbsp;၂၀၂၅ ခုနှစ် ကမ္ဘာ့ခရီးသွားလုပ်ငန်းနေ့

(ခရီးသွားကဏ္ဍရေရှည်ဖွံ့ဖြိုးဖို့၊ စဉ်ဆက်မပြတ်ဖော်ဆောင်စို့) &nbsp;&nbsp;&nbsp;&nbsp;၂၀၂၅ ခုနှစ် ကမ္ဘာ့ခရီးသွားလုပ်ငန်းနေ့

(ခရီးသွားကဏ္ဍရေရှည်ဖွံ့ဖြိုးဖို့၊ စဉ်ဆက်မပြတ်ဖော်ဆောင်စို့)
    </Marquee> */}
     {/* <Countdown
      end="2025-09-27T09:30:00"
      message="၂၀၂၅ ခုနှစ် ကမ္ဘာ့ခရီးသွားလုပ်ငန်းနေ့"
slogan="(ခရီးသွားကဏ္ဍရေရှည်ဖွံ့ဖြိုးဖို့၊ စဉ်ဆက်မပြတ်ဖော်ဆောင်စို့)"
dateText="၂၇-၉-၂၀၂၅"
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
      

    </>
  );
};

export default Page;
