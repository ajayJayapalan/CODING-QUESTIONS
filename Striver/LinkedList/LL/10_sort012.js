class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

const sort012 = (list) => {
  let oneHead = null;
  let oneTail = null;
  let twoHead = null;
  let twoTail = null;
  let zeroHead = null;
  let zeroTail = null;

  let temp = list;

  while (temp) {
    if (temp.value === 0) {
      if (zeroHead === null) {
        zeroHead = temp;
        zeroTail = temp;
      } else {
        zeroTail.next = temp;
        zeroTail = zeroTail.next;
      }
    } else if (temp.value === 1) {
      if (oneHead === null) {
        oneHead = temp;
        oneTail = temp;
      } else {
        oneTail.next = temp;
        oneTail = oneTail.next;
      }
    } else if (temp.value === 2) {
      if (twoHead === null) {
        twoHead = temp;
        twoTail = temp;
      } else {
        twoTail.next = temp;
        twoTail = twoTail.next;
      }
    }

    temp = temp.next;
  }

  let head = null;
  if (zeroHead) {
    head = zeroHead;
    zeroTail.next = oneHead ? oneHead : twoHead ? twoHead : null;
  }
  if (oneHead) {
    if (head === null) {
      head = oneHead;
    }
    oneTail.next = twoHead ? twoHead : null;
  }
  if (twoHead) {
    if (head === null) {
      head = twoHead;
    }
    twoTail.next = null;
  }

  return head;
};

let list = new Node(1);
list.next = new Node(2);
list.next.next = new Node(0);
list.next.next.next = new Node(0);
list.next.next.next.next = new Node(2);
list.next.next.next.next.next = new Node(1);
list.next.next.next.next.next.next = new Node(1);

list = sort012(list);

let current = list;
while (current) {
  console.log(current.value);
  current = current.next;
}
