class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

const intersection = (head1, head2) => {
  let set = new Set();

  let current = head1;
  while (current) {
    set.add(current);
    current = current.next;
  }

  current = head2;
  while (current) {
    if (set.has(current)) {
      return current;
    }
    current = current.next;
  }

  return -1;
};

const shared = new Node(8, new Node(10));

// List A: 3 → 7 → 8 → 10
const headA = new Node(3, new Node(7, shared));

// List B: 99 → 1 → 8 → 10
const headB = new Node(99, new Node(1, shared));

const res = intersection(headA, headB);
console.log(res);
