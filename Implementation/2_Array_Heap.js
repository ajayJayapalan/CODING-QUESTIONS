/* Implementaion of Heap using Array */

/* 

- first element should be null
- left child : i * 2
- right child : i * 2 + 1

- find parent from left child (even) => i / 2
- find parent from right child (odd) => i / 2 - 1

*/

/* MY HEAP IMPLEMENTATION */

const { log } = console;

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  _getLastIndex() {
    return this.heap.length - 1;
  }

  _getParentIndex(index) {
    let parentIndex;
    if (index % 2 === 0) {
      parentIndex = index / 2;
    } else {
      parentIndex = parseInt(index / 2);
    }
    return parentIndex;
  }

  _swap(a, b) {
    return [b, a];
  }

  display() {
    return this.heap;
  }

  showHeap() {
    for (let i = 0; i < this.heap.length; i++) {
      let item = this.heap[i];
      if (item === null && this.heap[this._getParentIndex(i)] === null) {
        continue;
      }
      if (this.heap[this._getParentIndex(i)] === null) {
        console.log(`${item} is the root element`);
        continue;
      }
      console.log(`parent of ${item} is ${this.heap[this._getParentIndex(i)]}`);
    }
  }

  _getChildrenIndex(index) {
    return {
      left: index * 2,
      right: index * 2 + 1,
    };
  }

  _getIndexOfSmallChild(index) {
    let { left, right } = this._getChildrenIndex(index);
    if (
      (!this.heap[left] && !this.heap[right]) ||
      (this.heap[index] < this.heap[right] &&
        this.heap[index] < this.heap[left])
    ) {
      return false;
    }

    let smallChildIndex = this.heap[left] > this.heap[right] ? right : left;
    return smallChildIndex;
  }

  heapify(arr) {
    arr.forEach((item) => this.add(item));
  }

  add(item) {
    if (this.heap.length === 1) {
      this.heap.push(item);
    } else {
      this.heap.push(item);
      let newItemIndex = this._getLastIndex();
      let parentIndex = this._getParentIndex(newItemIndex);

      while (this.heap[parentIndex] > this.heap[newItemIndex]) {
        [this.heap[parentIndex], this.heap[newItemIndex]] = this._swap(
          this.heap[parentIndex],
          this.heap[newItemIndex]
        );

        newItemIndex = parentIndex;
        parentIndex = this._getParentIndex(newItemIndex);
      }
    }
  }

  top() {
    return this.heap[1];
  }

  remove() {
    if (this.heap.length === 1) {
      return null;
    } else if (this.heap.length === 2) {
      let item = this.heap[this._getLastIndex()];
      delete this.heap[this._getLastIndex()];
      return item;
    } else {
      /* 
         - move last element to root
         - delete last element
         - check which child is smallest until both child greater than root
            - swap

      */
      const item = this.heap[1];
      this.heap[1] = this.heap[this._getLastIndex()];
      this.heap.pop();

      let parentIndex = 1;

      while (this._getIndexOfSmallChild(parentIndex)) {
        let childIndex = this._getIndexOfSmallChild(parentIndex);
        [this.heap[parentIndex], this.heap[childIndex]] = this._swap(
          this.heap[parentIndex],
          this.heap[childIndex]
        );
        parentIndex = childIndex;
      }

      return item;
    }
  }
}

// let arr = [2, 5, 22, 75, 44, 100];
// let k = 5;
// const heap = new MinHeap();
// arr.forEach((item) => heap.add(item));
// let i = 0;
// console.log("display ===", heap.display());
// while (i < k - 1) {
//   console.log(heap.remove());
//   console.log("display ===", heap.display());
//   i++;
// }

// const heap = new MinHeap();
// log(heap.display());
// heap.add(1);
// heap.add(5);
// heap.add(4);
// heap.add(6);
// heap.add(2);
// heap.add(3);
// heap.add(7);
// heap.add(8);
// heap.add(9);
// heap.add(10);
// log(heap.display());
// heap.remove();
// heap.remove();
// log(heap.display());
// heap.showHeap();

module.exports = {
  MinHeap,
};
