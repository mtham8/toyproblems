// All Anagrams
// Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array.
// At first, don’t worry about repeated strings. What time complexity is your solution?

// Parameters:

// string (required) - a string of characters.

// INPUT
// string: "abc"

// OUTPUT
// [ "abc", "acb", "bac", "bca", "cab", "cba" ]

function allAnagrams (string) {
  // create a variable to store results
  // define recursive function
    // base case: if the combo is equal to the string's length
      // set the value of combo as true
    // recursive case: iterate through the letters in the string
      // add the letter to the current combo
  // recurse on an empty string, and the current string being passed
  // return an array of results
  var results = {}
  function recurse (combo, letters) {
    if (combo.length === string.length) {
      results[combo] = true
    }
    for (var i= 0; i < letters.length; i++) {
      recurse(combo + letters[i], letters.slice(0,i) + letters.slice(i+1))
    }
  }
  recurse('', string)
  return Object.keys(results)
}
