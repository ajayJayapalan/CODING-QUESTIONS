/* 

        9
      /   \
     4     20         
   / \     / \
  1   6   15  170


*/

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.data = value;
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

  remove(value) {
    const temp = this.root;
    while (temp.left !== null || temp.right !== null) {
      if (temp.data === value) {
        temp = temp.left;
        return this;
      }
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

    return "Value not present";
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
myTree.remove(20);
console.log("===myTree===", JSON.stringify(myTree, null, 2));
// console.log(JSON.stringify(myTree.traverse(), null, 2));

// 9 4 6 20 170 15 1
