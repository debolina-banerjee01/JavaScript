/*
Practicing null datatye from the book 'Javascript from Beginner to Professional'(page: 27)
*/
let a = "";
console.log(`Value of a is: ${a}`);
console.log(typeof a);

let b = null;
console.log(`Value of b is: ${b}`);
console.log(typeof b);

let terribleThinToDo = undefined;
let lastName;
console.log("Same undefined:", lastName === terribleThinToDo);

let betterOption = null;
console.log("Same null:", lastName === betterOption);