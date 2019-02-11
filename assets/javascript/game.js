// Creates an array that lists out all of the options (Alphabet).
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins=0;
var losses=0;
var wrong=10;

var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeft=document.getElementById("guesses-text");


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      
    if (userGuess===computerGuess) {
        wins++;
    }

        else if (userGuess!=computerGuess) {
        wrong--;
        }
        
    if (wrong===0) {
        losses++;
        wrong=10;
            
        alert("Try again?");
                
    }

        directionsText.textContent="";
        userChoiceText.textContent="You choose - " + userGuess;
        computerChoiceText.textContent="Computer chooses - " + computerGuess;
        guessesLeft.textContent= wrong +" guesses left.";
        winsText.textContent="Wins = " + wins;
        lossesText.textContent="Losses = " + losses;
}
        
