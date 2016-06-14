// Async Map
// NOTE: This challenge requires some kind of asynchronous test implementation, and these tests are not yet functional.

// Implement the function asyncMap:

// asyncMap has two parameters, an array of asynchronous functions (tasks) and a callback.
// Each of the tasks takes a separate callback and invokes that callback when complete.

// The callback passed to asyncMap is then performed on the results of the callbacks of the tasks.

// The order of these results should be the same as the order of the tasks.
// It is important to note that this is not the order in which the tasks return,
// but the order in which they are passed to asyncMap.

// Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
// on the results array.

// Example:

// asyncMap([
//   function(cb){
//     setTimeout(function(){
//       cb('one');
//     }, 200);
//   },
//   function(cb){
//     setTimeout(function(){
//       cb('two');
//     }, 100);
//   }
//  ],
//   function(results){
//     // the results array will equal ['one','two'] even though
//     // the second function had a shorter timeout.
//     console.log(results); // ['one', 'two']
//  });

// var asyncMap = function(tasks, callback){
//   var results = [];
//   var count = 0;
//   for ( var i = 0; i < tasks.length; i++ ) {
//     (function(index) {
//       tasks[index](function(val) {
//         results[index] = val;
//         count++;
//         if (count === tasks.length) {
//             callback(results);
//         }
//       });
//     })(i)
//   }
// };

var asyncMap = function(tasks, callback){
  var counter = 0
  var results = []
  tasks.forEach(function (task, i) {
    // for each task, apply the callback to the task, pass in i to hold the order
      // set the results[i] to equal result
      // increment the counter
    task(function (result) {
      results[i] = result
      counter++
      if(counter === tasks.length) {
        callback(results)
      }
    })
  })
};
