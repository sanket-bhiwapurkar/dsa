const { Node, LinkedList } = require("./05.1-LINKEDLIST.js");
const util = require("util");

class DoublyNode extends Node {
  constructor(val) {
    super(val);
    this.prev = null;
  }
}

class DoublyLinkedList extends LinkedList {
  constructor(val) {
    super(val);
  }
  push(val) {
    const newNode = new DoublyNode(val);
    if (!this.head) {
      return (this.head = this.tail = newNode);
    }
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
  }
  unshift(val) {
    super.unshift(val);
    this.head.next.prev = this.head;
  }
  pop() {
    if (this.length === 0) return;
    else if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.prev
      this.tail.next = null;
    }
    this.length--
  }
  shift() {
    super.shift();
    this.head.prev = null

  }
  insert(index, val) {
    if (index <= 0) return this.unshift(val)
    if (index >= this.length) return this.push(val)
    const newNode = new Node(val)
    let pointer = this.traverseToIndex(index)
    const temp = pointer.prev
    newNode.next = pointer
    pointer.prev = newNode
    temp.next = newNode
    newNode.prev = temp
    this.length++
  }
  remove(index) {
    if (index === 0) return this.unshift();
    if (index >= this.length - 1) return this.pop();
    let pointer = this.traverseToIndex(index)
    pointer.prev.next = pointer.next
    pointer.next.prev = pointer.prev
    this.length--
  }
  slice(startIndex, endIndex) { }

  reverseArray() {
    let res = [];
    let pointer = this.tail;
    while (pointer) {
      res.push(pointer.val);
      pointer = pointer.prev;
    }
    return res;
  }
}

const myDoublyLinkedList = new DoublyLinkedList(5);

myDoublyLinkedList.push(10);
myDoublyLinkedList.push(15);
myDoublyLinkedList.push(20)
console.log(myDoublyLinkedList.toArray(), myDoublyLinkedList.length);
console.log(myDoublyLinkedList.reverseArray(), myDoublyLinkedList.length);
myDoublyLinkedList.shift()
console.log(myDoublyLinkedList.toArray(), myDoublyLinkedList.length);
console.log(myDoublyLinkedList.reverseArray(), myDoublyLinkedList.length);
myDoublyLinkedList.pop()
myDoublyLinkedList.shift()
console.log(myDoublyLinkedList.toArray(), myDoublyLinkedList.length);
console.log(myDoublyLinkedList.reverseArray(), myDoublyLinkedList.length);
myDoublyLinkedList.unshift(10)
myDoublyLinkedList.unshift(5)
console.log(myDoublyLinkedList.toArray(), myDoublyLinkedList.length);
console.log(myDoublyLinkedList.reverseArray(), myDoublyLinkedList.length);
myDoublyLinkedList.remove(2)
console.log(myDoublyLinkedList.toArray(), myDoublyLinkedList.length);
console.log(myDoublyLinkedList.reverseArray(), myDoublyLinkedList.length);
myDoublyLinkedList.insert(2, 15)
console.log(myDoublyLinkedList.toArray(), myDoublyLinkedList.length);
console.log(myDoublyLinkedList.reverseArray(), myDoublyLinkedList.length);
myDoublyLinkedList.insert(2, 13)
console.log(myDoublyLinkedList.toArray(), myDoublyLinkedList.length);
console.log(myDoublyLinkedList.reverseArray(), myDoublyLinkedList.length);

