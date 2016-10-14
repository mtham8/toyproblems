// Arrayception
// Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.

// INPUT
// array:
// [ [ 5 ], [ [ ] ] ]

// OUTPUT
// 2

// INPUT
// [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ]

// OUTPUT
// 4

function arrayception (array){
  var count = 0;
  function recurse (arr, max){
      for (var i = 0; i < arr.length; i++){
        //check if an array
        if(Array.isArray(arr[i])){
          //if array, recurse
          recurse(arr[i], max +1)
          //else if max is greater than count
        }
        else if (max > count){
            //set count to the larger number
          count = max;
        }
    }
  }
  recurse(array, 1);
  return count;
}

// ES6
const arrayception = array => {
  let count = 0;
  const recurse = (arr, max) => {
    for(let i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])) {
        recurse(arr[i], max+1)
      }
      else if (max > count) {
        count = max;
      }
    }
  }
  recurse(array, 1);
  return count;
}