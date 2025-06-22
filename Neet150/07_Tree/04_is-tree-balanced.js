const { BSTTree, BinaryTree } = require("./00_imports");

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  const [isBalance, height] = isNodeBalanced(root);

  return isBalance;
};

const isNodeBalanced = (root) => {
  if (!root) return [null, -1];

  let [isLeftBalanced, leftDepth] = isNodeBalanced(root.left);
  let [isRightBalance, rightDepth] = isNodeBalanced(root.right);

  if (isLeftBalanced === false || isRightBalance === false) {
    return [false, -1];
  }

  const isBalance = Math.abs(leftDepth - rightDepth) <= 1;
  const height = Math.max(leftDepth, rightDepth) + 1;

  //   console.log(root.value, { isBalance, height, leftDepth, rightDepth });

  return [isBalance, height];
};

const list = [1, 2, 2, 3, 3, null, null, 4, 4];
const tree = new BinaryTree();
tree.insertList(list);
console.log(JSON.stringify(tree.head, null, 2));

const res = isBalanced(tree.head);
console.log({ res });
