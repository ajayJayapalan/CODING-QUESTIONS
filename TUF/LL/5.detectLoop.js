class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

const detectLoop = (head) => {
  let slow = head;
  let fast = head;

  while (fast && fast.next && slow) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
};

const head = new Node(1);
const second = new Node(2);
const third = new Node(3);
const fourth = new Node(4);
const fifth = new Node(5);

head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
// Create a loop
fifth.next = third;

const res = detectLoop(head);
console.log(res);
