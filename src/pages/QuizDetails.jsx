import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowRight,
  FiHelpCircle,
  FiTarget,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";
import { motion } from "framer-motion";

import quizzes from "../data/quizzes";

const QuizDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const quiz = quizzes.find((item) => item.id === Number(id));

  if (!quiz) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black px-5 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-black text-yellow-400">404</h1>
          <p className="mt-4 text-gray-400">Quiz not found</p>
          <button
            onClick={() => navigate("/quizzes")}
            className="mt-6 rounded-xl bg-yellow-400 px-6 py-3 font-bold text-black hover:bg-yellow-300">
            Back to Quizzes
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-hidden bg-black px-4 py-6 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-yellow-400/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/quizzes")}
          className="mb-10 flex items-center gap-2 text-sm text-gray-400 transition hover:text-yellow-400">
          <FiArrowLeft />
          Back to Quizzes
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-white/3">
          {/* Content */}
          <div className="p-7 sm:p-10 lg:p-14">
             <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-400">
              {quiz.category}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              {quiz.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-5 max-w-3xl text-base leading-7 text-gray-400 sm:text-lg">
              {quiz.description ||
                "Test your knowledge and challenge yourself with this quiz."}
            </motion.p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
             
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="rounded-2xl border border-white/10 bg-black/40 p-5">
                <FiHelpCircle className="text-2xl text-yellow-400" />

                <p className="mt-4 text-sm text-gray-500">Questions</p>

                <h3 className="mt-2 text-lg font-bold">{quiz.questions}</h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="rounded-2xl border border-white/10 bg-black/40 p-5">
                <FiTarget className="text-2xl text-yellow-400" />

                <p className="mt-4 text-sm text-gray-500">Difficulty</p>

                <h3 className="mt-2 text-lg font-bold">{quiz.difficulty}</h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="rounded-2xl border border-white/10 bg-black/40 p-5">
                <FiClock className="text-2xl text-yellow-400" />

                <p className="mt-4 text-sm text-gray-500">Time</p>

                <h3 className="mt-2 text-lg font-bold">
                  {quiz.time || "10 Min"}
                </h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="rounded-2xl border border-white/10 bg-black/40 p-5">
                <FiCheckCircle className="text-2xl text-yellow-400" />

                <p className="mt-4 text-sm text-gray-500">Category</p>

                <h3 className="mt-2 text-lg font-bold">{quiz.category}</h3>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl border border-yellow-400/20 bg-yellow-400/4 p-6 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-xl font-bold">Ready to start?</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Answer all questions and test your knowledge.
                </p>
              </div>

              <button
                onClick={() => navigate(`/quiz/${quiz.id}/start`)}
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-yellow-400 px-7 py-4 font-bold text-black transition hover:-translate-y-1 hover:bg-yellow-300 sm:w-auto">
                Start Quiz
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default QuizDetails;
