// Shallow Flatten
// Given an array of arrays, return all elements in a single array. Nested arrays
// will be at most one level deep, meaning
// [1, [2, 3], 4, [5], 6]

// and not

// [[[1],[2], [3]]]

// input: [ [ 10 ], [ 20, 30 ], [ 40 ] ]
// output: [ 10, 20, 30, 40 ]

const flatten = array => {
  let output = [];
  const search = arr => {
    arr.forEach(item => {
      if(Array.isArray(item)) {
        search(item);
      } else {
        output.push(item)
      }
    })
  }
  search(array);
  return output;
}
