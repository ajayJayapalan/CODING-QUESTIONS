const { MinHeap } = require("./00_imports");

class KthLargestElement {
  constructor(k, nums = []) {
    this.k = k;
    this.heap = new MinHeap();

    if (k < 0 || k > nums.length) {
      throw new Error("Kth largest doesn't exist !");
    }
    for (let num of nums) {
      this.add(num);
    }
  }

  top() {
    return this.heap.peekTop();
  }

  add(num) {
    const isUnderCapacity = this.heap.size() < this.k;
    if (isUnderCapacity) {
      this.heap.insert(num);
      return this.top();
    }

    const isLarger = num > this.top();
    if (isLarger) {
      this.heap.removeSmallest();
      this.heap.insert(num);
    }

    let top = this.top();
    // this.heap.display();
    console.log("adding ", num, ":", top);
    return top;
  }
}

let kthLargest = new KthLargestElement(3, [4, 5, 8, 2]);
kthLargest.add(3);
kthLargest.add(5);
kthLargest.add(10);
kthLargest.add(9);
kthLargest.add(4);
