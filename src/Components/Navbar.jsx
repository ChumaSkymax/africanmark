import React, { useState, useEffect } from "react";
import ToggleTheme from "./ToggleTheme";
import { Link } from "react-router-dom";
import { assets } from "../assets/asset";
import { motion } from "framer-motion";

const Navbar = ({ theme, setTheme }) => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Who We Are", path: "/about" },
    { name: "What We Do", path: "/service" },
    { name: "Talk to Us", path: "/contact" },
  ];

  const ref = React.useRef(null);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 w-full transition-all duration-500 z-50 ${
        isScrolled
          ? "bg-white/80 text-gray-700 shadow-md backdrop-blur-lg py-3 md:py-4 dark:bg-black dark:text-white"
          : "bg-primary/90 text-white py-4 md:py-6 dark:bg-black"
      }`}
    >
      <div className="flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 max-w-7xl mx-auto w-full">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          src={assets.AfriLogoo}
          alt="AfriLogo"
          className="h-18 max-sm:h-14"
        />
      </Link>

      {/* Desktop Nav */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="hidden md:flex items-center gap-4 lg:gap-8"
      >
        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            className={`group flex flex-col gap-0.5 ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            {link.name}
            <div
              className={`bg-primary h-0.5 w-0 group-hover:w-full transition-all duration-300`}
            />
          </Link>
        ))}
      </motion.div>

      {/* Desktop Right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="hidden md:flex items-center gap-4"
      >
        <ToggleTheme theme={theme} setTheme={setTheme} />
        <Link
          to="/contact"
          className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 bg-white text-primary border-1 border-primary shadow-sm hover:shadow-md`}
        >
          Connect
        </Link>
      </motion.div>

      {/* Mobile Menu Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.25 }}
        className="flex items-center gap-3 md:hidden"
      >
        <ToggleTheme theme={theme} setTheme={setTheme} />

        <motion.svg
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`h-6 w-6 text-white cursor-pointer  ${
            isScrolled ? "invert-text-white" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          whileTap={{ scale: 0.95 }}
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </motion.svg>
      </motion.div>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed top-0 left-0 w-full h-screen bg-white dark:bg-black text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 dark:text-gray-200 transition-all duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        initial={false}
        animate={{ x: isMenuOpen ? 0 : "-100%" }}
        transition={{ type: "tween", duration: 0.35 }}
      >
        <motion.button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
          whileTap={{ scale: 0.96 }}
        >
          <motion.svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </motion.svg>
        </motion.button>

        {navLinks.map((link, i) => (
          <Link key={i} to={link.path} onClick={() => setIsMenuOpen(false)}>
            {link.name}
          </Link>
        ))}

        <Link
          to="/contact"
          onClick={() => setIsMenuOpen(false)}
          className="bg-white text-primary border-1 border-primary px-8 py-2.5 rounded-full transition-all duration-500"
        >
          Connect
        </Link>
      </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
