/*
Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palin­drome.
A palindrome is a word or phrase that is the same forwards and backwards.
A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
*/

// solution: to be a palindrome, a string can have no more than one character that is odd

const palindrome = string => {
  let store = {};
  let checkOdd = false;
  let array = string.toLowerCase().split('');
  let filtered = array.filter(item => item !== " ");
  filtered.forEach(function (item){
    store[item] = store[item] + 1 || 1;
  })
  for(let i in store){
    if(store[i] % 2 !== 0){
      if(checkOdd) return false;
      checkOdd = true;
    }
  }
  return true;
}