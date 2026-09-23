const quizzes = [
  {
    id: 1,
    title: "JavaScript Basics",
    category: "Programming",
    difficulty: "Easy",
    questions: 10,
    time: "5 Min",
    icon: "JS",
    description:
      "Test your basic JavaScript knowledge including variables, functions, arrays and objects.",
    questionsData: [
      {
        id: 1,
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "int", "string", "define"],
        answer: "var",
      },
      {
        id: 2,
        question: "Which symbol is used for strict equality?",
        options: ["=", "==", "===", "!="],
        answer: "===",
      },
      {
        id: 3,
        question: "Which method is used to add an element to the end of an array?",
        options: ["push()", "pop()", "shift()", "slice()"],
        answer: "push()",
      },
      {
        id: 4,
        question: "Which data type represents true or false?",
        options: ["String", "Boolean", "Number", "Object"],
        answer: "Boolean",
      },
      {
        id: 5,
        question: "Which keyword creates a constant in JavaScript?",
        options: ["var", "let", "const", "constant"],
        answer: "const",
      },
    ],
  },

  {
    id: 2,
    title: "React JS",
    category: "Programming",
    difficulty: "Medium",
    questions: 10,
    time: "7 Min",
    icon: "RE",
    description:
      "Check your knowledge of React components, props, state, hooks and JSX.",
    questionsData: [
      {
        id: 1,
        question: "What is React mainly used for?",
        options: [
          "Building user interfaces",
          "Managing databases",
          "Creating operating systems",
          "Writing SQL queries",
        ],
        answer: "Building user interfaces",
      },
      {
        id: 2,
        question: "Which language is commonly used with React?",
        options: ["JavaScript", "Python", "C", "PHP"],
        answer: "JavaScript",
      },
      {
        id: 3,
        question: "Which hook is used to manage state?",
        options: ["useEffect", "useState", "useRef", "useMemo"],
        answer: "useState",
      },
      {
        id: 4,
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
        id: 5,
        question: "Which hook is commonly used for side effects?",
        options: ["useState", "useEffect", "useContext", "useReducer"],
        answer: "useEffect",
      },
    ],
  },

  {
    id: 3,
    title: "HTML & CSS",
    category: "Web Development",
    difficulty: "Easy",
    questions: 10,
    time: "5 Min",
    icon: "HC",
    description:
      "Test your knowledge of HTML elements, CSS properties, layouts and styling.",
    questionsData: [
      {
        id: 1,
        question: "What does HTML stand for?",
        options: [
          "HyperText Markup Language",
          "HighText Machine Language",
          "Hyper Transfer Markup Language",
          "Home Tool Markup Language",
        ],
        answer: "HyperText Markup Language",
      },
      {
        id: 2,
        question: "Which HTML tag is used to create a paragraph?",
        options: ["<p>", "<h1>", "<div>", "<para>"],
        answer: "<p>",
      },
      {
        id: 3,
        question: "Which CSS property changes text color?",
        options: ["background", "font", "color", "text-color"],
        answer: "color",
      },
      {
        id: 4,
        question: "Which CSS property is used to create a flex container?",
        options: [
          "display: flex",
          "position: flex",
          "flex: display",
          "layout: flex",
        ],
        answer: "display: flex",
      },
      {
        id: 5,
        question: "Which HTML tag is used to create a link?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        answer: "<a>",
      },
    ],
  },

  {
    id: 4,
    title: "General Knowledge",
    category: "GK",
    difficulty: "Easy",
    questions: 10,
    time: "5 Min",
    icon: "GK",
    description:
      "Challenge yourself with interesting questions from general knowledge.",
    questionsData: [
      {
        id: 1,
        question: "What is the capital of India?",
        options: ["Mumbai", "New Delhi", "Jaipur", "Kolkata"],
        answer: "New Delhi",
      },
      {
        id: 2,
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars",
      },
      {
        id: 3,
        question: "How many days are there in a leap year?",
        options: ["365", "366", "364", "367"],
        answer: "366",
      },
      {
        id: 4,
        question: "Which is the largest ocean on Earth?",
        options: [
          "Atlantic Ocean",
          "Indian Ocean",
          "Pacific Ocean",
          "Arctic Ocean",
        ],
        answer: "Pacific Ocean",
      },
      {
        id: 5,
        question: "Which is the national animal of India?",
        options: ["Lion", "Tiger", "Elephant", "Leopard"],
        answer: "Tiger",
      },
    ],
  },

  {
    id: 5,
    title: "Computer Fundamentals",
    category: "Computer",
    difficulty: "Easy",
    questions: 10,
    time: "5 Min",
    icon: "CF",
    description:
      "Test your basic computer knowledge including hardware, software and operating systems.",
    questionsData: [
      {
        id: 1,
        question: "What is the brain of a computer?",
        options: ["RAM", "CPU", "Hard Disk", "Monitor"],
        answer: "CPU",
      },
      {
        id: 2,
        question: "Which device is used to input text?",
        options: ["Monitor", "Printer", "Keyboard", "Speaker"],
        answer: "Keyboard",
      },
      {
        id: 3,
        question: "What does RAM stand for?",
        options: [
          "Random Access Memory",
          "Read Access Memory",
          "Rapid Access Machine",
          "Random Application Memory",
        ],
        answer: "Random Access Memory",
      },
      {
        id: 4,
        question: "Which one is an operating system?",
        options: ["Windows", "Google", "HTML", "Intel"],
        answer: "Windows",
      },
      {
        id: 5,
        question: "Which device displays visual output?",
        options: ["Keyboard", "Mouse", "Monitor", "Scanner"],
        answer: "Monitor",
      },
    ],
  },

  {
    id: 6,
    title: "JavaScript Advanced",
    category: "Programming",
    difficulty: "Hard",
    questions: 10,
    time: "10 Min",
    icon: "JA",
    description:
      "Take your JavaScript skills to the next level with advanced concepts.",
    questionsData: [
      {
        id: 1,
        question: "Which concept allows a function to remember its outer scope?",
        options: ["Closure", "Loop", "Callback", "Prototype"],
        answer: "Closure",
      },
      {
        id: 2,
        question: "Which method creates a new array by transforming elements?",
        options: ["filter()", "map()", "reduce()", "find()"],
        answer: "map()",
      },
      {
        id: 3,
        question: "Which keyword is used with async functions to handle promises?",
        options: ["await", "wait", "pause", "promise"],
        answer: "await",
      },
      {
        id: 4,
        question: "What does the spread operator look like?",
        options: ["...", "&&", "??", "::"],
        answer: "...",
      },
      {
        id: 5,
        question: "Which method combines array values into a single result?",
        options: ["map()", "filter()", "reduce()", "find()"],
        answer: "reduce()",
      },
    ],
  },
];

export default quizzes;