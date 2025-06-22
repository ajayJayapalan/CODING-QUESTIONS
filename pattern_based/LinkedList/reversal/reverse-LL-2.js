const reverseFirstN = (head, n) => {
  let index = 1;
  let start = head;
  let current = head;
  let prev = null;
  let next = null;

  while (index <= n) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    index++;
  }

  start.next = current;

  return prev;
};

const reverseList2 = (head, left, right) => {
  if (!head) return null;

  let start = head;
  let prev = null;
  let current = head;

  let index = 1;
  while (index < left) {
    prev = current;
    current = current.next;
    index++;
  }

  const newHead = reverseFirstN(current, right - left + 1);

  if (prev) {
    prev.next = newHead;
  } else {
    start = newHead;
  }

  return start;
};

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const tree = new Node(1);
tree.next = new Node(2);
tree.next.next = new Node(3);
tree.next.next.next = new Node(4);
tree.next.next.next.next = new Node(5);

const start = reverseList2(tree, 2, 4);

console.log(JSON.stringify(start, null, 2));
