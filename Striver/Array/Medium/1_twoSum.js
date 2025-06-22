// brute force
const twoSum = (arr, k) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let sum = arr[i] + arr[j];
      if (sum === k) {
        return {
          value: "YES",
          index: [i, j],
        };
      }
    }
  }

  return {
    value: "NO",
    index: [-1, -1],
  };
};

// Hashing
const twoSum2 = (arr, k) => {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let rem = k - arr[i];
    if (map.has(rem)) {
      const index = [map.get(rem), i];
      return {
        value: "YES",
        index,
      };
    }

    map.set(arr[i], i);
  }

  return {
    value: "NO",
    index: [-1, 1],
  };
};

// two pointer
const twoSum3 = (arr, k) => {
  arr.sort((a, b) => a - b);

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === k) {
      return [left, right];
    } else if (sum < k) {
      left++;
    } else {
      right--;
    }
  }

  return [-1, -1];
};

const input = [2, 6, 5, 8, 11];
const output = twoSum3(input, 15);
console.log({ output });
