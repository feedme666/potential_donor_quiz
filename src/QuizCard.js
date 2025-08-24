import React from 'react';

function QuizCard({ questionData, userAnswer, onAnswer, onNext, isLastQuestion }) {
  const { question, answer, explanation } = questionData;
  const hasAnswered = userAnswer !== null;

  return (
    <div className="card quiz-card">
      <div className="card-body">
        <h5 className="card-title">問題</h5>
        <p className="card-text" style={{ whiteSpace: 'pre-wrap' }}>{question}</p>
        
        {!hasAnswered && (
          <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <button className="btn btn-success btn-lg mx-2" onClick={() => onAnswer('YES')}>YES</button>
            <button className="btn btn-danger btn-lg mx-2" onClick={() => onAnswer('NO')}>NO</button>
          </div>
        )}

        {hasAnswered && (
          <div className={`answer-section ${userAnswer === answer ? 'correct' : 'incorrect'}`}>
            <h5 className="d-flex align-items-center">
              {userAnswer === answer ? 
                <span className="result-icon">✅</span> : 
                <span className="result-icon">❌</span>
              }
              {userAnswer === answer ? '正解' : '不正解'}
            </h5>
            <p>あなたの回答: {userAnswer}</p>
            <p>正解: {answer}</p>
            <hr />
            <h6>解説</h6>
            <p style={{ whiteSpace: 'pre-wrap' }}>{explanation}</p>
            <div className="text-center mt-4">
              <button className="btn btn-primary" onClick={onNext}>
                {isLastQuestion ? '結果を見る' : '次の問題へ'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizCard;
