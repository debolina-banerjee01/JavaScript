/*
chp-1-H)b) The distance between two cities (in km.) is input through the keyboard. Write a program to convert and print this distance
in meters, feet, inches and centimeters.
*/
let distance = Number(prompt("Please enter distance in km: "));
const distanceM = distance * 1000;
const distanceFeet = distance * 3280.84;
const distanceInch = distance * 39370.1;
const distanceCm = distance * 100000;

console.log(`Distance in meters is ${distanceM}`);
console.log(`Distance in feet is ${distanceFeet}`);
console.log(`Distance in inches is ${distanceInch}`);
console.log(`Distance in centimeters is ${distanceCm}`);