const maxSubArrayLength1 = (arr, target) => {
  let max = -Infinity;
  // possible subarray
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += arr[k];

        if (sum === target) {
          max = Math.max(max, j + 1 - i);
        }
      }
    }
  }

  return max;
};
const maxSubArrayLength2 = (arr, target) => {
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];

      if (sum === target) {
        max = Math.max(max, j + 1 - i);
      }
    }
  }

  return max;
};
const maxSubArrayLength3 = (arr) => {
  let max = -Infinity;
  let prefixSum = 0;

  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i];

    if (prefixSum === 0) {
      max = i + 1;
    } else if (map.has(prefixSum)) {
      const index = map.get(prefixSum);
      max = Math.max(max, i - index);
    } else {
      map.set(prefixSum, i);
    }
  }

  return max;
};

const printSubArrayOfMaxLength = (arr = [], target) => {
  let max = -Infinity;
  let prefixSum = 0;
  const map = new Map();
  let startIndex = null;

  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i];

    if (prefixSum === target) {
      max = i + 1;
      startIndex = 0;
    } else if (map.has(prefixSum - target)) {
      let newMax = i - map.get(prefixSum - target);
      if (newMax > max) {
        max = newMax;
        startIndex = map.get(prefixSum - target) + 1;
      }
    } else {
      map.set(prefixSum, i);
    }
  }

  return arr.slice(startIndex, startIndex + max);
};

// console.log(maxSubArrayLength1([9, -3, 3, -1, 6, -5], 0)); // 8
// console.log(maxSubArrayLength2([9, -3, 3, -1, 6, -5], 0)); // 8
// console.log(maxSubArrayLength3([9, -3, 3, -1, 6, -5], 0)); // 8
// console.log(printSubArrayOfMaxLength([9, -3, 3, -1, 6, -5], 0)); // 8
console.log(printSubArrayOfMaxLength([4, -1, 3, -2, 4, 7, -2, 11], 5)); // 8
