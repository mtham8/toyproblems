// flatten deeply nested arrays recursively

// using map
const flatten = arr => Array.isArray(arr) ? [].concat(...arr.map(flatten)) : arr;

// using reduce
const flatten = arr => arr.reduce((prev, curr) => Array.isArray(curr) ? prev.concat(flatten(curr)) : prev.concat(curr), []);