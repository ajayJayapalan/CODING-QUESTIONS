const { LinkedList } = require("./00-imports");

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  let right = head;
  let subHead = head;
  let left = head;

  let count = 1;
  let isFirst = true;

  while (right) {
    if (count === k) {
      let prev = right.next;

      while (left !== right.next) {
        let next = left.next;
        left.next = prev;
        prev = left;
        left = next;
      }
      if (isFirst) {
        head = prev;
        // subHead = prev;
      } else {
      }
      right = right.next;
      count = 1;
    }

    right = right.next;
    count++;
  }
};

const list = new LinkedList();
list.appendArray([1, 2, 3, 4, 5]);

const res = reverseKGroup(list.head, 2);
console.log(JSON.stringify(res, null, 2));
