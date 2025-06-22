class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

const deleteMiddle = (head) => {
  let slow = head;
  let slowPrev = null;
  let fast = head;

  while (fast && fast.next && slow) {
    fast = fast.next.next;
    slowPrev = slow;
    slow = slow.next;
  }

  slowPrev.next = slowPrev.next.next;

  return head;
};

const node = new Node(1, new Node(2, new Node(3, new Node(4))));

const res = deleteMiddle(node);
console.log(JSON.stringify(res, null, 2));
