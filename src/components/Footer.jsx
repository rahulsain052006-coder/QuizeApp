import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-yellow-400/20 bg-black text-white">
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-yellow-400/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10">

        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo & About */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <a
              href="/"
              className="inline-block text-3xl font-black tracking-tight">
              Quiz<span className="text-yellow-400">Forge</span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
              Challenge yourself, test your knowledge and become better
              every day with QuizForge.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              {[
                {
                  icon: <FaGithub />,
                  link: "#",
                },
                {
                  icon: <FaInstagram />,
                  link: "#",
                },
                {
                  icon: <FaLinkedin />,
                  link: "#",
                },
                {
                  icon: <FaTwitter />,
                  link: "#",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  whileHover={{
                    y: -5,
                    scale: 1.1,
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-black">
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Explore */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}>
            <h3 className="mb-5 text-lg font-bold text-yellow-400">
              Explore
            </h3>

            <ul className="space-y-3 text-sm">
              {["Home", "All Quizzes", "Categories", "Popular Quizzes"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 transition-all duration-300 hover:translate-x-1 hover:text-yellow-400">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <h3 className="mb-5 text-lg font-bold text-yellow-400">
              Categories
            </h3>

            <ul className="space-y-3 text-sm">
              {[
                "Programming",
                "General Knowledge",
                "Science",
                "Sports",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 transition-all duration-300 hover:translate-x-1 hover:text-yellow-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}>
            <h3 className="mb-5 text-lg font-bold text-yellow-400">
              Stay Updated
            </h3>

            <p className="mb-4 text-sm leading-6 text-gray-400">
              Get notified about new quizzes and challenges.
            </p>

            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-yellow-400"/>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-lg bg-yellow-400 px-5 py-3 text-sm font-bold text-black transition hover:bg-yellow-300">
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center justify-between gap-5 text-sm md:flex-row">
          <p className="text-gray-500">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-yellow-400">
              QuizForge
            </span>
            . All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-500 transition hover:text-yellow-400">
              Privacy
            </a>

            <a
              href="#"
              className="text-gray-500 transition hover:text-yellow-400">
              Terms
            </a>

            <a
              href="#"
              className="text-gray-500 transition hover:text-yellow-400">
              Contact
            </a>
          </div>

          {/* Scroll To Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-yellow-400/30 bg-yellow-400/10 text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
            aria-label="Scroll to top">
            <FaArrowUp />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;