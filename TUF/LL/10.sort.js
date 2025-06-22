class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

const sortLL = (head) => {};

const node = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));

const res = sortLL(node);
console.log(res);
