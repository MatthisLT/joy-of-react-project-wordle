/**
 * Thanks to Github user dylano for supplying a more-accurate
 * solving algorithm!
 */

export function checkGuess(guess, answer) {
  // This constant is a placeholder that indicates we've successfully
  // dealt with this character (it's correct, or misplaced).
  const SOLVED_CHAR = '✓';

  if (!guess) {
    return null;
  }

  const guessChars = guess.toUpperCase().split('');
  const answerChars = answer.split('');

  const result = [];

  // Step 1: Look for correct letters.
  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === answerChars[i]) {
      result[i] = {
        letter: guessChars[i],
        status: 'correct',
      };
      answerChars[i] = SOLVED_CHAR;
      guessChars[i] = SOLVED_CHAR;
    }
  }

  // Step 2: look for misplaced letters. If it's not misplaced,
  // it must be incorrect.
  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === SOLVED_CHAR) {
      continue;
    }

    let status = 'incorrect';
    const misplacedIndex = answerChars.findIndex(
      (char) => char === guessChars[i]
    );
    if (misplacedIndex >= 0) {
      status = 'misplaced';
      answerChars[misplacedIndex] = SOLVED_CHAR;
    }

    result[i] = {
      letter: guessChars[i],
      status,
    };
  }

  return result;
}

export function checkKeyboardKeys(checkedGuesses) {
  const submittedKeys = {};

  checkedGuesses.forEach((checkedGuess) => {
    checkedGuess.forEach(({ letter, status }) => {
      /**
       * Prevent a past correct character to be marked as misplaced or incorrect, eg:
       *    - answer: MONTH
       *    - guess:  SOUTH (O is marked as correct)
       *    - guess:  PIANO (O is marked as incorrect)
       *
       * Prevent a past misplaced character to be marked as incorrect, eg:
       *    - answer: LABOR
       *    - guess:  HELLO (first L is marked as misplaced, second one as incorrect)
       *  */
      // Prevent a past misplaced character
      if (
        submittedKeys[letter] === 'correct' ||
        (status === 'incorrect' &&
          submittedKeys[letter] === 'misplaced')
      ) {
        return;
      }

      submittedKeys[letter] = status;
    });
  });

  return submittedKeys;
}
