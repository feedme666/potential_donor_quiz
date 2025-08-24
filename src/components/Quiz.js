import React, { useState } from 'react';
import quizData from '../data/quizData';
import './Quiz.css';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          あなたは {quizData.length} 問中 {score} 問正解しました！
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{quizData.length}
            </div>
            <div className="question-text">
              {quizData[currentQuestion].question}
            </div>
          </div>
          <div className="answer-section">
            {quizData[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;