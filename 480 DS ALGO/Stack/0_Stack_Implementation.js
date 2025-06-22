// Implementing Stack using Array
export class StackWithArray {
  constructor() {
    this.top = null;
    this.nodes = [];
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    this.top = value;
    this.nodes[this.length] = value;
    this.length++;
    return this.nodes;
  }
  pop() {
    const temp = this.nodes[this.length - 1];
    delete this.nodes[this.length - 1];
    this.length--;
    this.top = this.nodes[this.length - 1];
    return temp;
  }
  isEmpty() {
    return this.length === 0;
  }
}

const myStack = new StackWithArray();
console.log(myStack.push(1));
console.log(myStack.push(2));
console.log(myStack.push(3));
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());

/* ****************************************************************** */

// Implementing Stack using Linked List.
class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class StackWithLinkedList {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top.data;
  }
  pop() {
    if (this.length === 0) {
      return new Error("Stack Underflowing...");
    }
    if (this.length === 1) {
      this.top = null;
      this.bottom = null;
    } else {
      this.top = this.top.next;
    }
    this.length--;
    return this;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holder = this.top;
      this.top = newNode;
      this.top.next = holder;
    }
    this.length++;
    return this;
  }
}

const myStack2 = new StackWithLinkedList();
console.log(myStack2.push("utube"));
console.log(myStack2.push("google"));
console.log(myStack2.push("fb"));
console.log(myStack2.peek());
console.log(myStack2.pop());
console.log(myStack2.peek());
