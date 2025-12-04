import React from "react";
import { motion } from "framer-motion";
import {
  values_icon,
  expertise_icon,
  expansion_icon,
} from "../../assets/asset";

const coreValues = [
  {
    title: "PROFESSIONALISM",
    description:
      "We maintain integrity, respect, quality standards, and ethical conduct in all we do.",
    icon: values_icon,
  },
  {
    title: "INNOVATION",
    description:
      "We embrace creativity, modern solutions, and continuous improvement to drive progress.",
    icon: expertise_icon,
  },
  {
    title: "EFFICIENCY",
    description:
      "We work smart, stay organized, and ensure timely delivery with optimal resource use.",
    icon: expansion_icon,
  },
];

const CoreValues = () => {
  return (
    <motion.section
      className="flex flex-col items-center justify-center gap-8 px-6 md:px-12 lg:px-24 xl:px-32 mt-20 mb-20"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h1
        className="text-3xl md:text-4xl font-semibold mb-4 text-center text-black dark:text-white"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Our Core Values
      </motion.h1>
      <motion.p
        className="w-full md:w-3/5 mb-10 text-center text-gray-500 text-sm md:text-base dark:text-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.45, delay: 0.18 }}
        viewport={{ once: true }}
      >
        Our core values are the foundation of AfricanMark. They guide every
        decision, service, and partnership we build across the continent.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto justify-items-center">
        {coreValues.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
            viewport={{ once: true }}
            className="group relative p-[1px] rounded-xl bg-gradient-to-r from-[#6c2725] to-[#e1843e] shadow-lg
              hover:-translate-y-2 hover:shadow-xl transition-transform duration-500 ease-out"
          >
            <div className="flex flex-col h-full items-center text-center bg-white dark:bg-gray-900 rounded-xl px-6 py-8">
              <motion.div
                className="flex items-center justify-center h-14 w-14 rounded-full bg-[#6c2725]/90 dark:bg-[#6c2725] mb-5 shadow-md"
                initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.4, delay: 0.18 + index * 0.06 }}
                viewport={{ once: true }}
              >
                <motion.img
                  src={value.icon}
                  alt={value.title}
                  className="h-8 w-8 object-contain"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                  viewport={{ once: true }}
                />
              </motion.div>

              <motion.h2
                className="text-lg font-semibold mb-3 text-gray-900 dark:text-white tracking-wide"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.22 + index * 0.05 }}
                viewport={{ once: true }}
              >
                {value.title}
              </motion.h2>

              <motion.p
                className="text-gray-600 dark:text-gray-300 text-sm md:text-[0.95rem] leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.26 + index * 0.05 }}
                viewport={{ once: true }}
              >
                {value.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default CoreValues;
