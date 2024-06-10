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
  pop() {
    super.pop();
  }
  unshift(val) {
    super.unshift(val);
    this.head.next.prev = this.head;
    this.length++;
  }
  shift() {
    super.shift();
  }
  insert(index, val) {
    super.insert();
  }
  remove(index, val) {}
  slice(startIndex, endIndex) {}
  traverseToIndex() {
    super.traverseToIndex();
  }
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
myDoublyLinkedList.unshift(0);
console.log(myDoublyLinkedList.toArray());
console.log(myDoublyLinkedList.reverseArray());
