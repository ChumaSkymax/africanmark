import React from "react";
import { assets } from "../../assets/asset";
import { motion } from "framer-motion";

const OurStory = () => {
  return (
    <motion.section
      className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-12 lg:px-24 xl:px-32 mt-30 mb-20 "
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="relative shadow-2xl shadow-indigo-[#6c2725]/40 rounded-2xl overflow-hidden shrink-0"
        initial={{ opacity: 0, scale: 0.96, y: 8 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
      >
        <motion.img
          className="max-w-md w-full object-cover rounded-2xl gpu-smooth"
          src={assets.aboutImg}
          alt="about-image"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        />
        <motion.div
          className="flex items-center gap-1 max-w-72 absolute bottom-6 left-8 bg-white/60 p-4 rounded-xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex -space-x-4 shrink-0"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.08, delayChildren: 0.1 }}
          >
            <motion.img
              src={assets.crdbLogo}
              alt="CRDB Bank"
              className="size-10 rounded-full border-[3px] border-secondary hover:-translate-y-1 transition z-1 object-cover"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            />
            <motion.img
              src={assets.traLogo}
              alt="TRA"
              className="size-10 rounded-full border-[3px] border-secondary hover:-translate-y-1 transition z-[2] object-cover"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              viewport={{ once: true }}
            />
            <motion.img
              src={assets.quickBooksLogo}
              alt="QuickBooks"
              className="size-10 rounded-full border-[3px] border-secondary hover:-translate-y-1 transition z-[3] object-cover"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            />
            <motion.div
              className="flex items-center justify-center text-xs  text-white size-10 rounded-full border-[3px] border-white bg-primary hover:-translate-y-1 transition z-[5]"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              viewport={{ once: true }}
            >
              10+
            </motion.div>
          </motion.div>
          <motion.p
            className="text-xs font-medium text-slate-800"
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We collaborate with trusted local and international partners
          </motion.p>
        </motion.div>
      </motion.div>
      <motion.div
        className="text-sm text-slate-600 max-w-lg dark:text-gray-300"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-xl uppercase font-semibold text-slate-700 dark:text-slate-100"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Our Story
        </motion.h1>
        <motion.div
          className="w-24 h-[3px] rounded-full bg-gradient-to-r from-primary to-secondary"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          viewport={{ once: true }}
        />

        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-4 text-xl font-bold text-gray-600 dark:text-gray-300"
        >
          Our Beginning
        </motion.h1>
        <motion.p
          className="mt-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Founded in 2015, Africanmark Services is a Tanzanian professional firm
          offering audit, tax, accounting, and advisory solutions.{" "}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-4 text-xl font-bold text-gray-600 dark:text-gray-300"
        >
          Where We Operate
        </motion.h1>
        <motion.p
          className="mt-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          viewport={{ once: true }}
        >
          We serve clients across Dodoma, Dar es Salaam, and Zanzibar supporting
          institutions, NGOs, and businesses in diverse sectors.
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-4 text-xl font-bold text-gray-600 dark:text-gray-300"
        >
          Target Market
        </motion.h1>

        <motion.p
          className="mt-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.36 }}
          viewport={{ once: true }}
        >
          Our target market includes public institutions, international and
          local NGOs, private companies, and professional service organizations
          seeking reliable audit, tax, accounting, and advisory solutions. We
          serve clients who value accuracy, compliance, and strategic guidance
          to strengthen their operations and achieve sustainable growth.
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default OurStory;
