var Tree = function (value) {
  this.value = value;
  this.children = [];
}

// Find how many nodes are in a tree using breadth first traversal
Tree.prototype.breadthFirst = function (Node) {
  var queue = [];
  var count = 0;
  function recurse (node) {
    count++;
    for (var i = 0; i < node.children.length; i++) {
      queue.push(node.children[i]);
    }
    while (queue) {
      recurse(queue.unshift());
    }
  }
  recurse(Node);
  return count;
}
