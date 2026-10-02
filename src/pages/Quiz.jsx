import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheckCircle,
  FiClock,
} from "react-icons/fi";

const quizQuestions = {
  1: [
    {
      question: "Which language is primarily used with React.js?",
      options: ["Python", "JavaScript", "Java", "C++"],
      answer: "JavaScript",
    },
    {
      question: "What is React?",
      options: [
        "A JavaScript library",
        "A database",
        "An operating system",
        "A programming language",
      ],
      answer: "A JavaScript library",
    },
    {
      question: "Which hook is used to manage state in React?",
      options: ["useEffect", "useState", "useContext", "useRef"],
      answer: "useState",
    },
    {
      question: "What does JSX stand for?",
      options: [
        "JavaScript XML",
        "Java Syntax Extension",
        "JavaScript Extension",
        "JSON XML",
      ],
      answer: "JavaScript XML",
    },
    {
      question: "Which hook is commonly used for side effects?",
      options: ["useState", "useRef", "useEffect", "useMemo"],
      answer: "useEffect",
    },
    {
      question: "Which company developed React?",
      options: ["Google", "Microsoft", "Facebook", "Amazon"],
      answer: "Facebook",
    },
    {
      question: "What is a component in React?",
      options: [
        "Reusable UI building block",
        "Database table",
        "CSS file",
        "Server",
      ],
      answer: "Reusable UI building block",
    },
    {
      question: "Which syntax is used to pass data to a component?",
      options: ["Props", "State", "Hooks", "Events"],
      answer: "Props",
    },
    {
      question: "Which command starts a Vite React development server?",
      options: [
        "npm start",
        "npm run dev",
        "npm react",
        "npm run react",
      ],
      answer: "npm run dev",
    },
    {
      question: "Which library is commonly used for React routing?",
      options: [
        "React Router",
        "React Navigation",
        "React Path",
        "React Route JS",
      ],
      answer: "React Router",
    },
  ],

  2: [
    {
      question: "Which keyword declares a variable that cannot be reassigned?",
      options: ["let", "var", "const", "static"],
      answer: "const",
    },
    {
      question: "Which method adds an item to the end of an array?",
      options: ["pop()", "push()", "shift()", "slice()"],
      answer: "push()",
    },
    {
      question: "Which operator checks strict equality?",
      options: ["=", "==", "===", "!="],
      answer: "===",
    },
    {
      question: "Which method creates a new array from another array?",
      options: ["map()", "push()", "pop()", "join()"],
      answer: "map()",
    },
    {
      question: "Which keyword is used for asynchronous functions?",
      options: ["async", "await", "promise", "defer"],
      answer: "async",
    },
  ],

  3: [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyper Transfer Markup Language",
        "Home Tool Markup Language",
      ],
      answer: "Hyper Text Markup Language",
    },
    {
      question: "Which tag is used for the largest heading?",
      options: ["<h1>", "<h6>", "<head>", "<heading>"],
      answer: "<h1>",
    },
    {
      question: "Which CSS property changes text color?",
      options: ["color", "font-color", "text-color", "text"],
      answer: "color",
    },
    {
      question: "Which CSS property changes the background color?",
      options: ["bg-color", "background", "background-color", "color"],
      answer: "background-color",
    },
    {
      question: "Which HTML tag is used to create a link?",
      options: ["<link>", "<a>", "<href>", "<url>"],
      answer: "<a>",
    },
  ],

  4: [
    {
      question: "What is the capital of India?",
      options: ["Mumbai", "Jaipur", "New Delhi", "Kolkata"],
      answer: "New Delhi",
    },
    {
      question: "How many continents are there?",
      options: ["5", "6", "7", "8"],
      answer: "7",
    },
    {
      question: "Which is the largest ocean?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean",
      ],
      answer: "Pacific Ocean",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Mars",
    },
    {
      question: "Who wrote the national anthem of India?",
      options: [
        "Mahatma Gandhi",
        "Rabindranath Tagore",
        "Jawaharlal Nehru",
        "Bankim Chandra Chattopadhyay",
      ],
      answer: "Rabindranath Tagore",
    },
  ],
};

