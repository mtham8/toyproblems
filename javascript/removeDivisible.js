/*
   RemoveDivisible. Takes in 2 arguments. First one is an array, second is a number.
   Function looks into the array and checks if any of them divides equally to that number.
   If it does, it removes it. Returns the array without that number.

   input: removeDivisible([10,5,2,3,7], 2)
   output: [5,3,7]

   input: removeDivisible([10,2,4,6,5,7], 5)
   output: [2,4,6,7]
*/

const removeDiv = (arr, num) => arr.filter(item => item % num !== 0)
