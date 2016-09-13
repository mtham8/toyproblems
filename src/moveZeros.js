/*
Move Zeros
Given an array nums, write a function to move all 0’s to the end of it while
maintaining the relative order of the non-zero elements. Do not make a copy
of the array; do this in-place. Minimize the total number of operations.

input: [3,0,7,3,0,5,0,0,7,4]
output: [3,7,3,5,7,4,0,0,0,0]
*/

const moveZeros = array => {
  let temp = -1;
  for (let i = 0; i < array.length; i++) { // move non-zero elements in advance
    if (array[i] !== 0) {
      temp++;
      array[temp] = array[i];
    }
  }
  for (let j = temp+1; j < array.length; j++) { // fill remaining positions with 0
    array[j] = 0;
  }
  return array;
}

