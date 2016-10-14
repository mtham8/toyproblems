/*
even Integer Sum using .reduce()

input: [1,2,3,4]
output: 6
*/

const evenInteger = arr => arr.filter(item => item % 2 === 0).reduce((a,b) => a += b, 0)