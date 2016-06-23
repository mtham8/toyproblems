class Queue {
  constructor () {
    this.storage = {};
    this.counter = 0;
    this.end = 0;
  }
}

Queue.prototype.enqueue = value => {
  this.storage[this.counter] = value;
  this.counter++;
}

Queue.prototype.dequeue = () => {
  if(this.size() > 0) {
    var copy = this.storage[this.end];
    delete this.storage[this.end];
    this.end++;
    return copy;
  }
}

Queue.prototype.size = () {
  return this.counter-this.end;
}
