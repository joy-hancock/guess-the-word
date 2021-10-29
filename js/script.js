//The unordered list where the player’s guessed letters will appear.
const playerGuesses = document.querySelector(".guessed-letters");

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

const guessedLetters = [];



//Use function to update word-in-progress with circles.
//One circle for each letter in word.
//Create new array for circle placeholders to live.

const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
    console.log(letter);
    //Push one circle into empty array for each letter.
    placeholderLetters.push("●");
};
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);


//Person inputs letter, then gets message after clicking the button.
guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    //Get the input value.
    const guess = playerGuess.value;
     //Clear out input after pressing Guess button.
    playerGuess.value = "";
   //Clear out message when clicking Guess after input.
    playerMessage.innerText = "";
    //Putting guess through validation.
    const goodGuess = validateInput(guess);
    
    if (goodGuess) {
        //We've got a letter!
        makeGuess(guess);
    }
    //Clear out value that player entered to go again.
    playerGuess.value = "";
});


//Check player's guess to validate correct input.
const validateInput = function(input) {
    //Regular expression to match character type.
    const acceptedLetter = /[a-zA-Z]/;
    //Make sure the guess isn't empty.
    if (input.length === 0) {
        playerMessage.innerText = "You can't do something with nothing, and you can't win the game if you don't give us any guesses!";
        //Make sure only one letter is entered.
    } else if (input.length > 1) {
            playerMessage.innerText = "Whoa there, cowboy! Only one guess at a time!  Try again.";
        //Make sure guess is letter using regular expression
        } else if (!input.match(acceptedLetter)) {
            playerMessage.innerText = "Don't you know what a letter is?! Try again.";
          //Pass letter on as validated input.  
        } else {
            return input;
        }
    };

    const makeGuess = function (guess) {
        guess = guess.toUpperCase();
        if (guessedLetters.includes(guess)) {
            playerMessage.innerText = "You've already guessed that letter! Try again, and this time--FOCUS!";
        } else {
            guessedLetters.push(guess);
            console.log(guessedLetters);
        }
    };

   
