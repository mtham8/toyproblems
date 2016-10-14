// Longest Run
// Write a function that, given a string, finds the longest run of identical characters and returns an array containing
// the start and end indices of that run.
// If there are two runs of equal length, return the first one. Return [0,0] for no runs.

// INPUT: "abbbcc"
// OUTPUT: [ 1, 3 ]

// INPUT: "mississippi"
// OUTPUT: [ 2, 3 ]

// INPUT: abccccccc"
// OUTPUT: [ 2, 8 ]

function longestRun (string) {
  // create a variable to store the run
  var results = []
  var currentRun = [0,0]
  var longestRun = [0,0]
  for(var i = 1; i < string.length; i++) {
    // if lastVal = currentVal
    if(string[i-1] === string[i]) {
      currentRun[1] = i
      if((currentRun[1]-currentRun[0]) > (longestRun[1]-longestRun[0])) {
        longestRun = currentRun
      }
    } else {
      currentRun = [i,i]
    }
  }
  return longestRun
}
