const { LinkedList, ListNode } = require("./00-imports");

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let sortedList = null;
  let head = null;

  const appendAndNext = (list) => {
    if (sortedList === null) {
      sortedList = new ListNode(list.val);
      head = sortedList;
    } else {
      sortedList.next = new ListNode(list.val);
      sortedList = sortedList.next;
    }
  };

  while (list1 || list2) {
    if (list1 && list2) {
      if (list1.val < list2.val) {
        appendAndNext(list1);
        list1 = list1.next;
      } else {
        appendAndNext(list2);
        list2 = list2.next;
      }
    } else if (list1) {
      appendAndNext(list1);
      list1 = list1.next;
    } else if (list2) {
      appendAndNext(list2);
      list2 = list2.next;
    }
  }

  return head;
};

const input1 = [1, 4, 6, 9];
const input2 = [3, 5, 11, 20];

const list1 = new LinkedList();
const list2 = new LinkedList();
list1.appendArray(input1);
list2.appendArray(input2);

const res = mergeTwoLists(list1.head, list2.head);
console.log(JSON.stringify(res, null, 2));
// console.log(JSON.stringify(list1, null, 2));
// console.log(JSON.stringify(list2, null, 2));
