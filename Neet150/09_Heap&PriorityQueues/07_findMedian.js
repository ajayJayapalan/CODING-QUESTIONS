const { MinHeap, MaxHeap } = require("./00_imports");

class MedianFinder {
  constructor() {
    this.maxLeftHeap = new MaxHeap(); // left heap
    this.minRightHeap = new MinHeap(); // right heap
    this.median = null;
  }

  balanceHeaps() {
    const leftSize = this.maxLeftHeap.size();
    const rightSize = this.minRightHeap.size();

    const sizeDiff = leftSize - rightSize;
    const isBalanced = Math.abs(sizeDiff) < 2;
    if (isBalanced) return;

    if (sizeDiff < 0) {
      // large right size
      const minTop = this.minRightHeap.removeSmallest();
      this.maxLeftHeap.insert(minTop);
    } else {
      // large left size
      const maxTop = this.maxLeftHeap.removeLargest();
      this.minRightHeap.insert(maxTop);
    }
    this.balanceHeaps();
  }

  setMedian() {
    let maxTop = this.maxLeftHeap.peekTop();
    let minTop = this.minRightHeap.peekTop();

    let leftSize = this.maxLeftHeap.size();
    let rightSize = this.minRightHeap.size();

    let sizeDiff = leftSize - rightSize;
    // [-1, 0, 1] because it is balanced.
    if (sizeDiff === 0) {
      this.median = ((maxTop + minTop) / 2).toFixed(1);
    } else if (sizeDiff === -1) {
      this.median = minTop;
    } else if (sizeDiff === 1) {
      this.median = maxTop;
    }
  }

  addNum(num) {
    if (this.maxLeftHeap._isEmpty()) {
      this.maxLeftHeap.insert(num);
      this.median = num;
    } else if (this.minRightHeap._isEmpty()) {
      let maxTop = this.maxLeftHeap.peekTop();
      if (maxTop > num) {
        this.maxLeftHeap.removeLargest();
        this.minRightHeap.insert(maxTop);
        this.maxLeftHeap.insert(num);
      } else {
        this.minRightHeap.insert(num);
      }
      this.median = ((num + maxTop) / 2).toFixed(1);
    } else {
      if (num <= this.median) {
        this.maxLeftHeap.insert(num);
      } else {
        this.minRightHeap.insert(num);
      }
      this.balanceHeaps();
      this.setMedian();
    }
  }

  findMedian() {
    console.log("MEDIAN :", this.median);
    return this.median;
  }
}

const medianFinder = new MedianFinder();
medianFinder.addNum(1); // arr = [1]
medianFinder.addNum(2); // arr = [1, 2]
medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3); // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0
