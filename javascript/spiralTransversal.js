// Spiral Traversal
// Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
// and prints out every value found, but in a spiral from the upper left in to the center.

// INPUT:
// [
// [ 1, 2, 3, 4, 5 ],
// [ 6, 7, 8, 9, 10 ],
// [ 11, 12, 13, 14, 15 ],
// [ 16, 17, 18, 19, 20 ],
// [ 21, 22, 23, 24, 25 ]
// ]
// OUTPUT: [ 1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13 ]

// INPUT:
// [
// [ 1, 2, 3 ],
// [ 4, 5, 6 ],
// [ 7, 8, 9 ],
// [ 10, 11, 12 ],
// [ 13, 14, 15 ],
// [ 16, 17, 18 ],
// [ 19, 20, 21 ],
// [ 22, 23, 24 ]
// ]
// OUTPUT: [ 1, 2, 3, 6, 9, 12, 15, 18, 21, 24, 23, 22, 19, 16, 13, 10, 7, 4, 5, 8, 11, 14, 17, 20 ]

// INPUT:
// [
// [ 1 ],
// [ 2 ],
// [ 3 ],
// [ 4 ]
// ]
// OUTPUT:   [ 1, 2, 3, 4 ]

function spiralTraversal (matrix) {
  var result = []
  var top = 0
  var bottom = matrix.length
  var left = 0
  var right = matrix[0].length

  function goRight () {
    if(left === right) {
      return result
    }
    for (var i = left; i < right; i++) {
      result.push(matrix[top][i])
    }
    top++
    goDown()
  }

  function goDown () {
    if(top === bottom) {
      return result
    }
    for (var j = top; j < bottom; j++) {
      result.push(matrix[j][right-1])
    }
    right--
    goLeft()
  }

  function goLeft () {
    if(left === right) {
      return result
    }
    for (var k = right; k > left; k--) {
      result.push(matrix[bottom-1][k-1])
    }
    bottom--
    goUp()
  }

  function goUp () {
    if (top === bottom) {
      return result
    }
    for (var l = bottom-1; l >= top; l--) {
      result.push(matrix[l][left])
    }
    left++
    goRight()
  }

  goRight()
  return result
  // call goRight function
    // check if left === right
      // return result
    // iterate from left to right -- for(var i = left, i < right; i++)
      // push values into result array -- result.push(matrix[top][i])
    // increment top -- top++
    // call goDown function -- goDown()

  // goDown function
    // check if top === bottom
      // return result
    // iterate from top to bottom -- for(var i = top; i < bottom; i++)
      // push right values -- result.push(matrix[bottom.length-1][i])
    // decrement right
    // call goLeft function

  // goLeft function
    // check if left === right
      // return result
    // iterate from right to left
      // push bottom values
    // decrement bottom
    // call goUp()

  // goUp function
    // check if top === bottom
      // return result
    // iterate from bottom to top
      // push left values
    // increment left
    // call goRight()
}

// REFACTOR
const spiralTraversal = matrix => {
  let totalLength = matrix.length * matrix[0].length, results = [];
  while(results.length < totalLength){
    // push the top row
    results.push(... matrix.shift());
    // push the last item in each row
    results.push(... matrix.map((a,i) => matrix[i].pop()));
    // check if there's remaining rows
    if(results.length === totalLength) return results;
    // push the last row and reverse
    results.push(... matrix.pop().reverse());
    // push the first item in each row and reverse
    results.push(... matrix.map((a,i) => matrix[i].shift()).reverse());
  }
  // return result
  return results;
}
