// Fraction Converter
// Write a function that takes a number as its argument and returns a string that represents that number’s simplified fraction.
// Whole numbers and mixed fractions should be returned as improper fractions.

// INPUT: 2.5
// OUTPUT: "5/2"

// INPUT: 2.75
// OUTPUT: "11/4"

function fractionConverter (number){
  var counter = 1;
  while((number*counter) % 1 !== 0) {
    // multiply the number by the counter until the number becomes a whole number
    counter++;
  }
  return "" + (number*counter) + "/" + counter
}
