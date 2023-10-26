import React from 'react';

import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';

function Cell({ letter, status }) {
  const classes = ['cell', status].join(' ');

  return <span className={classes}>{letter}</span>;
}

function Guess({ text, answer }) {
  const result = checkGuess(text, answer);

  return (
    <p className="guess">
      {range(5).map((index) => (
        <Cell
          key={index}
          letter={result && result[index].letter}
          status={result && result[index].status}
        />
      ))}
    </p>
  );
}

export default Guess;
