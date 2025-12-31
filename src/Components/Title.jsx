import React from "react";
import { motion } from "framer-motion";

const Title = ({ title, subTitle, align }) => {
  const getAlignmentClasses = () => {
    if (align === "left") {
      return "items-start text-left";
    }
    return "items-center text-center";
  };

  return (
    <motion.div
      className={`flex flex-col px-6 md:px-12 lg:px-24 xl:px-32 w-full ${getAlignmentClasses()}`}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <motion.h1
        className="font-bold text-4xl text-gray-900 dark:text-gray-300 md:text-[42px]"
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.05 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h1>
      <motion.p
        className="text-gray-500/90 dark:text-gray-300 text-sm md:text-base mt-2 max-w-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {subTitle}
      </motion.p>
    </motion.div>
  );
};

export default Title;
