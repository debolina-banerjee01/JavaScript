/*
Temperature of a city in Fahrenheit degrees is input through the keyboard. Write a program to convert this temperature into Centigrade degrees
*/
let tempInFahrenheit = Number(
  prompt("Please enter temperatur in Fahrenheit: ")
);
let tempInCentigrade = (tempInFahrenheit - 32) / 1.8;
console.log(`Temperature in Centigrade is ${tempInCentigrade}`);
