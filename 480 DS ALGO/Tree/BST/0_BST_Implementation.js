/* 

        9
      /   \
     4     20         
   / \     / \
  1   6   15  170


*/

class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let temp = this.root;
      while (temp.left !== null || temp.right !== null) {
        if (temp.data > value) {
          if (temp.left === null) {
            break;
          }
          temp = temp.left;
        } else {
          if (temp.right === null) {
            break;
          }
          temp = temp.right;
        }
      }
      if (temp.data > value) {
        temp.left = newNode;
      } else {
        temp.right = newNode;
      }
      return this;
    }
  }

  _findNode(value) {
    let temp = this.root;
    let parentPointer = this.root;

    while (temp.data !== value) {
      if (!temp.left && !temp.right) {
        console.log("returning..", temp.data);
        return { temp: null, parentPointer: null };
      }

      if (temp.data > value) {
        if (temp.left === null) {
          return { temp: null, parentPointer: null };
        }

        parentPointer = temp;
        temp = temp.left;
      } else {
        if (temp.right === null) {
          return { temp: null, parentPointer: null };

        }
        parentPointer = temp;
        temp = temp.right;
      }
    }

    return { temp, parentPointer };
  }

  _findReplaceableNode(node) {
    if (!node.left && !node.right) return node;
    if (!node.left && node.right) return node.right;
    if (node.left && !node.left.right) return node.left;
    let temp = node.left;

    while (temp.right !== null) {
      temp = temp.right;
    }

    return temp;
  }

  remove(value) {
    const { temp, parentPointer } = this._findNode(value);
    console.log("===temp, parentPointer===", temp, parentPointer);
    if (!temp && !parentPointer) return;

    const node = this._findReplaceableNode(temp);
    console.log("===replaceable-node===", node);
  }

  traverse(node = this.root) {
    const tree = { data: node.data };
    tree.left = node.left === null ? null : this.traverse(node.left);
    tree.right = node.right === null ? null : this.traverse(node.right);
    return tree;
  }
}

const myTree = new BST();
myTree.insert(9);
myTree.insert(4);
myTree.insert(6);
myTree.insert(20);
myTree.insert(170);
myTree.insert(15);
myTree.insert(1);
console.log("===myTree===", JSON.stringify(myTree, null, 10));
myTree.remove(9);
// console.log(JSON.stringify(myTree.traverse(), null, 2));

// 9 4 6 20 170 15 1
