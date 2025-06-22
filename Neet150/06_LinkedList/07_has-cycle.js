/**
 * https://leetcode.com/problems/linked-list-cycle/
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  const map = new Map();
  let curr = head;

  while (curr) {
    map.set(curr, true);
    curr = curr.next;
    if (map.get(curr)) {
      return true;
    }
  }

  return false;
};
