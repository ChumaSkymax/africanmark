import React, { useState } from "react";
import Title from "../Title";
import { assets } from "../../assets/asset";
import { motion } from "framer-motion";

const OurServices = () => {
  const [expandedByIndex, setExpandedByIndex] = useState({});

  const toggleExpanded = (index) => {
    setExpandedByIndex((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const getPreviewText = (text, maxChars = 100) => {
    if (!text) return "";
    if (text.length <= maxChars) return text;
    return text.slice(0, maxChars).trimEnd() + "...";
  };
  const services = [
    {
      image: assets.taxImg,
      title: "Tax Services",
      description:
        "Stay compliant and confident with expert tax planning, VAT advisory, and revenue audit support. We handle income tax audits, return filing, and provide ongoing tax advisory to help your business stay ahead.",
    },
    {
      image: assets.auditImg,
      title: "Audit & Assurance",
      description:
        "We provide trusted audit and assurance solutions, including statutory, internal, and special audits, plus agreed-upon procedures. Our services cover project, system, and review audits, along with verification assignments for projects, properties, and stock ensuring transparency and accountability at every level.",
    },
    {
      image: assets.accountingImg,
      title: "Accounting Services",
      description:
        "We offer professional accounting solutions tailored to your business needs from software installation and training (QuickBooks & Xero) to payroll management, budgeting, and forecasting. Our team also provides ongoing accounting support to keep your finances organized and your business growing.",
    },
    {
      image: assets.advisoryImg,
      title: "Advisory Services & Training",
      description:
        "We empower organizations with expert advisory and training solutions including monitoring and evaluation (M&E), policy and procedure design, and organizational support (procurement & ICT). Our team also provides risk management, business planning, and development advisory to drive sustainable growth.",
    },
    {
      image: assets.corporateImg,
      title: "Corporate Secretarial Services",
      description:
        "We provide comprehensive corporate secretarial support to ensure your business stays fully compliant. Our services include company registration, statutory filings, board and shareholder support, and ongoing corporate governance advisory for smooth and transparent operations.",
    },
    {
      image: assets.taxImg,
      title: "Tax Services",
      description:
        "Stay compliant and confident with expert tax planning, VAT advisory, and revenue audit support. We handle income tax audits, return filing, and provide ongoing tax advisory to help your business stay ahead.",
    },
  ];
  return (
    <motion.section
      className="flex flex-col justify-center items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-32 pb-20 "
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Title
        title="Driving Excellence Through Expertise"
        subTitle="Our team blends local insight with global standards to provide solutions that create real, measurable results."
        align="left"
      />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="group hover:bg-primary hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-out cursor-pointer flex flex-col shadow-2xl border border-transparent p-6 rounded-3xl dark:border-primary"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={service.image}
              alt=""
              className="h-[250px] w-[1000px] object-cover rounded-2xl mb-8 group-hover:translate-y-1 group-hover:scale-105"
            />
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-white">
                {service.title}
              </h2>
              <p className="text-xs md:text-base mb-2 text-gray-500 dark:text-gray-300 group-hover:text-gray-100 ">
                {expandedByIndex[index]
                  ? service.description
                  : getPreviewText(service.description)}
              </p>
              {service.description && service.description.length > 180 && (
                <motion.button
                  type="button"
                  onClick={() => toggleExpanded(index)}
                  className="text-primary hover:underline text-sm md:text-base group-hover:text-white"
                  whileTap={{ scale: 0.97 }}
                >
                  {expandedByIndex[index] ? "Read less" : "Read more"}
                </motion.button>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default OurServices;
