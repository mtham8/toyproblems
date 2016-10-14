// Character Frequency
// Write a function that takes as its input a string and returns an array of arrays as shown below sorted in descending order by
// frequency and then by ascending order by character.

// INPUT: "aaabbc"

// OUTPUT: [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]

// INPUT: "mississippi"

// OUTPUT: [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]

// function characterFrequency (string) {
//   if (string.length < 1) {
//     return [];
//   }
//   var storage = {};
//   for (var i = 0; i < string.length; i++) {
//     if (storage[string[i]] === undefined) {
//       storage[string[i]] = 0;
//     }
//     storage[string[i]]++;
//   }
//   var results = [];
//   for (var key in storage) {
//     if (storage[key] > results[key]) {
//       results.push([key, storage[key]])
//     } else {
//       results.unshift([key, storage[key]])
//     }
//   }

//   results.sort(function(a, b) {
//     if (a[1] > b[1]) return -1;
//     else if (a[1] < b[1]) return 1;
//     else if (a[0] < b[0]) return -1;
//     else if (a[0] > b[0]) return 1;
//   });

//   return results;
// }

function characterFrequency (string) {
  var obj = {};
  var sortArr = [];

  // sort the string by frequency
  for(var i =0; i < string.length; i++){
    obj[string.charAt(i)] = obj[string.charAt(i)] + 1 || 1
  }

  for (var key in obj){
    sortArr.push([key, obj[key]]);
  }

  // sort by alphabet
  sortArr.sort(function(a,b){
    if(a[1] !== b[1]){
      return b[1] - a[1];
    }
    return a[0].charCodeAt() - b[0].charCodeAt()
  });

  return sortArr;
}

