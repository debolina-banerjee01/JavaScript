/*
Practicing 'Chapter Project' from the book 'Javascript from Beginner to Professional'(page: 44).
Set values for height in inches and weight in pounds, then convert the values to centimeters and kilos, outputting the results to the console:
• 1 inch is equal to 2.54 cm
• 2.2046 pounds is equal to 1 kilo
Output the results. Then, calculate and log the BMI: this is equal to weight (in kilos) divided by squared height (in meters). Output the results to the console.
*/
let heihtInInch = Number(prompt("Please enter height in inch: "));
let weightInPound = Number(prompt("Please enter weight in pound: "));

let heightInCm = heihtInInch * 2.54;
let weightInKilo = weightInPound / 2.2046;
let heightInM = heightInCm / 100;
console.log(`Height in centimeter is ${heightInCm}`);
console.log(`Weight in kilo is ${weightInKilo}`);

let bmi = weightInKilo / heightInM ** 2;
console.log(`Value of BMI is ${bmi}`);
