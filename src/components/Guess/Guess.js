import React from "react";
import {range} from "../../utils";
import {checkGuess} from "../../game-helpers";

function Guess({ guess, answer }) {
    const result = checkGuess(guess, answer);
    return (
      <p className="guess">
          {range(0,5).map((num) => (
              <Cell
                  key={num}
                  letter={result != null ? result[num].letter : undefined}
                  status={result != null ? result[num].status : undefined}
              />
          ))}
      </p>
    );
}

function Cell({ letter, status }) {
    const className = status ? `cell ${status}` : 'cell'

    return (
        <span className={className}>{letter}</span>
    );
}

export default Guess;