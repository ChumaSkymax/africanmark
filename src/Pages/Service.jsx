import React from "react";
import OurServices from "../Components/Service Components/OurService";
import CTABanner from "../Components/Service Components/CTABanner";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <OurServices />
      <CTABanner />
    </motion.div>
  );
};

export default Service;
