/*
Practicing 'converting data types' from the book 'Javascript from Beginner to Professional'(page: 29, 30)
*/
let nr1 = 2;
let nr2 = "2";
let multiplication = nr1 * nr2;
console.log(`Value of multiplication is ${multiplication}`); //converting string value to number

let sum = nr1 + nr2;
console.log(`Value of sum is ${sum}`); //converting a number to string

let noToStr = 6;
noToStr = String(noToStr);
console.log(noToStr, typeof noToStr);

let strToNo = "2";
strToNo = Number(strToNo);
console.log(strToNo, typeof strToNo);

let strToBool = "any string wil return true";
strToBool = Boolean(strToBool);
console.log(strToBool, typeof strToBool);

/*
Converting data types -null and empty string (page:30)
*/
let nullToNo = null;
nullToNo = Number(nullToNo);
console.log("null", nullToNo, typeof nullToNo);

let stringToNo = "";
stringToNo = Number(stringToNo);
console.log("empty string", stringToNo, typeof stringToNo);
