import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiSearch,
  FiClock,
  FiHelpCircle,
  FiArrowRight,
  FiFilter,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const quizzes = [
  {
    id: 1,
    title: "JavaScript Quiz",
    category: "Programming",
    questions: 15,
    time: "10 Min",
    difficulty: "Medium",
    description: "Test your JavaScript knowledge with interesting questions.",
  },
  {
    id: 2,
    title: "React JS Quiz",
    category: "Programming",
    questions: 20,
    time: "15 Min",
    difficulty: "Hard",
    description: "Challenge yourself with React concepts and hooks.",
  },
  {
    id: 3,
    title: "HTML & CSS Quiz",
    category: "Web Development",
    questions: 20,
    time: "12 Min",
    difficulty: "Easy",
    description: "Check your knowledge of HTML and CSS fundamentals.",
  },
  {
    id: 4,
    title: "General Knowledge",
    category: "GK",
    questions: 25,
    time: "15 Min",
    difficulty: "Medium",
    description: "How much do you know about the world around you?",
  },
  {
    id: 5,
    title: "Science Quiz",
    category: "Science",
    questions: 20,
    time: "10 Min",
    difficulty: "Medium",
    description: "Explore interesting questions from science.",
  },
  {
    id: 6,
    title: "Computer Fundamentals",
    category: "Computer",
    questions: 30,
    time: "20 Min",
    difficulty: "Easy",
    description: "Test your basic computer knowledge.",
  },
];

const categories = [
  "All",
  "Programming",
  "Web Development",
  "GK",
  "Science",
  "Computer",
];

const Quizzes = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredQuizzes = quizzes.filter((quiz) => {
    const matchesSearch =
      quiz.title.toLowerCase().includes(search.toLowerCase()) ||
      quiz.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      quiz.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden px-4 pb-12 pt-28 sm:px-6 lg:px-8">

        {/* Background Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-400 blur-[120px]"/>

        <div className="relative mx-auto max-w-7xl text-center">

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
            Explore & Challenge
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-black sm:text-5xl lg:text-6xl">
            Find Your <span className="text-yellow-400">Quiz</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Choose a topic, test your knowledge and see how much
            you really know.
          </motion.p>

          {/* ================= SEARCH ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="mx-auto mt-8 max-w-2xl">
            <div className="group flex items-center rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl transition-all duration-300 focus-within:border-yellow-400/60 focus-within:shadow-[0_0_30px_rgba(250,204,21,0.15)]">

              <FiSearch className="ml-3 text-xl text-gray-500 group-focus-within:text-yellow-400" />

              <input
                type="text"
                placeholder="Search JavaScript, React, GK..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 sm:text-base"/>

              <button className="hidden rounded-xl bg-yellow-400 px-5 py-3 font-bold text-black transition hover:bg-yellow-300 sm:block">
                Search
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= QUIZZES ================= */}
      <section className="px-4 py-10 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-7xl">

          {/* Header */}
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                All <span className="text-yellow-400">Quizzes</span>
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                {filteredQuizzes.length} quizzes available
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-400">
              <FiFilter className="text-yellow-400" />
              Filter by category
            </div>
          </div>

          {/* ================= CATEGORY FILTER ================= */}
          <div className="mb-10 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "border-yellow-400 bg-yellow-400 text-black shadow-[0_0_20px_rgba(250,204,21,0.2)]"
                    : "border-white/10 bg-white/5 text-gray-400 hover:border-yellow-400/50 hover:text-yellow-400"}`}>
                {category}
              </button>
            ))}
          </div>

          {/* ================= QUIZ GRID ================= */}
          {filteredQuizzes.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {filteredQuizzes.map((quiz, index) => (
                <motion.div
                  key={quiz.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0d] p-6 transition-all duration-300 hover:border-yellow-400/60 hover:shadow-[0_15px_50px_rgba(250,204,21,0.08)]">

                  {/* Yellow Glow */}
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-yellow-400/10 blur-3xl transition-all duration-500 group-hover:bg-yellow-400/20" />

                  {/* Category */}
                  <div className="relative mb-6 flex items-center justify-between">

                    <span className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1 text-xs font-semibold text-yellow-400">
                      {quiz.category}
                    </span>

                    <span className="text-xs font-medium text-gray-500">
                      {quiz.difficulty}
                    </span>

                  </div>

                  {/* Icon */}
                  <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-black shadow-[0_0_25px_rgba(250,204,21,0.15)] transition-transform duration-300 group-hover:rotate-6">
                    <FiHelpCircle className="text-2xl" />
                  </div>

                  {/* Title */}
                  <h3 className="relative text-xl font-bold transition-colors group-hover:text-yellow-400">
                    {quiz.title}
                  </h3>

                  {/* Description */}
                  <p className="relative mt-3 min-h-[48px] text-sm leading-6 text-gray-500">
                    {quiz.description}
                  </p>

                  {/* Info */}
                  <div className="relative mt-6 flex items-center gap-5 border-t border-white/10 pt-5">

                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <FiHelpCircle className="text-yellow-400" />
                      {quiz.questions} Questions
                    </div>

                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <FiClock className="text-yellow-400" />
                      {quiz.time}
                    </div>

                  </div>

                  {/* Start Button */}
                  <button
                    onClick={() => navigate(`/quiz/${quiz.id}`)}
                    className="relative mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 py-3 font-bold text-black transition-all duration-300 hover:bg-yellow-300">
                    Start Quiz

                    <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                </motion.div>
              ))}

            </div>
          ) : (

            /* ================= NO RESULT ================= */
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-3xl border border-white/10 bg-white/[0.02] px-6 py-20 text-center">
              <FiSearch className="mx-auto mb-5 text-5xl text-yellow-400" />

              <h3 className="text-2xl font-bold">
                No Quiz Found
              </h3>

              <p className="mt-3 text-sm text-gray-500">
                Try searching for another quiz or choose a different category.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setSelectedCategory("All");
                }}
                className="mt-6 rounded-xl bg-yellow-400 px-6 py-3 font-bold text-black transition hover:bg-yellow-300">
                Show All Quizzes
              </button>
            </motion.div>

          )}

        </div>
      </section>
    </div>
  );
};

export default Quizzes;