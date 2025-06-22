class LRUCache {
  map = new Map();
  capacity = 0;
  constructor(cap) {
    this.capacity = cap;
  }

  get(key) {
    if (this.map.has(key)) {
      const value = this.map.get(key);
      this.map.delete(key);
      this.map.set(key, value);
      return this.map.get(key);
    } else {
      return null;
    }
  }

  put(key, value) {
    if (this.map.size < this.capacity) {
      this.map.set(key, value);
    } else {
      let firstKey = this.map.keys().next().value;
      this.map.delete(firstKey);
      this.map.set(key, value);
    }
  }

  display() {
    console.log(this.map.values());
  }
}

const cache = new LRUCache(3);
cache.put(1, 1001);
cache.put(2, 1002);
cache.put(3, 1003);
cache.display();
cache.get(2);
cache.display();
cache.get(1);
cache.display();
cache.put(4, 1004);
cache.display();
cache.get(2);
cache.display();
cache.put(5, 1005);
cache.display();
cache.get(1);
