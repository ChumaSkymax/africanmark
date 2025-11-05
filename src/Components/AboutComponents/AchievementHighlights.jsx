import React from "react";
import { motion } from "framer-motion";
import {
  expansion_icon,
  trust_icon,
  expertise_icon,
  assets,
} from "../../assets/asset.js";

const AchievementHighlights = () => {
  return (
    <motion.section
      className="flex flex-col md:flex-row items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32 pb-20"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.img
        className="max-w-2xl w-full xl:-ml-32 rounded-xl  hover:scale-105 transition-transform duration-500 ease-out"
        src={assets.achievementImage}
        alt="AfricanMark Achievements "
        initial={{ opacity: 0, scale: 0.96, y: 8 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      />
      <div className="px-4 md:px-0">
        <motion.div
          className="flex items-center justify-center gap-6 max-w-md group cursor-pointer"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="p-6 group-hover:bg-gradient-to-r group-hover:from-[#6c2725] group-hover:to-[#e1843e] border border-gray-200 group-hover:border-[#6c2725] flex gap-4 rounded-xl transition-all duration-500 ease-out bg-white dark:bg-gray-800 dark:border-gray-600 group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-2xl"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
          >
            <motion.img
              src={expansion_icon}
              alt="Expansion Icon"
              className="size-6 group-hover:rotate-12 group-hover:scale-110 group-hover:brightness-0 group-hover:invert transition-all duration-500 ease-out"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              viewport={{ once: true }}
            />
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200 group-hover:text-white transition-all duration-500 ease-out group-hover:translate-x-1">
                Expanding Our Reach Across Tanzania
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 max-w-xs group-hover:text-gray-100 transition-all duration-500 ease-out group-hover:translate-x-1">
                With offices in Dodoma and Dar es Salaam, we continue to grow
                our footprint, delivering consistent, high-quality services that
                make a lasting impact in every region we serve.
              </p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex items-center justify-center gap-6 max-w-md group cursor-pointer mt-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="p-6 group-hover:bg-gradient-to-r group-hover:from-[#e1843e] group-hover:to-[#6c2725] border border-gray-200 group-hover:border-[#e1843e] flex gap-4 rounded-xl transition-all duration-500 ease-out bg-white dark:bg-gray-800 dark:border-gray-600 group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-2xl"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
          >
            <motion.img
              src={trust_icon}
              alt="Trust Icon"
              className="size-6 group-hover:rotate-12 group-hover:scale-110 group-hover:brightness-0 group-hover:invert transition-all duration-500 ease-out"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              viewport={{ once: true }}
            />
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200 group-hover:text-white transition-all duration-500 ease-out group-hover:translate-x-1">
                A Decade of Trusted Excellence
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 max-w-xs group-hover:text-gray-100 transition-all duration-500 ease-out group-hover:translate-x-1">
                Since 2015, Africanmark Services has built a strong reputation
                for reliability and professionalism becoming a trusted partner
                for public institutions, NGOs, and private enterprises across
                Tanzania.
              </p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex items-center justify-center gap-6 max-w-md group cursor-pointer mt-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="p-6 group-hover:bg-gradient-to-br group-hover:from-[#6c2725] group-hover:to-[#e1843e] border border-gray-200 group-hover:border-[#6c2725] flex gap-4 rounded-xl transition-all duration-500 ease-out bg-white dark:bg-gray-800 dark:border-gray-600 group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-2xl"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
          >
            <motion.img
              src={expertise_icon}
              alt="Expertise Icon"
              className="size-6 group-hover:rotate-12 group-hover:scale-110 group-hover:brightness-0 group-hover:invert transition-all duration-500 ease-out"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.45 }}
              viewport={{ once: true }}
            />
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200 group-hover:text-white transition-all duration-500 ease-out group-hover:translate-x-1">
                Empowering Clients Through Expertise
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 max-w-xs group-hover:text-gray-100 transition-all duration-500 ease-out group-hover:translate-x-1">
                Our team of seasoned professionals has successfully guided
                numerous organizations toward financial compliance, growth, and
                sustainability — turning challenges into measurable results.{" "}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AchievementHighlights;
