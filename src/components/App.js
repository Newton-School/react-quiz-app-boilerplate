import React, { useEffect, useState } from "react";
import "../styles/App.css";
//Fetch using the API Endpoint "https://opentdb.com/api.php?amount=5&category=13&difficulty=easy&type=multiple"

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {};

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of 5
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/5
            </div>
            <div
              className="question-text"
              dangerouslySetInnerHTML={{
                __html: "Sample Question",
              }}
            ></div>
          </div>
          <div className="answer-section">
            <button
              className="answer-option"
              onClick={() => handleAnswerOptionClick()}
              dangerouslySetInnerHTML={{
                __html: "Sample Choice",
              }}
            ></button>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
