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
  remove(val) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (val < currentNode.val) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (val > currentNode.val) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.val === val) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current val, make current left child a child of parent
            if (currentNode.val < parentNode.val) {
              parentNode.left = currentNode.left;

              //if parent < current val, make left child a right child of parent
            } else if (currentNode.val > parentNode.val) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.val < parentNode.val) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.val > parentNode.val) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.val < parentNode.val) {
              parentNode.left = leftmost;
            } else if (currentNode.val > parentNode.val) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
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

const btree = new BTree(50);
btree.insert(40);
btree.insert(60);
btree.insert(30);
btree.insert(45);
btree.insert(70);
btree.insert(1);
btree.insert(65);
console.log(JSON.stringify(btree));
btree.remove(70);

console.log(JSON.stringify(btree));
