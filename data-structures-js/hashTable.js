var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];
  for(var j = 0; j < bucket.length; j++){
    var pair = bucket[j];
    if(pair[0] === k){
      pair[1] = v;
      return;
      }
    }
    bucket.push([k,v]);
    // i is the index where bucket would be placed
    // set determines the index where the bucket would be placed
    this._storage.set(i, bucket);
    this.size++;
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];
  for (var j = 0; j < bucket.length; j++){
    var pair = bucket[j];
    if(pair[0] === k){
      return pair[1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];
  for (var j = 0; j < bucket.length; j++){
    var pair = bucket[j];
    if(pair[0] === k){
      bucket.splice(j, 1);
      this.size--;
    }
  }
};


