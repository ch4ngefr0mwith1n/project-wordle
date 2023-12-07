import React from 'react';

function GuessInput({ handleSubmitGuess, gameStatus }) {
    const [guess, setGuess] = React.useState('');


    // BITNO - prosljeđujemo "event":
    function checkGuess(event) {
        event.preventDefault();

        handleSubmitGuess(guess);
        setGuess('');
    }

    return (
        <form className="guess-input-wrapper" onSubmit={checkGuess}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                required
                disabled={gameStatus !== 'running'}
                id="guess-input"
                type="text"
                minLength={5}
                maxLength={5}
                pattern="[a-zA-Z]{5}"
                title="5 letter word"
                value={guess}
                onChange={(event) => {
                    // BITNO - na ovaj način se input automatski prebacuje u Uppercase
                    event.target.value = ("" + event.target.value).toUpperCase();
                    setGuess(event.target.value);
                }}
            />
        </form>
    );
}

export default GuessInput;