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
        <motion.p
          className="mt-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Founded in 2015, Africanmark Services is a Tanzanian professional firm
          offering audit, tax, accounting, and advisory solutions.{" "}
        </motion.p>
        <motion.p
          className="mt-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          viewport={{ once: true }}
        >
          With offices in Dodoma and Dar es Salaam, we serve public
          institutions, NGOs, and private clients across diverse sectors.
        </motion.p>
        <motion.p
          className="mt-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.36 }}
          viewport={{ once: true }}
        >
          Our team combines local expertise with global best practices to
          deliver reliable, compliant, and impact-driven solutions. At
          Africanmark Services, we exist to empower growth and build lasting
          trust.
        </motion.p>
        <motion.button
          className="flex items-center gap-2 mt-8 hover:-translate-y-0.5 transition bg-gradient-to-r from-primary to-secondary py-3 px-8 rounded-full text-white"
          whileTap={{ scale: 0.98 }}
        >
          <span>Read more</span>
          <motion.svg
            width="13"
            height="12"
            viewBox="0 0 13 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ x: 0 }}
            whileHover={{ x: 2 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <path
              d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
              fill="#fff"
            />
          </motion.svg>
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default OurStory;
