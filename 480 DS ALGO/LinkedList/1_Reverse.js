/* write a program to reverse a LinkedList */

const LinkedList = require("./0_LinkedList_Implementation");

// 1. Iterative

/* 

    time: O(n)
    space: O(n)

*/

const reverse = (node) => {
  let next = null;
  let current = node.head;
  let prev = null;
  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    if (prev.next === null) {
      node.tail = prev;
    }
    current = next;
  }
  console.log("=== prev ===", prev);
  console.log("=== node ===", node);
  return prev;
};

let node = new LinkedList(10);
node.append(20);
node.append(30);
node.append(40);
node.append(50);
// console.log(node.traverse());
// node.head = reverse(node);
// console.log(node.traverse());

//---------------------------------------------------------------------------------------------------------

// 2. Recursive

const reverseRecrusive = (node, current = node.head, prev = null) => {
  if (current === null) {
    return prev;
  }
  let next = null;
  next = current.next;
  current.next = prev;
  prev = current;
  if (prev.next === null) {
    node.tail = prev;
  }

  return reverseRecrusive(node, next, prev);
};

let node2 = new LinkedList(10);
node2.append(20);
node2.append(30);
node2.append(40);
node2.append(50);
console.log(node2.traverse());
node2.head = reverseRecrusive(node2);
console.log(node2.traverse());
