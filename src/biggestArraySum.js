/*
  Biggest Array Sum. Takes in an array as an argument. Goal is to find the biggest sum the array can have by
  just adding two consecutive numbers and return it.
   input: biggestArraySum([2,5,5,1])
   output: 10
*/

const biggestArraySum = input => {
  let sum = 0;
  let largest = 0;
  let count = 0;
  do {
    sum = input[count] + input[count+1];
    count++;
    if(sum > largest) largest = sum;
  }
  while(count < input.length-1);
  return largest;
}