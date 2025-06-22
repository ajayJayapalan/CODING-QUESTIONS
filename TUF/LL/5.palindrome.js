class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

const checkPalindrome = (head) => {
  let slow = head;
  let fast = head;

  while (fast && fast.next && slow) {
    fast = fast.next.next;
    slow = slow.next;
  }

  fast = slow;
  slow = head;

  while (fast) {
    console.log(fast, slow);
    if (fast.data === slow.data) {
      fast = fast.next;
      slow = slow.next;
    } else {
      return false;
    }
  }

  return true;
};

// 1 -> 2 -> 1
const test1 = new Node(1, new Node(2, new Node(1)));

// 1 -> 2 -> 2 -> 1
const test2 = new Node(1, new Node(2, new Node(2, new Node(1))));

// 3 -> 5 -> 7 -> 5 -> 3
const test3 = new Node(3, new Node(5, new Node(7, new Node(5, new Node(3)))));

const node = new Node(1, new Node(2, new Node(2, new Node(1))));

const res = checkPalindrome(node);
console.log(res);
