import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const CategoryCard = ({ title, description, icon, quizCount }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
      className="group relative overflow-hidden rounded-2xl border border-yellow-400/20 bg-black p-6 transition-all duration-300 hover:border-yellow-400 hover:shadow-[0_0_30px_rgba(255,214,0,0.15)]">
      {/* Yellow Glow */}
      <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-yellow-400/10 blur-2xl transition-all duration-500 group-hover:bg-yellow-400/20" />

      {/* Icon */}
      <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-400 text-black text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
        {icon}
      </div>

      {/* Content */}
      <div className="relative">
        <h3 className="mb-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-yellow-400">
          {title}
        </h3>

        <p className="mb-5 text-sm leading-6 text-gray-400">
          {description}
        </p>

        {/* Bottom */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-yellow-400">
            {quizCount} Quizzes
          </span>

          <motion.div
            whileHover={{ x: 5 }}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-yellow-400/30 text-yellow-400 transition-all duration-300 group-hover:bg-yellow-400 group-hover:text-black">
            <FiArrowRight />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CategoryCard;