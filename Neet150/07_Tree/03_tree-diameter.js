const { BSTTree } = require("./00_imports");

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  if (!root) return 0;

  // +1 because including the current node.
  let leftDepth = nodeDepth(root.left) + 1;
  let rightDepth = nodeDepth(root.right) + 1;

  let diameter = leftDepth + rightDepth;

  return Math.max(
    diameter,
    diameterOfBinaryTree(root.left),
    diameterOfBinaryTree(root.right)
  );
};

var nodeDepth = (root) => {
  if (!root) return -1;

  let leftDepth = nodeDepth(root.left);
  let rightDepth = nodeDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
};

const input = [1, 2];
const tree = new BSTTree();
tree.insertList(input);

const res = diameterOfBinaryTree(tree.head);
console.log({ res });
