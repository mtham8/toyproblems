// Balanced Parenthesis
// Given a string, return true if it contains balanced parenthesis ().

// INPUT
// string:
// "(x + y) - (4)"

// OUTPUT
// true

// INPUT
// "(50)("

// OUTPUT
// false

function isBalanced (string) {
  // create a counter
  // split the string into an array
  // iterate over each of the values in the array
    // if the value is )
      // increment count
    // if the value is ( and the count is > 0 so it's not a lonely )
      // decrement the count
  // if the count is zero, it means there's equal amounts of parenthesis
    // return true
  // else
    // return false
  var count = 0
  var array = string.split('')
  for (var i = 0; i < array.length; i++) {
    if(array[i] === "(") {
      count += 1
    }
    if(array[i] === ")" && count > 0) {
      count -= 1
    }
  }
  if(count === 0) {
    return true
  } else {
    return false
  }
}
