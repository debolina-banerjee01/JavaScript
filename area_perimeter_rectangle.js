/* 
chp1- H)e)   The length & breadth of a rectangle and radius of a circle are input through the keyboard. Write a program to calculate the area & perimeter of the rectangle, and the area & circumference of the circle.
*/

let length = Number(prompt("Please enter length of the rectangle :"));
let width = Number(prompt("Please enter width of the rectangle :"));
let radius = Number(prompt("Please enter radius of the circle :"));

const rArea = length * width;
const rPeri = 2 * (length + width);
const cArea = 3.14 * (radius * radius);
const cCircum = 2 * 3.14 * radius;

console.log(`Area of the rectangle is ${rArea}`);
console.log(`Perimeter of the rectangle is ${rPeri}`);
console.log(`Area of the circle is ${cArea}`);
console.log(`Circumference of the cicle is ${cCircum}`);
