// input: "Always be committing to this repo"
// output: 10

function longCountString (string) {
  var longest = 0;
  var splitString = string.split(' ');
  splitString.forEach(function (el) {
    if(longest < el.length) {
      longest = el.length;
    }
  })
  return longest;
}

longCountString("Always be committing to this repo");
