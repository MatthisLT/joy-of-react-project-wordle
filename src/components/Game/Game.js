import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

import GuessForm from '../GuessForm';
import GuessResults from '../GuessResults';
import Keyboard from '../Keyboard';
import LostBanner from '../LostBanner';
import WonBanner from '../WonBanner';

function getNewAnswer() {
  // Pick a random word on every pageload.
  const newAnswer = sample(WORDS);

  // To make debugging easier, we'll log the solution in the console.
  console.info({ newAnswer });

  return newAnswer;
}

function Game() {
  const [answer, setAnswer] = new React.useState(() =>
    getNewAnswer()
  );
  const [gameStatus, setGameStatus] = new React.useState('running');
  const [guesses, setGuesses] = new React.useState([]);

  function reloadGame() {
    setAnswer(() => getNewAnswer());
    setGameStatus('running');
    setGuesses([]);
  }

  function addGuess(guess) {
    const nextGuesses = [...guesses, guess];

    setGuesses(nextGuesses);

    if (guess === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  const checkedGuesses = guesses.map((guess) =>
    checkGuess(guess, answer)
  );

  return (
    <>
      <GuessResults checkedGuesses={checkedGuesses} />
      <GuessForm
        disabled={gameStatus !== 'running'}
        addGuess={addGuess}
      />
      <Keyboard checkedGuesses={checkedGuesses} />
      {gameStatus === 'won' && (
        <WonBanner
          numOfGuesses={guesses.length}
          reloadGame={reloadGame}
        />
      )}
      {gameStatus === 'lost' && (
        <LostBanner answer={answer} reloadGame={reloadGame} />
      )}
    </>
  );
}

export default Game;
