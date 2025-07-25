import React from 'react';

function QuestionList({ question, options, handleClick, currentAnswer }) {
  return (
    <div className="App">
      <h2>{question}</h2>
      <ul>
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleClick(option)}
            className={currentAnswer === option ? 'selected' : ''}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionList;
