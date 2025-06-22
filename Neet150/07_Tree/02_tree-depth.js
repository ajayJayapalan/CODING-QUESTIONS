const { BSTTree } = require("./00_imports");

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return -1;
  //   console.log(root, root.left);
  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
};

const input = [3, 9, 20, 15, 7];
const tree = new BSTTree();
tree.insertList(input);

const res = maxDepth(tree.head);
console.log({ res });
