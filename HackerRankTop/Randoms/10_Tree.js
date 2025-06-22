class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(nums = []) {
    this.head = arrayToTree(nums);
  }

  display() {
    printTree(this.head);
  }

  dfsRecursive() {}

  dfsIterative() {}

  bfs() {}

  preorder() {}

  inorder() {}

  postorder() {}

  height() {}
}

const tree = new Tree([1, 2, 3, 4, 5, 6, 7, 8]);
tree.display();

function arrayToTree(nums) {
  if (!nums || nums.length === 0) {
    return null;
  }

  const root = new Node(nums[0]);
  const queue = [root];
  let i = 1;

  while (queue.length > 0 && i < nums.length) {
    const current = queue.shift();

    if (i < nums.length) {
      current.left = new Node(nums[i]);
      queue.push(current.left);
      i++;
    }

    if (i < nums.length) {
      current.right = new Node(nums[i]);
      queue.push(current.right);
      i++;
    }
  }

  return root;
}

function printTree(node, level = 0) {
  if (node === null) return;

  console.log("  ".repeat(level) + node.value);
  printTree(node.left, level + 1);
  printTree(node.right, level + 1);
}
