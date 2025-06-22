/* 

Heap :
childrenIndexs = [(parentIndex * 2) + 1, (parentIndex * 2) + 2];
parentIndex = [(childIndex - 1) / 2]

*/

class Heap {
  constructor() {
    this.heap = [];
  }

  _swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  _getChildrenIndex(parentIndex) {
    return [parentIndex * 2 + 1, parentIndex * 2 + 2];
  }

  _getChildrenCount(parentIndex) {
    let count = 0;
    let [leftIndex, rightIndex] = this._getChildrenIndex(parentIndex);
    if (this.heap[leftIndex] !== undefined) count++;
    if (this.heap[rightIndex] !== undefined) count++;

    return count;
  }

  _getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  _getLastIndex() {
    return this.heap.length - 1;
  }

  _removeLast() {
    this.heap.pop();
  }

  _isEmpty() {
    return this.heap.length === 0;
  }

  peekTop() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  display() {
    console.log("heap =>", this.heap);
  }
}

class MinHeap extends Heap {
  constructor() {
    super();
  }

  heapBottomUp(index) {
    const parenIndex = this._getParentIndex(index);
    if (parenIndex < 0) return;
    if (this.heap[parenIndex] < this.heap[index]) return;

    this._swap(parenIndex, index);
    this.heapBottomUp(parenIndex);
  }

  heapTopDown(index) {
    const [leftIndex, rightIndex] = this._getChildrenIndex(index);
    const childrenCount = this._getChildrenCount(index);

    let smallestChildIndex = null;

    if (childrenCount === 0) return;
    if (childrenCount === 1) {
      if (this.heap[leftIndex] > this.heap[index]) {
        return;
      } else {
        smallestChildIndex = leftIndex;
      }
    }
    if (childrenCount === 2) {
      if (
        Math.min(this.heap[leftIndex], this.heap[rightIndex]) > this.heap[index]
      ) {
        return;
      } else {
        smallestChildIndex =
          this.heap[leftIndex] < this.heap[rightIndex] ? leftIndex : rightIndex;
      }
    }

    this._swap(index, smallestChildIndex);
    this.heapTopDown(smallestChildIndex);
  }

  insert(num) {
    if (this._isEmpty()) {
      this.heap.push(num);
      return;
    }

    this.heap.push(num);
    let index = this._getLastIndex();

    this.heapBottomUp(index);
  }

  removeSmallest() {
    let lastIndex = this._getLastIndex();
    let top = this.peekTop();
    this._swap(0, lastIndex);
    this._removeLast();

    this.heapTopDown(0);

    return top;
  }
}

class MaxHeap extends Heap {
  constructor() {
    super();
  }

  heapBottomUp(index) {
    const parenIndex = this._getParentIndex(index);
    if (parenIndex < 0) return;
    if (this.heap[parenIndex] > this.heap[index]) return;

    this._swap(parenIndex, index);
    this.heapBottomUp(parenIndex);
  }

  heapTopDown(index) {
    const [leftIndex, rightIndex] = this._getChildrenIndex(index);
    const childrenCount = this._getChildrenCount(index);

    let largestChildIndex = null;

    if (childrenCount === 0) return;
    if (childrenCount === 1) {
      if (this.heap[leftIndex] < this.heap[index]) {
        return;
      } else {
        largestChildIndex = leftIndex;
      }
    }
    if (childrenCount === 2) {
      if (
        Math.max(this.heap[leftIndex], this.heap[rightIndex]) < this.heap[index]
      ) {
        return;
      } else {
        largestChildIndex =
          this.heap[leftIndex] > this.heap[rightIndex] ? leftIndex : rightIndex;
      }
    }

    this._swap(index, largestChildIndex);
    this.heapTopDown(largestChildIndex);
  }

  insert(num) {
    if (this._isEmpty()) {
      this.heap.push(num);
      return;
    }

    this.heap.push(num);
    let index = this._getLastIndex();

    this.heapBottomUp(index);
  }

  removeLargest() {
    let lastIndex = this._getLastIndex();
    let top = this.peekTop();
    this._swap(0, lastIndex);
    this._removeLast();

    this.heapTopDown(0);

    return top;
  }
}

class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  // Add an element with a given priority to the queue
  enqueue(value, priority) {
    const newNode = { value, priority };
    this.heap.push(newNode);
    this.bubbleUp();
  }

  // Remove and return the element with the highest priority
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown();
    return root;
  }

  // Check if the priority queue is empty
  isEmpty() {
    return this.heap.length === 0;
  }

  // Move the element up to its correct position
  bubbleUp() {
    let currentIndex = this.heap.length - 1;
    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (this.heap[currentIndex].priority >= this.heap[parentIndex].priority) {
        break;
      }
      // Swap the current node with its parent
      [this.heap[currentIndex], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[currentIndex],
      ];
      currentIndex = parentIndex;
    }
  }

  // Move the element down to its correct position
  sinkDown() {
    let currentIndex = 0;
    const length = this.heap.length;
    while (true) {
      const leftChildIndex = 2 * currentIndex + 1;
      const rightChildIndex = 2 * currentIndex + 2;
      let swapIndex = null;

      if (leftChildIndex < length) {
        if (
          this.heap[leftChildIndex].priority < this.heap[currentIndex].priority
        ) {
          swapIndex = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        if (
          (swapIndex === null &&
            this.heap[rightChildIndex].priority <
              this.heap[currentIndex].priority) ||
          (swapIndex !== null &&
            this.heap[rightChildIndex].priority <
              this.heap[leftChildIndex].priority)
        ) {
          swapIndex = rightChildIndex;
        }
      }

      if (swapIndex === null) {
        break;
      }

      // Swap the current node with the child node with higher priority
      [this.heap[currentIndex], this.heap[swapIndex]] = [
        this.heap[swapIndex],
        this.heap[currentIndex],
      ];
      currentIndex = swapIndex;
    }
  }
}

// const minHeap = new MinHeap();
// minHeap.insert(5);
// minHeap.insert(4);
// minHeap.insert(3);
// minHeap.insert(2);
// minHeap.insert(1);
// minHeap.display();
// minHeap.removeSmallest();
// minHeap.display();
// minHeap.removeSmallest();
// minHeap.display();

module.exports = { Heap, MinHeap, MaxHeap, PriorityQueue };
