// Is Subset Of
// Make an array method that can return whether or not a context array is a subset of an input array.
// To simplify the problem, you can assume that both arrays will contain only strings.

Array.prototype.isSubsetOf = function(array) {
  // set result to true
  var result = true;
  // loop through this
  for (var i = 0; i < this.length; i ++) {
      // check if array[i] is equal to this
    if(array.indexOf(this[i]) === -1) {
      // if not found, result is false
      result = false;
    }
  }
  // return result
  return result;
};
