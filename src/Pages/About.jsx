import React from "react";
import OurStory from "../Components/AboutComponents/OurStory";
import VisionMission from "../Components/AboutComponents/VisionMission";
import AchievementHighlights from "../Components/AboutComponents/AchievementHighlights";
import OurTeam from "../Components/AboutComponents/OurTeam";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <OurStory />
      <VisionMission />
      <AchievementHighlights />
      <OurTeam />
    </motion.div>
  );
};

export default About;
