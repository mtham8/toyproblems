// Number to English
// Write a function numberToEnglish, it should take a number and return the number as a string using English words.
// Helpers:
// var numbersToWords = {
//   0: 'zero',
//   1: 'one',
//   2: 'two',
//   3: 'three',
//   4: 'four',
//   5: 'five',
//   6: 'six',
//   7: 'seven',
//   8: 'eight',
//   9: 'nine',
//   10: 'ten',
//   11: 'eleven',
//   12: 'twelve',
//   13: 'thirteen',
//   14: 'fourteen',
//   15: 'fifteen',
//   16: 'sixteen',
//   17: 'seventeen',
//   18: 'eighteen',
//   19: 'nineteen',
//   20: 'twenty',
//   30: 'thirty',
//   40: 'forty',
//   50: 'fifty',
//   60: 'sixty',
//   70: 'seventy',
//   80: 'eighty',
//   90: 'ninety',
// };

// var numbersToPlace = {
//   10: 'ten',
//   100: 'hundred',
//   1000: 'thousand',
//   1000000: 'million',
//   1000000000: 'billion',
//   1000000000000: 'trillion',
//   1000000000000000: 'quadrillion',
//   1000000000000000000: 'quintillion',
// };

function numberToEnglish (number) {
  var output, numInPlace, numLeft, restOfString, place;
  // if number is less than 20 or divisible by 10
  if(numbersToWords[number]) {
    output = numbersToWords[number];
  }
  else if (number < 100) {
    numInPlace = Math.floor(number/10);
    numLeft = number % 10;
    // tens place and single digit, with hyphen
    output = numbersToWords[numInPlace*10] + '-' + numberToEnglish(numLeft);
  } else {
    // combine words and place if number is greater than 100
    if (number < 1000) {
      place = 100;
    } else {
      place = 1000;
      while (place * 1000 <= number) {
        place *= 1000;
      }
    }
    numInPlace = Math.floor(number/place);
    numLeft = number % place;
    output = numberToEnglish(numInPlace) + ' ' + numbersToPlace[place];
    restOfString = numberToEnglish(numLeft);
    if (restOfString !== 'zero') {
      output += ' ' + restOfString;
    }
  }
  return output;
}
