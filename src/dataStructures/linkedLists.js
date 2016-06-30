// Linked List

var node = function (value) {
  this.value = value;
  this.next = null;
}

var linkedList = function () {
  this.head = null;
  this.tail = null;
}

// addToTail with every edge case in mind
linkedList.prototype.addToTail = function (value) {
  // assign a variable to store the added node
  var newNode = new Node(value)
  // if the head is null (at the beginning)
  if(this.head === null) {
    // set the head and the tail with the new value (single node)
    this.head = newNode;
    this.tail = newNode;
  }
  // else, if there is a head and tail
    // assign tail.next as the new node
  this.tail.next = newNode;
    // assign the tail as tail.next
  this.tail = this.tail.next;
}

linkedList.prototype.removeNode = function (value) {
  // if the passed in value === any value in the linked list
    // remove that node
  if (!this.head) {
    return null;
  }
  while (this.head !== null && this.head.value === value) {
    this.head = this.head.next
  }
  var currentNode = this.head;
  while (currentNode) {
    // check to see if the next node exists && the nextNode's value === value
    while (currentNode.next && currentNode.next.value === value) {
      // skip over the next node and set the current as the nextNode's node
      currentNode.next = currentNode.next.next;
    }
    // set the current node to the next node
    currentNode = currentNode.next
  }
}

linkedList.prototype.deleteNode = function (node) {
  node.value = node.next.value;
  node.next = node.next.next;
}

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

// input:
// LL1 = [1, 2, 2, 3, 4]
// LL2 = [1, 4, 5, 6]
// output: [1, 1, 2, 2, 3, 4, 4, 5, 6]
function combineLL () {
  // create an output linked list
  var output = []
  // create a point at LL1 head & LL2 head
  var linked1 = linked1.head;
  var linked2 = linked2.head;
  // while (LL1P || LL2P)
    // compare LL1P & LL2P
    // if LL1P !== null && (LL2P === null || LL1P.value < LL2P.value)
      // output.addToTail(LL1P.value)
      // LL1P = LL1P.next
    // else
      // output.addToTail(LL2P.value)
      // LL2P = LL2P.next
  // return output
}


// REVERSE LINKED LIST
// Input : Head of following linked list
//        1->2->3->4->NULL
// Output : Linked list should be changed to,
//        4->3->2->1->NULL
linkedList.prototype.reverse = function (head) {
  var current = head;
  var previous = null;
  var holder = null;
  if (current === null || current.next === null) {
    return current;
  }
  while (current) {
    holder = current.next;
    current.next = previous;
    previous = current;
    current = holder;
  }
  current = previous;
  return current;
}


// GIVEN A LINKED LIST, RETURN THE MIDDLE NODE - IF EVEN, ROUND DOWN

