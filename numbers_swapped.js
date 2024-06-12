/* 
chp1- H)f) Two numbers are input through the keyboard into two locations C and D. Write a program to interchange the contents of C and D.
*/

let a = prompt("Enter the first number.");
let b = prompt("Enter the second number.");

[a, b] = [b, a];

console.log(`The value of a after swapping is ${a}`);
console.log(`The value of a after swapping is ${b}`);