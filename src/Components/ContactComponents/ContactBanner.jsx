import React from "react";
import { motion } from "framer-motion";

const ContactBanner = () => {
  return (
    <motion.section
      aria-labelledby="contact-heading"
      className="px-6 md:px-16 lg:px-24 xl:px-32 pt-30 pb-20"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className=" max-w-7xl mx-auto relative overflow-hidden rounded-2xl shadow-xl border border-transparent dark:border-gray-700">
        {/* Decorative gradient backdrop */}
        <div
          className="absolute inset-0 bg-primary dark:bg-gray-900"
          aria-hidden="true"
        />

        {/* Subtle patterns/glow */}
        <div
          className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-black/10 dark:bg-white/5 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative p-10 md:p-12 text-white dark:text-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
            {/* Intro */}
            <div className="flex flex-col justify-center">
              <p className="text-sm uppercase tracking-wider text-white/80">
                Get in touch
              </p>
              <h2
                id="contact-heading"
                className="mt-2 text-3xl md:text-4xl font-semibold leading-tight text-white dark:text-gray-100"
              >
                Let's talk about your next step
              </h2>
              <p className="mt-4 text-white/90 dark:text-gray-300 max-w-prose">
                Whether you need advisory, audit, tax or corporate services, our
                team is ready to help. Reach us via email, phone, or WhatsApp —
                or visit any of our offices.
              </p>

              {/* Primary actions */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <motion.a
                  href="mailto:info@africanmark.co.tz"
                  className="inline-flex items-center justify-center rounded-xl bg-white text-gray-900 px-5 py-3 text-sm font-medium shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  aria-label="Email AfricanMark"
                  whileTap={{ scale: 0.97 }}
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Email us
                </motion.a>
                <motion.a
                  href="tel:+255754567660"
                  className="inline-flex items-center justify-center rounded-xl bg-white/10 border border-white/20 text-white px-5 py-3 text-sm font-medium backdrop-blur-sm hover:bg-white/15 hover:shadow-lg hover:translate-y-[-2px] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  aria-label="Call AfricanMark"
                  whileTap={{ scale: 0.97 }}
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call now
                </motion.a>
              </div>

              {/* Info rows */}
              <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="bg-white/10 border border-white/20 rounded-xl p-4 backdrop-blur-sm">
                  <dt className="text-white/80">Business hours</dt>
                  <dd className="mt-1 text-white">Mon–Fri, 8:30–17:30</dd>
                </div>
                <div className="bg-white/10 border border-white/20 rounded-xl p-4 backdrop-blur-sm">
                  <dt className="text-white/80">Response time</dt>
                  <dd className="mt-1 text-white">Within 1 business day</dd>
                </div>
              </dl>
            </div>

            {/* Contact methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 content-start">
              {/* Email */}
              <motion.a
                href="mailto:info@africanmark.co.tz"
                className="group flex items-start gap-3 rounded-2xl bg-white/10 border border-white/20 p-5 backdrop-blur-sm hover:bg-white/15 transition-colors"
                aria-label="Send an email"
                whileTap={{ scale: 0.98 }}
              >
                <div className="mt-0.5">
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-white/80">Email</p>
                  <p className=" text-sm font-medium text-white">
                    info@africanmark.co.tz
                  </p>
                </div>
              </motion.a>

              {/* Phone 1 */}
              <motion.a
                href="tel:+255754567660"
                className="group flex items-start gap-3 rounded-2xl bg-white/10 border border-white/20 p-5 backdrop-blur-sm hover:bg-white/15 transition-colors"
                aria-label="Call +255 754 567 660"
                whileTap={{ scale: 0.98 }}
              >
                <div className="mt-0.5">
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-white/80">Phone</p>
                  <p className="font-medium text-white">+255 754 567 660</p>
                </div>
              </motion.a>

              {/* Phone 2 */}
              <motion.a
                href="tel:+255713534064"
                className="group flex items-start gap-3 rounded-2xl bg-white/10 border border-white/20 p-5 backdrop-blur-sm hover:bg-white/15 transition-colors"
                aria-label="Call +255 713 534 064"
                whileTap={{ scale: 0.98 }}
              >
                <div className="mt-0.5">
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-white/80">Alternate</p>
                  <p className="font-medium text-white">+255 713 534 064</p>
                </div>
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/255754567660"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 rounded-2xl bg-white/10 border border-white/20 p-5 backdrop-blur-sm hover:bg-white/15 transition-colors"
                aria-label="Open WhatsApp chat"
                whileTap={{ scale: 0.98 }}
              >
                <div className="mt-0.5">
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20.52 3.48A11.94 11.94 0 0012 .5 11.5 11.5 0 00.5 12a11.42 11.42 0 001.65 6l-1.1 4 4.1-1.07A11.5 11.5 0 0012 23.5 11.5 11.5 0 0023.5 12c0-3.07-1.2-5.96-3-8.52zm-8.52 18A9.5 9.5 0 016.1 20l-.28-.17-2.42.63.64-2.35-.18-.3A9.5 9.5 0 1120.5 12 9.5 9.5 0 0112 21.5zm5.02-6.53c-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.13-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.13-1.12-.41-2.13-1.31-.79-.7-1.32-1.57-1.47-1.84-.15-.27-.02-.42.11-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.13-.61-1.47-.84-2-.22-.52-.45-.45-.61-.46l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.98 2.65 1.11 2.83.14.18 1.93 2.95 4.68 4.02.65.28 1.16.45 1.56.58.65.2 1.24.17 1.7.1.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.16.16-1.28-.07-.12-.25-.19-.52-.32z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-white/80">WhatsApp</p>
                  <p className="font-medium text-white">Chat with us</p>
                </div>
              </motion.a>

              {/* Offices */}
              <div className="col-span-1 sm:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <address className="not-italic flex items-start gap-3 rounded-2xl bg-white/10 border border-white/20 p-5 backdrop-blur-sm">
                  <div className="mt-0.5">
                    <svg
                      className="w-6 h-6 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-white/80">Dar es Salaam</p>
                    <p className="font-medium text-white">
                      5th Floor, Ngome House, TRA Road, Africa Sana
                    </p>
                  </div>
                </address>
                <address className="not-italic flex items-start gap-3 rounded-2xl bg-white/10 border border-white/20 p-5 backdrop-blur-sm">
                  <div className="mt-0.5">
                    <svg
                      className="w-6 h-6 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-white/80">Dodoma</p>
                    <p className="font-medium text-white">
                      Morogoro Road, Opposite Aga Khan Hospital
                    </p>
                  </div>
                </address>
              </div>

              {/* Map link */}
              <motion.a
                href="https://maps.google.com/?q=Ngome+House,TRA+Road,Dar+es+Salaam"
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-1 sm:col-span-2 inline-flex items-center justify-center rounded-xl bg-white text-gray-900 px-5 py-3 text-sm font-medium shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                aria-label="Open location in Google Maps"
                whileTap={{ scale: 0.98 }}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.5 10.5c0 7.5-7.5 10.5-7.5 10.5S4.5 18 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                View on Google Maps
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactBanner;
