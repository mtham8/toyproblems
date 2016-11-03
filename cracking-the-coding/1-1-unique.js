/*
Is Unique: Implement an algorithm to determine if a string has all unique characters. What if
you cannot use additional data structures?
*/

const unique = string => {
  let store = {};
  let arr = string.split('');
  let mapped = arr.map( item => store[item] = store[item] + 1 || 1).sort()
  if(mapped[mapped.length-1] > 1) return false
  return true
}