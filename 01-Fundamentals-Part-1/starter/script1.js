//Values and Variables
const country = 'Canada'
const continent= "North America"
const population = 32.25

console.log(country, continent, population);

//Data Types
//Boolean value
const isIsland = country === "Canada"
let language = "English"

console.log(typeof isIsland,typeof population,typeof country,typeof language);

//Basic Operators
let halfPopulation = population /2 
console.log(halfPopulation);

let plusOne= halfPopulation+1
console.log(plusOne);

const finlandPopulation= 6000000

const finlandHigherPopulation = finlandPopulation > population
console.log(finlandHigherPopulation);

let description = "Portugal is in Europe, and its 11 million people speak Portuguese"

//write description in TEMPLATE LITERAL
description = `${country} is in ${continent}, and its ${population} million people speak ${language}`

console.log(description);

console.log(`multi
lined
sting`);

// if / else CONTROL STRUCTURE
if (population > 33) {
    console.log("Portugal's population is above average");
} else {
    console.log("Portugal's population is 22 million below average");
}