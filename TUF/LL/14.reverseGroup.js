class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const reverseNextK = (head, end) => {
  let current = head;
  let prev = null;

  let isEnd = false;
  while (!isEnd && current) {
    if (current === end) isEnd = true;
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  let newHead = prev;
  let tail = head;
  return [newHead, tail];
};

const nextKgroup = (head, k) => {
  if (!head) return null;
  let current = head;
  let count = 1;

  while (count !== k) {
    current = current.next;
    count++;
    if (current === null) return null;
  }

  return current;
};

const reverseKGroup = (head, k) => {
  let right = head;
  let left = head;
  let prev = null;

  let newHead = null;

  while (right) {
    let kthNode = nextKgroup(right, k);
    if (kthNode === null) break;

    right = kthNode;
    let next = right.next;

    const [_head, tail] = reverseNextK(left, right);
    if (prev === null) {
      newHead = _head;
    } else {
      prev.next = _head;
    }
    prev = tail;
    prev.next = next;

    right = next;
    left = next;
  }

  return newHead;
};

const list = new Node(
  1,
  new Node(
    2,
    new Node(3, new Node(4, new Node(5, new Node(6, new Node(7, new Node(8))))))
  )
);

const head = reverseKGroup(list, 3);
console.log(JSON.stringify(head));
