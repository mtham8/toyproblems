// Sum Array
// Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
// A single array item will count as a contiguous sum.

// INPUT: [ 1, 2, 3 ]
// OUTPUT: 6

// INPUT: [ 1, 2, 3, -6, 4, 5, 6 ]
// OUTPUT: 15

function sumArray (array) {
  var prev = array[0];
  var current = array[0];
  for (var i = 1; i < array.length; i++){
    prev = Math.max(prev+array[i], array[i]);
    current = Math.max(current, prev);
  }
  return current;
}
