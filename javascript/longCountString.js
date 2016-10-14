// input: "Always be committing to this repo"
// output: 10

// function longCountString (string) {
//   var longest = 0;
//   var splitString = string.split(' ');
//   splitString.forEach(function (el) {
//     if(longest < el.length) {
//       longest = el.length;
//     }
//   })
//   return longest;
// }

// Refactored
const longCountString = string => string.split(' ').reduce((a, b) => a > b.length ? a : b.length, 0)
