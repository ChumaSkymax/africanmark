import React from "react";
import { assets } from "../assets/asset";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// inline back arrow will be used instead of external icon package

const TeamMembers = () => {
  const { id } = useParams();
  const [member, setMember] = useState(null);
  useEffect(() => {
    const member = membersDetails.find((member) => member._id === Number(id));
    setMember(member);
  }, [id]);
  const membersDetails = [
    {
      _id: 1,
      name: "Berthasia Ladislaus Patrick",
      role: "Managing Partner",
      education:
        "Certiﬁed Director, Institute of Directors Tanzania (IoDT) Master of Business Administration (MBA) – University of Dar es Salaam Business School (UDBS) Certiﬁed Public Accountant (CPA) in Public Practice – National Board of Accountants and Auditors (NBAA) Bachelor of Commerce in Accounting – University of Dar es Salaam",
      experience:
        "A results-driven leader with 17+ years of experience in audit, risk management, internal controls, and executive leadership across NGOs, consulting, and professional services. Founder and Managing Partner of Africanmark Services since 2013, with prior roles at PwC, NHC, and Diamond Trust Bank, and a strong record in governance, financial performance, and institutional accountability. ",
      expertise:
        "Financial management and reporting Corporate governance Strategic planning Regulatory compliance",
      image: assets.profile1,
    },

    {
      _id: 2,
      name: "Fahad Soud Hamid",
      role: "Partner",
      education:
        "Certiﬁed Director (Institute of Directors Tanzania), MBA (Eastern and Southern African Management Institute), CPA in Public Practice (NBAA), Bachelor of Commerce in Accounting (University of Dar es Salaam)",
      experience:
        "18+ years in audit, risk management, internal controls, and executive leadership across banking, consulting, and professional services. Worked with PwC, EY, Citibank, Amana Bank, and AfricanmarkServices (Partner since 2017).  ",
      expertise:
        "Internal audit setup, risk management, ﬁnancial management and reporting, corporate governance, strategic planning, and compliance.",
      image: assets.profile2,
    },
    {
      _id: 3,
      name: "Zelda Zelothe",
      role: "Assurance Manager",
      education:
        " Holds a Bachelor of Science in Accounting and Finance from Ardhi University, where she developed a strong foundation in financial analysis, reporting, and strategic management. Her academic background equipped her with the analytical and problem-solving skills essential for effective decision-making in complex financial environments.",
      experience:
        "Brings over 3 years of hands-on experience in financial management and auditing, working with diverse clients across industries. Zelda has played a key role in preparing and analyzing financial statements, conducting internal audits, and ensuring compliance with accounting standards and regulatory frameworks. Her practical expertise has helped organizations enhance transparency, efficiency, and financial integrity. ",
      expertise:
        "Specializes in corporate finance, tax advisory, audit assurance, and compliance. Zelda is known for her attention to detail, accuracy, and commitment to delivering reliable financial insights that support informed decision-making.",
      image: assets.profile3,
    },

    {
      _id: 4,
      name: "Zelda Zelothe",
      role: "Assurance Manager",
      bio: "With 3 years of experience in financial management and auditing, specializing in corporate finance, tax advisory, audit assurance, and compliance..",
      image: assets.profile3,
    },
  ];

  if (!member) {
    return (
      <motion.div
        className="flex items-center justify-center px-6 md:px-12 lg:px-24 xl:px-32 mt-40 mb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-slate-700 dark:text-slate-100">
            Team member not found
          </h1>
          <motion.a
            href="/about"
            className="mt-4 inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/80 transition-all duration-300"
            whileTap={{ scale: 0.97 }}
          >
            <motion.svg
              className="w-4 h-4"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5A1 1 0 018.707 4.293L5.414 7.586H18a1 1 0 110 2H5.414l3.293 3.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </motion.svg>
            Back
          </motion.a>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.section
      className="px-6 md:px-12 lg:px-24 xl:px-32 mt-24 mb-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <div className="pt-20 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          {/* Image card */}
          <div className="md:col-span-2">
            <div
              className=" p-5 flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800
             bg-white dark:bg-gray-900 shadow"
            >
              <motion.img
                src={member.image}
                alt={member.name}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="p-5 text-center ">
                <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                  {member.name}
                </h2>
                <p className="text-primary font-medium">{member.role}</p>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-3 text-sm text-slate-700 dark:text-gray-300">
            <h1 className="text-2xl md:text-3xl font-semibold text-slate-800 dark:text-slate-100">
              About {member.name}
            </h1>
            <div className="w-28 h-[3px] rounded-full bg-gradient-to-r from-primary to-secondary mt-2"></div>
            <div className="mt-8 space-y-5">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Education:
                </h3>
                <p className="mt-2">{member.education}</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Experience:
                </h3>
                <p className="mt-2">{member.experience}</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Expertise:
                </h3>
                <p className="mt-2">{member.expertise}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default TeamMembers;
