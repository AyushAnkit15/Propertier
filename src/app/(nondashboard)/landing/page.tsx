import React from "react";
// import HeroSection from "./HeroSection";
import HeroSectionCarousel from "./HeroSectionCarousel";
import FeaturesSection from "./FeaturesSection";
import DiscoverSection from "./DiscoverSection";
import CallToAction from "./CallToAction";
import Footer from "./Footer";

const Landing = () => {
  return (
    <div>
      {/* <HeroSection /> */}
      <HeroSectionCarousel/>
      <FeaturesSection/>
      <DiscoverSection/>
      <CallToAction/>
      <Footer/>
    </div>
  );
};

export default Landing;
