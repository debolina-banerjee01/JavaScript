/*
chp-1-H)a)Ramesh’s basic salary is input through the keyboard. His dearness allowance is 40% of basic salary, and house rent allowance is 20% of basic salary. Write a program to calculate his gross salary
*/
let basicSal = Number(prompt("Please enter basic salay of Ramesh: "));
const dearAllow = 0.4 * basicSal;
const houseRentAllow = 0.2 * basicSal;
const grossSal = basicSal + dearAllow + houseRentAllow;

console.log(`Basic salary is ${basicSal}`);
console.log(`Dearness allowance is ${dearAllow}`);
console.log(`House rent allowance is ${houseRentAllow}`);
console.log(`Gross salary is ${grossSal}`);