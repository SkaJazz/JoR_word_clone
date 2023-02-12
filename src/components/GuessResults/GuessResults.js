import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ guessList }) {
  return (
    <div className='guess-results'>
      {range(0, NUM_OF_GUESSES_ALLOWED).map((el, i) => (
        <p key={i} className='guess'>
          {guessList[i]
            ? guessList[i]['word'].map(({ letter, status }, i) => (
                <span className={`cell ${status}`} key={i}>
                  {letter}
                </span>
              ))
            : range(0, 5).map((emptyEl, i) => (
                <span className='cell' key={i}></span>
              ))}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
