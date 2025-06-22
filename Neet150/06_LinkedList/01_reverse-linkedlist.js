const { LinkedList, ListNode } = require("./00-imports");

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// not pure
var reverseList = function (head) {
  let [prev, curr, next] = [null, head, null];
  while (curr !== null) {
    next = curr.next;
    curr.next = prev;

    prev = curr;
    curr = next;
  }

  return prev;
};

// pure
const pureReverseList = function (head) {
  let node = head;
  // let reverseHead = null;
  let prev = null;

  while (node !== null) {
    // if (prev === null) {
    //   prev = new ListNode(node.val);
    // } else {
    //   const newNode = new ListNode(node.val);
    //   newNode.next = prev;
    //   prev = newNode;
    // }
    prev = new ListNode(node.val, prev);
    node = node.next;
  }
  return prev;
};

const input = [1, 2, 3, 4, 5];
const linkedList = new LinkedList();
linkedList.appendArray(input);

// const reversed = reverseList(linkedList.head);
const reversed = pureReverseList(linkedList.head);
print(reversed);
function print(linkedList) {
  console.log(JSON.stringify(linkedList, null, 2));
}
