import React from 'react';

import Banner from '../Banner';

function WonBanner({ numOfGuesses, reloadGame }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>
          {numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}
        </strong>
        .
      </p>
      <button onClick={reloadGame}>Restart</button>
    </Banner>
  );
}

export default WonBanner;
