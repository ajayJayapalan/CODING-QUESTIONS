/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const { LinkedList } = require("./00-imports");

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// Space : O(n) : with array.
var removeNthFromEnd = function (head, n) {
  const list = [];

  let curr = head;
  while (curr) {
    list.push(curr);
    curr = curr.next;
  }

  const index = list.length - n;
  const prev = list[index - 1];
  prev.next = prev.next.next;

  return head;
};

// Space : O(1) . two pointer with n space between them.
var removeNthFromEnd2 = function (head, n) {
  let prevPointer = head;
  let currPointer = head;
  let counter = 0;
  while (currPointer.next) {
    if (counter >= n) {
      prevPointer = prevPointer.next;
    }
    counter++;
    currPointer = currPointer.next;
  }
  prevPointer.next = prevPointer.next.next;
  return head;
};

const input = [1, 2, 3, 4, 5];
const list = new LinkedList();
list.appendArray(input);

const res = removeNthFromEnd2(list.head, 2);
print(res);
function print(linkedList) {
  console.log(JSON.stringify(linkedList, null, 2));
}
