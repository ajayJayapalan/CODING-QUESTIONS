class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.value = value;
    }
  }

  delete(value) {
    if (this.head === null) return -1;
    if (this.head.data === value) {
      this.head = this.head.next;
      return 1;
    }

    let prev = null;
    let current = this.head;

    while (current) {
      if (current.data === value) {
        prev.next = current.next;
        break;
      }
      prev = current;
      current = current.next;
    }
  }

  update(value) {
    if (this.head === null) return -1;

    let current = this.head;
    while (current) {
      if (current.data === value) {
        current.data = value;
        break;
      }
      current = current.next;
    }
  }

  search(value) {
    let current = this.head;

    while (current) {
      if (current.data === value) return value;
      current = current.next;
    }
  }

  print() {
    let result = "";
    let current = this.head;

    while (current) {
      result += current.data + " => ";
      current = current.next;
    }
    result += "null";
  }

  size() {
    let length = 0;

    let current = this.head;
    while (current) {
      length++;
      current = current.next;
    }

    return length;
  }
}
