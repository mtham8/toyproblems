// Hash Table
// Finish this implementation of a Hash Table. It should have the methods insert(), retrieve(), and remove().
// Your hash table need not resize itself, but shall handle collisions.

  var makeHashTable = function(){
    var table = {};
    var storage = [];
    var storageLimit = 1000;

    table.insert = function(key, value){
      var index = getIndexBelowMaxForKey(key, storageLimit);
      storage[index] = storage[index] || [];
      for (var i = 0; i < storage[index].length; i++) {
        var pair  = storage[index][i];
        if (pair[0] === key) {
          pair[1] = value;
        }
      }
      storage[index].push([key, value]);
    };

    table.retrieve = function(key){
      var index = getIndexBelowMaxForKey(key, storageLimit);
      storage[index] = storage[index] || [];
      for (var i = 0; i < storage[index].length; i++) {
        var pair = storage[index][i];
        if(pair[0] === key) {
          return pair[1];
        }
      }
      return undefined;
    };

    table.remove = function(key){
      var index = getIndexBelowMaxForKey(key, storageLimit);
      storage[index] = storage[index] || [];
      for (var i = 0; i < storage[index].length; i++) {
        var pair = storage[index][i];
        if(pair[0] === key) {
          storage[index].splice(i, 1)
        }
      }
    }
    return table;
  };

 var getIndexBelowMaxForKey = function(str, max){
   var hash = 0;
   for (var i = 0; i < str.length; i++) {
     hash = (hash<<5) + hash + str.charCodeAt(i);
     hash = hash & hash; // Convert to 32bit integer
     hash = Math.abs(hash);
   }
   return hash % max;
 };
