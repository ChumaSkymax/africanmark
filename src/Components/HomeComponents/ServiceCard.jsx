import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/asset";
import { motion } from "framer-motion";

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();
  const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="group p-[1px] bg-gradient-to-r from-[#6c2725] to-[#e1843e] rounded-xl shadow-lg 
    hover:-translate-y-1 transition-all duration-500 cursor-pointer"
      onClick={() => navigate("/service")}
    >
      <div className="bg-white dark:bg-gray-900 rounded-xl p-12 h-full">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-14 w-14 rounded-md bg-[#6c2725] mb-6">
            <motion.img
              src={service.icon}
              alt={service.title}
              className="h-10 w-10 object-contain"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="flex-1">
            <motion.h2
              className="text-xl font-semibold mb-2 text-gray-800 dark:text-white"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              viewport={{ once: true }}
            >
              {service.title}
            </motion.h2>
            <motion.p
              className="text-gray-800 dark:text-gray-300 text-sm md:text-base mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.12 }}
              viewport={{ once: true }}
            >
              {service.description}
            </motion.p>
          </div>
          <motion.button
            whileTap={{ scale: 0.97 }}
            className="flex text-[#6c2725] dark:text-gray-300 gap-2 cursor-pointer mt-auto"
          >
            Read More
            <motion.img
              src={assets.arrow_icon}
              alt=""
              className="h-5 w-5 dark:hidden"
            />
            <motion.img
              src={assets.arrow_icon_dark}
              alt=""
              className="h-5 w-5 hidden dark:block"
            />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
