import React from 'react';

function QuestionItem({ question, onDelete, onCorrectIndexChange }) {
  const { id, prompt, answers, correctIndex } = question;

  return (
    <div className="question-item">
      <h3>{prompt}</h3>
      <ul>
        {answers.map((answer, index) => (
          <li key={index} className={index === correctIndex ? 'correct-answer' : ''}>
            {answer}
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => onDelete(id)}>Delete</button>
        <select
          value={correctIndex}
          onChange={event => onCorrectIndexChange(id, parseInt(event.target.value))}
        >
          {answers.map((answer, index) => (
            <option key={index} value={index}>
              {answer}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default QuestionItem;
