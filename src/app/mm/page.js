import React from 'react';
import HeroSectionMM from '../../components/HeroSectionMM';
import AboutSection from '../../components/mm/home/AboutSection';
import WeatherWidget from '../../components/eng/home/WeatherWidget';
import DigitalServiceSection from '../../components/mm/home/DigitalServiceSection';
import ExploreSection from "../../components/mm/home/ExploreSection";
import WhyVisitMyanmarSection from '../../components/mm/home/WhyVisitMyanmarSection';
import TourismDevelopmentSection from '../../components/mm/home/TourismDevelopmentSection';
import MyanmarInPicturesSection from '../../components/mm/home/MyanmarInPicturesSection';
import CallActionSection from '../../components/mm/home/CallActionSection';
import TravelerInformationSection from '../../components/mm/home/TravelerInformationSection';
import TourismNewsSection from '../../components/mm/home/TourismNewsSection';
import LatestNewsSection from '../../components/mm/home/LatestNewsSection';


const Page = () => {
  return (
    <>
     <HeroSectionMM/>
<AboutSection/>
<WeatherWidget/>
<DigitalServiceSection/>
<ExploreSection/>
<WhyVisitMyanmarSection/>
<TourismDevelopmentSection/>
<MyanmarInPicturesSection/>
<CallActionSection/>
<TravelerInformationSection/>
<TourismNewsSection/>
<LatestNewsSection/>
    </>
  );
}

export default Page;