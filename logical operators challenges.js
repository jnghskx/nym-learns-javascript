/* Here’s a new logical operators challenge for you:

Challenge:
You have two variables, temperature and isRaining.

Print "Stay inside!" if the temperature is below 10 or it is raining.
Otherwise, print "Go outside and have fun!"
Try to solve it using logical operators! Let me know when you’re ready for the answer or want a hint.*/
let temp = 0;
let isRaining = false;

if (temp < 10 || isRaining) {
    console.log("Stay inside!");
} else {
    console.log("Go outside and have fun!");};

/*Challenge:
You have three variables: score, hasCheated, and isLate.

Print "You passed!" if the score is at least 70, and the person did not cheat, and they are not late.
Otherwise, print "You did not pass."*/
let score = 99
, hasCheated = false
, isLate = false;
if (score < 70 || hasCheated === true || isLate === true) {
    console.log("You did not pass.");
} else {console.log("You passed!");};

/*Challenge:
You have four variables:

hasKey (boolean)
knowsPassword (boolean)
isAdmin (boolean)
doorLocked (boolean)
Print "Access granted" only if:

The door is not locked
OR
The person has a key
OR
The person knows the password and is not an admin
Otherwise, print "Access denied".*/

let hasKey = false
, isAdmin = true
, doorLocked = true
, knowsPassword = true;
if ((knowsPassword && !(isAdmin))|| doorLocked === false || hasKey) {
    console.log("Access granted");
} else {
    console.log("Access denied");
};