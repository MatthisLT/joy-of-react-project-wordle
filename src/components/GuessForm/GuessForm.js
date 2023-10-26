import React from 'react';

function GuessForm({ disabled, addGuess }) {
  const [value, setvalue] = React.useState('');

  function handleChange(e) {
    setvalue(e.target.value.toUpperCase());
  }

  function handleSubmit(e) {
    e.preventDefault();

    addGuess(value);
    setvalue('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        pattern="[A-Z]{5}"
        title="5 uppercased letter word"
        value={value}
        onChange={handleChange}
        disabled={disabled}
      />
    </form>
  );
}

export default GuessForm;
