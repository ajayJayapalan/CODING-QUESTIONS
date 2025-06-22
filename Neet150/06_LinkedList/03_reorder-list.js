const { LinkedList } = require("./00-imports");

/**
 * https://leetcode.com/problems/reorder-list/
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let reversedHead = reverse(findMid(head));

  while (reversedHead) {
    let next = head.next;
    head.next = reversedHead;
    reversedHead = reversedHead.next;
    head.next.next = next;
    head = next;
  }
  head.next = null;
};

function findMid(head) {
  let slowPointer = head;
  let fastPointer = head.next;
  while (fastPointer && fastPointer.next !== null) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }
  return slowPointer.next;
}

function reverse(list) {
  let [prev, curr, next] = [null, list, null];
  while (curr) {
    next = curr.next;
    curr.next = prev;

    prev = curr;
    curr = next;
  }
  return prev;
}

const input = [1, 2, 3, 4, 5];
const list = new LinkedList();
list.appendArray(input);

reorderList(list.head);
console.log(JSON.stringify(list, null, 2));
