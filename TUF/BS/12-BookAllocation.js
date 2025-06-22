const canbookAllocation = (nums = [], students, min) => {
  let allocatedCount = 1;
  let allocatedMin = min;

  for (let i = 0; i < nums.length; i++) {
    if (allocatedMin < nums[i]) {
      allocatedCount++;
      allocatedMin = min;
    }

    allocatedMin = allocatedMin - nums[i];
  }

  return allocatedCount <= students;
};

const bookAllocation = (nums = [], students) => {
  let min = Math.max(...nums);
  let max = nums.reduce((acc, cur) => acc + cur, 0);

  for (let i = min; i <= max; i++) {
    if (canbookAllocation(nums, students, i)) {
      return i;
    }
  }
  return -1;
};

const bookAllocation2 = (nums = [], students) => {
  let left = Math.max(...nums);
  let right = nums.reduce((acc, cur) => acc + cur, 0);

  let ans = left;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (canbookAllocation(nums, students, mid)) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return ans;
};

const res = bookAllocation2([12, 34, 67, 90], 2);
console.log(res);
