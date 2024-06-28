/*
A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer
*/
let amountWithdraw = Number(
  prompt("Please enter amount withdrawn in hundred: ")
);
let hundredNote = amountWithdraw / 100;
hundredNote = Math.trunc(hundredNote);
console.log(`Number of hundred note is ${hundredNote}`);

amountWithdraw = Math.trunc(amountWithdraw % 100);
let fiftyNote = amountWithdraw / 50;
fiftyNote = Math.trunc(fiftyNote);
console.log(`Number of fifty note is ${fiftyNote}`);
amountWithdraw = Math.trunc(amountWithdraw % 50);

let tenNote = amountWithdraw / 10;
tenNote = Math.trunc(tenNote);
console.log(`Number of ten note is ${tenNote}`);
amountWithdraw = Math.trunc(amountWithdraw % 10);
