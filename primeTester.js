// Prime Tester
// A prime number is an integer greater than 1 that has no divisors other than itself and 1.
// Write a function that accepts a number and returns true if it’s a prime number, false if it’s not.
// The grader is looking at the efficiency of your solution (number of operations) as well as correctness!

// Parameters:

// n (required) - a number.

// INPUT: 2
// OUTPUT: true

// INPUT: 1
// OUTPUT: false

function primeTester(n) {

  if(n === 1){
    return false;
  }
  if(n === 2){
    return true;
  }
  var q = Math.round(Math.sqrt(n));

  for (var i= 2; i <= q; i++){
    if( n % i === 0){
      return false;
    }
  }
  return true;
}
