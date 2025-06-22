const selectionSort = (nums = []) => {
  let n = nums.length;

  for (let i = 0; i < n - 1; i++) {
    let smallIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (nums[smallIndex] > nums[j]) {
        smallIndex = j;
      }
    }
    if (smallIndex !== i) {
      [nums[i], nums[smallIndex]] = [nums[smallIndex], nums[i]];
    }
  }

  return nums;
};

const res = selectionSort([3, 1, 4, 2, 7, 5]);
console.log(res);
