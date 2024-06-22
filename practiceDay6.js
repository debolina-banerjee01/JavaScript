/*
Practicing 'Practice Exrcise 2.4' from the book 'Javascript from Beginner to Professional'(page: 39).
Create variables for three numbers: a, b, and c. Update these variables with the following actions using the assignment operators:
• Add b to a
• Divide a by c
• Replace the value of c with the modulus of c and b
• Print all three numbers to the console
*/
let a = Number(prompt("Please enter a number as a: "));
let b = Number(prompt("Please enter a number as b: "));
let c = Number(prompt("Please enter a number as c: "));

let addition = a + b;
let div = a / c;
let newC = c % b;

console.log(`Value of a is ${a}`);
console.log(`Value of b is ${b}`);
console.log(`Value of c is ${newC}`);
