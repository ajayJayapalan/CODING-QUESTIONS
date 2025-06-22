class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insert(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
  }

  delete(value) {
    if (!this.head) return false;

    let current = this.head;

    while (current) {
      if (current.data === value) {
        // If it's the head
        if (current === this.head) {
          this.head = current.next;
          if (this.head) this.head.prev = null;
          else this.tail = null; // list is now empty
        }
        // If it's the tail
        else if (current === this.tail) {
          this.tail = current.prev;
          this.tail.next = null;
        }
        // Middle node
        else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }
        return true;
      }
      current = current.next;
    }

    return false; // not found
  }

  reverse() {
    let current = this.head;
    let temp = null;

    while (current) {
      // Swap next and prev
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }

    // After reversal, swap head and tail
    if (temp !== null) {
      this.head = temp.prev;
    }
  }

  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + " <=> ";
      current = current.next;
    }
    console.log(result + "null");
  }
}
