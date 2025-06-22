class TreeNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BSTTree {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const node = new TreeNode(value);
    if (this.head === null) {
      this.head = node;
    } else {
      let curr = this.head;
      let prev = null;
      while (curr) {
        prev = curr;
        if (curr.value > value) {
          curr = curr.left;
        } else {
          curr = curr.right;
        }
      }

      if (prev.value > value) {
        prev.left = node;
      } else {
        prev.right = node;
      }
    }
  }

  insertList(list = []) {
    list.forEach((value) => this.insert(value));
  }
}

class BinaryTree {
  constructor() {
    this.head = null;
  }

  insertList(arr) {
    const buildTree = (index) => {
      if (index >= arr.length || arr[index] === null) {
        return null;
      }

      const node = new TreeNode(arr[index]);
      node.left = buildTree(2 * index + 1);
      node.right = buildTree(2 * index + 2);

      return node;
    };

    this.head = buildTree(0);

    return this;
  }
}

module.exports = { BSTTree, TreeNode, BinaryTree };
