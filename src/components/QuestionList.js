import React from "react";

function QuestionList({ questions }) {
  const handleCorrectIndexChange = (questionId, correctIndex) => {
    fetch(`http://localhost:4000/questions/${questionId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ correctIndex }),
    }).then(() => {
      // Update the state by mapping through questions and updating the correctIndex
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
      {questions.map(question => (
        <div key={question.id}>
          <p>{question.prompt}</p>
          <select
            value={question.correctIndex}
            onChange={event =>
              handleCorrectIndexChange(question.id, event.target.value)
            }
          >
            {question.answers.map((answer, index) => (
              <option key={index} value={index}>
                {answer}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}


export default QuestionList;
