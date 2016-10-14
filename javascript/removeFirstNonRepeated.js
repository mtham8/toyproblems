/*
  functionFirstNonRepeatedLEtter - it takes in any string as an argument and it returns the first letter
  in the string that has not been repeated

  "gggghhhhffffffssssa" would return a
  "kkkjjjhhhhgllmn" will return g
*/

const firstNoRepeat = (string, obj = {}) => string.split('').map(item => {
  obj[item] = obj[item]+1 || 1;
  return item
  }).filter(item => obj[item] === 1).splice(0, 1).join('')
