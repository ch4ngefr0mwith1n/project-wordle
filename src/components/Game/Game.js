import React from 'react';
import GuessInput from '../GuessInput/GuessInput'

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessResults from "../GuessResults/GuessResults";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import GameOverBanner from "../GameOverBanner/GameOverBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    // running | won | lost
  const [gameStatus, setGameStatus] = React.useState('running');
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(someGuess) {
      // mora da se koristi ovaj pristup za računanje dužine niza - "guesses.length"
      // "setter" se izvršava tek nakon narednog rendera
      const nextGuesses = [...guesses, someGuess]
      setGuesses(nextGuesses);

      if(someGuess === answer) {
          setGameStatus('won');
          // obratiti pažnju - potreban je "nextGuesses.length" za ovu provjeru, a ne "guesses.length"
      } else if(nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
          setGameStatus('lost')
      }
  }

  return (
      <>
        {gameStatus}
        <GuessResults
            guesses={guesses}
            answer={answer}
        />
        <GuessInput
            handleSubmitGuess={handleSubmitGuess}
            gameStatus={gameStatus}
        />
        {gameStatus !== 'running' &&(
            <GameOverBanner
                gameStatus={gameStatus}
                guesses={guesses}
                answer={answer}
            />
        )}
      </>
  );
}

export default Game;
