/*
chp-1) H)i)-  If a four-digit number is input through the keyboard, write a program to obtain the sum of the first and last digit of this number.
*/

let number = Number(prompt("Please enter a four digit number: "));

const unitDigit = number % 10;
/* console.log(`${unitDigit}`); */
let remHundred = number / 10;
remHundred = Math.trunc(remHundred);
console.log(`Remainder till hundred is ${remHundred}`);

const tensDigit = remHundred % 10;
let remTens = remHundred / 10;
remTens = Math.trunc(remTens);
console.log(`Remainder till tens is ${remTens}`);

const hundredDigit = remTens % 10;
let remThousand = remTens / 10;
remThousand = Math.trunc(remThousand);
console.log(`Remainder till unit is ${remThousand}`);

const sum = unitDigit + remThousand;
console.log(`Sum of the first and last digit is ${sum}`);
