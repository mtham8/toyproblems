// Multiply all fields except it's own position
// Restrictions: Cannot use division and O(n) complexity

// input: [2, 3, 1, 4]
// output: [12, 8, 24, 6]

// Plain English:
// for each value, return the product of the numbers left of
// the value and right of the value

var array = [2, 3, 1, 4];
// output: [12, 8, 24, 6]

function productArray (array) {
  var left = [];
  var right = [];
  var output = [];
  left[0] = 1;
  right[array.length-1] = 1;
  for (var i = 1; i < array.length; i++) {
    // multiply the values left of the position
    left[i] = left[i-1]*array[i-1];
  }
  for (var j = array.length-2; j >= 0; j--) {
    // multiply the values right of the position
    right[j] = right[j+1]*array[j+1];
  }
  for (var k = 0; k < array.length; k++) {
    // multiply left and right
    output[k] = right[k]*left[k];
  }
  return output;
}

productArray(array);
