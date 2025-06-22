const { ListNode, LinkedList } = require("./00-imports");

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let head = null;
  let curr = null;

  while (true) {
    let minNode = null;
    let findIndex = null;

    for (let i = 0; i < lists.length; i++) {
      let list = lists[i];

      if (list === null) continue;

      if (minNode === null) {
        minNode = list;
        findIndex = i;
        continue;
      }

      if (list.val < minNode.val) {
        minNode = lists[i];
        findIndex = i;
      }
    }

    if (minNode === null) return head;

    lists[findIndex] = minNode.next;

    if (curr === null) {
      let node = new ListNode(minNode.val);
      curr = node;
      head = node;
    } else {
      curr.next = new ListNode(minNode.val);
      curr = curr.next;
    }
  }
};

const list1 = new LinkedList();
const list2 = new LinkedList();
const list3 = new LinkedList();
const list4 = new LinkedList();
list1.appendArray([1, 4, 5]);
list2.appendArray([1, 3, 4]);
list3.appendArray([2, 6]);
list3.appendArray([0, 3, 4, 9]);

const input = [list1.head, list2.head, list3.head, list4.head];

const res = mergeKLists(input);
console.log(JSON.stringify(res, null, 2));
