import React, { useState } from 'react';

function GuessInput({ handleGuessAdd, inputIsDisabled }) {
  const [currentWord, setCurrentWord] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const wordObject = {
      word: currentWord,
      id: crypto.randomUUID(),
    };

    handleGuessAdd(wordObject);
    setCurrentWord('');
  }

  return (
    <form className='guess-input-wrapper' onSubmit={e => handleSubmit(e)}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        disabled={inputIsDisabled}
        value={currentWord}
        onChange={e => setCurrentWord(e.target.value.toUpperCase())}
        pattern='.{5,5}'
        maxLength={5}
        id='guess-input'
        type='text'
        required={true}
      />
    </form>
  );
}

export default GuessInput;
