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

function translateRomanNumeral (romanNumeral) {
  var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000 };
  if (romanNumeral === "") {
    return 0
  }
  var combo = []
  var results = []
  function recurse (position) {
    // if the
  }
}
