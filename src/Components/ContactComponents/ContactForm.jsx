import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("access_key", "YOUR_ACCESS_KEY");
    const object = Object.fromEntries(formData.entries());
    const jsonData = JSON.stringify(object);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: jsonData,
    }).then((response) => response.json());
    if (response.success) {
      toast.success("Form submitted successfully");
    } else {
      toast.error("Form submission failed");
    }
    console.log("Form submitted:", response);
    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <motion.div
      className="flex justify-center items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-8 pb-20"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <motion.form
        onSubmit={handleSubmit}
        className="flex flex-col items-center text-sm text-slate-800 max-w-5xl
       w-full shadow-2xl py-20 rounded-4xl outline-0 border border-transparent dark:border-gray-300 dark:bg-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-bold py-4 text-center dark:text-gray-300">
          We’d Love to Hear from You
        </h1>
        <p className="max-md:text-sm text-gray-500 pb-10 text-center">
          Fill out the form below, and our team will get back to you shortly
          with the support and answers you need.
        </p>

        <div className="max-w-xl w-full px-4">
          <label htmlFor="name" className="font-medium dark:text-gray-300">
            Full Name
          </label>
          <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 dark:border-gray-600 rounded-full focus-within:ring-2 focus-within:ring-primary transition-all overflow-hidden">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-slate-500 dark:text-gray-400"
            >
              <path
                d="M18.311 16.406a9.64 9.64 0 0 0-4.748-4.158 5.938 5.938 0 1 0-7.125 0 9.64 9.64 0 0 0-4.749 4.158.937.937 0 1 0 1.623.938c1.416-2.447 3.916-3.906 6.688-3.906 2.773 0 5.273 1.46 6.689 3.906a.938.938 0 0 0 1.622-.938M5.938 7.5a4.063 4.063 0 1 1 8.125 0 4.063 4.063 0 0 1-8.125 0"
                fill="currentColor"
              />
            </svg>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="h-full px-2 w-full outline-none bg-transparent dark:text-gray-300 placeholder-slate-500 dark:placeholder-gray-400"
              placeholder="Enter your full name"
              required
            />
          </div>

          <label htmlFor="phone" className="font-medium dark:text-gray-300">
            Phone Number
          </label>
          <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 dark:border-gray-600 rounded-full focus-within:ring-2 focus-within:ring-primary transition-all overflow-hidden">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-slate-500 dark:text-gray-400"
            >
              <path
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                fill="currentColor"
              />
            </svg>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="h-full px-2 w-full outline-none bg-transparent dark:text-gray-300 placeholder-slate-500 dark:placeholder-gray-400"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <label
            htmlFor="email"
            className="font-medium mt-4 dark:text-gray-300"
          >
            Email Address
          </label>
          <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 dark:border-gray-600 rounded-full focus-within:ring-2 focus-within:ring-primary transition-all overflow-hidden">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-slate-500 dark:text-gray-400"
            >
              <path
                d="M17.5 3.438h-15a.937.937 0 0 0-.937.937V15a1.563 1.563 0 0 0 1.562 1.563h13.75A1.563 1.563 0 0 0 18.438 15V4.375a.94.94 0 0 0-.938-.937m-2.41 1.874L10 9.979 4.91 5.313zM3.438 14.688v-8.18l5.928 5.434a.937.937 0 0 0 1.268 0l5.929-5.435v8.182z"
                fill="currentColor"
              />
            </svg>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="h-full px-2 w-full outline-none bg-transparent dark:text-gray-300 placeholder-slate-500 dark:placeholder-gray-400"
              placeholder="Enter your email address"
              required
            />
          </div>

          <label
            htmlFor="message"
            className="font-medium mt-4 dark:text-gray-300"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows="6"
            className="w-full mt-2 p-3 bg-transparent border border-slate-300 dark:border-gray-600 rounded-lg 
            resize-none outline-none focus:ring-2 focus:ring-primary transition-all dark:text-gray-300 placeholder-slate-500 dark:placeholder-gray-400"
            placeholder="Enter your message"
            required
          ></textarea>

          <motion.button
            type="submit"
            className="flex items-center justify-center gap-1 mt-5 bg-primary hover:bg-primary/90 text-white py-2.5 w-full rounded-full transition"
            whileTap={{ scale: 0.98 }}
          >
            Submit Form
            <svg
              className="mt-0.5"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m18.038 10.663-5.625 5.625a.94.94 0 0 1-1.328-1.328l4.024-4.023H3.625a.938.938 0 0 1 0-1.875h11.484l-4.022-4.025a.94.94 0 0 1 1.328-1.328l5.625 5.625a.935.935 0 0 1-.002 1.33"
                fill="#fff"
              />
            </svg>
          </motion.button>
        </div>
      </motion.form>
    </motion.div>
  );
};

export default ContactForm;
