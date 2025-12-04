import React, { useState } from "react";
import { motion } from "framer-motion";
import { vision_icon, mission_icon, values_icon } from "../../assets/asset.js";

const VisionMission = () => {
  const [tiltedCard, setTiltedCard] = useState(null);
  const threshold = 10; // Tilt intensity

  const handleMove = (e, cardIndex) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    setTiltedCard({
      index: cardIndex,
      x: y * -threshold,
      y: x * threshold,
    });
  };

  const handleLeave = () => {
    setTiltedCard(null);
  };

  const values = [
    {
      icon: vision_icon,
      title: "Vision",
      description:
        "To be an emerging innovative and professional firm in East Africa. We deliver professional services with value-added solutions to our clients",
    },
    {
      icon: mission_icon,
      title: "Mission",
      description:
        "To provide efficient quality services in auditing, accounting, tax, and advisory that add value to our clients and stakeholders, using our professional team and an innovative approach tailored to clients needs",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-center gap-8 px-6 md:px-12 lg:px-24 xl:px-32 pt-20 pb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {values.map((value, index) => (
          <motion.div
            key={index}
            className="rounded-2xl shadow-xl overflow-hidden border border-primary transition-transform duration-200 ease-out cursor-pointer w-full max-w-sm bg-white dark:bg-gradient-to-br from-primary to-secondary dark:border-gray-300 p-10 text-center"
            onMouseMove={(e) => handleMove(e, index)}
            onMouseLeave={handleLeave}
            style={{
              transform:
                tiltedCard?.index === index
                  ? `perspective(1000px) rotateX(${tiltedCard.x}deg) rotateY(${tiltedCard.y}deg)`
                  : "perspective(1000px) rotateX(0deg) rotateY(0deg)",
            }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
          >
            <div className="flex justify-center mb-4">
              <motion.img
                src={value.icon}
                alt={value.title}
                className="w-12 h-12 p-2 rounded-2xl text-[#6c2725] bg-transparent border border-primary dark:border-gray-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.15 + index * 0.1 }}
                viewport={{ once: true }}
              />
            </div>

            <motion.h2
              className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
            >
              {value.title}
            </motion.h2>
            <motion.p
              className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.25 + index * 0.1 }}
              viewport={{ once: true }}
            >
              {value.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default VisionMission;
