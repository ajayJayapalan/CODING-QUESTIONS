const rotateArray = (nums = [], k) => {
  const findNextIndex = (index) => {
    return (index + k) % nums.length;
  };

  let flag = true;
  let i = 0;
  let temp = nums[i];
  while (flag) {
    const nextIndex = findNextIndex(i);
    if (nextIndex === 0) {
      flag = false;
    }
    const current = nums[nextIndex];
    nums[nextIndex] = temp;
    temp = current;
    i = nextIndex;
  }

  console.log(nums);
};

rotateArray([1, 2, 3, 4, 5, 6, 7], 3);
