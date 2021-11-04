// Find kth smallest item in an array 2

const { MinHeap } = require("../../Implementation/2_Array_Heap");

const input = [2, 5, 22, 75, 44, 100];

// 1. Using Heap.

/* 

time : O(n + klogn) 
            - heapify : n
            - remove k times from minHeap : k(logn)
space : O(1) 

*/

const driverCode = (arr, k) => {
  const heap = new MinHeap();
  //arr.forEach((item) => heap.add(item));
  heap.heapify(arr);
  let i = 0;
  while (i < k - 1) {
    heap.remove();
    console.log(heap.display());
    i++;
  }
  /* for demonstration */
  const sortArray = arr.sort((a, b) => a - b);
  console.log("Sorted Array : ", sortArray);
  console.log("Result suppose to get : ", sortArray[k - 1]);
  /* --- ------------- */
  console.log("Result what we get : ", heap.top());
};
let k = process.argv[2] || 1;
driverCode(input, k);
