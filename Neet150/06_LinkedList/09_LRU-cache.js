class Node {
  constructor(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;

    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  _append(node) {
    this.tail.next = node;
    this.tail = this.tail.next;
  }

  _remove(prev) {
    // if first node.
    if (prev === null) return this._removeFirst();

    let current = prev.next;
    prev.next = prev.next.next;
    current.next = null;
    return current;
  }

  _removeFirst() {
    let first = this.head;
    this.head = first.next;
    first.next = null;
    return first;
  }

  _search(key) {
    let curr = this.head;
    let prev = null;

    while (curr) {
      if (curr.key === key) return [curr, prev];
      prev = curr;
      curr = curr.next;
    }

    return [null, prev];
  }

  _create(key, value) {
    const node = new Node(key, value);
    if (this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
    this.length++;
  }

  _checkCapacity() {
    if (this.length > this.capacity) {
      this._removeFirst();
      this.length--;
    }
  }

  _swiftToEnd(prev) {
    const removedNode = this._remove(prev);
    this._append(removedNode);
  }

  get(key) {
    let [searchedNode, previousNode] = this._search(key);

    if (searchedNode === null) {
      console.log("get =>", -1);
      return -1;
    } else {
      const value = searchedNode.value;
      this._swiftToEnd(previousNode);

      console.log("get =>", value);
      return value;
    }
  }

  put(key, value) {
    let [searchedNode, previousNode] = this._search(key);

    if (searchedNode === null) {
      this._create(key, value);
      this._checkCapacity();
    } else {
      searchedNode.value = value;
      this._swiftToEnd(previousNode);
    }

    this.print();
  }

  print() {
    console.log(this.length, JSON.stringify(this.head, null, 2));
  }
}

let cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
cache.get(1); // return 1
cache.print();
cache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
cache.get(2); // returns -1 (not found)
cache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
cache.get(1); // return -1 (not found)
cache.get(3); // return 3
cache.get(4); // return 4
