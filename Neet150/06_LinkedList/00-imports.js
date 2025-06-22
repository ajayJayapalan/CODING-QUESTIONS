class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }

  appendArray(list) {
    let prev = null;
    for (let item of list) {
      if (prev === null) {
        const node = new ListNode(item);
        prev = node;
        this.head = prev;
      } else {
        prev.next = new ListNode(item);
        prev = prev.next;
      }
    }
  }
}

module.exports = { LinkedList, ListNode };
