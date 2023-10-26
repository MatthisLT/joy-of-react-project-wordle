import React from 'react';

import Banner from '../Banner';

function LostBanner({ answer, reloadGame }) {
  return (
    <Banner status="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button onClick={reloadGame}>Restart</button>
    </Banner>
  );
}

export default LostBanner;
