/* Detect a linklist have loops in it. */

const { LinkedList } = require("./00_helper");

/* 

1. using hashmap

    time: O(n)
    space: O(n)

*/

const detectLoop1 = (node) => {
  var hash = new Set();
  while (node !== null) {
    if (hash.has(node)) return true;
    hash.add(node);
    node = node.next;
  }
  return false;
};

/* 

2. by modifing linkedlist

    time: O(n)
    space: O(1)

*/

const detectLoop2 = (h) => {
  while (h != null) {
    if (h.flag == 1) return true;
    h.flag = 1;
    h = h.next;
  }
  return false;
};

const chain = new LinkedList(0);
chain.append(10);
chain.append(20);
chain.append(30);
chain.append(40);
chain.append(50);
chain.append(60);
chain.displayAsArray();
// adding loop
// chain.head.next.next.next = chain.head;
// chain.tail.next = chain.head;
console.log("===detecting loop===", detectLoop1(chain.head));
console.log("===detecting loop===", detectLoop2(chain.head));
console.log("===chain===", chain.tail);

/*  NOTE */

//- Floyd's Cycle-Finding Algorithm
function detectLoop3() {
  let slow_p = head,
    fast_p = head;
  let flag = 0;

  while (slow_p != null && fast_p != null && fast_p.next != null) {
    slow_p = slow_p.next;
    fast_p = fast_p.next.next;
    if (slow_p == fast_p) {
      flag = 1;
      break;
    }
  }
  if (flag == 1) return "Loop found";
  else return "Loop not found";
}

// https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/
