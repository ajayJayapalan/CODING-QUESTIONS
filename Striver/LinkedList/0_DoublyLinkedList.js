class Node {
  value = null;
  next = null;
  prev = null;
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  head = null;
  tail = null;
  length = 0;

  insertFirstEl(val) {
    this.head = new Node(val);
    this.length++;
    this.tail = this.head;
  }

  insertAtEnd(val) {
    if (this.length === 0) {
      this.insertFirstEl(val);
    } else {
      this.tail.next = new Node(val);
      this.tail.next.prev = this.tail;
      this.tail = this.tail.next;
      this.length++;
    }
  }

  insertAtBegining(val) {
    if (this.length === 0) {
      this.insertFirstEl(val);
    } else {
      let next = this.head;
      this.head = new Node(val);
      this.head.next = next;
      next.prev = this.head;
      this.length++;
    }
  }

  insertAtIndex(index, val) {
    if (index > this.length) return "out of bound index";

    if (index === 0) {
      this.insertAtBegining(val);
    } else if (index === this.length) {
      this.insertAtEnd(val);
    } else {
      const prev = this._findNodeAtIndex(index - 1); // a <=> b

      const next = prev.next; // a

      prev.next = new Node(val); // a -> c
      next.prev = prev.next; // c <- b

      prev.next.prev = prev; // c -> a
      prev.next.next = next; // c -> b
      // a <=> c <=> b

      this.length++;
    }
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  deleteFromEnd() {
    if (this.length === 0) {
      return;
    } else if (this.length === 1) {
      this.clear();
    } else {
      const secondLastNode = this.tail.prev;
      secondLastNode.next = null;
      this.tail = secondLastNode;
      this.length--;
    }
  }

  deleteFromBegining() {
    if (this.length === 0) {
      return;
    } else if (this.length === 1) {
      this.clear();
    } else {
      const secondNode = this.head.next;
      secondNode.prev = null;
      this.head = secondNode;
      this.length--;
    }
  }

  deleteAtIndex(index) {
    if (index >= this.length) return "out of bound";
    if (this.length === 0) {
      return;
    } else if (this.length === 1) {
      this.clear();
    } else if (index === 0) {
      this.deleteFromBegining();
    } else if (index === this.length - 1) {
      this.deleteFromEnd();
    } else {
      const prevNode = this._findNodeAtIndex(index - 1);
      const nextNode = prevNode.next.next;
      prevNode.next = nextNode;
      nextNode.prev = prevNode;
      this.length--;
    }
  }

  _findNodeAtIndex(index) {
    let startIndex = 0;
    let current = this.head;

    while (startIndex < index) {
      current = current.next;
      startIndex++;
    }

    return current;
  }

  display() {
    let current = this.head;
    let displayString = "";

    while (current !== null) {
      displayString += current.value + (current.next !== null ? " <=> " : "");
      current = current.next;
    }

    console.log(displayString);
  }

  reverse() {
    let current = this.head;
    this.tail = current;

    let lastNode = null;
    while (current !== null) {
      let prev = current.prev;
      let next = current.next;

      current.next = prev;
      current.prev = next;

      lastNode = current;
      current = next;
    }

    this.head = lastNode;
  }
}

const dLinkedList = new DoublyLinkedList();
dLinkedList.insertAtEnd(1);
dLinkedList.insertAtEnd(2);
dLinkedList.insertAtEnd(3);
dLinkedList.insertAtBegining(0);
dLinkedList.insertAtBegining(-1);
dLinkedList.insertAtBegining(-2);
dLinkedList.insertAtIndex(dLinkedList.length - 1, 7);
dLinkedList.display();
dLinkedList.deleteFromEnd();
dLinkedList.display();
dLinkedList.deleteFromBegining();
dLinkedList.display();
dLinkedList.deleteAtIndex(dLinkedList.length - 1);
dLinkedList.display();
dLinkedList.reverse();
dLinkedList.display();
