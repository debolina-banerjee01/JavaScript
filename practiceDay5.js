/*
Practicing 'Practice Exrcise 2.3' from the book 'Javascript from Beginner to Professional'(page: 38).
Write some code to calculate the hypotenuse of a triangle using the Pythagorean theorem when given the values of the other two sides.
*/

let a = Number(prompt("Please enter value of a: "));
let b = Number(prompt("Please enter value of b: "));

let c = Math.sqrt(a ** 2 + b ** 2);
console.log(`Value of hypotenous is ${c}`);
