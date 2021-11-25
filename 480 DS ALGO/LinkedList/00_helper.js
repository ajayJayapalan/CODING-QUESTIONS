const displayAsArray = (node, str = "") => {
  let clone = { ...node };
  const nodeArr = [];
  // console.log("===clone===", clone);
  let i = 0;
  while (clone !== null) {
    nodeArr.push(clone.data);
    clone = clone.next;
    i++;
  }
  console.log(str, nodeArr);
};

class LinkedList {
  constructor(value) {
    this.head = {
      data: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(newValue) {
    let node = {
      data: newValue,
      next: null,
    };
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }
  displayAsArray() {
    let nodes = [];
    let temp = this.head;
    while (temp !== null) {
      nodes.push(temp.data);
      temp = temp.next;
    }
    console.log(nodes);
  }
  display() {
    console.log(this.head);
  }
}

module.exports = {
  displayAsArray,
  LinkedList,
};
