// // VALUES AND VARIABLES
// const country = 'Canada'
// const continent= "North America"
// const population = 32.25

// console.log(country, continent, population);

// // DATA TYPES
// // 7 primitive types: Number: floating numbers, String: sequence of characters, Boolean:true or false, undefined: "empty value", null: "empty value", symbol: unique value that cannot be changed, BigInt: larger numbers 

// // Reference types: Objects

// //Boolean value
// const isIsland = country === "Canada"
// let language = "English"

// console.log(typeof isIsland,typeof population,typeof country,typeof language);

// //Basic Operators
// let halfPopulation = population /2 
// console.log(halfPopulation);

// let plusOne= halfPopulation+1
// console.log(plusOne);

// const finlandPopulation= 6000000

// const finlandHigherPopulation = finlandPopulation > population
// console.log(finlandHigherPopulation);

// let description = "Portugal is in Europe, and its 11 million people speak Portuguese"

// //write description in TEMPLATE LITERAL
// description = `${country} is in ${continent}, and its ${population} million people speak ${language}`

// console.log(description);

// console.log(`multi
// lined
// sting`);

// // if / else CONTROL STRUCTURE
// if (population > 33) {
//     console.log("Portugal's population is above average");
// } else {
//     console.log("Portugal's population is 22 million below average");
// }

// // TYPE CONVERSION (Manual)
// //can convert to Number, String and Boolean
// const inputYear = "1991"
// console.log(Number(inputYear) + 18);
// // instead of concatenating and getting 199118 use Number() to turn string into number
// console.log(String(23), 23);

// //TYPE COERCION (when an operator is dealing with two values of different types  - javaScript converts one value to match the other)
// //can coerce to Number, String and Boolean
// //can be a bad habit if not properly understood 
// console.log("I am " + 23 + " years old"); //(coerced number into string)
// console.log("23"-"10"-3);  //10 (coerced strings into numbers)

// let n = '1' + 1
// n= n-1
// console.log(n);

// console.log(2+3+4+"5");
// console.log("10"-"4"-"3"-2+"5");

// // TRUTHY VS FALSY
// //falsy = 0, "", undefined, null, NaN
// //truthy = anything else 
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(-1));
// console.log(Boolean({}));
// console.log(Boolean(""));

// //falsy value (if/else statements JS always coerces the value to a Boolean)
// const money = 0
// if (money) {
//     console.log("Don't spend it all");
// } else {
//     console.log('You should get a job!');
// }

// //EQUALITY OPERATORS
// const age = 18
// if (age ===18) console.log("you are an adult");

// //  === "Strict" operator - does not coerce the values
// console.log("18" === 18); //false

// // == "Loose" operator - has a lot of weird 
// console.log("18" == 18); //true

// const fav = Number(prompt("what is your fav number?"))
// console.log(fav);
// console.log(typeof fav)

// if (fav === 11) {
//     console.log("WOW, crazy me too");
// } else if (fav === 3){
// console.log("yeah I guess that number is okay");
// } else {
//     console.log("boo, I don't like that number.");
// }
// if (fav !== 11) console.log("You should have chose 11.");


// //BOOLEAN LOGIC &&, ||, adn ! (NOT) operators
// const hasDriversLicense = true
// const hasGoodVision = false

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision

// if(shouldDrive) {
//     console.log("Is able to drive");
// } else {
//     console.log("should not drive");
// }


// // SWITCH STATEMENT
// const day = "Thursday"

// switch(day) {
//     case 'monday':
//         console.log("Plan course structure");
//         console.log("Go to coding meetup");
//         break; // without break - code will run until break is found
//     case 'Tuesday':
//         console.log("practice coding");
//         console.log("buy car");
//         break;
//     case 'Wednesday':
//     case 'Thursday':
//         console.log("go shopping");
//         console.log("practice coding");
//         break;
//     case 'Friday':
//         console.log("practice coding");
//         console.log("go to supermarket");
//         break;
//     case 'Saturday':
//     case 'Sunday':
//         console.log("enjoy weekend");
//         break;
//         default: //basically an "else statement"
//             console.log("not a valid day");
// }

// if (day === "monday"){
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
// } else if (day === "tuesday"){
//     console.log("practice coding");
//     console.log("stay in bed");
// } else if (day === "wednesday" || "thursday") {
//     console.log("get turtle");
//     console.log("practice coding");
// } else if (day === "friday"){
//     console.log("practice coding");
//     console.log("go to beach");
// } else if (day === saturday || "sunday"){
//     console.log("enjoy weekend");
// } else {
//     console.log("not a valid day"); 
// }

// // EXPRESSIONS (words that make up a sentence) - a piece of code that produces a value 
// //for example: 3 + 4  (number value)
// //for example: 1991  (number value)
// //for example: true && false && !false (boolean value)

// //STATEMENTS/ DECLARATIONS - a bigger piece of code that is executed and does not produce a value on its own
// //for example: if/else statements or switch statements

// //when comparing to "spoken language" a declaration is like a complete sentence (statements)  while the words that make up the sentence are like expressions

// // programs are made up of a sequence of actions and these actions are statements

// //ex. this if statement doesn't produce a value, it just completes the action of declaring the variable: str
// // the string "23 is bigger" is an expression though
// if (23 > 4){
//     const str ="23 is bigger"
// }
// //js expects expressions and statements in different places 
// // in a template literal we can only insert expressions and not statements


// //CONDITIONAL / TERNARY OPERATOR (called ternary because it has 3 parts)
// const age = 24
// age >= 18 ? console.log("I love wine") : console.log("I love juice");

// //drink is defined conditionally 
// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

// //otherwise written with if/else drink2 needs to be defined outside the statement and then redefined inside
// let drink2;
// if(age >= 18){
//     drink2= "wine"
// } else {
//    drink2= water
// }
// console.log(drink2);

// //Because the TERNARY operator is an EXPRESSION because it produces a value- THEREFORE you can have it inside a TEMPLATE LITERAL
// console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
// // the ternary operator only works for when we need to make a quick 2 part decision (if/else statements are still necessary for larger block of code.)



// //JS RELEASES 
// // 1995 - Netscape hired Brendan Eich to create first version of JavaScript made in just 10 days- called MOCHA
// // 1996- renamed: LiveScript - then to JavaScript to attract Java Developers even though JavaScript has almost nothing to do with Java 
    // // Microsoft copies JavaScript and names it JScript
// // 1997  - ECMA releases ES1 (ECMAScript 1) first official standard - use "ECMAScript" when talking about the standard, and "JavaScript" when talking about the language in practice
// // 2009 ES5 - released with new features. 
// // 2015 ES6 - (ES2015) - biggest update to the language ever - ECMA starts releasing annual JS updates

// // JS has backwards compatibility - so ES1 works in modern JavaScript engines - only adds new features, never removes to ensure updates "DON'T BREAK THE WEB"

// //DEVELOPMENT PHASE - building website on computer - be sure to use latest google chrome.
// //PRODUCTION PHASE - deployed to internet where users are always using different browsers which can cause many bugs - using BABEL to TRANSPILE and POLYFILL our code, we can convert our code to ES5 to ensure browser compatibility for all users (ES5 is fully supported by all browsers)

// // ES6+ = ES6 till now
// // ESNext (future versions of the language)