//Class 1:
// Fork and clone the repo and set up your project workspace and link files
// Write HTML for your project
//Class 2:  
// Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
var userCoice = "";
var computerChoice = "";
var winner = "";
var choices = ["rock", "paper", "scissors"];
// Practice using console.log() and debugger to debug your code
// Create your document ready function. 
// Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
// Display the user choice to the output screen
//Class 3:  
// Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
console.log(choices[Math.floor(Math.random() * 3)]);

// Display the computer choice to the output screen
// Compare the user choice and the computer choice to determine who won. 
// Display the user winner to the output screen 
// Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES

/* global $*/
//FUNCTIONS
$(document).ready(function() {
        console.log('run');
        $("#shoot").click(function() {
                $("#myid").val();
                console.log("ready");
        });
});


// DOCUMENT READY FUNCTION
