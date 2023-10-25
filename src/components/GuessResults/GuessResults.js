import React from 'react';

import Guess from '../Guess';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        <Guess
          key={index}
          text={index < guesses.length && guesses[index]}
        />
      ))}
    </div>
  );
}

export default GuessResults;
