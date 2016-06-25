// Input Format

// The first line contains an integer, , denoting the size of the array.
// The second line contains  space-separated integers representing the array's elements.

// Output Format

// Print the sum of the array's elements as a single integer.

// Sample Input
// 6
// 1 2 3 4 10 11

// Sample Output
// 31

const simpleSum = input => input.reduce((prev, curr) => prev + curr, 0);
