const bubbleSort = (nums = []) => {
  let n = nums.length;

  let swapped = false;

  do {
    swapped = false;

    for (let i = 0; i < n - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        swapped = true;
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
      }
    }

    n--;
  } while (swapped);

  return nums;
};

const recursiveBubbleSort = (nums) => {};

const res = bubbleSort([3, 1, 4, 2, 7, 5]);
console.log(res);
