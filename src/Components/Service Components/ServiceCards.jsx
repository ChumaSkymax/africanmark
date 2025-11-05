import React from "react";
import Title from "../Title";
import { assets } from "../../assets/asset";

export const ServiceCards = () => {
  const services = [
    {
      image: tax,
      title: "Tax Services",
      description:
        "Stay compliant and confident with expert tax planning, VAT advisory, and revenue audit support. We handle income tax audits, return filing, and provide ongoing tax advisory to help your business stay ahead.",
    },
    {
      image: "",
      title: "Audit & Assurance",
      description:
        "We provide trusted audit and assurance solutions, including statutory, internal, and special audits, plus agreed-upon procedures. Our services cover project, system, and review audits, along with verification assignments for projects, properties, and stock ensuring transparency and accountability at every level.",
    },
    {
      image: "",
      title: "Accounting Services",
      description:
        "We offer professional accounting solutions tailored to your business needs — from software installation and training (QuickBooks & Xero) to payroll management, budgeting, and forecasting. Our team also provides ongoing accounting support to keep your finances organized and your business growing.",
    },
    {
      image: "",
      title: "Advisory Services & Training",
      description:
        "We empower organizations with expert advisory and training solutions — including monitoring and evaluation (M&E), policy and procedure design, and organizational support (procurement & ICT). Our team also provides risk management, business planning, and development advisory to drive sustainable growth.",
    },
    {
      image: "",
      title: "Corporate Secretarial Services",
      description:
        "We provide comprehensive corporate secretarial support to ensure your business stays fully compliant. Our services include company registration, statutory filings, board and shareholder support, and ongoing corporate governance advisory for smooth and transparent operations.",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 bp-30 ">
      <Title
        title="Driving Excellence Through Expertise"
        subTitle="Our team blends local insight with global standards to provide solutions that create real, measurable results."
        align="left"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-8">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col">
            <img src={service.image} alt="" />
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {service.title}
              </h2>
              <p className="">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
