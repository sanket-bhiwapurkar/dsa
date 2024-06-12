class BNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BTree {
  constructor(val) {
    this.root = new BNode(val);
  }
  print() {}
  insert(val) {
    const newNode = new BNode(val);
    if (!this.root) return (this.root = newNode);
    let pointer = this.root;
    while (true) {
      if (val < pointer.val) {
        if (!pointer.left) {
          pointer.left = newNode;
          return;
        }
        pointer = pointer.left;
      } else {
        if (!pointer.right) {
          pointer.right = newNode;
          return;
        }
        pointer = pointer.right;
      }
    }
  }
  remove(val, root = this.root, parentPointer = null) {
    if (!root) return -1;
    let pointer = root;
    while (pointer) {
      if (val < pointer.val) {
        parentPointer = pointer;
        pointer = pointer.left;
      } else if (val > pointer.val) {
        parentPointer = pointer;
        pointer = pointer.right;
      } else if (val === pointer.val) {
        if (!pointer.left && !pointer.right) {
          val < parentPointer.val
            ? (parentPointer.left = null)
            : (parentPointer.right = null);
          return;
        }
        if (!pointer.left && pointer.right) {
          pointer.right.val < parentPointer.val
            ? (parentPointer.left = pointer.right)
            : (parentPointer.right = pointer.right);
          return;
        }
        if (pointer.left && !pointer.right) {
          pointer.left.val < parentPointer.val
            ? (parentPointer.left = pointer.left)
            : (parentPointer.right = pointer.left);
          return;
        }
        let leftmost = pointer.right;
        while (leftmost && leftmost.left) {
          leftmost = leftmost.left;
        }
        pointer.val = leftmost.val;
        return this.remove(leftmost.val, pointer.right, pointer);
      }
    }
    return -1;
  }

  lookup(val) {
    if (!this.root) return -1;
    let pointer = this.root;
    while (pointer) {
      if (val === pointer.val) return pointer;
      if (val < pointer.val) pointer = pointer.left;
      else pointer = pointer.right;
    }
    return -1;
  }
  traverseToNode(val) {}
}

const btree = new BTree(8);
btree.insert(4);
btree.insert(12);
btree.insert(2);
btree.insert(6);
btree.insert(10);
btree.insert(14);
btree.insert(1);
btree.insert(3);
btree.insert(5);
btree.insert(7);
btree.insert(9);
btree.insert(11);
btree.insert(13);
btree.insert(15);
btree.remove(4);
console.log(JSON.stringify(btree));
