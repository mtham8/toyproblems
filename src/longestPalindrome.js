// Longest Palindrome
// Implement a function that finds the longest palindrome in a given string. For example, in the string
// “My dad is a racecar athlete”, the longest palindrome is “a racecar a”. Count whitespaces as valid characters.
// Other palindromes in the above string include “dad”, “ete”, “ dad “ (including whitespace on each side of dad).

// INPUT: "aibohphobia"
// OUTPUT: "aibohphobia"

// INPUT: "My dad is a racecar athlete"
// OUTPUT: "a racecar a"

var longestPalindrome = function (string) {
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

// NO RECURSION VERSION:

var longestPalindrome = function(string){
  var dictionary = {}
  var longestMaxLength = 0;
  var longestPalindromeLength = 0
  var longestStringPalindrome = ""
  // Create a dictionary to store indexes of like string characters
  for(var i = 0; i < string.length; i++){
    if(dictionary[string[i]]){
      dictionary[string[i]].push(i)
      if(i - dictionary[string[i]][0] > longestMaxLength){
        longestMaxLength = i - dictionary[string[i]][0]
      }
      // Map indexes into the dictionary, so they look like this:
      // dictionary {
      //    a: [1,4,5]
      //    b: [2,3]
      // }
      // calculate the longest possible palindrom and store that in longestMaxLength
    } else {
      dictionary[string[i]] = [i]
    }
  }

  for(var key in dictionary){
    // look through the keys, if the difference between max and min index in the key is less than the
    // current longest length of a palindrome, continue to the next key
    if(dictionary[key][dictionary[key].length -1]-dictionary[key][0] <= longestPalindromeLength ||dictionary[key].length === 1 ){
      continue
    }
    // Same as all the other palindrom problems. Start searching the for palindroms, compare to highest, etc
    for(var i = 0; i < dictionary[key].length; i++){
      for(var j = dictionary[key].length -1; j > i; j--){
        var start = dictionary[key][i]
        var end = dictionary[key][j]
        var copy = string.substring(start, end+1)
        var reversecopy = copy.split("").reverse().join("")
        if(copy === reversecopy && end-start > longestPalindromeLength){
          longestPalindromeLength = end-start
          longestStringPalindrome = copy
          if(longestPalindromeLength >= longestMaxLength){
            return copy
          }
          // if this is the highest max length, return out of the function
          break
        }
      }
    }
  }
  return longestStringPalindrome
}

