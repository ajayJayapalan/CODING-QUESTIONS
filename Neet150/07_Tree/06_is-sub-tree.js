const { BinaryTree } = require("./00_imports");

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  if (!root) return false;

  const isSame = isSameTree(root, subRoot);
  if (isSame) return true;

  const isSubTreeInLeft = isSubtree(root.left, subRoot);
  if (isSubTreeInLeft) return true;
  const isSubTreeInRight = isSubtree(root.right, subRoot);
  if (isSubTreeInRight) return true;

  return false;
};

var isSameTree = function (p, q) {
  const isBothEmpty =
    [undefined, null].includes(p) && [undefined, null].includes(q);
  if (isBothEmpty) return true;

  if (p?.value !== q?.value) return false;
  const isLeftSame = isSameTree(p?.left, q?.left);
  if (!isLeftSame) return false;
  const isRightSame = isSameTree(p?.right, q?.right);
  if (!isRightSame) return false;

  return true;
};

const root = new BinaryTree().insertList([3, 4, 5, 1, 2]);
const subRoot = new BinaryTree().insertList([4, 1, 3]);

const res = isSubtree(root.head, subRoot.head);
console.log({ res });
