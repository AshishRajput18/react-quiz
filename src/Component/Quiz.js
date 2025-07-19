import React, { useState } from 'react';
import QuestionList from './QuestionList';
import './Quiz.css'; // Ensure correct path

function Quiz() {
  const questions = [
    {
      question: "What is React?",
      options: [
        "A JavaScript library for building user interfaces",
        "A database",
        "A backend framework",
        "A CSS library"
      ],
      answer: "A JavaScript library for building user interfaces"
    },
    {
      question: "What is the virtual DOM in React?",
      options: [
        "A copy of the real DOM that is kept in memory",
        "A real DOM created by React",
        "A component that directly modifies the HTML",
        "An API to access local storage"
      ],
      answer: "A copy of the real DOM that is kept in memory"
    },
    {
      question: "Which hook is used to manage state in functional components?",
      options: [
        "useEffect",
        "useState",
        "useRef",
        "useReducer"
      ],
      answer: "useState"
    },
    {
      question: "What is JSX?",
      options: [
        "A syntax extension for JavaScript",
        "A type of JSON data",
        "A CSS framework",
        "A new programming language"
      ],
      answer: "A syntax extension for JavaScript"
    },
    {
      question: "Which method is used to pass data from parent to child component?",
      options: [
        "Using Redux",
        "Using Context API",
        "Through props",
        "Using useState"
      ],
      answer: "Through props"
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setCurrentAnswer(null);
  };

  const handleClick = (option) => {
    setCurrentAnswer(option);
    if (option === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
  };

  return (
    <div className="App">
      {currentQuestionIndex < questions.length ? (
        <>
          <QuestionList
            question={questions[currentQuestionIndex].question}
            options={questions[currentQuestionIndex].options}
            handleClick={handleClick}
            currentAnswer={currentAnswer}
          />
          <button
            disabled={currentAnswer === null}
            className={currentAnswer === null ? 'button-disable' : 'button'}
            onClick={handleNextQuestion}
          >
            Next Question
          </button>
        </>
      ) : (
        <div className="score-container">
          <p className="score-text">🎉 Your Score is {score} / {questions.length}</p>
          <p>Thank you for playing!</p>
        </div>
      )}
    </div>
  );
}

export default Quiz;
