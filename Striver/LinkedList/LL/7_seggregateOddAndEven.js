class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const segOddAndEven2 = (list) => {
  let evenHead = null;
  let oddHead = null;
  let evenTail = null;
  let oddTail = null;

  let current = list;
  while (current) {
    if (current.value % 2 === 0) {
      if (evenTail === null) {
        evenTail = new Node(current.value);
        evenHead = evenTail;
      } else {
        evenTail.next = new Node(current.value);
        evenTail = evenTail.next;
      }
    } else {
      if (oddTail === null) {
        oddTail = new Node(current.value);
        oddHead = oddTail;
      } else {
        oddTail.next = new Node(current.value);
        oddTail = oddTail.next;
      }
    }
    current = current.next;
  }

  evenTail.next = oddHead;

  return evenHead;
};

const segOddAndEven = (list) => {
  let oddTail = null;
  let evenTail = null;
  let oddHead = null;
  let evenHead = null;

  let current = list;
  while (current) {
    if (current.value % 2 === 0) {
      if (evenTail === null) {
        evenHead = current;
        evenTail = current;
      } else {
        evenTail.next = current;
        evenTail = current;
      }
    } else {
      if (oddTail === null) {
        oddHead = current;
        oddTail = current;
      } else {
        oddTail.next = current;
        oddTail = current;
      }
    }
    current = current.next;
  }

  oddTail.next = null;
  evenTail.next = oddHead;

  return evenHead;
};

let list = new Node(1);
list.next = new Node(2);
list.next.next = new Node(3);
list.next.next.next = new Node(4);
list.next.next.next.next = new Node(5);
list.next.next.next.next.next = new Node(6);
list.next.next.next.next.next.next = new Node(7);

list = segOddAndEven2(list);

let current = list;
while (current) {
  console.log(current.value);
  current = current.next;
}
