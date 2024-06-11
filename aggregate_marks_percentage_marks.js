/* 
chp1- H)c)   If the marks obtained by a student in five different subjects are input through the keyboard, find out the aggregate marks
and percentage marks obtained by the student. Assume thatthe maximum marks that can be obtained by a student in each subject is 100.
*/

let ben = Number(prompt("Please enter the marks in Bengali : "));
let eng = Number(prompt("Please enter the marks in English : "));
let math = Number(prompt("Please enter the marks in Mathematics : "));
let geo = Number(prompt("Please enter the marks in Geography : "));
let his = Number(prompt("Please enter the marks in History : "));

const aggregate = ben + eng + math + geo + his;
console.log(`Total marks of five subjects is ${aggregate}`);

const totalMaxMark = 500;
const percentage = (aggregate / totalMaxMark) * 100;
console.log(`Percentage of the marks is ${percentage}`);