/*
In a town, the percentage of men is 52. The percentage of total literacy is 48.
If total percentage of literate men is 35 of the total population, write a program to find the total number of illiterate men and women if the
population of the town is 80,000.
*/
let literacyPrcntg = 0.48;
let totalPopulation = 80000;
let totalIlliterate = (1 - 0.48) * 80000;
console.log(`Total illiterate people are ${totalIlliterate}`);
