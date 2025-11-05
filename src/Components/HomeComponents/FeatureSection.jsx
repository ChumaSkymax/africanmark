import React from "react";
import Title from "../Title";
import ServiceCard from "./ServiceCard";
import { expertise } from "../../assets/asset";
import { motion } from "framer-motion";

const FeatureSection = () => {
  const container = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.12,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30"
    >
      <Title
        title="Our Expertise"
        subTitle="Since 2015, we've helped businesses, NGOs, and public institutions achieve compliance, financial clarity, and sustainable growth."
        align="center"
      />
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18 "
      >
        {expertise.map((service, index) => (
          <motion.div key={index} variants={item} whileHover={{ y: -6 }}>
            <ServiceCard index={index} service={service} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default FeatureSection;
