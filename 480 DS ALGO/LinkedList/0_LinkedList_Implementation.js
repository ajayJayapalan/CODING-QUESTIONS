/* 

    let myLinkedList = {
	head:{         // head
		value: 1,
		next: {
			value: 2,
			next:{
				value: 3,
				next: null // null terminated
			}
		}
	}
}

*/

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  // insert at the end
  append(value) {
    let node = {
      value,
      next: null,
    };
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  _getNodeAtIndex(index) {
    let i = 0;
    let node = this.head;
    while (i < index) {
      if (node.next === null) {
        return new Error("Specefiy valid index");
      }
      node = node.next;
      i++;
    }
    return node;
  }

  //insert at the begin
  prepend(value) {
    let node = {
      value,
      next: this.head,
    };
    this.head = node;
    this.length++;
  }

  // insert at specefic index
  insert(value, index) {
    if (index > this.length - 1) {
      return new Error("Specefied index is invalid");
    }
    if (index === 0) {
      this.prepend(value);
      return;
    }
    let node = this._getNodeAtIndex(index - 1);
    let newNode = {
      value,
      next: node.next,
    };
    node.next = newNode;
    if (index === this.length - 1) {
      this.tail = newNode.next;
    }
    this.length++;
    return;
  }

  _deleteFromFirst() {
    if (this.head.next !== null) {
      this.head = this.head.next;
      this.length--;
      return;
    } else {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return;
    }
  }

  _deleteFromLast() {
    let node = this.head;
    while (true) {
      node = node.next;
      if (node.next.next === null) {
        break;
      }
    }
    node.next = null;
    this.tail = node;
  }

  // delete at specefic index
  delete(index) {
    if (index >= this.length) {
      return new Error("Specefied index is invalid");
    }
    if (index === 0) {
      return this._deleteFromFirst();
    }
    if (index === this.length - 1) {
      return this._deleteFromLast();
    }
    // delete from middle
    let node1 = this._getNodeAtIndex(index - 1);
    let node2 = node1.next.next;
    node1.next = node2;
    this.length--;
    console.log(node1, node2);
    return;
  }

  // lookup
  lookup(index) {
    let node = this._getNodeAtIndex(index);
    console.log(node.value);
    return node.value;
  }

  // traverse
  traverse() {
    let node = this.head;
    while (true) {
      console.log(node.value);
      node = node.next;
      if (node?.next === null) {
        console.log(node.value);
        return;
      }
    }
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(20);
myLinkedList.append(30);
myLinkedList.append(40);
myLinkedList.append(50);
myLinkedList.prepend(00);
myLinkedList.prepend(05);
// myLinkedList.lookup(6);
// myLinkedList.traverse();
myLinkedList.insert(2, 2);
console.log("===length===", myLinkedList.length);
myLinkedList.insert(2, myLinkedList.length - 1);
// console.log(myLinkedList);
myLinkedList.traverse();
console.log(myLinkedList);
console.log("-----------------------------");
myLinkedList.delete(myLinkedList.length - 2);
myLinkedList.traverse();
console.log(myLinkedList);
