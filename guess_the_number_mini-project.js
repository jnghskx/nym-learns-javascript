//let userans = 0;
let upperLimit = 100;
let solution = Math.floor(Math.random()*upperLimit)+1;
let attempts = 0;
//let playing = "y";
console.log("temp correct answer display:", solution);
// how do i get user input hmm

const readline = require("readline");
/* nodejs has a module called readline.
and the 'require' function is unique to node because it
forces the user to have the thingy. idk factcheck?*/
/*when would i need to import it as opposed to just doing this? in browser js?*/
const rl = readline.createInterface({ //makes an interface called rl
    input: process.stdin, //detecting keyboard input
    output: process.stdout //writing prompts
});


//evil thing happening: difficulty select DOESNT WORK AT ALL 


function difficultySelect() {
    rl.question("Select difficulty\n[ez] correct answer will be from 1-50\n[med] correct answer will be from 1-100\
\n[hard] correct answer will be from 1-500.\ntype:", function(userans){
        if (userans.toLowerCase() === "ez" || userans == 50) {
            return upperLimit = 50; 
        } else if (userans.toLowerCase() === "med" || userans == 100) {
            return upperLimit = 100
        } else if (userans.toLowerCase() === "hard" || userans == 500) {
            return upperLimit = 500
        }
        else {
            console.log("invalid input, silly...");
            difficultySelect()
        } 
    })
}

function playAgain() {
    rl.question("Would you like to play again? [y] / [n]", function(userans) {
        if (userans.toLowerCase() === "y") {
            solution = Math.floor(Math.random()*upperLimit)+1;
            attempts = 0;
            askGuess();
        } else {
            rl.close()
        }
    })
} 

function askGuess() {
    difficultySelect();
    rl.question("whats your guess? ", function(userans) {
        attempts++;
        userans = Number(userans); //type conversion
        if (userans == solution) {
            console.log("you guessed it in", attempts, "tries");
            userans = 0;
            playAgain();
        } else if (userans > solution) {
            console.log("shoot lower");
            askGuess()
        } else {
            console.log("shoot higher");
            askGuess()
        }
    });
}

askGuess();


// jjjjjjkhkjhlhhjkjkj hi ok

/*
do {
    rl.question("Whats your guess? ", function(userans) {
        if (userans == solution) {

            attempts++;
            console.log("you guessed it in", attempts, "attempts");
            playing = "n"

        } else {

            if (userans > solution) {

                console.log("shoot lower");

            } else {

                console.log("shoot higher");
            };
        };
    })

} while (playing==="y");
//  theres something called promises that lets you do this with less nesting?
*/
