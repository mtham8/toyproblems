// Roman Numeral Translator
// Given a roman numeral as input, write a function that converts the roman numeral to a number and outputs it.

// When a smaller numeral appears before a larger one, it becomes a subtractive operation.
// You can assume only one smaller numeral may appear in front of larger one.

// You should return "null" on invalid input.

// You've got Helpers! (click to view code)
// DIGIT_VALUES Object
// var DIGIT_VALUES = {
//   I: 1,
//   V: 5,
//   X: 10,
//   L: 50,
//   C: 100,
//   D: 500,
//   M: 1000
// };

// INPUT: "LX"
// OUTPUT: 60

// INPUT: "IV"
// OUTPUT: 4

// INPUT: "horse"
// OUTPUT: "null"

// 1. split the input into an array
// 2. check to see that letter matches one of the properties on digit value
// 3. if it does check to see if the next value is smaller than the previous
// 4. if it is smaller it will be subtracting from the larger value
// 5. else it will be just an additive
// 6. add the numbers together
// 6. if it does not match return null

function translateRomanNumeral (romanNumeral) {
  var result = 0;
  for (var i = 0; i < romanNumeral.length; i++) {
    if (DIGIT_VALUES[romanNumeral[i]]) {
      if (DIGIT_VALUES[romanNumeral[i]] < DIGIT_VALUES[romanNumeral[i+1]]) {
        result -= DIGIT_VALUES[romanNumeral[i]]
      } else {
        result += DIGIT_VALUES[romanNumeral[i]]
      }
    } else {
      return "null"
    }
  }
  return Math.abs(result)
}
