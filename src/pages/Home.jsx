import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FiSearch,
  FiArrowRight,
  FiCode,
  FiGlobe,
  FiBookOpen,
  FiCpu,
  FiAward,
  FiZap,
  FiCheckCircle,
} from "react-icons/fi";

const quizzes = [
  {
    id: 1,
    title: "JavaScript Master Quiz",
    category: "Programming",
    questions: 20,
    difficulty: "Medium",
    icon: <FiCode />,
  },
  {
    id: 2,
    title: "React JS Challenge",
    category: "Programming",
    questions: 15,
    difficulty: "Hard",
    icon: <FiCpu />,
  },
  {
    id: 3,
    title: "General Knowledge",
    category: "GK",
    questions: 25,
    difficulty: "Easy",
    icon: <FiGlobe />,
  },
  {
    id: 4,
    title: "Web Development",
    category: "Technology",
    questions: 20,
    difficulty: "Medium",
    icon: <FiBookOpen />,
  },
];

const categories = [
  {
    name: "Programming",
    icon: <FiCode />,
    count: "120+ Quizzes",
  },
  {
    name: "General Knowledge",
    icon: <FiGlobe />,
    count: "80+ Quizzes",
  },
  {
    name: "Science",
    icon: <FiCpu />,
    count: "60+ Quizzes",
  },
  {
    name: "Education",
    icon: <FiBookOpen />,
    count: "90+ Quizzes",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Home = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const filteredQuizzes = quizzes.filter((quiz) =>
    `${quiz.title} ${quiz.category}`
      .toLowerCase()
      .includes(search.toLowerCase()),);

  return (
    <div className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative min-h-screen">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-400 blur-[120px]"/>

          <motion.div
            animate={{
              x: [0, 80, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-0 top-1/3 h-40 w-40 rounded-full bg-yellow-400/20 blur-[80px]"/>

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,214,0,0.08),transparent_45%)]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 py-20 sm:px-8 lg:px-12">
          <div className="grid w-full items-center gap-16 lg:grid-cols-2">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible">
              <motion.div
                variants={itemVariants}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm text-yellow-400">
                <FiZap />
                <span>Learn. Play. Master.</span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Test Your
                <span className="block text-yellow-400">Knowledge.</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
                Discover thousands of quizzes, challenge yourself, improve your
                skills and become better every day.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="mt-8 max-w-xl">
                <div className="flex items-center rounded-2xl border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur-xl transition focus-within:border-yellow-400/60">
                  <FiSearch className="ml-3 text-xl text-yellow-400" />

                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search JavaScript, React, GK..."
                    className="w-full bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 sm:text-base"/>

                  <button
                    onClick={() => navigate("/quizzes")}
                    className="hidden rounded-xl bg-yellow-400 px-6 py-3 font-bold text-black transition hover:bg-yellow-300 sm:block">
                    Search
                  </button>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mt-7 flex flex-wrap gap-4">
                <button
                  onClick={() => navigate("/quizzes")}
                  className="group flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 font-bold text-black transition hover:-translate-y-1 hover:bg-yellow-300">
                  Explore Quizzes
                  <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </button>

                <button className="rounded-xl border border-white/10 px-6 py-3.5 font-semibold text-white transition hover:border-yellow-400 hover:text-yellow-400">
                  How It Works
                </button>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mt-10 flex flex-wrap gap-8">
                <div>
                  <h3 className="text-2xl font-black text-yellow-400">10K+</h3>

                  <p className="text-sm text-gray-500">Quizzes</p>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-yellow-400">50K+</h3>

                  <p className="text-sm text-gray-500">Questions</p>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-yellow-400">100K+</h3>

                  <p className="text-sm text-gray-500">Players</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative mx-auto w-full max-w-md">
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative rounded-3xl border border-yellow-400/20 bg-white/4 p-6 shadow-2xl backdrop-blur-xl">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-yellow-400">
                      Featured Quiz
                    </p>

                    <h2 className="mt-2 text-2xl font-bold">JavaScript</h2>
                  </div>

                  <div className="rounded-2xl bg-yellow-400 p-4 text-black">
                    <FiCode className="text-2xl" />
                  </div>
                </div>

                <div className="mb-6">
                  <div className="mb-2 flex justify-between text-xs text-gray-400">
                    <span>Question 7 / 15</span>
                    <span>47%</span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "47%" }}
                      transition={{ duration: 1.2, delay: 0.8 }}
                      className="h-full rounded-full bg-yellow-400"/>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/50 p-5">
                  <p className="mb-5 text-sm font-semibold leading-6 sm:text-base">
                    Which method creates a new array in JavaScript?
                  </p>

                  <div className="space-y-3">
                    {["map()", "push()", "console.log()", "forEach()"].map(
                      (answer, index) => (
                        <motion.div
                          key={answer}
                          whileHover={{ x: 5 }}
                          className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 text-sm transition ${
                            index === 0
                              ? "border-yellow-400 bg-yellow-400/10 text-yellow-400"
                              : "border-white/10 text-gray-400 hover:border-yellow-400/40"
                          }`}>
                          <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-current text-xs">
                            {String.fromCharCode(65 + index)}
                          </span>

                          {answer}

                          {index === 0 && <FiCheckCircle className="ml-auto" />}
                        </motion.div>
                      ),
                    )}
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    Medium Difficulty
                  </span>

                  <button
                    onClick={() => navigate("/quiz/1/start")}
                    className="flex items-center gap-2 rounded-lg bg-yellow-400 px-4 py-2 text-sm font-bold text-black transition hover:bg-yellow-300">
                    Start
                    <FiArrowRight />
                  </button>
                </div>
              </motion.div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -right-5 -top-5 -z-10 h-20 w-20 rounded-2xl border border-yellow-400/20"/>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -bottom-6 -left-6 -z-10 h-24 w-24 rounded-full border border-yellow-400/10"/>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/5 px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
              Explore Topics
            </p>

            <h2 className="text-3xl font-black sm:text-4xl">
              Choose Your
              <span className="text-yellow-400"> Category</span>
            </h2>

            <p className="mt-4 max-w-xl text-gray-500">
              Pick a topic and start challenging your knowledge.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                onClick={() => navigate("/quizzes")}
                className="group cursor-pointer rounded-2xl border border-white/10 bg-white/3 p-6 transition hover:border-yellow-400/50 hover:bg-yellow-400/4">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-2xl text-black transition group-hover:rotate-6">
                  {category.icon}
                </div>

                <h3 className="text-lg font-bold">{category.name}</h3>

                <p className="mt-2 text-sm text-gray-500">{category.count}</p>

                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-yellow-400">
                  Explore
                  <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
                Popular Now
              </p>

              <h2 className="text-3xl font-black sm:text-4xl">
                Trending Quizzes
              </h2>

              <p className="mt-4 text-gray-500">
                Challenge yourself with our most popular quizzes.
              </p>
            </div>

            <button
              onClick={() => navigate("/quizzes")}
              className="flex w-fit items-center gap-2 text-sm font-bold text-yellow-400">
              View All
              <FiArrowRight />
            </button>
          </div>

          {search && (
            <p className="mb-6 text-sm text-gray-400">
              Showing results for:
              <span className="ml-2 font-bold text-yellow-400">{search}</span>
            </p>)}

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {filteredQuizzes.map((quiz, index) => (
              <motion.div
                key={quiz.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8 }}
                className="group rounded-2xl border border-white/10 bg-white/3 p-5 transition hover:border-yellow-400/50">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-xl text-black">
                    {quiz.icon}
                  </div>

                  <span className="rounded-full border border-yellow-400/20 px-3 py-1 text-xs text-yellow-400">
                    {quiz.difficulty}
                  </span>
                </div>

                <p className="text-xs font-semibold uppercase tracking-wider text-yellow-400">
                  {quiz.category}
                </p>

                <h3 className="mt-2 min-h-14 text-lg font-bold">
                  {quiz.title}
                </h3>

                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-gray-500">
                  <span>{quiz.questions} Questions</span>

                  <span>10 Min</span>
                </div>

                <button
                  onClick={() => navigate(`/quiz/${quiz.id}/start`)}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 py-3 text-sm font-bold text-black transition hover:bg-yellow-300">
                  Start Quiz
                  <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            ))}
          </div>

          {filteredQuizzes.length === 0 && (
            <div className="rounded-2xl border border-white/10 py-16 text-center">
              <FiSearch className="mx-auto mb-4 text-4xl text-yellow-400" />

              <h3 className="text-xl font-bold">No quiz found</h3>

              <p className="mt-2 text-gray-500">
                Try searching for another topic.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-yellow-400 px-6 py-16 text-center text-black sm:px-12">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full border-30 border-black/5" />

          <div className="absolute -bottom-24 -left-20 h-60 w-60 rounded-full border-30 border-black/5" />

          <div className="relative z-10">
            <FiAward className="mx-auto mb-6 text-5xl" />

            <h2 className="text-3xl font-black sm:text-5xl">
              Ready to Test Yourself?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm font-medium text-black/70 sm:text-base">
              Choose a quiz, challenge yourself and see how much you really
              know.
            </p>

            <button
              onClick={() => navigate("/quizzes")}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-black px-7 py-4 font-bold text-yellow-400 transition hover:scale-105">
              Start Your Quiz
              <FiArrowRight />
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
