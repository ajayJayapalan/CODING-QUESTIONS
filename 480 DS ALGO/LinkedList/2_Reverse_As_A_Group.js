class LinkedList {
  constructor(value) {
    this.head = {
      data: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(newValue) {
    let node = {
      data: newValue,
      next: null,
    };
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }
  displayAsArray() {
    let nodes = [];
    let temp = this.head;
    while (temp !== null) {
      nodes.push(temp.data);
      temp = temp.next;
    }
    console.log(nodes);
  }
  display() {
    console.log(this.head);
  }
}

function displayAsArray(head) {
  let nodes = [];
  let temp = head;
  while (temp !== null) {
    nodes.push(temp.data);
    temp = temp.next;
  }
  console.log(nodes);
}

const reverseByGroup = (head, k) => {
  if (head === null) return null;

  let current = head;
  let prev = null;
  let next = null;

  let count = 0;

  while (count < k && current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    count++;
  }

  if (next !== null) {
    head.next = reverseByGroup(next, k);
  }

  return prev;
};

let chain = new LinkedList(1);
chain.append(2);
chain.append(3);
chain.append(4);
chain.append(5);
chain.append(6);
chain.append(7);
chain.append(8);
chain.append(9);
chain.append(10);
chain.append(11);
displayAsArray(reverseByGroup(chain.head, 3));
