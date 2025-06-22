class LinkedNode {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}

const reverseLinkedList = (head) => {
  let prev = null;
  let current = head;
  let next = null;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};

const displayLinkedList = (head) => {
  let str = "";

  let current = head;
  while (current) {
    str += current.value + "->";
    current = current.next;
  }

  str += "null";

  console.log(str);
};

const node = new LinkedNode(1);
node.next = new LinkedNode(2);
node.next.next = new LinkedNode(3);

displayLinkedList(node);
const newNode = reverseLinkedList(node);
displayLinkedList(newNode);
