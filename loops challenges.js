/*1. For Loop Challenge
Print all even numbers from 2 to 10 (inclusive) using a for loop.

2. While Loop Challenge
Start with let n = 5;.
Use a while loop to print the factorial of n (multiply all numbers from n down to 1).

3. Do...While Loop Challenge
Start with let tries = 0;.
Use a do...while loop to simulate rolling a die (random number 1-6) until you get a 6.
Print how many tries it took.
*/

for (let i = 2; i < 11; i++) {
    if (i%2 === 0) {
        console.log(i);
    };
};
// btw % operator gives remainder.

let n = 5;
console.log("the factorial of", n, "is...");
let x = 1;
while (n >= 1) {
    x = x*n;
    n-=1;
};
console.log("...",x);

let tries = 0;
let dice = 0; 
do {
    tries++;
    dice = Math.floor((Math.random()*6)+1);
} while (dice < 6);
console.log("it took", tries, "tries to roll a 6.");
//small edit: you forgot that you can get zero when doing that random thing.
//changed it from Math.random()*7 