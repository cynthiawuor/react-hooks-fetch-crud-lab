import React, { useState, useEffect } from 'react';
import QuestionList from './QuestionList';

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then(response => response.json())
      .then(data => setQuestions(data));
  }, []);

  const handleDelete = questionId => {
    fetch(`http://localhost:4000/questions/${questionId}`, {
      method: 'DELETE',
    }).then(() => {
      setQuestions(questions.filter(question => question.id !== questionId));
    });
  };

  const handleCorrectIndexChange = (questionId, correctIndex) => {
    fetch(`http://localhost:4000/questions/${questionId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ correctIndex }),
    }).then(() => {
      setQuestions(updatedQuestions =>
        updatedQuestions.map(question => {
          if (question.id === questionId) {
            return { ...question, correctIndex };
          }
          return question;
        })
      );
    });
  };

  return (
    <div>
      <h1>Quiz Admin Panel</h1>
      <QuestionList
        questions={questions}
        onDelete={handleDelete}
        onCorrectIndexChange={handleCorrectIndexChange}
      />
    </div>
  );
}

export default App;
