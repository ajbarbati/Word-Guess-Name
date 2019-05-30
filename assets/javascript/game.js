//Creating the list of words
var words = [
    "Blue",
    "Mozzarella",
    "Cheddar",
    "Swiss",
    "Parmasean",
    "Provolone",
    "Munster",
    "Gouda",
    "Romano"
]                                                   

// var alphabet = [
//     "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
// ]
//setting a variable to make the array random
var word = words[Math.floor(Math.random() * words.length)]

//making an array to show underscores
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_"
}

var count = 0

// create var to show letters remaining
var remainingLetters = word.length;

// >>>>>

//while there are letters left to be guessed
while (remainingLetters > 0) {
    //show player progress
    alert(answerArray.join(" "));

    // get a guess from player
    var guess = prompt("Guess a letter, or click Cancel to stop playing");

    //if the guess is blank
    if (guess == null) {
        //exit
        break;
    //if the guess is more than one letter or no letters
    }else if (guess.length !== 1) {
        //alert them to guess a single letter only;
        alert("Please enter a single letter");
    //valid guess
    }else {
        //update the game state with the guess
        for (var j = 0; j < word.length; j++) {
                //if the letter they guessed is in the word at that point or index
                if (word[j] === guess) {
                    //update the answer array with the letter they guessed at that point or index
                    answerArray[j] = guess;

                    
                    //subtract one from remaining letters
                    remainingLetters--;
                }
        }
        
    }
    count++
        document.getElementById("item-2").innerHTML = "No. of guesses" + count
    if (count > 5)
    {
        document.getElementById("item-4").innerHTML = "Farts"
    }
    
}

// <<<<<<
document.getElementById("sign").innerHTML = answerArray.join("")
// let player know word 
alert(answerArray.join(""));
//congradulate the player


alert("Good job! the answer was " + word);



// Get Js to recognize a Key Press
    // if keypress equals a letter of the array(word) print to screen 
        // else lower number of guesses by 1 and add letter to already guessed
//  document.onkeypress = function () {
//     for (var i = 0; i < word.length; i++) {
//         if {
//             event.keyCode = word[]
//         }else {
//             return underscore;
//         }

//     }

//     return underscore
//  }
// Track and Display Wins

// Display Blank Word Spaces and get Js to display correct letter when neccesary

// Show the Number of Guesses remaining

// display letters already guessed, and stop repeat letters counting as a guess


//  