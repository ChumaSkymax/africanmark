import React from "react";
import { assets } from "../../assets/asset";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col md:flex-row items-center max-md:text-center justify-between pb-16 px-6 pt-28 md:px-16 lg:px-24 xl:px-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true }}
        className="flex flex-col items-center md:items-start"
      >
        <motion.button
          className="mt-16 mb-6 flex items-center space-x-2 border
           border-primary text-primary text-xs rounded-full px-4 pr-1.5 py-1.5 dark:border-slate-200 dark:text-gray-300
            hover:bg-indigo-50 hover:text-primary transition"
          type="button"
          onClick={() => navigate("/service")}
          whileTap={{ scale: 0.97 }}
        >
          <span>Explore how we help grow businesses.</span>
          <span className="flex items-center justify-center size-6 p-1 rounded-full bg-primary">
            <motion.svg
              width="14"
              height="11"
              viewBox="0 0 16 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ x: 0 }}
              whileHover={{ x: 2 }}
            >
              <path
                d="M1 6.5h14M9.5 1 15 6.5 9.5 12"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </span>
        </motion.button>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-900 dark:text-gray-300 font-semibold  text-3xl sm:text-4xl md:text-5xl max-w-xl"
        >
          Your Partner in Compliance, Growth,
          <span className="text-primary dark:text-gray-300"> and Impact</span>
        </motion.h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-md text-sm sm:text-base leading-relaxed">
          Audit, tax, accounting, and advisory solutions that drive impact —
          trusted by public institutions, NGOs, and private clients since 2015.
        </p>
        <div className="flex flex-col md:flex-row items-center mt-8 mb-8 gap-3 w-full">
          <motion.button
            className="bg-primary text-white px-6 pr-2.5 w-full md:w-auto justify-center
            cursor-pointer py-2.5 rounded-full text-sm font-medium flex items-center space-x-2 hover:bg-secondary transition"
            type="button"
            onClick={() => navigate("/about")}
            whileTap={{ scale: 0.97 }}
          >
            <span>Our Story</span>
            <motion.svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ x: 0 }}
              whileHover={{ x: 2 }}
            >
              <path
                d="M4.821 11.999h13.43m0 0-6.714-6.715m6.715 6.715-6.715 6.715"
                stroke="#fff"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.button>
          <motion.a
            className="text-primary bg-gray-300 px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200
              cursor-pointer hover:scale-105 transition duration-300 w-full md:w-auto text-center"
            onClick={() => navigate("/contact")}
            whileTap={{ scale: 0.97 }}
          >
            Let's Connect
          </motion.a>
        </div>
      </motion.div>
      <div className="flex justify-center items-center">
        <motion.img
          alt="AfricanMark hero image"
          className="w-120 max-w-2xl  rounded-lg hover:scale-105 transition duration-300 object-cover flex-shrink-0 shadow-lg gpu-smooth"
          src={assets.heroImg}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.section>
  );
};

export default Hero;
