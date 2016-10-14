// Problem: given a list of numbers, multiply each one by a constant and print the result.

var numbers = [3, 1, 7];
var constant = 2;
// expected output [6, 2, 14]

function multiply (numbers, constant) {
  for (var i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * constant;
  }
  return numbers;
}
