class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const reverseUsingStack = (list) => {
  const stack = [];

  let current = list;

  while (current !== null) {
    stack.push(current);
    current = current.next;
  }

  let node = stack.pop();
  let head = node;

  while (stack.length !== 0) {
    node.next = stack.pop();
    node = node.next;
  }

  return head;
};

const list = new Node(1);
list.next = new Node(2);
list.next.next = new Node(3);
list.next.next.next = new Node(4);
list.next.next.next.next = new Node(5);

reverseUsingStack(list);
