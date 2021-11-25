/* Implementing Queue Using Linked List */
class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class QueueWithLinkedList {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first.data;
  }
  enqueue(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (this.length === 0) {
      return new Error("Queue Underflowing...");
    }
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.length--;
    return this;
  }
}

const myQueue = new QueueWithLinkedList();
console.log(myQueue.enqueue(0));
console.log(myQueue.enqueue(1));
console.log(myQueue.enqueue(2));
console.log(myQueue.peek());
console.log(myQueue.dequeue());
console.log(myQueue.peek());

/* Implementing Queue using Array

* dequeue cause shifting of n elements;

*/
