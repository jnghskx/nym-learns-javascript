console.log('hello world ;0');
//this is how u print ^
//on browser its alert() on node its console.log()
//in node we have to run the file using node filename.js
//in browser we can run it directly in console or in script tag in html file. ok anyways...

let age = 20;
const MY_NAME = 'Nym';
// VARIABLES let changes and const doesnt.
console.log("i'm", MY_NAME,"! and im currently", age, "years old.");

let a = Math.floor(Math.random()*101)
, b = Math.floor(Math.random()*101);
console.log(a, b);
// //MATH! and RANDOM STUFF! important to my soul.
// so Math.random gets a random float (0-1). we multiply it by a number to generate the upper limit (minus 1).
// afterwards, Math.floor rounds it down

/* STATEMENTS and EXPRESSIONS... there the whole line (let a =....) is a statement.
when run it performs an action. in this case, assigns the random number to object a. 
an expression is math.floor(math,random()*101). it produces a value. */

if (a < b) {
    console.log("the first number is smaller than the second number");
}else {
    console.log("the first number is bigger than or equal to the second number");
};

if (a*b > 5000) {
    console.log("...and the product of the first and second number is bigger than 5000.");
} else{
    console.log("...and the product of the first and second number is smaller than 5000.");
};

/*fun fact. once you declare a variable with 'let' you can simply do 'name = expression'
trying to declare it again will give you and error */

age = (age+1);
console.log("look! it's my birthday! now i'm", age,"!");
//ims so sleepy but we must persevere what the fawk am i listening to rightnow