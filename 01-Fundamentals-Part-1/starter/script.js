// // const BMI = mass / height ** 2 = mass / (height * height)
// // mass in kg and height in meter

// // // const markMass = 78
// // // const markHeight= 1.69

// // const johnMass = 92
// // const johnHeight = 1.95

// const markMass = 95
// const markHeight= 1.88

// const johnMass = 95
// const johnHeight = 1.76

// const markBMI= markMass /markHeight **2 
// console.log(markBMI);

// const johnBMI= johnMass/(johnHeight*johnHeight)
// console.log(johnBMI);

// const markHigherBMI = markBMI > johnBMI
// console.log(markBMI, johnBMI, markHigherBMI);

// if (markHigherBMI === true){
//     console.log(`Marks BMI (${markBMI}) is higher than John's (${johnBMI})`);
// } else {
//     console.log(`Marks BMI (${markBMI}) is NOT higher than John's (${johnBMI})`);
// }

//CODING CHALLENGE #3

// //two gymnastic teams 
// //compete against each other three times
// //winner with highest average score wins
// const dolphinsAverageScore = (97 + 112 +101) /3
// const koalasAverageScore = (109 + 95 + 106) /3
// console.log(dolphinsAverageScore, koalasAverageScore);

// const minScore = 100

// if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= minScore) {
//     console.log("Dolphins win the trophy!");
// }else if (koalasAverageScore> dolphinsAverageScore && koalasAverageScore >= minScore) {
//     console.log("Koalas win the trophy!")
// } else if (dolphinsAverageScore === koalasAverageScore && koalasAverageScore >= minScore && dolphinsAverageScore >= minScore){
//     console.log("Its a tie!");
// } else {
//     console.log("No one is over the min score and so no one wins");
// }


//CODING CHALLENGE #4
//tip calculator 
//between 50$ - 300$ = 15%
// if different = 20%
const bill = 430
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20

console.log(`Bill value is ${bill}, tip is ${tip}, so the total value is ${bill + tip}`);