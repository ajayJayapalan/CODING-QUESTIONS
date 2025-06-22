class LRU_Array {
  constructor(capacity) {
    this.cache = [];
    this.capacity = capacity;
  }

  get(key) {
    for (let i = 0; i < this.cache.length; i++) {
      if (this.cache[i][0] === key) {
        const item = this.cache.splice(i, 1)[0];
        this.cache.push(item);

        return item[1];
      }
    }

    return -1;
  }

  put(key, value) {
    for (let i = 0; i < this.cache.length; i++) {
      if (this.cache[i][0] === key) {
        this.cache.splice(i, 1);
        this.cache.push([key, value]);

        return;
      }
    }

    this.cache.push([key, value]);

    if (this.cache.length > this.capacity) {
      this.cache.shift();
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;

    this.head = new Node(null);
    this.tail = new Node(null);

    this.map = new Map();
  }

  add(node) {
    node.next = this.tail;
    node.prev = this.tail.prev;

    this.tail.prev.next = node;
    this.tail.prev = node;
  }

  remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  get(key) {
    if (this.map.has(key)) {
      let node = this.map.get(key);

      this.remove(node);
      this.add(node);

      return node.value;
    }

    return -1;
  }

  put(key, value) {
    if (this.map.has(key)) {
      let node = this.map.get(key);
      this.remove(node);
    }

    let newNode = new Node(value);
    this.add(newNode);

    if (this.map.size > this.capacity) {
      let lru = this.head.next;
      this.remove(lru);
      this.map.delete(key);
    }
  }
}
