// input: [1, 2, 3, 4]
// output: [9, 8, 7, 6]

function addArray (array) {
  var left = [];
  left[0] = 0;
  var right = [];
  right[array.length-1] = 0;
  var output = [];
  for (var i = 1; i < array.length; i++) {
    left[i] = left[i-1] + array[i-1];
  }
  for (var j = array.length-2; j >= 0; j--) {
    right[j] = right[j+1] + array[j+1];
  }
  for (var k = 0; k < array.length; k++) {
    output[k] = left[k] + right[k];
  }
  return output;
}

addArray([1, 2, 3, 4]);
