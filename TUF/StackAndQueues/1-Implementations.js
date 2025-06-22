class StackUsingArray {
  constructor() {
    this.store = [];
  }

  push(value) {
    this.store.push(value);
  }

  pop() {
    return this.store.pop();
  }

  peek() {
    return this.store.at(-1);
  }

  size() {
    return this.store.length;
  }

  display() {
    console.log(this.store);
  }
}

class QueueUsingArray {
  constructor() {
    this.store = [];
  }

  enqueue(value) {
    this.store.push(value);
  }

  dequeue() {
    const value = this.store[0];

    for (let i = 0; i < this.store.length - 1; i++) {
      this.store[i] = this.store[i + 1];
    }
    this.store.pop();

    return value;
  }

  peek() {
    return this.store[0];
  }

  size() {
    return this.store.length;
  }

  display() {
    console.log(this.store);
  }
}

class StackUsingTwoQueue {
  constructor() {
    this.store = new QueueUsingArray();
    this.temp = new QueueUsingArray();
  }

  push(value) {
    this.temp.enqueue(value);

    let n = this.store.size();
    for (let i = 0; i < n; i++) {
      let num = this.store.dequeue();
      this.temp.enqueue(num);
    }

    [this.store, this.temp] = [this.temp, this.store];
  }

  pop() {
    return this.store.dequeue();
  }

  peek() {
    return this.store.peek();
  }

  size() {
    return this.store.size();
  }
}

class StackUsingOneQueue {
  constructor() {
    this.store = new QueueUsingArray();
  }

  push(value) {
    this.store.enqueue(value);

    let n = this.store.size();

    for (let i = 0; i < n - 1; i++) {
      let num = this.store.dequeue();
      this.store.enqueue(num);
    }
  }

  pop() {
    return this.store.dequeue();
  }

  peek() {
    return this.store.peek();
  }

  size() {
    return this.store.size();
  }
}

class QueueUsingTwoStack {
  constructor() {
    this.store = new StackUsingArray();
    this.temp = new StackUsingArray();
  }

  enqueue(num) {}
}
