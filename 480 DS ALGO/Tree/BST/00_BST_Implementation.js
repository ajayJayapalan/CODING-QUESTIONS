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
      return;
    } else if (!this.root.left && this.root.data > value) {
      this.root.left = newNode;
      return;
    } else if (!this.root.right && this.root.data <= value) {
      this.root.right = newNode;
      return;
    } else {
      let temp = this.root.data > value ? this.root.left : this.root.right;
      while (true) {
        if (temp.data > value) {
          if (!temp.left) {
            temp.left = newNode;
            return;
          } else {
            temp = temp.left;
          }
        } else {
          if (!temp.right) {
            temp.right = newNode;
            return;
          } else {
            temp = temp.right;
          }
        }
      }
    }
  }
  _findNode(value) {
    let temp = this.root;
    let parentInfo = {
      parent: this.root,
      isChildLeft: null,
    };
    while (true) {
      if (temp.data > value) {
        if (!temp.left) {
          return false;
        }
        parentInfo.parent = temp;
        parentInfo.isChildLeft = true;
        temp = temp.left;
      } else if (temp.data < value) {
        if (!temp.right) {
          return false;
        }
        parentInfo.parent = temp;
        parentInfo.isChildLeft = false;
        temp = temp.right;
      } else {
        let response = {
          childCount: 0,
          isLeft: false,
          isRight: false,
          node: temp,
          parentInfo,
        };
        if (temp.right) {
          response.childCount++;
          response.isRight = true;
        }
        if (temp.left) {
          response.childCount++;
          response.isLeft = true;
        }
        return response;
      }
    }
  }
  _fingLeftHeighestNode(node) {
    let parentInfo = {
      parent: node,
      isChildLeft: true,
    };
    let temp = node.left;
    while (temp.right) {
      parentInfo.parent = temp;
      parentInfo.isChildLeft = false;
      temp = temp.right;
    }
    let isLeft = false;
    if (temp.left) isLeft = true;
    return {
      parentInfo,
      temp,
      isLeft,
      value: temp.data,
    };
  }
  remove(value) {
    // no element
    if (!this.root) {
      return "There is no element to delete.";
    }

    const thatFoundNode = this._findNode(value);
    if (!thatFoundNode) {
      return "not found";
    }

    // if root element with no child
    if (
      thatFoundNode.parentInfo.isChildLeft === null &&
      !thatFoundNode.isLeft &&
      !thatFoundNode.isRight
    ) {
      this.root = null;
      return;
    }

    // if no child
    if (thatFoundNode.childCount === 0) {
      if (thatFoundNode.parentInfo.isChildLeft) {
        thatFoundNode.parentInfo.parent.left = null;
        return;
      } else {
        thatFoundNode.parentInfo.parent.right = null;
        return;
      }
    }
    // if one child :
    else if (thatFoundNode.childCount === 1) {
      if (thatFoundNode.parentInfo.isChildLeft) {
        if (thatFoundNode.isLeft) {
          thatFoundNode.parentInfo.parent.left = thatFoundNode.node.left;
          return;
        } else {
          thatFoundNode.parentInfo.parent.left = thatFoundNode.node.right;
          return;
        }
      } else {
        if (thatFoundNode.isLeft) {
          thatFoundNode.parentInfo.parent.right = thatFoundNode.node.left;
          return;
        } else {
          thatFoundNode.parentInfo.parent.right = thatFoundNode.node.right;
          return;
        }
      }
    }
    // if two child  : find lowest value in right tree or find highest value in left tree.
    else if (thatFoundNode.childCount === 2) {
      const thatLeftHeightestNode = this._fingLeftHeighestNode(
        thatFoundNode.node
      );
      console.log("===thatLeftHeightestNode===", thatLeftHeightestNode);
      if (thatLeftHeightestNode.parentInfo.isChildLeft) {
        thatLeftHeightestNode.parentInfo.parent.left =
          thatLeftHeightestNode.temp.left;
      } else {
        thatLeftHeightestNode.parentInfo.parent.right =
          thatLeftHeightestNode.temp.left;
      }
      thatFoundNode.node.data = thatLeftHeightestNode.value;
      return;
    }
  }
}

const myTree = new BST();
myTree.insert(9);
myTree.insert(4);
myTree.insert(6);
myTree.insert(6);
myTree.insert(20);
myTree.insert(170);
myTree.insert(15);
myTree.insert(14);
myTree.insert(1);
console.log("===myTree===", JSON.stringify(myTree, null, 2));
myTree.remove(14);
myTree.remove(20);
console.log("===myTree===", JSON.stringify(myTree, null, 2));
