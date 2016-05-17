// Linked List
// Implement a linked-list

var LinkedList = function (initialValue) {
  if(initialValue) {
  this.head = this.makeNode(initialValue);
  this.tail = this.head;
  } else {
    this.head = null;
    this.tail = null;
  }
};

LinkedList.prototype.makeNode = function (value) {
  var node = {
    value: value,
    next: null
  }
  return node;
}

LinkedList.prototype.addToTail = function (value) {
  var newNode = this.makeNode(value);
  if(this.head === null) {
    this.head = newNode;
    this.tail = this.head;
  } else {
    this.tail.next = newNode;
    this.tail = this.tail.next;
  }
};

LinkedList.prototype.removeHead = function () {
  var oldHead = this.head;
  if(this.head.next === null) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next;
  }
  return oldHead.value;
};

LinkedList.prototype.contains = function (value) {
  while(this.head !== null) {
    if(this.head.value === value) {
      return true;
    } else {
      this.head = this.head.next
    }
  }
  return false;
};
