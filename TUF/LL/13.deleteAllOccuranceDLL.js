const deleteAllOccurance = (head, target) => {
  let current = head;
  let newHead = head;

  while (current) {
    if (current.data === target) {
      if (current.prev === null) {
        // first element;
        newHead = current.next;
        if (current.next !== null) {
          current.next.prev = null;
        }
      } else if (current.next === null) {
        // last element
        if (current.prev !== null) {
          current.prev.next = null;
          current.prev = null;
        }
      } else {
        current.prev.next = current.next;
        current.next.prev = current.prev;
      }
    }
    current = current.next;
  }

  return newHead;
};

class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

function createDoublyLinkedList(values) {
  if (values.length === 0) return null;

  let head = new Node(values[0]);
  let current = head;

  for (let i = 1; i < values.length; i++) {
    let newNode = new Node(values[i]);
    current.next = newNode;
    newNode.prev = current;
    current = newNode;
  }

  return head;
}

function printDoublyLinkedList(head) {
  let current = head;
  let forward = "";
  let tail = null;

  // Forward traversal
  while (current) {
    forward += current.data + " <-> ";
    if (!current.next) tail = current; // Store last node for reverse traversal
    current = current.next;
  }
  forward += "null";
  console.log("Forward:", forward);
}

// Create the doubly linked list with the given values
const values = [2, 2, 10, 8, 4, 2, 5, 2];
const head = createDoublyLinkedList(values);

// ✅ You can now traverse from head using head.next and head.prev

const res = deleteAllOccurance(head, 2);
printDoublyLinkedList(res);
