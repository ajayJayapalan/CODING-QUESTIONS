class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const getLengthAndTail = (head) => {
  let current = head;

  let length = 0;
  let tail = null;

  while (current) {
    length++;
    tail = current;
    current = current.next;
  }

  return [length, tail];
};

const getPrevNode = (node, len) => {
  while (node && len > 1) {
    len--;
    node = node.next;
  }
  return node;
};

const rotateKTimes = (head, k) => {
  if (!head || k == 0) return head;

  let newHead = head;

  const [length, tail] = getLengthAndTail(head);

  let nthNode = length - (k % length);
  if (nthNode === length) return newHead;

  const prevNode = getPrevNode(head, nthNode);
  newHead = prevNode.next;
  prevNode.next = null;
  tail.next = head;

  return newHead;
};

const list = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));

const head = rotateKTimes(list, 2);
console.log(JSON.stringify(head));
