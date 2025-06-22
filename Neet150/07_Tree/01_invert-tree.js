/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const { BSTTree } = require("./00_imports");

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return root;

  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
};

const list = [4, 2, 7, 1, 3, 6, 9];
const tree = new BSTTree();
tree.insertList(list);

// console.log(JSON.stringify(tree.head, null, 5));
const res = invertTree(tree.head);
console.log(JSON.stringify(res, null, 5));
