import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/asset";
import { motion } from "framer-motion";

const team = [
  {
    _id: 1,
    name: "Berthasia Ladislaus Patrick",
    role: "Managing Partner",
    bio: "A results-driven professional with over 17 years of experience in audit, risk management and internal controls.",
    image: assets.profile1,
  },
  {
    _id: 2,
    name: "Fahad Soud Hamid",
    role: "Partner",
    bio: "18+ years driving excellence in audit, risk management, internal controls, and executive leadership across banking, consulting, and professional services.",
    image: assets.profile2,
  },
  {
    _id: 3,
    name: "Gloria Joel Bendera",
    role: "Partner",
    bio: "Financial and systems audits, donor-funded project verification, IFRS & ISA compliance, statutory..",
    image: assets.profile5,
  },
  {
    _id: 4,
    name: "Zelda Zelothe",
    role: "Assurance Manager",
    bio: "With 3 years of experience in financial management and auditing, specializing in corporate finance, tax advisory, audit assurance, and compliance..",
    image: assets.profile3,
  },
  {
    _id: 5,
    name: "Godfrey P. Mbapila",
    role: "Senior Audit and Tax Professional",
    bio: "A motivated and ambitious professional with solid experience in financial reporting, financial analysis, taxation..",
    image: assets.profile4,
  },
];

const OurTeam = () => {
  const navigate = useNavigate();
  return (
    <motion.section
      className="flex flex-col items-center text-center px-6  md:px-16 lg:px-24 xl:px-32 mb-20 "
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h1
        className="text-3xl md:text-4xl font-semibold mb-4 text-black"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Meet Our Team
      </motion.h1>
      <motion.p
        className="w-3/5 mb-14 text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.45, delay: 0.18 }}
        viewport={{ once: true }}
      >
        Behind every solution we deliver is a team of passionate professionals
        committed to excellence. At AfricanmarkServices, our experts combine
        local insight with global standards to help clients achieve lasting
        success.
      </motion.p>

      <motion.div
        className="flex flex-wrap gap-8 items-stretch justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {team.map((member, index) => (
          <motion.div
            key={member._id}
            className="group relative w-80 cursor-pointer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
          >
            <div className="rounded-2xl p-[1px] bg-gradient-to-r from-primary via-secondary to-secondary transition-transform duration-300 ease-out group-hover:translate-y-[-4px]">
              <div
                onClick={() => navigate(`/team-members/${member._id}`)}
                className="relative rounded-2xl bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/15 to-secondary/15" />
                <div className="flex flex-col items-center py-8 px-6 text-sm">
                  <div className="relative">
                    <motion.img
                      onClick={() => navigate(`/team-members/${member._id}`)}
                      className="w-28 h-28 rounded-full object-cover shadow-xl transition-shadow duration-300"
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      viewport={{ once: true }}
                    />
                    <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300" />
                  </div>

                  <h2
                    onClick={() => navigate(`/team-members/${member._id}`)}
                    className="text-black text-lg font-semibold mt-3 tracking-tight cursor-pointer"
                  >
                    {member.name}
                  </h2>
                  <p
                    onClick={() => navigate(`/team-members/${member._id}`)}
                    className="text-secondary font-medium cursor-pointer"
                  >
                    {member.role}
                  </p>
                  <p
                    onClick={() => navigate(`/team-members/${member._id}`)}
                    className="text-sm text-center text-gray-500 w-3/4 mt-4 cursor-pointer"
                  >
                    {member.bio}...
                  </p>

                  <motion.button
                    onClick={() => navigate(`/team-members/${member._id}`)}
                    className=" cursor-pointer mt-5 inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-primary to-secondary shadow-sm hover:shadow-md transition-all duration-300"
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                    <motion.svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      initial={{ x: 0 }}
                      whileHover={{ x: 2 }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </motion.svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default OurTeam;
