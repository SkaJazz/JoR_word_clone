import React from 'react';

function Banner({ guessesCount, gameStatus, answer }) {
  const happyBanner = (
    <div className='happy banner'>
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{guessesCount} guesses</strong>.
      </p>
    </div>
  );

  const sadBanner = (
    <div className='sad banner'>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );

  if (gameStatus === 'won') {
    return happyBanner;
  }

  if (gameStatus === 'lost') {
    return sadBanner;
  }
}

export default Banner;
