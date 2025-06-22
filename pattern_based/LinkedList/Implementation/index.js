class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtBeginning(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  insertAtEnd(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }

  deleteANode(value) {
    if (this.isEmpty()) return false;

    let current = this.head;
    let prev = null;

    while (current !== null && current.value !== value) {
      prev = current;
      current = current.next;
    }

    if (current === null) return false;

    if (prev === null) {
      this.head = this.head.next;
    } else {
      prev.next = current.next;
    }
    this.length--;
    return true;
  }

  search(value) {
    if (this.isEmpty()) return false;

    let current = this.head;
    while (current) {
      if (current.value === value) return true;
      current = current.next;
    }

    return false;
  }
  getLength() {
    return this.length;
  }
  isEmpty() {
    return this.length === 0 && this.head === null;
  }
  insertAtPosition(pos, value) {
    if (pos < 1 || pos > this.length + 1) return false;
    if (pos === 1) {
      this.insertAtBeginning(value);
      return true;
    }
    if (pos === this.length + 1) {
      this.insertAtEnd(value);
      return true;
    }

    let index = 1;
    let current = this.head;
    let prev = null;
    while (current && index < pos) {
      prev = current;
      current = current.next;
      index++;
    }

    const node = new Node(value);
    node.next = current;
    prev.next = node;
    this.length++;
    return true;
  }
  getNodeAtPosition(pos) {
    if (pos < 1 || pos > this.length) return null;
    if (pos === 1) return this.head;

    let index = 1;
    while (current && index < pos) {
      current = current.next;
      index++;
    }

    return current;
  }
  reverse() {
    if (this.isEmpty()) return null;

    let prev = null;
    let current = this.head;
    let next = null;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;

    return this.head;
  }
  clear() {
    this.head = null;
    this.length = 0;
  }
  print() {
    let current = this.head;
    let print = "";
    while (current) {
      print = print + current.value + " -> ";
      current = current.next;
    }

    print += "null";

    console.log(print);
  }
}

const linkedList = new LinkedList();
linkedList.insertAtBeginning(12);
linkedList.insertAtEnd(36);
linkedList.insertAtEnd(27);
linkedList.insertAtEnd(54);
linkedList.insertAtEnd(76);
linkedList.insertAtBeginning(48);
linkedList.print();
linkedList.reverse();
linkedList.print();
