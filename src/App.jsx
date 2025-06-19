import React, { useState } from 'react';
import './App.css';

const getLetterGrade = (percentage) => {
  if (percentage >= 92.45) return 'A';
  if (percentage >= 89.45) return 'A-';
  if (percentage >= 86.45) return 'B+';
  if (percentage >= 82.45) return 'B';
  if (percentage >= 79.45) return 'B-';
  if (percentage >= 76.45) return 'C+';
  if (percentage >= 72.45) return 'C';
  if (percentage >= 70.45) return 'C-';
  if (percentage >= 66.45) return 'D+';
  if (percentage >= 62.45) return 'D';
  if (percentage >= 59.45) return 'D-';
  return 'F';
};

function App() {
  const [total, setTotal] = useState('');
  const [correct, setCorrect] = useState('');

  let percentage = '';
  let letterGrade = '';

  if (total && correct && !isNaN(total) && !isNaN(correct) && Number(total) > 0) {
    percentage = ((Number(correct) / Number(total)) * 100).toFixed(2);
    letterGrade = getLetterGrade(Number(percentage));
  }

  return (
    <div className="grade-app">
      <div className="grade-display">
        {letterGrade && (
          <div className="letter-grade">{letterGrade}</div>
        )}
        {percentage && (
          <div className="percentage">{percentage}%</div>
        )}
      </div>
      <div className="inputs">
        <input
          type="number"
          min="0"
          placeholder="Number Correct"
          value={correct}
          onChange={e => setCorrect(e.target.value)}
        />
        <input
          type="number"
          min="0"
          placeholder="Total Number"
          value={total}
          onChange={e => setTotal(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
