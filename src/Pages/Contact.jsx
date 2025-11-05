import React from "react";
import ContactBanner from "../Components/ContactComponents/ContactBanner";
import ContactForm from "../Components/ContactComponents/ContactForm";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <ContactBanner />
      <ContactForm />
    </motion.div>
  );
};

export default Contact;
