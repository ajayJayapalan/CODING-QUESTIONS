const { LinkedList } = require("./00-imports");
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let sum = null;
  let sumHead = null;
  let balance = 0;

  const getBalance = (sum) => parseInt(`${sum}`.length > 1 ? `${sum}`[0] : 0);
  const getSum = (sum) => parseInt(`${sum}`.length > 1 ? `${sum}`[1] : sum);

  while (l1 || l2) {
    if (l1 && l2) {
      let add = l1.val + l2.val + balance;
      balance = getBalance(add);
      let add2Index = getSum(add);

      if (sum === null) {
        sum = new ListNode(add2Index);
        sumHead = sum;
      } else {
        sum.next = new ListNode(add2Index);
        sum = sum.next;
      }

      l1 = l1.next;
      l2 = l2.next;
    } else if (l1) {
      let add = l1.val + balance;

      balance = getBalance(add);
      let add2Index = getSum(add);

      if (sum === null) {
        sum = new ListNode(add2Index);
      } else {
        sum.next = new ListNode(add2Index);
        sum = sum.next;
      }
      l1 = l1.next;
    } else if (l2) {
      let add = l2.val + balance;

      balance = getBalance(add);
      let add2Index = getSum(add);

      if (sum === null) {
        sum = new ListNode(add2Index);
      } else {
        sum.next = new ListNode(add2Index);
        sum = sum.next;
      }
      l2 = l2.next;
    }
  }

  if (balance !== 0) {
    sum.next = new ListNode(balance);
  }

  return sumHead;
};

const list1 = new LinkedList();
const list2 = new LinkedList();
list1.appendArray([9, 9, 9, 9, 9, 9, 9]);
list2.appendArray([9, 9, 9, 9]);

const res = addTwoNumbers(list1.head, list2.head);
console.log(JSON.stringify(res, null, 2));
