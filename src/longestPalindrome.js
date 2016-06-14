// Longest Palindrome
// Implement a function that finds the longest palindrome in a given string. For example, in the string
// “My dad is a racecar athlete”, the longest palindrome is “a racecar a”. Count whitespaces as valid characters.
// Other palindromes in the above string include “dad”, “ete”, “ dad “ (including whitespace on each side of dad).

// INPUT: "aibohphobia"
// OUTPUT: "aibohphobia"

// INPUT: "My dad is a racecar athlete"
// OUTPUT: "a racecar a"

function longestPalindrome (string) {
  // Write your code here, and
  // return your final answer.
  var stringArr = string.split('');
  var compStorage = [];
  var palindrome = "";
  // use recursion
  function recurse (stringArray){
    // base case is if stringArray length is equal to 1, which means
    // that's the end of the stringArray
      if(stringArray.length === 1){
        return palindrome;
    }
    // recurse case if else
    // iterate through the stringArray
    for(var i = 0; i < stringArray.length; i++){
      // push stringArray[i] into compstorage
      compStorage.push(stringArray[i]);
      // compare compStorage with the reverse of compStorage and if compStorage.length > 1
      if((compStorage.join('') === compStorage.slice().reverse().join('')) && (compStorage.length > 1)){
      // push compStorage into palindrome
        if(compStorage.length > palindrome.length){
          palindrome = compStorage;
          break;
        }
      }
    }
    // empty compStorage
    compStorage = [];
    // remove first letter in stringArray
    stringArray.splice(0,1);
    recurse(stringArray);
  }
  // recurse and pass in stringArray
  recurse(stringArr);
  // return palindrome
  return palindrome.join('');
}


