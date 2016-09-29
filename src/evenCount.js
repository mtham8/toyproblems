/*
  Only output the numbers that occur an even amount of times.

  input: [3,2,2,3,3,1,4,4]
  output: 2, 2, 4, 4
*/

const evenCount = array => array.filter(item => item % 2 === 0)
