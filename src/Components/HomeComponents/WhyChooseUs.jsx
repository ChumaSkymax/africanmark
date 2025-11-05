import React from "react";
import Title from "../Title";
import { assets } from "../../assets/asset";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const container = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };
  const benefits = [
    {
      title: "Expert Team You Can Trust",
      description:
        "Our experienced professionals bring together local insight and international standards, ensuring every solution is accurate, compliant, and impactful.",
      icon: (
        <svg
          className="w-8 h-8 text-gray-300"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      ),
    },
    {
      title: "Tailored Solutions for Every Client",
      description:
        "We don't believe in one size fits-all. Each service is customized to meet your unique business goals, delivering practical and results-driven outcomes.",
      icon: (
        <svg
          className="w-8 h-8 text-gray-300"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: "Commitment to Integrity and Excellence",
      description:
        "At Africanmark Services, honesty and quality come first. We build long-term partnerships based on trust, transparency, and consistent performance.",
      icon: (
        <svg
          className="w-8 h-8 text-gray-300"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col items-center justify-center px-6 md:12 lg:px-24 xl:px-32 mb-20"
    >
      <Title
        title="Why Choose Us?"
        subTitle="With us, you’re not just choosing a service, you’re choosing a team that values trust, quality, and results that truly make a difference."
      />
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
        <motion.img
          className="max-w-sm w-full rounded-xl h-auto shadow-lg transition-transform duration-300 ease-out hover:scale-[1.03] hover:-translate-y-1"
          src={assets.aboutImg}
          alt="About us"
          initial={{ opacity: 0, scale: 0.98, y: 6 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        />

        <div className="flex flex-col gap-2">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="group flex items-center justify-center gap-8 p-4 overflow-hidden border border-gray-300 rounded-2xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              variants={item}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.45, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <motion.div
                className="h-12 w-12 aspect-square bg-gradient-to-r from-primary to-secondary rounded-2xl border border-primary flex items-center justify-center flex-shrink-0 dark:border-gray-300 transition-transform duration-300 group-hover:scale-105"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.05 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {benefit.icon}
              </motion.div>
              <div className="flex flex-col gap-2">
                <h2 className="text-black text-xl font-semibold dark:text-gray-300">
                  {benefit.title}
                </h2>
                <p className="text-gray-700 text-sm md:text-base dark:text-gray-300 ">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
