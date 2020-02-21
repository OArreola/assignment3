//STEP 1
function halfNumber(number) {
  let result = number / 2;
  window.console.log("Half of " + number + " is " + result);
  return result;
}
let result = halfNumber(5);

// //STEP 2
// function squareNumber(number) {
//   let result = number * number;
//   window.console.log(
//     "The result of squaring the number " + number + " is " + result
//   );
//   return result;
// }
// let result = squareNumber(3);

// //STEP 3
// function percentOf(first, second) {
//   let result = (first * 100) / second;
//   window.console.log(first + " is " + result + "% of " + second);
//   return result;
// }
// let result = percentOf(2, 4);

// //STEP 4
// function findModulus(first, second) {
//   let result = first % second;
//   window.console.log(result + " is the modulus of " + second + " and " + first);
//   return result;
// }
// let result = findModulus(10, 4);

// ///STEP 5
// function calcSum() {
//   let totalSum = 0;
//   let possibleNumber;
//   for (let i = 0; i < arguments.length; i++) {
//     possibleNumber = Number(arguments[i]);
//     if (isNaN(possibleNumber)) {
//       //Validate sum for inputs that are not numbers
//       possibleNumber = 0;
//     }
//     totalSum = totalSum + possibleNumber;
//   }
//   return totalSum;
// }
// let first = window.prompt("Enter first number: ");
// let second = window.prompt("Enter second number: ");
// let third = window.prompt("Enter third number: ");
// let result = calcSum(first, second, third);
// window.alert("Total sum is " + result);
