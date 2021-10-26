//The unordered list where the player’s guessed letters will appear.
const guessedLetters = document.querySelector(".guessed-letters");

//The button with the text “Guess!” in it.
const guessButton = document.querySelector(".guess");

//The text input where the player will guess a letter.
const playerGuess = document.querySelector(".letter");

//The empty paragraph where the word in progress will appear.
const wordInProgress = document.querySelector(".word-in-progress");

//The paragraph where the remaining guesses will display.
const remainingGuesses = document.querySelector(".remaining");

//The span inside the paragraph where the remaining guesses will display.
const remainingLetters = document.querySelector(".remaining span");

//The empty paragraph where messages will appear when the player guesses a letter.
const playerMessage = document.querySelector(".message");

//The hidden button that will appear prompting the player to play again.
const hiddenButton = document.querySelector(".play-again");

//Starting word to test game.
const word = "magnolia";


//Replace letters with circles.
const placeholder = function (word) {
    //Create empty array for holding circles.
    const placeholderCircles = [];
    //Break apart letters, for each letter looped, circle pushed into circle array.
    for (const letter of word) {
        console.log(letter);
        placeholderCircles.push("●");
    }
    wordInProgress.innerText = placeholderCircles.join("");
};

placeholder(word);

//Capture input value.
guessButton.addEventListener("click", function(e) {
    e.preventDefault();
    //Single variable for global input variable to catch value.
    const guess = playerGuess.value
    console.log(guess);
    //Empty input value
    playerGuess.value = "";
});
    
    
