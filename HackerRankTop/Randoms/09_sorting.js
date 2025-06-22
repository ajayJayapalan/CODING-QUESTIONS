const quickSort = (nums = [], low = 0, high = nums.length - 1) => {
  if (low < high) {
    const pivotIndex = parition(nums, low, high);
    quickSort(nums, low, pivotIndex - 1);
    quickSort(nums, pivotIndex + 1, high);
  }
  return arr;
};

const parition = (nums = [], low, high) => {
  let i = low - 1;
  let pivot = nums[high];

  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
};
