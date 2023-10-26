import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessResults from '../GuessResults';
import GuessForm from '../GuessForm';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = new React.useState([]);

  function addGuess(guess) {
    const nextGuesses = [...guesses, guess];

    setGuesses(nextGuesses);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessForm addGuess={addGuess} />
    </>
  );
}

export default Game;
