const insertionSort = (nums = []) => {
  let n = nums.length;

  for (let i = 1; i < n; i++) {
    let num = nums[i];

    let j = i - 1;
    while (nums[j] > num && j >= 0) {
      nums[j + 1] = nums[j];
      j--;
    }

    nums[j + 1] = num;
  }

  return nums;
};

function recursiveInsertion(arr, index = 1) {
  if (index === arr.length) return arr;

  let j = index - 1;
  let num = arr[index];
  while (arr[j] > num && j >= 0) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = num;

  return recursiveInsertion(arr, index + 1);
}

function insertionSort2(arr) {
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    // Shift elements greater than key to one position ahead
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Place the key at its correct position
    arr[j + 1] = key;
  }

  return arr;
}

const res = recursiveInsertion([3, 1, 4, 2, 7, 5]);
console.log(res);
