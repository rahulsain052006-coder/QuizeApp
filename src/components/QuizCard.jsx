import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiClock, FiHelpCircle } from "react-icons/fi";

const QuizCard = ({ quiz }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
      className="group relative overflow-hidden rounded-2xl border border-yellow-400/20 bg-[#111111] p-5 transition-all duration-300 hover:border-yellow-400 hover:shadow-[0_0_30px_rgba(255,214,0,0.15)]">
      {/* Yellow Glow */}
      <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-yellow-400/10 blur-3xl transition-all duration-500 group-hover:bg-yellow-400/20" />

      {/* Category + Difficulty */}
      <div className="relative mb-5 flex items-center justify-between">
        <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-semibold text-yellow-400">
          {quiz.category}
        </span>

        <span className="text-xs font-medium text-gray-400">
          {quiz.difficulty}
        </span>
      </div>

      {/* Quiz Title */}
      <div className="relative mb-4">
        <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-yellow-400">
          {quiz.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-400">
          {quiz.description}
        </p>
      </div>

      {/* Quiz Information */}
      <div className="relative mb-6 flex items-center gap-5 border-y border-white/10 py-4">
        {/* Questions */}
        <div className="flex items-center gap-2">
          <FiHelpCircle className="text-yellow-400" size={17} />

          <div>
            <p className="text-xs text-gray-500">Questions</p>
            <p className="text-sm font-semibold text-white">
              {quiz.questions}
            </p>
          </div>
        </div>

        {/* Time */}
        <div className="flex items-center gap-2">
          <FiClock className="text-yellow-400" size={17} />

          <div>
            <p className="text-xs text-gray-500">Time</p>
            <p className="text-sm font-semibold text-white">
              {quiz.time}
            </p>
          </div>
        </div>
      </div>

      {/* Start Quiz Button */}
      <motion.button
        whileTap={{ scale: 0.96 }}
        className="relative flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 font-bold text-black transition-all duration-300 hover:bg-yellow-300">
        Start Quiz

        <motion.span
          className="inline-flex"
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}>
          <FiArrowRight size={18} />
        </motion.span>
      </motion.button>
    </motion.div>
  );
};

export default QuizCard;