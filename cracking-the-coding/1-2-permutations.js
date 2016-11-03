/*
Check Permutation: Given two strings,write a method to decide if one is a permutation of the
other.
*/

const permutate = (str1, str2) => {
  let strA = str1.split('').sort();
  let strB = str2.split('').sort();
  if(strA.length !== strB.length) return false;
  for(let i = 0; i < strA.length; i++){
    if(strA[i] !== strB[i]) return false;
  }
  return true;
}