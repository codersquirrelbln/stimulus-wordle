// import { Application } from "stimulus";
const { Application } = require("stimulus");

// import { definitionsFromContext } from "stimulus/webpack-helpers";
const { definitionsFromContext } = require("stimulus/webpack-helpers");

const application = Application.start();

// Adjust the context path to point to the 'controllers' folder at the same level
const context = require.context("../controllers", true, /\.js$/);

application.load(definitionsFromContext(context));

export default class extends Controller {
  static targets = ["input"];

  connect() {
    // Listen for "keyup" event on the input field
    this.inputTarget.addEventListener("keyup", this.checkGuess);
  }

  disconnect() {
    // Remove event listener when the controller is disconnected
    this.inputTarget.removeEventListener("keyup", this.checkGuess);
  }
  // function to check the input word of user against the solution
  // for starters the solution will be a static word
  // iterate through all letters and check against all letters
  // and correct position of solution word
  // show correct letters and correct position
  //
  //function wordCheck(guess) {
    // const solutionWord = "REACH" -> needs to be in array
    // iterate through guess
    // check each letter against solutionWord plus index
    // return each letter in different color (add classes with CSS properties attached)
  // }

  checkGuess = (event) => {
    if (event.keyCode === 13) {
      const guessWord = this.inputTarget.value.trim().toLowerCase();
      this.checkSolution(guessWord);
    }
  };

  checkSolution(guessWord) {
    const solutionWord = "REACH"
    // solutionWord will eventually be retrieved from an online dictionary via API call

    solutionWord = solutionWord.toLowerCase();
    guessWord = guessWord.toLowerCase();

    let correctLetters = 0;
    let correctPositions = 0;

    for (let i = 0; i < guessWord.length; i++) {
      // Inside this loop, we access each letter of the guessWord at index 'i'

      // We first check if the letter at the current position 'i' in guessWord
      // is the same as the letter at the same position in solutionWord.
      if (guessWord[i] === solutionWord[i]) {
        // If the letters match and are in the correct position, we increment
        // the correctPositions counter.
        correctPositions++;
      } else if (solutionWord.includes(guessWord[i])) {
        // If the letters do not match in position but are part of the solutionWord,
        // we increment the correctLetters counter.
        correctLetters++;
      }
    }

    if (correctPositions === 5) {
      document.querySelector(".message").textContent = "You guessed correctly!";
    } else {
      document.querySelector(".message").textContent = "Try again!";
    }
    // better display in console.log or similar
    return {
      correctLetters,
      correctPositions
    };
  }
}
