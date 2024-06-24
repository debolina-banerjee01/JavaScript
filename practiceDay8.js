/*
Practicing 'Self-check quiz' from the book 'Javascript from Beginner to Professional'(page: 44-45).
*/
//1.
const c = "5";
console.log(typeof c); //string

//2.
const c1 = 91;
console.log(typeof c1); //number

//4.
let a = "Hello";
a = "world";
console.log(a); //world

//5.
let a1 = "world";
let b = `Hello ${a1}!`;
console.log(b); //Hello world!

//6.
let a2 = "Hello";
a2 = prompt("world");
console.log(a2); //value of a2 is whatever will be logged against a2 in prompt.

//7.
let a3 = 5;
let b1 = 70;
let c2 = "5";
b1++;
console.log(b1); //value of b1 is 71

//8.
let result = 3 + (4 * 2) / 8;
console.log(result); //result is 1

//9.
let firstNum = 5;
let secondNum = 10;
firstNum++;
secondNum--;
let total = ++firstNum + secondNum;
console.log(total); //value of total is 16
let total2 = 500 + 100 / 5 + total--;
console.log(total2); //value of total2 is 536

//10.
const a4 = 5;
const b2 = 10;
console.log(a4 > 0 && b2 > 0); //true
console.log(a4 == 5 && b2 == 4); //false
console.log(true || false); //true
console.log(a4 == 3 || b2 == 10); //true
console.log(a4 == 3 || b2 == 7); //false
