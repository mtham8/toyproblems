// Bubble Sort
// Bubble sort is considered the most basic sorting algorithm in Computer Science. It works by starting at the first element of an array and comparing it to the second element:

// If the first element is greater than the second element, it swaps the two.
// It then compares the second to the third, and the third to the fourth, and so on.
// In this way, the largest values ‘bubble’ to the end of the array.
// Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
// Implement a function that takes an array and sorts it using this technique.

// REFACTORED
// var bubbleSort = function(input) {
//   var count = 0;
//   while (count < input.length) {
//     for (var i = 0; i < input.length; i++) {
//       var temp1 = input[i];
//       var temp2 = input[i+1];
//       if (input[i] > input[i+1]) {
//         input[i] = temp2;
//         input[i+1] = temp1;
//       }
//     }
//     count++
//   };
// return input;
// }

var bubbleSort = function(array) {
  for (var i = 0; i < array.length-1; i++) {
    for (var j = 0; j < array.length-1; j++) {
      if(array[j] > array[j+1]) {
        var el = array[j];
        array[j] = array[j+1];
        array[j+1] = el;
      }
    }
  }
  return array;
};
