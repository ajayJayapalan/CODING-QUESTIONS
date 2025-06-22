const mergeSort = (nums = []) => {
  if (nums.length === 1) return nums;

  let mid = Math.floor(nums.length / 2);

  const left = mergeSort(nums.slice(0, mid));
  const right = mergeSort(nums.slice(mid));

  return merge(left, right);
};

const merge = (left, right) => {
  let sorted = [];

  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sorted.push(left[i]);
      i++;
    } else {
      sorted.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    sorted.push(left[i]);
    i++;
  }

  while (j < right.length) {
    sorted.push(right[j]);
    j++;
  }

  return sorted;
};

const res = mergeSort([3, 1, 4, 2, 7, 5]);
console.log(res);
