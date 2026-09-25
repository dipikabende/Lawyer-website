import React from "react";
import Hero from "../../components/Hero/Hero";
import AboutSection from "../../components/AboutSection/AboutSection";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import Founder from "../../components/Founder/Founder";

function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <Founder />
    </main>
  );
}

export default Home;
