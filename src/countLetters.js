// Given a string 'AABBBCCCDDAAA', return the output = '2A3B3C2D3A'

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
