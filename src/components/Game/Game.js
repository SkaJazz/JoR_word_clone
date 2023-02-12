import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import Banner from '../Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = useState([]);
  const [gameStatus, setGameStatus] = useState('');

  function checkGameStatus(guess, newGuessList) {
    guess.word === answer && setGameStatus('won');
    newGuessList.length > 5 && setGameStatus('lost');
  }

  function handleGuessAdd(currentGuess) {
    const checkedGuess = {
      ...currentGuess,
      word: checkGuess(currentGuess.word, answer),
    };

    const newGuestList = [...guessList, checkedGuess];
    checkGameStatus(currentGuess, newGuestList);
    setGuessList(newGuestList);
  }

  return (
    <>
      <GuessResults guessList={guessList} />
      <GuessInput
        handleGuessAdd={handleGuessAdd}
        inputIsDisabled={!!gameStatus}
      />
      <Banner
        gameStatus={gameStatus}
        guessesCount={guessList.length}
        answer={answer}
      />
    </>
  );
}

export default Game;
