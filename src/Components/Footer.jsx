import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = ({ theme }) => {
  const navigate = useNavigate();

  return (
    <>
      <motion.footer
        className="flex flex-col bg-slate-50 items-center justify-around w-full py-12 md:py-16 px-6 md:px-12 lg:px-24 xl:px-32 text-sm text-gray-800/70 dark:bg-black dark:text-gray-300 border-t dark:border-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <motion.button
            onClick={() => navigate("/")}
            className="font-medium text-gray-500 hover:text-[#e1843e] transition-all cursor-pointer bg-transparent border-none"
            whileTap={{ scale: 0.97 }}
          >
            Explore
          </motion.button>
          <motion.button
            onClick={() => navigate("/about")}
            className="font-medium text-gray-500 hover:text-[#e1843e] transition-all cursor-pointer bg-transparent border-none"
            whileTap={{ scale: 0.97 }}
          >
            About
          </motion.button>
          <motion.button
            onClick={() => navigate("/service")}
            className="font-medium text-gray-500 hover:text-[#e1843e] transition-all cursor-pointer bg-transparent border-none"
            whileTap={{ scale: 0.97 }}
          >
            Our Expertise
          </motion.button>
          <motion.button
            onClick={() => navigate("/contact")}
            className="font-medium text-gray-500 hover:text-[#e1843e] transition-all cursor-pointer bg-transparent border-none"
            whileTap={{ scale: 0.97 }}
          >
            Talk to Us
          </motion.button>
        </div>
        <div className="flex items-center gap-3 md:gap-4 mt-6 md:mt-8 text-[#e1843e]">
          <motion.a
            href="https://www.instagram.com/africanmarkservice/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:-translate-y-0.5 transition-all duration-300"
            aria-label="Instagram"
            whileTap={{ scale: 0.95 }}
          >
            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 11.37a4 4 0 1 1-7.914 1.173A4 4 0 0 1 16 11.37m1.5-4.87h.01"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.a>
          <motion.a
            href="https://x.com/africanmarktz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:-translate-y-0.5 transition-all duration-300"
            aria-label="X (Twitter)"
            whileTap={{ scale: 0.95 }}
          >
            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                fill="currentColor"
              />
            </motion.svg>
          </motion.a>
        </div>
        <p className="mt-6 md:mt-8 text-center text-xs md:text-sm">
          Copyright © 2025{" "}
          <a
            href="https://africanmark.co.tz"
            className="hover:text-[#e1843e] transition-colors"
          >
            AfricanMark
          </a>
          . All rights reserved.
        </p>
      </motion.footer>
    </>
  );
};

export default Footer;
