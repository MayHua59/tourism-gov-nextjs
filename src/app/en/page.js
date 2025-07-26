import React from "react";
import Header from "../../components/eng/Header";
import HeroSection from "../../components/HeroSection";
import AboutSection from "../../components/eng/home/AboutSection";
import WeatherWidget from "../../components/eng/home/WeatherWidget";
import DigitalServiceSection from "../../components/eng/home/DigitalServiceSection";
import ExploreSection from "../../components/eng/home/ExploreSection";
import WhyVisitMyanmarSection from "../../components/eng/home/WhyVisitMyanmarSection";
import TourismDevelopmentSection from "../../components/eng/home/TourismDevelopmentSection";
import MyanmarInPicturesSection from "../../components/eng/home/MyanmarInPicturesSection";
import CallActionSection from "../../components/eng/home/CallActionSection";
import TravelerInformationSection from "../../components/eng/home/TravelerInformationSection";
import TourismNewsSection from "../../components/eng/home/TourismNewsSection";
import LatestNewsSection from "../../components/eng/home/LatestNewsSection";

const Page = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WeatherWidget />
      <DigitalServiceSection />
      <ExploreSection />
      <WhyVisitMyanmarSection />
      <TourismDevelopmentSection />
      <MyanmarInPicturesSection />
      <CallActionSection />
      <TravelerInformationSection />
      <TourismNewsSection />
      <LatestNewsSection />
    </>
  );
};

export default Page;
