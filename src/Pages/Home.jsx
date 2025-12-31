import React from "react";
import Hero from "../Components/HomeComponents/Hero";

import FeatureSection from "../Components/HomeComponents/FeatureSection";
import WhyChooseUs from "../Components/HomeComponents/WhyChooseUs";
import PartnerWithUs from "../Components/HomeComponents/PartnerWithUs";
import CTABanner from "../Components/Service Components/CTABanner";
import { motion } from "framer-motion";
import OurClients from "../Components/HomeComponents/OurClients";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Hero />
      <FeatureSection />
      <OurClients/>
      <WhyChooseUs />
      <CTABanner />
    </motion.div>
  );
};

export default Home;
