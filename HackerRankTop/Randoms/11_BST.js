class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insert(num) {
    let node = new Node(num);
    if (!this.head) {
      this.head = node;
      this.length++;
      return;
    }

    const insertNode = (current, node) => {
      if (current.value < node.value) {
        if (current.left) {
          insertNode(current.left, node);
        } else {
          current.left = node;
          this.length++;
        }
      } else {
        if (current.right) {
          insertNode(current.right, node);
        } else {
          current.right = node;
          this.length++;
        }
      }
    };

    insertNode(this.head, node);
  }

  find(num) {
    if (!this.head) return null;

    let current = this.head;

    while (current) {
      if (current.value === num) return num;

      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return null;
  }
}
