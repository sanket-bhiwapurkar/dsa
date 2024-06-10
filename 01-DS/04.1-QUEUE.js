const { Node } = require("./05.1-LINKEDLIST.js");

class Queue {
  constructor(val) {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  toArray() {
    let res = [];
    let pointer = this.first;
    while (pointer) {
      res.push(pointer.val);
      pointer = pointer.next;
    }
    return res;
  }
  peek() {
    if (this.length === 0) return null;
    return this.first.val;
  } //O(1)
  enqueue(val) {
    const newNode = new Node(val);
    if (this.length === 0) this.first = this.last = newNode;
    else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  } //O(1)
  dequeue() {
    this.first = this.first.next;
    this.length--;
  } //O(1)
  isEmpty() {
    return this.first === null && this.last === null;
  } //O(1)
}

const myQueue = new Queue();
console.log(myQueue.peek());
console.log(myQueue.isEmpty());
myQueue.enqueue("Aasuma");
myQueue.enqueue("Boruto");
myQueue.enqueue("Cho");
console.log(myQueue.toArray());
myQueue.dequeue();
console.log(myQueue.toArray());
myQueue.dequeue();
console.log(myQueue.toArray());
