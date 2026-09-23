import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiSearch,
  FiArrowRight,
} from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Quizzes", path: "/quizzes" },
    { name: "Categories", path: "/categories" },
    { name: "About", path: "/about" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-yellow-400/20"
          : "bg-black"
      }`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">

          {/* ================= LOGO ================= */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="group flex items-center gap-2">
            {/* Logo Box */}
            <motion.div
              whileHover={{ rotate: 8, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center">
              <span className="text-black font-black text-xl">
                Q
              </span>
            </motion.div>

            {/* Logo Text */}
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Quiz<span className="text-yellow-400">Rush</span>
              </h1>

              <p className="text-[9px] sm:text-[10px] text-gray-400 tracking-[0.2em] uppercase">
                Test Your Mind
              </p>
            </div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-sm font-semibold transition-colors duration-300 ${
                    isActive
                      ? "text-yellow-400"
                      : "text-gray-300 hover:text-yellow-400"}`}>
                {({ isActive }) => (
                  <>
                    {link.name}

                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute -bottom-2 left-0 right-0 h-[2px] bg-yellow-400 rounded-full"/>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* ================= DESKTOP RIGHT ================= */}
          <div className="hidden lg:flex items-center gap-4">

            {/* Search Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full border border-gray-700 text-gray-300 flex items-center justify-center hover:border-yellow-400 hover:text-yellow-400 transition">
              <FiSearch size={18} />
            </motion.button>

            {/* CTA */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}>
              <Link
                to="/quizzes"
                className="group flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black px-5 py-2.5 rounded-full font-bold text-sm transition-colors">
                Start Quiz

                <FiArrowRight
                  className="group-hover:translate-x-1 transition-transform"/>
              </Link>
            </motion.div>
          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 rounded-xl border border-gray-700 text-white flex items-center justify-center hover:border-yellow-400 hover:text-yellow-400 transition"
            aria-label="Toggle menu">
            {isOpen ? <FiX size={23} /> : <FiMenu size={23} />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden border-t border-gray-800 bg-black">
            <motion.nav
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              className="px-5 py-6 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.07,}}>
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3 rounded-xl font-semibold transition ${
                        isActive
                          ? "bg-yellow-400 text-black"
                          : "text-gray-300 hover:bg-yellow-400/10 hover:text-yellow-400"}`}>
                    {link.name}

                    <FiArrowRight size={17} />
                  </NavLink>
                </motion.div>
              ))}

              {/* Mobile Search */}
              <div className="pt-4">
                <button
                  className="w-full flex items-center justify-center gap-2 border border-gray-700 text-gray-300 hover:border-yellow-400 hover:text-yellow-400 py-3 rounded-xl transition">
                  <FiSearch />
                  Search Quiz
                </button>
              </div>

              {/* Mobile CTA */}
              <div className="pt-2">
                <Link
                  to="/quizzes"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-yellow-400 hover:bg-yellow-300 text-black py-3 rounded-xl font-bold transition">
                  Start Quiz
                  <FiArrowRight />
                </Link>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;