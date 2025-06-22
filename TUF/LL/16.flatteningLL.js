const findTailChild = (head) => {
  let current = head;

  while (current.child) {
    current = current.child;
  }

  return current;
};

const flatteningLL = (head) => {
  let current = head;

  while (current) {
    let tailChild = findTailChild(current);
    tailChild.child = current.next;
    next = current.next;
    current.next = null;
    current = next;
  }

  return head;
};

class Node {
  constructor(data, next = null, child = null) {
    this.data = data;
    this.next = next;
    this.child = child;
  }
}

// Level 2 list (child list)
const child1 = new Node(100, new Node(101));

// Main list
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);

// Attach child to node 2
head.next.child = child1;

// console.log(JSON.stringify(head, null, 3));
const res = flatteningLL(head);
console.log(JSON.stringify(res, null, 3));
