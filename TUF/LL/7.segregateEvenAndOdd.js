class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

const segregateEvenAndOdd = (head) => {
  let current = head;

  let evenHead = null;
  let evenTail = null;
  let oddHead = null;
  let oddTail = null;

  while (current) {
    let next = current.next;
    if (current.data % 2 === 0) {
      if (evenHead === null) {
        evenHead = current;
      } else {
        evenTail.next = current;
      }
      evenTail = current;
      evenTail.next = null;
    } else {
      if (oddHead === null) {
        oddHead = current;
      } else {
        oddTail.next = current;
      }
      oddTail = current;
      oddTail.next = null;
    }
    current = next;
  }

  evenTail.next = oddHead;

  return evenHead;
};

const node = new Node(
  1,
  new Node(2, new Node(3, new Node(4, new Node(5, new Node(6)))))
);

const res = segregateEvenAndOdd(node);
console.log(JSON.stringify(res, null, 2));
