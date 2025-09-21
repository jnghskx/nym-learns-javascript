console.log("running");

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function rand(upperLimit){
    return Math.floor(Math.random()*upperLimit)+1;
} // create function that generates a random number so you dont have to type it 

let streak = 0

function game(){
    let a = rand(100)
    , b = rand(100);
    console.log(a, "+", b);
    rl.question("=", function(userans){
        if (userans == (a + b)){
            streak++;
            game();
        } else {
            console.log("wrong lol.\nstreak:", streak);
            rl.close;
        }
    });
};

game();
