class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

const sortList = (head) => {
  let zeroHead = null;
  let zeroTail = null;

  let oneHead = null;
  let oneTail = null;

  let twoHead = null;
  let twoTail = null;

  let current = head;

  const updatePointers = (head, tail, current) => {
    if (head === null) {
      head = current;
    } else {
      tail.next = current;
    }
    tail = current;
    tail.next = null;

    return [head, tail];
  };

  while (current) {
    let next = current.next;
    if (current.data === 0) {
      [zeroHead, zeroTail] = updatePointers(zeroHead, zeroTail, current);
    } else if (current.data === 1) {
      [oneHead, oneTail] = updatePointers(oneHead, oneTail, current);
    } else if (current.data === 2) {
      [twoHead, twoTail] = updatePointers(twoHead, twoTail, current);
    }

    current = next;
  }

  let newHead = twoHead;
  if (oneHead !== null) {
    oneTail.next = newHead;
    newHead = oneHead;
  }

  if (zeroHead !== null) {
    zeroTail.next = newHead;
    newHead = zeroHead;
  }

  return newHead;
};

const node = new Node(1, new Node(2, new Node(2, new Node(1, new Node(2)))));

const res = sortList(node);
console.log(JSON.stringify(res, null, 2));
