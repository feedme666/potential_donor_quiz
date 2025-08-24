import React, { useState } from 'react';
import quizData from './quizData';
import QuizCard from './QuizCard';
import Results from './Results';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(quizData.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setUserAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleRetryQuestion = (questionIndex) => {
    setShowResults(false);
    setCurrentQuestionIndex(questionIndex);
    // Optionally reset the specific answer if you want the user to re-answer
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = null;
    setUserAnswers(newAnswers);
  };
  
  const handleRestart = () => {
    setShowResults(false);
    setCurrentQuestionIndex(0);
    setUserAnswers(Array(quizData.length).fill(null));
  };

  return (
    <div className="App container">
      <h1 className="my-4 text-center">臓器提供適応判断クイズ</h1>
      {showResults ? (
        <Results 
          userAnswers={userAnswers} 
          quizData={quizData} 
          onRetryQuestion={handleRetryQuestion}
          onRestart={handleRestart}
        />
      ) : (
        <QuizCard
          questionData={quizData[currentQuestionIndex]}
          userAnswer={userAnswers[currentQuestionIndex]}
          onAnswer={handleAnswer}
          onNext={handleNext}
          isLastQuestion={currentQuestionIndex === quizData.length - 1}
        />
      )}
    </div>
  );
}

export default App;
