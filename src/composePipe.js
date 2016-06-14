// Compose, Pipe
// Implement the functions compose and pipe.

// Compose
// Compose should return a function that is the composition of a list of functions of arbitrary length. Each function is called on the return value of the function that follows.

// You can think of compose as moving right to left through its arguments.

// Example
// var greet = function(name){ return 'hi: ' + name;}
// var exclaim = function(statement) { return statement.toUpperCase() + '!';}

// var welcome = compose(greet, exclaim);
// welcome('phillip'); //=> 'hi: PHILLIP!'
// Pipe:
// Pipe composes a series of functions and returns the resulting function. Each function is called on the return value of the preceding function.

// You can think of pipe as moving left to right through its arguments.

// Example
// var add2 = function(number){ return number + 2; }
// var multiplyBy3 = function(number){ return number * 3; }

// pipe(add2, multiplyBy3)(5) //=> 21
// pipe(add2, multiplyBy3, multiplyBy3)(5) //=> 63

var compose = function(){
  // convert arguments into an array of arguments
  var args = [].slice.call(arguments)
  // return function, pass in arguments
  return function (val) {
    for (var i = args.length-1; i >= 0; i--) {
      val = args[i](val)
    }
    return val
  }
  // refactor: use reduceRight
};

var pipe = function(){
  // convert arguments into an array of arguments
  var args = [].slice.call(arguments)
  return function (val) {
    return args.reduce(function (accum, curr) {
      return curr(accum)
    }, val)
  }
};
