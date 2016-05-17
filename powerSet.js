// Power Set
// Return an array that contains the power set of a given string. The power set is a set of all the possible subsets,
// including the empty set.

// Make sure your code does the following:

// All characters in a subset should be sorted alphabetically, and the array of subsets
// should be sorted alphabetically.
// Sets of the same characters are considered duplicates regardless of order and count only
// once, e.g. ‘ab’ and ‘ba’ are the same.
// Duplicate characters in strings should be ignored; for example, ‘obama’ should be evaluated
// as if it only contained one ‘a’. See the result below.

// INPUT: "a"
// OUTPUT: [ "", "a" ]

// INPUT: "horse"
// OUTPUT: [ "", "e", "eh", "eho", "ehor", "ehors", "ehos", "ehr", "ehrs", "ehs", "eo", "eor", "eors", "eos", "er", "ers", "es", "h", "ho", "hor", "hors", "hos", "hr", "hrs", "hs", "o", "or", "ors", "os", "r", "rs", "s" ]

function powerSet (string) {
  // create an array to hold combinations
  var results = ['']
  // create an array to hold string with no duplicates
  var noDupe = []
  // split the string
  var splitString = string.split('')
  // handle duplicate combinations
    // put string in an object and count frequency
  var storage = {}
  for(var i = 0; i < splitString.length; i++) {
    storage[splitString[i]] = splitString[i]
  }
    // for in loop to interate through object
  for (var key in storage) {
    // push keys into an array
    noDupe.push(key)
  }
    // sort the array and put it back into a string
  var stringified = noDupe.sort().join('')
  // recurse function which passes in the string
  function recurse (combo, string) {
    // recursive case
    for (var i = 0; i < string.length; i++) {
      // push combo plus string[i] into results
      results.push(combo.concat(string[i]))
      // recurse through string, make a copy of the string at i+1
      recurse(combo.concat(string[i]), string.slice(i+1))
    }
  }
  recurse('', stringified)
  return results
}
