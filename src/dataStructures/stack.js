class Stack {
  constructor () {
    this.storage = {};
    this.counter = 0;
  }
}

Stack.prototype.push = value => {
  this.storage[this.counter] = value;
  this.counter++;
}

Stack.prototype.pop = () => {
  if(this.size > 0) {
    this.counter--;
    var copy = this.storage[this.counter];
    delete this.storage[this.counter];
    return copy;
  }
}

Stack.prototype.size = () => {
  return this.counter;
}
