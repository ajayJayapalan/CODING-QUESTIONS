class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

// space : n
const sortList = (list) => {
  let newHead = null;

  const addToSortedList = (node) => {
    if (newHead === null) {
      newHead = new Node(node.value);
    } else {
      let current = newHead;
      let prev = null;
      while (current) {
        if (current.value > node.value) {
          if (prev === null) {
            newHead = new Node(node.value);
            newHead.next = current;
          } else {
            prev.next = new Node(node.value);
            prev.next.next = current;
          }
          break;
        } else if (current.next === null) {
          current.next = new Node(node.value);
          break;
        }
        prev = current;
        current = current.next;
      }
    }
  };

  let temp = list;
  while (temp) {
    addToSortedList(temp);
    temp = temp.next;
  }

  console.log({ newHead });
  return newHead;
};

const sortList2 = (list) => {
  let newHead = null;

  const addToSort = (node) => {
    if (newHead === null) {
      newHead = node;
    } else {
      let current = newHead;
      let prev = null;
      while (current) {
        if (current.value > node.value) {
          if (prev === null) {
            newHead = node;
            newHead.next = current;
          } else {
            prev.next = node;
            prev.next.next = current;
          }
          break;
        } else if (current.next === null) {
          current.next = node;
          break;
        }
        prev = current;
        current = current.next;
      }
    }
  };

  let temp = list;
  while (temp) {
    let next = temp.next;
    temp.next = null;
    addToSort(temp);
    temp = next;
  }

  return newHead;
};

const sort = (left, right) => {};

const split = (node) => {};

const mergeSort = (list) => {};

let list = new Node(3);
list.next = new Node(11);
list.next.next = new Node(5);
list.next.next.next = new Node(23);
list.next.next.next.next = new Node(10);
list.next.next.next.next.next = new Node(2);
list.next.next.next.next.next.next = new Node(7);

list = sortList2(list);

let current = list;
while (current) {
  console.log(current.value);
  current = current.next;
}
