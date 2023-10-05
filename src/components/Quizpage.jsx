import React, { useState } from 'react';
import './Quizpage.css';
import questions from '../json/questions.json'; 

function Quizpage() {
 

  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
  const [showExplanations, setShowExplanations] = useState(false);
  const [results, setResults] = useState([]);

  const handleOptionSelect = (questionIndex, optionIndex) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = optionIndex;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleSubmit = () => {
    let correctCount = 0;
    let wrongCount = 0;

    const newResults = questions.map((question, questionIndex) => {
      const selectedOptionIndex = selectedAnswers[questionIndex];
      const isCorrect = selectedOptionIndex === question.correctAnswer;
      if (isCorrect) {
        correctCount++;
      } else {
        wrongCount++;
      }
      return {
        isCorrect,
        explanation: question.explanation
      };
    });

    // Display results
    alert(`You got ${correctCount} correct and ${wrongCount} wrong answers.`);

    setResults(newResults);
    setShowExplanations(true);
  };

  return (
    <div className="quiz-container">
      <header className="quiz-header">
        <h1>Quiz App</h1>
      </header>
      <div className="quiz-content">
        {questions.map((question, questionIndex) => (
          <div key={questionIndex} className="question-container">
            <p className="question-text">{question.question}</p>
            <div className="options-container">
              {question.options.map((option, optionIndex) => (
                <button
                  key={optionIndex}
                  className={`option-button ${selectedAnswers[questionIndex] === optionIndex ? 'selected' : ''}`}
                  onClick={() => handleOptionSelect(questionIndex, optionIndex)}
                  disabled={showExplanations}
                >
                  {option}
                </button>
              ))}
            </div>
            {showExplanations && (
              <p className={`explanation-text-${results[questionIndex].isCorrect ? 'correct' : 'wrong'}`}>
                {results[questionIndex].explanation}
              </p>
            )}
          </div>
        ))}
        <button className="submit-button" onClick={handleSubmit} disabled={showExplanations}>
          Submit Answers
        </button>
      </div>
    </div>
  );
}

export default Quizpage;
