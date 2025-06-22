class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

const deleteLastNode = (list, n) => {
  let length = 0;

  let fast = list;

  while (fast && fast.next) {
    length += 2;
    fast = fast.next.next;
  }

  if (fast) {
    length++;
  }

  let deleteNodeIndex = length - n;
  if (deleteNodeIndex < 0) return -1;

  fast = list;
  length = 0;
  while (fast && fast.next) {
    if (deleteNodeIndex - length === 1) {
      fast.next = fast.next.next;
      break;
    } else if (deleteNodeIndex - length === 2) {
      length++;
      fast = fast.next;
    } else {
      length += 2;
      fast = fast.next.next;
    }
  }

  return list;
};

let list = new Node(1);
list.next = new Node(2);
list.next.next = new Node(3);
list.next.next.next = new Node(4);
list.next.next.next.next = new Node(5);
list.next.next.next.next.next = new Node(6);
list.next.next.next.next.next.next = new Node(7);

list = deleteLastNode(list, 3);

let current = list;
while (current) {
  console.log(current.value);
  current = current.next;
}
