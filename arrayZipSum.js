// Array Zip Sum
// Given two arrays of negative/positive integers, return a new array such that each element at index n is the
// sum of the two elements from the other arrays at their index n’s.


// INPUT
// xs:
// [ 10, 20, 30 ]
// ys:
// [ 1, 2, 3 ]

// OUTPUT
// [ 11, 22, 33 ]

function zipSum (xs, ys) {
  var newArr = [];
  var newLength = Math.min(xs.length, ys.length);
  for (var i = 0; i < newLength; i++){
    newArr.push(xs[i] + ys[i]);
  }
  return newArr;
}
