/**
Given an array of strings, return all groups of strings that are anagrams.
Note: All inputs will be in lower-case.

input: ['abc', 'albert', 'cat', 'gate', 'cab', 'grow', 'act']
output: [ 'abc', 'cab', 'cat', 'act' ]
*/

const anagrams = (string) => {
  // create a storage
  var map = {}, sortArr, sortStr, newArr, currStr, result = [], len = string.length;
  for(let i = 0; i < len; i++){
    // split and sort the current string
    currStr = string[i];
    sortArr = currStr.split('');
    sortStr = sortArr.sort().join('');
    // check if sortStr is already in storage
    if(map.hasOwnProperty(sortStr)){
      // push the string to the key
      map[sortStr].push(currStr);
    } else {
      // if not in storage, create an array and push current string
      newArr= [];
      newArr.push(currStr);
      map[sortStr] = newArr;
    }
  }
  for(let key in map){
    // if the key has more than one value, there are anagrams
    if(map[key].length > 1){
      result = result.concat(map[key]);
    }
  }
  return result;
}