class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

const reverseLL = (head) => {
  let current = head;
  let prev = null;

  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  console.log(head, prev);

  return prev;
};

const reverseLLRecursive = (head) => {
    
}

const node = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));

const res = reverseLL(node);
// console.log(res);
