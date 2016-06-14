// Function Bind
// Implement the function ‘bind’, which accepts a function and a context as arguments. The context argument should override an existing context that the function is defined in. Your bind function should return the passed in function.

// For example, if we have the following object:

// var alice = {
//   name: 'alice',
//   shout: function () {
//     alert('here comes' + ' ' + this.name);
//   }
// };

// alice.shout() //=> 'here comes alice'
// If you use your bind function with the context { name: 'bob' }, as is shown here:

// boundShout = bind(alice.shout, { name: 'bob' })
// Then calling boundShout() will alert 'here comes bob'

// The following example should also work in the following way once your function is implemented:

// var func = function(a, b){ return a + b };
// var boundFunc = bind(func, null, 'diet');

// boundFunc('coke'); //=> 'dietcoke'
// Once you have finished that, implement the function ‘bind’ as a method of the Function.prototype object. This will be similar to your first solution, but should be able to be used in the following way:

// var alice = {
//   name: 'alice',
//   shout: function () {
//     alert(this.name);
//   }
// };

// var boundShout = alice.shout.bind(alice);
// boundShout(); // alerts 'alice'

// boundShout = alice.shout.bind({ name: 'bob' });
// boundShout(); // alerts 'bob'

var bind = function(func, context){
  // convert arguments into an array after index 2, function and context
  var args = Array.prototype.slice.call(arguments, 2);

  return function(){
    // pass in arguments, function, and context
    var final = Array.prototype.slice.call(arguments)
    // concat the arguments being passed in
    var finalized = args.concat(final)
    // bind the function to the context and arguments
    return func.apply(context, finalized)
  };
};

Function.prototype.bind = function(context) {
  // convert arguments into an array after index 1, context
  var args = Array.prototype.slice.call(arguments,1);
  // create a variable to hold this context
  var that = this;

  return function(){
    // pass in arguments, funtion, context
    var final = Array.prototype.slice.call(arguments)
    // concat the arguments being passed in
    var finalized = args.concat(final)
    // bind the context and concatted arguments to this context
    return that.apply(context, finalized)
  }
};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
