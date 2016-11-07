/*

Given a string s and a non-empty string p, find all the start indices
of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings
s and p will not be larger than 20,100.

Input:
str1: "cbaebabacd" str2: "abc"

Output:
[0, 6]

*/

const anagrams = (str1, str2) => {
  let arr1 = str1.split(''), word = str2.split('').sort().join(''), stack = [], result = [], bucket = [];
  arr1.forEach((item, i) =>{
    if(result.length < word.length){
      stack.push(i);
      result.push(item);
    }
    if(stack.length === word.length && result.sort().join('') === word){
      stack.splice(1, result.length-1);
      bucket.push(stack);
      result = [];
      stack = [];
    } else if(stack.length === word.length) {
      result = [];
      stack = [];
    }
  })
  return [].concat(...bucket);
}