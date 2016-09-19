// flatten deeply nested arrays recursively

const flatten = arr => Array.isArray(arr) ? [].concat(...arr.map(flatten)) : arr;
