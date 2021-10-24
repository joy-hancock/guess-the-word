//The unordered list where the player’s guessed letters will appear.
const guessedLetters = document.querySelector(".guessed-letters");

//The button with the text “Guess!” in it.
const guessButton = document.querySelector(".guess");

//The text input where the player will guess a letter.
const letterInput = document.querySelector(".letter");

//The empty paragraph where the word in progress will appear.
const wordProgress = document.querySelector(".word-in-progress");

//The paragraph where the remaining guesses will display.
const remainingGuess = document.querySelector(".remaining");

//The span inside the paragraph where the remaining guesses will display.
const remainingGuessSpan = document.querySelector(".remaining span");

//The empty paragraph where messages will appear when the player guesses a letter.
const guessedMessage = document.querySelector(".message");

//The hidden button that will appear prompting the player to play again.
const playAgainButton = document.querySelector(".play-again");

//Test word
const word = "magnolia";

const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
    wordProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessButton.addEventListener("click", function(e) {
    e.preventDefault();
    const guess = letterInput.value;
    console.log(guess);
    letterInput.innerText = "";
})