const Quiz = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const questions = quizQuestions[id] || quizQuestions[1];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const [score, setScore] = useState(0);

  const question = questions[currentQuestion];

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;


  const handleAnswer = (option) => {
    setSelectedAnswer(option);
  };


  const handleNext = () => {
    if (!selectedAnswer) return;

    const isCorrect = selectedAnswer === question.answer;

    const newScore = isCorrect ? score + 1 : score;

    setScore(newScore);

    if (currentQuestion === questions.length - 1) {
      navigate("/result", {
        state: {
          score: newScore,
          total: questions.length,
          quizId: id,
        },
      });

      return;
    }

    setCurrentQuestion((prev) => prev + 1);

    setSelectedAnswer(null);
  };


  const handlePrevious = () => {
    if (currentQuestion === 0) return;

    setCurrentQuestion((prev) => prev - 1);
    setSelectedAnswer(null);
  };


  return (
    <div className="min-h-screen bg-black px-4 py-6 text-white sm:px-6 lg:px-8">

      <div className="mx-auto max-w-5xl">

        
        <button
          onClick={() => navigate(`/quiz/${id}`)}
          className="mb-8 flex items-center gap-2 text-sm text-gray-400 transition hover:text-yellow-400">
          <FiArrowLeft />
          Back to Quiz
        </button>

        
        <div className="mb-8">

          <div className="mb-3 flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Question
              </p>

              <p className="text-lg font-bold">
                {currentQuestion + 1}
                <span className="text-gray-500">
                  {" "}
                  / {questions.length}
                </span>
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-400">
              <FiClock className="text-yellow-400" />
              Quiz in progress
            </div>

          </div>

          
          <div className="h-2 overflow-hidden rounded-full bg-white/10">

            <motion.div
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4 }}
              className="h-full rounded-full bg-yellow-400"/>
          </div>
        </div>

        
        <AnimatePresence mode="wait">

          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35 }}>

            <div className="rounded-3xl border border-yellow-400/20 bg-white/3 p-6 sm:p-10">
              
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-yellow-400">
                Question {currentQuestion + 1}
              </p>
              
              <h1 className="text-2xl font-black leading-tight sm:text-3xl">
                {question.question}
              </h1>

              <div className="mt-8 space-y-4">

                {question.options.map((option, index) => {

                  const letter = String.fromCharCode(65 + index);

                  const isSelected =
                    selectedAnswer === option;

                  return (
                    <motion.button
                      key={option}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => handleAnswer(option)}
                      className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition sm:p-5 ${
                        isSelected
                          ? "border-yellow-400 bg-yellow-400/10 text-white"
                          : "border-white/10 bg-black/40 text-gray-300 hover:border-yellow-400/50"}`}>
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border font-bold ${
                          isSelected
                            ? "border-yellow-400 bg-yellow-400 text-black"
                            : "border-white/10 text-yellow-400"}`}>
                        {letter}
                      </span>
                      <span className="text-sm font-semibold sm:text-base">
                        {option}
                      </span>
                      
                      {isSelected && (
                        <FiCheckCircle className="ml-auto shrink-0 text-xl text-yellow-400" />
                      )}

                    </motion.button>
                  );
                })}

              </div>

            </div>

          </motion.div>

        </AnimatePresence>

        
        <div className="mt-6 flex items-center justify-between">

          
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className={`flex items-center gap-2 rounded-xl border px-5 py-3 font-semibold transition ${
              currentQuestion === 0
                ? "cursor-not-allowed border-white/5 text-gray-700"
                : "border-white/10 text-gray-400 hover:border-yellow-400 hover:text-yellow-400"}`}>
            <FiArrowLeft />
            Previous
          </button>

          <button
            onClick={handleNext}
            disabled={!selectedAnswer}
            className={`flex items-center gap-2 rounded-xl px-6 py-3 font-bold transition ${
              selectedAnswer
                ? "bg-yellow-400 text-black hover:bg-yellow-300"
                : "cursor-not-allowed bg-yellow-400/20 text-yellow-400/40"}`}>
            {currentQuestion === questions.length - 1
              ? "Finish"
              : "Next"}

            <FiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;