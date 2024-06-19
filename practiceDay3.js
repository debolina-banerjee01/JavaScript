/*
Practicing 'converting data types' from the book 'Javascript from Beginner to Professional'(page: 31)
*/
let strToNo = "hello";
strToNo = Number(strToNo);
console.log(strToNo, typeof strToNo);

let strToBool = "false";
strToBool = Boolean(strToBool);
console.log(strToBool, typeof strToBool);

let strToBool2 = "";
strToBool2 = Boolean(strToBool2);
console.log(strToBool2, typeof strToBool2);

let nr1 = 2;
let nr2 = "2";
console.log(2 + Number(nr2));

//Practice exercise 2.1
let str1 = "Laurence";
let str2 = "Svekis";
let val1 = undefined;
let val2 = null;
let myNum = 1000;

console.log(str1, typeof str1);
console.log(str2, typeof str2);
console.log(val1, typeof val1);
console.log(val2, typeof val2);
console.log(myNum, typeof myNum);
