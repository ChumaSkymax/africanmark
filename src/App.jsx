import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import TeamMembers from "./Pages/TeamMembers";
import ScrollToTop from "./Components/ScrollToTop";
import { Toaster } from "react-hot-toast";
import Partners from "./Pages/Partners";

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen flex flex-col dark:bg-black max-w-7xl mx-auto w-full"
    >
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="flex-grow"
      >
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/team-members/:id" element={<TeamMembers />} />
        </Routes>
      </motion.main>
      <Footer theme={theme} />
    </motion.div>
  );
};

export default App;
