class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
exports.Node = Node;

class LinkedList {
  constructor(val) {
    this.head = new Node(val);
    this.tail = this.head;
    this.length = 1;
  }
  toArray() {
    let res = [];
    let pointer = this.head;
    while (pointer) {
      res.push(pointer.val);
      pointer = pointer.next;
    }
    return res;
  } //O(n)
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      return (this.head = this.tail = newNode);
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  } //O(1)
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      return (this.head = this.tail = newNode);
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  } //O(1)
  pop() {
    if (this.length === 0) return;
    else if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.tail = this.traverseToIndex(this.length - 2);
      this.tail.next = null;
    }
    this.length--;
  } //O(n)
  shift() {
    if (this.length === 0) return;
    else {
      this.head = this.head.next;
      this.length--;
    }
  } //O(1)
  insert(index, val) {
    if (index <= 0) return this.unshift(val);
    if (index >= this.length) return this.push(val);
    let newNode = new Node(val);
    let pointer = this.traverseToIndex(index - 1);
    const temp = pointer.next;
    pointer.next = newNode;
    newNode.next = temp;
    this.length++;
  } //O(n)
  remove(index) {
    if (index === 0) return this.shift();
    if (index >= this.length - 1) return this.pop();
    let pointer = this.traverseToIndex(index - 1);
    pointer.next = pointer.next.next;
    this.length--;
  } //O(n)
  slice(startIndex, endIndex) {
    if (startIndex === endIndex) return;
    if (startIndex < 0) startIndex = 0;
    if (endIndex > this.length - 1) endIndex = this.length - 1;
    if (startIndex > endIndex)
      throw new Error("startIndex cannot be greater than endIndex");
    let startPointer = this.traverseToIndex(startIndex - 1);
    let endPointer = this.traverseToIndex(endIndex);
    startPointer.next = endPointer;
  } //O(n)
  traverseToIndex(index) {
    let pointer = this.head;
    if (index >= this.length) return this.tail;
    let counter = 0;
    while (counter !== index) {
      pointer = pointer.next;
      counter++;
    }
    return pointer;
  } //O(n)
}

exports.LinkedList = LinkedList;

const myLinkedList = new LinkedList(5);
myLinkedList.push(10);
myLinkedList.push(15);
myLinkedList.push(20);
console.log(myLinkedList.toArray());
myLinkedList.pop();
myLinkedList.shift();
console.log(myLinkedList.toArray());
myLinkedList.unshift(5);
myLinkedList.unshift(0);
console.log(myLinkedList.toArray());
myLinkedList.remove(2);
myLinkedList.insert(1, 3);
// myLinkedList.slice(1, 3);
console.log(myLinkedList.toArray());
