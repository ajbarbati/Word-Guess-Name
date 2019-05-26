//Creating the list of words
var wordList = [
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

var alphabet = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
]
//setting a variable to make the array random
var randWord = Math.floor(Math.random() * wordList.length)

var word = wordList[randWord]

var guessesRemain;



var underscore = []

console.log(word)



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