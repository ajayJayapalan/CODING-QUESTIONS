class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

const findMiddleNode = (head) => {
  let slow = head;
  let fast = head;

  while (fast && fast.next && slow) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
};

const node = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));

const res = findMiddleNode(node);
console.log(res);
