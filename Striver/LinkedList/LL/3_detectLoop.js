class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const detectLoop = (list) => {
  let current = list;
  let map = new Map();
  while (current !== null) {
    if (map.has(current)) return true;
    map.set(current);
    current = current.next;
  }

  return false;
};

const detectLoop2 = (list) => {
  let slow = list;
  let fast = list;

  while (slow !== null && fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }

  return false;
};

const list = new Node(1);
list.next = new Node(2);
list.next.next = new Node(3);
list.next.next.next = new Node(4);
list.next.next.next.next = new Node(5);
list.next.next.next.next.next = new Node(6);
list.next.next.next.next.next.next = new Node(7);
list.next.next.next.next.next.next.next = new Node(8);
list.next.next.next.next.next.next.next.next = new Node(9);
list.next.next.next.next.next.next.next.next = list.next.next;
console.log(detectLoop(list));
console.log(detectLoop2(list));
