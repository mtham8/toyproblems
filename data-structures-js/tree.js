const Tree = function (value) {
  this.value = value;
  this.children = [];
}

// Find how many nodes are in a tree using breadth first traversal and log them
const BSF = () => {
  // instantiate queue
  let queue = new Queue();
  // enqueue the root node
  queue.enqueue(root);
  // create a storage array
  let log = [];
  let currentNode;
  // while loop
  while(currentNode = queue.dequeue()){
    // push the current node into the storage
    log.push(currentNode);
    // for each child in children
    for(let i = 0; i < currentNode.childen.length; i++){
      // enqueue the child
      queue.enqueue(tree.childen[i])
    }
  }
  // return the storage
  return log;
}

// Find how many nodes are in a tree using depth first traversal and log them
const DFS = () => {
  // create a storage array
  let log = [];
  // recursive fn
  const deeper = node => {
    // push current node into storage
    log.push(node);
    // for each child in children
    for(let i = 0; i < node.children.length; i++){
      // recurse through childs children
      deeper(node.children[i]);
    }
  }
  deeper(root);
  return log;
}


