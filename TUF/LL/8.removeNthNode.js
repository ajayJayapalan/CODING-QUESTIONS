class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

const removeNthNode = (head, n) => {
  let stack = [];

  let current = head;
  while (current) {
    stack.push(current);
    current = current.next;
  }

  for (let i = 0; i < n - 1; i++) {
    stack.pop();
  }

  let removeElement = stack.pop();
  let nextElement = removeElement.next;
  let prevElement = stack.at(-1);
  if (stack.length === 0 && !prevElement) {
    head = head.next;
  } else {
    prevElement.next = nextElement;
  }

  return head;
};

const removeNthNode2 = (head, n) => {
  if (n < 1) return head;

  let slow = null;
  let fast = head;

  let i = 0;
  while (i < n) {
    fast = fast.next;
    if (!fast) {
      break;
    }
    i++;
  }

  while (fast) {
    slow = slow?.next ?? head;
    fast = fast.next;
  }

  if (slow === null) {
    head = head.next;
  } else {
    slow.next = slow.next.next;
  }

  return head;
};
const node = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));

const res = removeNthNode2(node, 4);
console.log(JSON.stringify(res, null, 2));
