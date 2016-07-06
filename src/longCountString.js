// input: "Always be committing to this repo"
// output: 10

function longCountString (string) {
  var longest = 0;
  var splitString = string.split(' ');
  console.log('split string', splitString);
  splitString.forEach(function (el) {
    if(longest < el.length) {
      console.log('element length', el.length)
      longest = el.length;
    }
  })
  return longest;
}

longCountString("Always be committing to this repo");
