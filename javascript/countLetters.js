// Given a string 'AABBBCCCDDAAA', return the output = '2A3B3C2D3A'

// plain English:
// 1. create a counter variable
// 2. create a results variable
// 3. iterate over the string
// 3a. if the current letter is the same as the next letter
// 3a. increment the counter
// 3b. else, add the count of the current letter and the letter to the results string
// 3b. reset the counter
// 4. return the results

const countLetters = string => {
  let counter = 1;
  let results = '';
  for (let i = 0; i < string.length; i++) {
    if(string[i] === string[i+1]) {
      counter++;
    } else {
      results += counter + string[i];
      counter = 1;
    }
  }
  return results;
}

// countLetters('AABBBCCCDDAAA');
