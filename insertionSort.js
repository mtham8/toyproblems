// Insertion Sort
// Insertion sort is a basic sorting algorithm.

// Insertion sort iterates over an array, growing a sorted array behind the current location. It takes each element from the input and finds the spot, up to the current point, where that element belongs (in constant space). It does this until it gets to the end of the array.

// Insertion sort should be implemented as a stable sort. This means that equal elements
// should retain their relative order. Numbers, as primitives, give us no way to check this,
// so we’ll be sorting objects with a value field, on which they will be sorted, like so:

// [{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}]

// A stable sort must return {value: 5, order: 1}, {value:5, order: 2} in that order.

// EXTRA CREDIT:

// Refactor your sort to (optionally) take an explicit comparator function as its second argument, so that callers can define arbitrary ways to sort elements. See Array.prototype.sort for an example of how this works (excerpt below):

// If comparator(a, b) is less than 0, sort a to a lower index than b, i.e. a comes first.
// If comparator(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements.
// If comparator(a, b) is greater than 0, sort b to a lower index than a.

// If no comparator is given, just sort the elements using < or >.

// function insertionSort (array) {
//   // make a copy of the input array so that you can iterate end of
//   // the copy otherwise there will be reference issues
//   // initiate a sorted area
//   // shifted off the first value of input array into sorted array
//   // start an iteration that goes as long as there are values in the
//   // input array
//   // initiate currentElem that tracks the shifted value
//   // check if currentElem is the greater than the last value in sorted array
//   // if it is push it on
//   // check if it is smaller than the first value sorted array
//   // unshift it on
//   // if falls somewhere in the middle backward through sorted array
//   // and check each value in sorted array to see when it smaller
//   // and then splice it in between that number
//   // return the sorted array

//   var sorted = [];
//   var copy = array.slice();
//   var firstElement = array.shift();

//   sorted.push(firstElement);

//   for (var i = 0; i < copy.length-1; i++) {
//     var currentElement = array.shift();
//     if (currentElement > sorted[sorted.length-1]) {
//       sorted.push(currentElement);
//     } else if (currentElement < sorted[0]) {
//       sorted.unshift(currentElement);
//     } else {
//       for (var j = sorted.length-1; j >= 0; j--) {
//         if(currentElement > sorted[j]) {
//           sorted.splice(j+1, 0, currentElement);
//           break;
//         }
//       }
//     }
//   }
//   return sorted;
// }

function insertionSort(arr){
  for (var i = 1; i < arr.length; i++){
    var temp = arr[i];
    var j = i - 1;

    while(j >= 0 && arr[j] > temp){
      arr[j+1] = arr[j];
      j -= 1;
    }

    arr[j+1] = temp;
  }
  return arr;
}
