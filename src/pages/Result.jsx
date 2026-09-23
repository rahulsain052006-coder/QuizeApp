import React from "react";
import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiXCircle,
  FiAward,
  FiRotateCcw,
  FiHome,
  FiArrowRight,
} from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Quiz.jsx se actual result receive hoga
  const result = location.state;

  // Agar result data nahi mila
  if (!result) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black px-4 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-black text-[#FFD600]">
            No Result Found
          </h1>

          <p className="mt-3 text-gray-400">
            Please attempt a quiz first.
          </p>

          <button
            onClick={() => navigate("/quizzes")}
            className="mt-6 rounded-xl bg-[#FFD600] px-6 py-3 font-bold text-black transition hover:bg-[#FFE44D]"
          >
            Go To Quizzes
          </button>
        </div>
      </div>
    );
  }

  // =========================
  // ACTUAL RESULT DATA
  // =========================

  const totalQuestions = result.total;
  const correctAnswers = result.score;
  const wrongAnswers = totalQuestions - correctAnswers;

  const percentage =
    totalQuestions > 0
      ? Math.round((correctAnswers / totalQuestions) * 100)
      : 0;

  // Quiz ID
  const quizId = result.quizId;

  // =========================
  // RESULT MESSAGE
  // =========================

  let resultMessage = "";
  let resultTitle = "";

  if (percentage >= 80) {
    resultTitle = "Excellent!";
    resultMessage =
      "Amazing work! You have a great understanding of this topic.";
  } else if (percentage >= 60) {
    resultTitle = "Good Job!";
    resultMessage =
      "Nice work! Keep practicing and you can improve even more.";
  } else if (percentage >= 40) {
    resultTitle = "Keep Going!";
    resultMessage =
      "You're getting there. Practice more and try again.";
  } else {
    resultTitle = "Don't Give Up!";
    resultMessage =
      "Keep learning and give the quiz another try.";
  }

  return (
    <div className="min-h-screen bg-black px-4 py-10 text-white sm:px-6 lg:px-8">

      {/* ================= BACKGROUND GLOW ================= */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFD600]/10 blur-[120px]" />

        <div className="absolute bottom-0 left-10 h-60 w-60 rounded-full bg-[#FFD600]/5 blur-[100px]" />
      </div>

      {/* ================= MAIN ================= */}

      <div className="relative mx-auto flex min-h-[85vh] max-w-4xl items-center justify-center">

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="w-full"
        >

          {/* ================= RESULT CARD ================= */}

          <div className="rounded-3xl border border-[#FFD600]/20 bg-[#111111] p-6 shadow-2xl shadow-[#FFD600]/5 sm:p-10">

            {/* ================= TROPHY ================= */}

            <motion.div
              initial={{
                scale: 0,
                rotate: -20,
              }}
              animate={{
                scale: 1,
                rotate: 0,
              }}
              transition={{
                delay: 0.3,
                duration: 0.6,
                type: "spring",
              }}
              className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#FFD600] text-black shadow-lg shadow-[#FFD600]/30"
            >
              <FiAward size={40} />
            </motion.div>

            {/* ================= HEADING ================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4,
              }}
              className="text-center"
            >

              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#FFD600]">
                Quiz Completed
              </p>

              <h1 className="text-3xl font-black sm:text-5xl">
                {resultTitle}
              </h1>

              <p className="mx-auto mt-3 max-w-md text-sm text-gray-400 sm:text-base">
                {resultMessage}
              </p>

            </motion.div>

            {/* ================= SCORE ================= */}

            <div className="my-10 flex justify-center">

              <motion.div
                initial={{
                  scale: 0,
                }}
                animate={{
                  scale: 1,
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.7,
                  type: "spring",
                }}
                className="relative flex h-48 w-48 items-center justify-center rounded-full border-[10px] border-[#FFD600] shadow-[0_0_50px_rgba(255,214,0,0.15)] sm:h-56 sm:w-56"
              >

                <div className="text-center">

                  <motion.h2
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{
                      delay: 0.8,
                    }}
                    className="text-5xl font-black text-[#FFD600] sm:text-6xl"
                  >
                    {percentage}%
                  </motion.h2>

                  <p className="mt-1 text-sm text-gray-400">
                    Your Score
                  </p>

                </div>

              </motion.div>

            </div>

            {/* ================= STATS ================= */}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

              {/* TOTAL */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.7,
                }}
                className="rounded-2xl border border-white/10 bg-black p-5 text-center"
              >

                <p className="text-sm text-gray-500">
                  Total Questions
                </p>

                <h3 className="mt-2 text-3xl font-bold text-white">
                  {totalQuestions}
                </h3>

              </motion.div>

              {/* CORRECT */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.8,
                }}
                className="rounded-2xl border border-[#FFD600]/20 bg-black p-5 text-center"
              >

                <div className="flex items-center justify-center gap-2 text-[#FFD600]">

                  <FiCheckCircle />

                  <p className="text-sm">
                    Correct
                  </p>

                </div>

                <h3 className="mt-2 text-3xl font-bold text-[#FFD600]">
                  {correctAnswers}
                </h3>

              </motion.div>

              {/* WRONG */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.9,
                }}
                className="rounded-2xl border border-white/10 bg-black p-5 text-center"
              >

                <div className="flex items-center justify-center gap-2 text-gray-400">

                  <FiXCircle />

                  <p className="text-sm">
                    Wrong
                  </p>

                </div>

                <h3 className="mt-2 text-3xl font-bold text-white">
                  {wrongAnswers}
                </h3>

              </motion.div>

            </div>

            {/* ================= SCORE DETAILS ================= */}

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/50 p-5">

              <div className="flex items-center justify-between">

                <span className="text-sm text-gray-400">
                  Score
                </span>

                <span className="font-bold text-[#FFD600]">
                  {correctAnswers} / {totalQuestions}
                </span>

              </div>

              {/* Progress */}

              <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10">

                <motion.div
                  initial={{
                    width: 0,
                  }}
                  animate={{
                    width: `${percentage}%`,
                  }}
                  transition={{
                    delay: 1,
                    duration: 1.2,
                    ease: "easeOut",
                  }}
                  className="h-full rounded-full bg-[#FFD600]"
                />

              </div>

              <div className="mt-3 flex justify-between text-xs text-gray-500">

                <span>
                  {correctAnswers} Correct
                </span>

                <span>
                  {wrongAnswers} Wrong
                </span>

              </div>

            </div>

            {/* ================= BUTTONS ================= */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">

              {/* TRY AGAIN */}

              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                onClick={() =>
                  navigate(`/quiz/${quizId}/start`)
                }
                className="flex items-center justify-center gap-2 rounded-xl bg-[#FFD600] px-6 py-3.5 font-bold text-black transition hover:bg-[#FFE44D]"
              >

                <FiRotateCcw size={18} />

                Try Again

              </motion.button>

              {/* HOME */}

              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                onClick={() => navigate("/")}
                className="flex items-center justify-center gap-2 rounded-xl border border-[#FFD600]/30 bg-black px-6 py-3.5 font-bold text-white transition hover:border-[#FFD600] hover:text-[#FFD600]"
              >

                <FiHome size={18} />

                Back Home

              </motion.button>

              {/* MORE QUIZZES */}

              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                onClick={() => navigate("/quizzes")}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 px-6 py-3.5 font-bold text-gray-300 transition hover:border-white/30 hover:text-white"
              >

                More Quizzes

                <FiArrowRight size={18} />

              </motion.button>

            </div>

          </div>

        </motion.div>

      </div>

    </div>
  );
};

export default Result;