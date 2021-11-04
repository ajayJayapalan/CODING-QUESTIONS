// Find kth smallest item in an array 1

const input = [2, 5, 22, 75, 44, 100];

// 1. Paritioning using pivot and recursively iterating.

/* 

time : O(kn)
space : O(1)

*/

const swap = (a, b) => [b, a];

const partition = (arr = [], low = 0, high = arr.length) => {
  let pivot = arr[high];
  let j = low;
  for (let i = low; i < high; i++) {
    if (arr[i] < pivot) {
      [arr[j], arr[i]] = swap(arr[j], arr[i]);
      j++;
    }
  }
  [arr[high], arr[j]] = swap(arr[high], arr[j]);
  return { j, arr };
};

const KthElement = (arr = [], k, left = 0, right = arr.length - 1) => {
  let lowIndex = partition(arr, left, right);
  if (k - 1 === lowIndex.j) {
    return arr[lowIndex.j];
  } else if (k - 1 < lowIndex.j) {
    return KthElement(arr, k, left, lowIndex.j - 1);
  } else {
    return KthElement(arr, k, lowIndex.j + 1, right);
  }
};

const driverCode = (input, k) => {
  const result = KthElement(input, k);
  /* for demonstration */
  const sortArray = input.sort((a, b) => a - b);
  console.log("Sorted Array : ", sortArray);
  console.log("Result suppose to get : ", sortArray[k - 1]);
  /* --- ------------- */
  console.log("Result what we get : ", result);
};

driverCode(input, 4);
