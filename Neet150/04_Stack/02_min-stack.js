/**
 * https://leetcode.com/problems/min-stack
 * Time O(1) | Space O(N)
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
class MinStack {
  /**
   * @constructor
   */
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val, { minStack } = this) {
    this.stack.push(val);

    const currentMin = this.top(minStack);
    if (currentMin !== null && val <= currentMin) {
      this.minStack.push(val);
    }
  }

  /**
   * @return {void}
   */
  pop({ stack, minStack } = this) {
    const popped = stack.pop();

    const currentMin = this.top(minStack);
    if (currentMin !== null && currentMin === popped) {
      this.minStack.pop();
    }
  }

  /**
   * @param {Array}
   * @return {number}
   */
  top(stack = this.stack) {
    return stack.length > 0 ? stack[stack.length - 1] : null;
  }

  /**
   * @return {number}
   */
  getMin(minStack = this.minStack) {
    const currentMin = this.top(minStack);
    return currentMin;
  }
}
