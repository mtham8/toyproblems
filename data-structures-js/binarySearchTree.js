// Determine if a binary tree is valid. For example, if the root node has the value 4,
// every node on the right half of the tree must be above 4. If root.right.left.value < 4,
// you have an invalid tree.

// Binary Search Tree
// - parent node has two nodes
// - each node can be its own tree

var BinarySearchTree = function (value) {
  this.value = value;
  // left node
  this.left = null;
  // right node
  this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
  // if there is no root node
  if (!this.value) {
    // set the value as the value of the root node
    this.value = BinarySearchTree(value);
  }
  // check incoming value on this.value
  // if the value is greater than the current node's value
  if (value > this.value) {
    // if there is no right node
    if (!this.right) {
      // set the right with the new value
      this.right = BinarySearchTree(value);
    } else {
      // else, this.right exists, thus, you can call insert on this.right
      this.right.insert(value);
    }
  } else if (value < this.value) {
    // if there is no left
    if (!this.left) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    return 'This tree already contains this value';
  }
}

BinarySearchTree.prototype.contains = function (target) {
  if (target === this.value) {
    return true;
  }
  // if the target is less than the value
  else if (target < this.value) {
    // if the left node doesn't exist, return false
    if (!this.left) {
      return false;
    }
    // else, recurse and call the function again
    // you have to return so that it returns the result from that callstack
    // as the final result
    return this.left.contains(target);
  }
  else if (target > this.value) {
    if (!this.right) {
      return false;
    }
    return this.right.contains(target);
  }
}

// INPUT: BinarySearchTree : (4) --> (2)(6) --> (1, 3)(5, 7)
// OUTPUT: the tree in ascending order (1, 3, 4, 5, 6, 7, 8)
BinarySearchTree.prototype.logTree = function (tree) {
  // if the tree.left exists, pass in the node and call the function again to go down the tree
  if (tree.left) {
    tree.logTree(this.left);
  }

  console.log(tree.value);

  if (tree.right) {
    tree.logTree(this.right);
  }
}




