//@ts-check
//Created an array of choices called 'computerChoices'
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var guessesLeft = 9;
var lettersGuessed = [];
var wins = 0;
var losses = 0;
var computerGuess = [];


//randomly selected computer choice from 'computerChoices' array
window.onload = function () {
    var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerGuess.push(compGuess);
}

// on key up event push playerGuess into the lettersGuessed array.
document.onkeyup = function (event) {
    var playerGuess = event.key;
    lettersGuessed.push(playerGuess);
    // if the playerGuess absolutely equals the index value of computerGuess and there's more than 0 guesses left in the game
    //then...
    if ((playerGuess === computerGuess[0]) && (guessesLeft > 0)) {
        wins++;
        guessesLeft = 9;
        lettersGuessed.length = 0;
        computerGuess.length = 0;
        var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        computerGuess.push(compGuess);
    }

    else if ((playerGuess !== computerGuess[0]) && (guessesLeft > 0)) {
        guessesLeft = guessesLeft - 1;
    }

    else {
        losses++;
        guessesLeft = 9;
        lettersGuessed.length = 0;
        computerGuess.length = 0;
        var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        computerGuess.push(compGuess);
        console.log(computerGuess[0]);
    }

    var html = "<p>Guess what letter I'm thinking of!</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses left: " + guessesLeft + "</p>" +
        "<p>Your guesses so far: " + lettersGuessed + "</p>";

    document.querySelector("#startGame").innerHTML = html;
}

