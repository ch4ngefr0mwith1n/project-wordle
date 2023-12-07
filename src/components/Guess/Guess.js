import React from "react";
import {range} from "../../utils";

function Guess({ guess }) {
    return (
      <p class="guess">
          {range(5).map((num)=>(
              <span className="cell" key={num}>
                  {guess != null ? guess[num] : undefined}
              </span>
          ))}
      </p>
    );
}

export default Guess;