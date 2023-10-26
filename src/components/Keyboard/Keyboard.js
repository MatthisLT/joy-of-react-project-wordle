import React from 'react';

import { KEYBOARD_ROWS } from '../../constants';
import { checkKeyboardKeys } from '../../game-helpers';

function Key({ letter, status }) {
  const classes = ['keyboard__key', status].join(' ');

  return <div className={classes}>{letter}</div>;
}

function Keyboard({ checkedGuesses }) {
  const submittedKeys = checkKeyboardKeys(checkedGuesses);

  return (
    <div className="keyboard">
      {KEYBOARD_ROWS.map((keys, i) => (
        <div key={i} className="keyboard__row">
          {keys.map((letter, j) => (
            <Key
              key={j}
              letter={letter}
              status={submittedKeys[letter]}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
