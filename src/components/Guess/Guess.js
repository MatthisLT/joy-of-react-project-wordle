import React from 'react';

import { range } from '../../utils';

function Cell({ letter, status }) {
  const classes = ['cell', status].join(' ');

  return <span className={classes}>{letter}</span>;
}

function Guess({ value }) {
  return (
    <p className="guess">
      {range(5).map((index) => (
        <Cell
          key={index}
          letter={value && value[index].letter}
          status={value && value[index].status}
        />
      ))}
    </p>
  );
}

export default Guess;
