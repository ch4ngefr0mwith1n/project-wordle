import React from "react";
import {range} from "../../utils";
import {checkGuess} from "../../game-helpers";

function Guess({ guess, answer }) {
    const result = checkGuess(guess, answer);


    const letters = getLetters(result)
    const statuses = getStatuses(result)

    return (
      // <p class="guess">
      //     {range(5).map((num)=>(
      //         <span className="cell" key={num}>
      //             {guess != null ? guess[num] : undefined}
      //         </span>
      //     ))}
      // </p>
      <p className="guess">
          {range(0,5).map((num)=>(
              <span
                  className={statuses[num] === 'correct' ?
                      'cell correct' : statuses[num] === 'incorrect' ?
                          'cell incorrect' : statuses[num] === 'misplaced' ?
                              'cell misplaced' : 'cell'}
                  key={num}
              >
                  {result ? letters[num] : undefined}
              </span>
          ))}
      </p>
    );
}

function getLetters(result) {
    if (!result) {
        return []
    }

    return result.map(obj => obj.letter);
}

function getStatuses(result) {
    if (!result) {
        return []
    }

    return result.map(obj => obj.status);
}

export default Guess;