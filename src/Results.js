import React from 'react';

function Results({ userAnswers, quizData, onRetryQuestion, onRestart }) {
  const correctAnswersCount = userAnswers.filter((answer, index) => answer === quizData[index].answer).length;
  const score = (correctAnswersCount / quizData.length) * 100;

  return (
    <div className="card">
      <div className="card-body text-center">
        <h2 className="card-title">クイズ結果</h2>
        <p className="card-text fs-4">
          正解率: {correctAnswersCount} / {quizData.length} ({score.toFixed(0)}%)
        </p>
      </div>
      <table className="table results-table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">あなたの回答</th>
            <th scope="col">正解</th>
            <th scope="col">結果</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {quizData.map((question, index) => (
            <tr key={question.id} className={userAnswers[index] === question.answer ? 'table-success' : 'table-danger'}>
              <th scope="row">{index + 1}</th>
              <td>{userAnswers[index] || '未回答'}</td>
              <td>{question.answer}</td>
              <td>{userAnswers[index] === question.answer ? '✅' : '❌'}</td>
              <td>
                <span onClick={() => onRetryQuestion(index)} className="btn-retry">
                  再挑戦
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="card-body text-center">
        <button className="btn btn-info" onClick={onRestart}>
          最初からやり直す
        </button>
      </div>
    </div>
  );
}

export default Results;
