//let userans = 0;
let solution = Math.floor(Math.random()*100)+1;
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

function askGuess() {
    rl.question("whats your guess? ", function(userans) {
        attempts++;
        userans = Number(userans); //type conversion
        if (userans == solution) {
            console.log("you guessed it in", attempts, "tries");
            rl.close()
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
