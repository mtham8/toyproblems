// Tree
// Someone wrote a tree implementation, but they forgot to finish writing the definitions for addChild and contains.

var treeMaker = function(value){
  var newTree = Object.create(treeMaker.methods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};
treeMaker.methods = {};

treeMaker.methods.addChild = function(value){
  var node = treeMaker(value);
  this.children.push(node)
}
treeMaker.methods.contains = function(value){
  var result = false
  function recurse (tree) {
    if(tree.value === value) {
      result = true;
      return result;
    } else {
      for (var i = 0; i < tree.children.length; i++){
        recurse(tree.children[i])
      }
    }
  }
    recurse(this);
    return result;
}
