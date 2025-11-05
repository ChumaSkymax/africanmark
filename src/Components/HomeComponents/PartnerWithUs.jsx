import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const PartnerWithUs = () => {
  const navigate = useNavigate();
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 xl:px-32 mt-20 mb-20"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-[#6c2725] to-[#e1843e] rounded-2xl shadow-2xl w-full max-w-7xl flex flex-col items-center justify-center p-6 md:p-8"
      >
        <h2 className="font-bold text-center text-gray-300 text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-2xl mb-4">
          Your Partner for Excellence in Audit, Tax & Advisory
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-center text-gray-300 max-w-2xl mb-6">
          At Africanmark Services, we go beyond numbers — we deliver clarity,
          confidence, and lasting value. Our team blends local expertise with
          global standards to help you make informed decisions and achieve
          sustainable growth.
        </p>
        <motion.button
          className="mt-4 flex items-center space-x-2 border border-gray-300 text-gray-300 text-sm md:text-base rounded-full px-4 md:px-6 pr-2 md:pr-3 py-2 md:py-3 hover:bg-gray-800 hover:text-white transition-all duration-300 font-medium"
          type="button"
          onClick={() => navigate("/contact")}
          whileTap={{ scale: 0.97 }}
        >
          <span>Let’s Work Together.</span>
          <span className="flex items-center justify-center w-6 h-6 p-1 rounded-full bg-gray-300 ml-2">
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
      </motion.div>
    </motion.section>
  );
};

export default PartnerWithUs;
