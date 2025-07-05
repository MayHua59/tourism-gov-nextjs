import Header from '../components/eng/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/eng/home/AboutSection';
import WeatherWidget from '../components/eng/home/WeatherWidget';
import DigitalServiceSection from '../components/eng/home/DigitalServiceSection';
import ExploreSection from "../components/eng/home/ExploreSection";

export default function HomePage() {
  return (
    <>
      <Header />
      
      <HeroSection/>
<AboutSection/>
<WeatherWidget/>
<DigitalServiceSection/>
<ExploreSection/>
    </>
  );
}

