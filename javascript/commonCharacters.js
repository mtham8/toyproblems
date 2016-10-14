/*
Write a function that accepts two strings as arguments, and returns only the characters
that are common to both strings.

Your function should return the common characters in the same order that they appear in
the first argument. Do not return duplicate characters and ignore whitespace in your returned string.

Example: commonCharacters('acexiv ou', 'aegiho buu')

Returns: 'aeiou'
*/

const commonCharacters = (string1, string2) => string1.split('').filter((val, pos) => ~string2.indexOf(val) && val !== ' ' && string1.indexOf(val) === pos).join('');
