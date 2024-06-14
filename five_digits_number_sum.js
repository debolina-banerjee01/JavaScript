/*
chp1- H)g)  If a five-digit number is input through the keyboard, write a program to calculate the sum of its digits
*/
let number = Number(prompt("Please enter a five digit  number: "));

const unitDigit = number % 10;
/* console.log(`${unitDigit}`); */
let remThousand = number / 10;
remThousand = Math.trunc(remThousand);
console.log(`Remainder till thousand is ${remThousand}`);

const tensDigit = remThousand % 10;
let remHundred = remThousand / 10;
remHundred = Math.trunc(remHundred);
console.log(`Remainder till hundred is ${remHundred}`);

const hundredDigit = remHundred % 10;
let remTens = remHundred / 10;
remTens = Math.trunc(remTens);
console.log(`Remainder till tens is ${remTens}`);

const thousandDigit = remTens % 10;
let remUnit = remTens / 10;
remUnit = Math.trunc(remUnit);
console.log(`Remainder till unit is ${remUnit}`);

const sum = unitDigit + tensDigit + hundredDigit + thousandDigit + remUnit;
console.log(`Sum of five digits is ${sum}`);