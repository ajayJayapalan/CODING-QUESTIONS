class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(value) {
    this.stack.push();

    if (this.minStack.length === 0 || value <= this.minStack.at(-1)) {
      this.minStack.push(value);
    }
  }

  pop() {
    const value = this.stack.pop();

    if (value === this.minStack.at(-1)) {
      this.minStack.pop();
    }
  }

  getMin() {
    return this.minStack.at(-1);
  }

  top() {
    return this.stack.at(-1);
  }
}
