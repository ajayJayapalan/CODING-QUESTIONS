const { BinaryTree } = require("./00_imports");

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
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

const p = [1, 2];
const q = [1, null, 2];

const pList = new BinaryTree();
pList.insertList(p);
const qList = new BinaryTree(q);
qList.insertList(q);
const res = isSameTree(pList.head, qList.head);
console.log({ res });
