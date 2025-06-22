class Node {
  value = null;
  next = null;
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  insertTheFirst(val) {
    this.head = new Node(val);
    this.tail = this.head;
    this.length++;
  }

  insertAtEnd(val) {
    if (this.head === null) {
      this.insertTheFirst(val);
    } else {
      this.tail.next = new Node(val);
      this.tail = this.tail.next;
      this.length++;
    }
  }

  insertAtBegining(val) {
    if (this.head === null) {
      this.insertTheFirst(val);
    } else {
      let current = this.head;
      this.head = new Node(val);
      this.head.next = current;
      this.length++;
    }
  }

  insertAtPosition(val, index) {
    if (index > this.length) {
      console.log("not possible");
      return;
    } else if (this.head === null) {
      this.insertTheFirst(val);
    } else if (index === 0) {
      this.insertAtBegining(val);
    } else if (index === this.length) {
      this.insertAtEnd(val);
    } else {
      const prev = this._getNodeAtPositon(index);
      let current = prev.next;
      prev.next = new Node(val);
      let newNode = prev.next;
      newNode.next = current;
      this.length++;
    }
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  deleteFromEnd() {
    if (this.length === 0) return "not possible";
    if (this.length === 1) {
      this.clear();
    } else {
      let current = this.head;
      while (current.next.next !== null) {
        current = current.next;
      }
      this.tail = current;
      this.tail.next = null;
      this.length--;
    }
  }

  deleteFromBeginning() {
    if (this.length === 0) return "not possible";
    if (this.length === 1) {
      this.clear();
    } else {
      this.head = this.head.next;
      this.length--;
    }
  }

  deleteFromPosition(index) {
    if (this.length === 0) return "not possible";
    if (this.length === 1) {
      this.clear();
    } else if (index === 0) {
      this.deleteFromBeginning();
    } else if (this.length - 1 === index) {
      this.deleteFromEnd();
    } else {
      const prev = this._getNodeAtPositon(index);
      prev.next = prev.next.next;
      this.length--;
    }
  }

  _getNodeAtPositon(index) {
    let startIndex = 0;
    let current = this.head;
    while (startIndex < index) {
      const next = current.next;
      current = next;
      startIndex++;
    }

    return current;
  }

  display() {
    let current = this.head;
    let displayString = "";
    while (current !== null) {
      displayString += current.value + " -> ";
      current = current.next;
    }
    displayString += "null";
    console.log(displayString);
  }

  search(num) {
    let current = this.head;

    while (current !== null) {
      if (current.value === num) return true;
      current = current.next;
    }

    return false;
  }

  update(index, num) {
    if (index > this.length - 1) return "out of bound";
    const prev = this._getNodeAtPositon(index);
    prev.next.value = num;
  }

  length() {
    return this.length;
  }

  reverse() {
    let current = this.head;
    let previous = null;
    this.tail = this.head;

    while (current !== null) {
      let next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    this.head = previous;
  }

  reverseRecur() {
    const reverse = (current, previous) => {
      if (current === null) return previous;

      let next = current.next;
      current.next = previous;
      previous = current;
      current = next;

      return reverse(current, previous);
    };

    this.head = reverse(this.head, null);
  }

  isEmpty() {
    return this.length === 0 ? true : false;
  }
}

const linkedList = new LinkedList();
linkedList.insertAtEnd(1);
linkedList.insertAtEnd(2);
linkedList.insertAtEnd(3);
linkedList.insertAtBegining(0);
linkedList.insertAtBegining(-1);
linkedList.insertAtPosition(5, 4);
linkedList.display();
linkedList.deleteFromEnd();
linkedList.display();
linkedList.deleteFromBeginning();
linkedList.display();
linkedList.deleteFromPosition(0);
linkedList.display();
console.log(linkedList.search(2));
console.log(linkedList.search(3));
linkedList.update(1, 3);
linkedList.insertAtEnd(6);
linkedList.insertAtEnd(7);
linkedList.display();
linkedList.reverse();
linkedList.display();
linkedList.reverseRecur();
linkedList.display();
