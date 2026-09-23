import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Quizzes from "./pages/Quizzes";
import QuizDetails from "./pages/QuizDetails";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

const App = () => {
  return (
    <Routes>
      {/* Home Page */}
      <Route path="/" element={<Home />} />

      {/* All Quizzes */}
      <Route path="/quizzes" element={<Quizzes />} />

      {/* Quiz Details */}
      <Route path="/quiz/:id" element={<QuizDetails />} />

      {/* Start Quiz */}
      <Route path="/quiz/:id/start" element={<Quiz />} />

      {/* Result */}
      <Route path="/result" element={<Result />} />

      {/* 404 Page */}
      <Route
        path="*"
        element={
          <div className="flex min-h-screen items-center justify-center bg-black px-4 text-center text-white">
            <div>
              <h1 className="text-7xl font-black text-[#FFD600]">
                404
              </h1>

              <p className="mt-4 text-gray-400">
                Oops! Page not found.
              </p>

              <button
                onClick={() => (window.location.href = "/")}
                className="mt-6 rounded-xl bg-[#FFD600] px-6 py-3 font-bold text-black transition hover:bg-[#FFE44D]"
              >
                Back Home
              </button>
            </div>
          </div>
        }
      />
    </Routes>
  );
};

export default App;