//The unordered list where the player’s guessed letters will appear.
const guesssedLetters = document.querySelector(".guessed-letters");

//The button with the text “Guess!” in it.
const guessButton = document.querySelector(".guess");

//The text input where the player will guess a letter.
const letterInput = document.querySelector(".letter");

//The empty paragraph where the word in progress will appear.
const wordInProgress = document.querySelector(".word-in-progress");

//The paragraph where the remaining guesses will display.
const remainingGuesses = document.querySelector(".remaining");

//The span inside the paragraph where the remaining guesses will display.
const remainingGuessesSpan = document.querySelector(".remaining span");

//The empty paragraph where messages will appear when the player guesses a letter.
const playerMessage = document.querySelector(".message");

//The hidden button that will appear prompting the player to play again.
const playAgain = document.querySelector(".play-again");

//Starting word to test game.
const word = "magnolia";

//Hold the guessed letters in an array to check against what has already been guessed.
const guessedLetters = [];

//Making placeholder circle for the letters.
const placeholder = function(word) {
    //Array for the circles--starts empty so that one circle per letter in the word can be added to the array.
    const placeholderCircles = [];
    for (const letter of word) {
        placeholderCircles.push("●");
        console.log(letter);
    };
    wordInProgress.innerText = placeholderCircles.join("");
};

placeholder(word);

//The input is playerGuess. The variable guess stores the input.
guessButton.addEventListener("click", function(e) {
    e.preventDefault();
    //Empty message to player.
    playerMessage.innerText = "";
    //Take what was entered in guess.
    const guess = letterInput.value;
    //Input from validateInput that is passed to next round.
    const correctGuess = validateInput(guess);
    if (correctGuess) {
        makeGuess(guess);
    
    }
    letterInput.value = "";
}
);
   
//Write two new function and validate player's input to make sure there is only one letter.
const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    //Check to see if anything has  been entered.
    if(input.length === 0) {
        playerMessage.innerText = "Please enter a letter.";
        //Make sure only one letter input in the box.
    } else if (input.length >1) {
        playerMessage.innerText = "Whoa there, cowboy! One letter at time, please!";
        //Check using regEx that it is an alphabetic letter.
    } else if (!input.match(acceptedLetter)) {
        playerMessage.innerText = "Please enter a letter from A to Z.";
        //Eliminated wrong inputs, pass input to next round of validation.
    } else {
        return input;
    }
};

//Function to test guessed letter that has passed first round of validation.
const makeGuess = function(guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        playerMessage.innerText = "You've already guessed that letter!!!";
    } 
    //Pass letter on first guess to array, if letter guessed second time, not added to array.
    else {guessedLetters.push(guess);
    console.log(guessedLetters);
    updateWord();
    updateWordInProgress(guessedLetters);
}
};

//Function to update page with letters the player guesses.
const updateWord = function() {
    //Clear out HTML elements to put guessed letters in their place (build the list)
    guesssedLetters.innerHTML = "";
    for(const letter of guessedLetters) {
        //Create list item of guessed letters for display.
        const li= document.createElement("li");
        //Don't forget to update results with innerText, otherwise won't show up on screen!
        li.innerText = letter;
        guesssedLetters.append(li);

    }
};

//Replace circles with correct letters guessed.
const updateWordInProgress = function(guessedLetters) {
    const wordUpper = word.toUpperCase();
    //Turn string into array so they can be added to guessedLetters array (can't be added as string, which is waht they start out as)
    const wordArray = wordUpper.split("");
    const newArray = [];
    for (const letter of wordArray) {
        if (guessedLetters.includes(letter)) {
        newArray.push(letter.toUpperCase());
        } else {
            newArray.push("●");
        }
    }
      wordInProgress.innerText = newArray.join("");
        didIwin();
};

const didIwin = function () {
    if (word.toUpperCase() === wordInProgress.innerText) {
    playerMessage.classList.add("win");
    playerMessage.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`;
    }
};