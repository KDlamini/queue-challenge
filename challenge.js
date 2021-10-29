// Start with your code from LinkedList challenge.

class Queue {
  constructor() {
    this.collection = [];
  }

  add(number) {
    // your code here
    this.collection.push(number);
  }
  
  remove() {
    // your code here
    let result = 0;

    if (this.collection.length === 0) {
      result = -1;
    } else {
      result = this.collection.shift();
    }

    return result;
  }
}

const queue = new Queue()

queue.add(3)
queue.add(5)
console.log(queue.remove())
// => 3

queue.add(2)
queue.add(7)
console.log(queue.remove())
// => 5

console.log(queue.remove())
// => 2

console.log(queue.remove())
// => 7

console.log(queue.remove())
// => -1

module.exports = Queue
