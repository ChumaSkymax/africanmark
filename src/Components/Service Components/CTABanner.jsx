import React from "react";
import heroImg from "../../assets/hero.jpg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const CTABanner = () => {
  const navigate = useNavigate();
  return (
    <motion.section
      className="flex flex-col items-center justify-center mx-auto max-md:mx-2 
    max-md:px-2 max-w-6xl w-full text-center rounded-2xl py-20 bp-20
    bg-cover bg-center bg-no-repeat mb-20"
      style={{ backgroundImage: `url(${heroImg})` }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.h1
        className="text-2xl md:text-3xl font-medium text-white max-w-2xl"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Expertise You Can Rely On
      </motion.h1>
      <div className="h-[3px] w-32 my-1 bg-gradient-to-l from-transparent to-primary"></div>
      <motion.p
        className="text-sm md:text-base text-white max-w-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        viewport={{ once: true }}
      >
        We deliver results driven solutions that simplify complexity and
        strengthen your business performance.
      </motion.p>
      <motion.button
        onClick={() => navigate("/contact")}
        className="px-8 py-2.5 mt-4 text-sm bg-gradient-to-r from-primary to-secondary hover:scale-105 transition duration-300 text-white rounded-full"
        whileTap={{ scale: 0.97 }}
      >
        Let's Connect
      </motion.button>
    </motion.section>
  );
};

export default CTABanner;
