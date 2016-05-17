// Non-repeated Character
// Given an arbitrary input string, return the first non-repeating character. For strings with all repeats, return 'sorry'.

// INPUT: "ABCDBIRDUP"
// OUTPUT: "A"

// INPUT: "XXXXXXX"
// OUTPUT: "sorry"

// INPUT: "BABA"
// OUTPUT: "sorry"

function firstNonRepeatedCharacter (string) {
  var obj = {};
  for (var i = 0; i < string.length; i++){
    obj[string.charAt(i)] = obj[string.charAt(i)] + 1 || 1;
  }
  for (var key in obj){
    if (obj[key] === 1){
      return key;
    }
  }
  for (var key in obj){
    if(obj[key] >= 2){
      return "sorry";
    }
  }
}
