// input: index
// output: value of the node

linkedList.prototype.removeNode = function (index) {
  var previous = this.head;
  var current = this.head;
  // set a counter variable
  var counter = 0;
  // create a while loop iterate through the nodes
  while (counter < index) {
    // set the previous to equal the current
    previous = current;
    // set the current to equal current.next
    current = current.next;
    // increase the counter
    counter++;
  }
  // set a variable to hold the value of current
  var value = current.value
  // skip over the current, set previous.next to equal current.next (previous.next.next)
  previous.next = current.next
  // return the value
  return value
}
