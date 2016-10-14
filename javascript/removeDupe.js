/*
  Remove Duplicates. Takes in an array as an argument. Goal is to remove duplicates and
  return an array without the duplicates.
   input: removeDuplicates([2,2,3,5,5,10,1])
   output: [3,10,1]

   input: removeDuplicates([2,2,2,2,2,2,2,1])
   output: [1]
*/

const removeDupe = (input, obj = {}) => input.map(a => {
  obj[a] = obj[a]+1 || 1;
  return a;
}).filter(a => obj[a] == 1);
