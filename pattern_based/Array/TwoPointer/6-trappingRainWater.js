const trappingRainWater1 = (nums = []) => {
  let maxLeft = 0;
  const maxLeftArray = new Array(nums.length);
  let maxRight = 0;
  const maxRightArray = new Array(nums.length);

  for (let i = 0; i < nums.length; i++) {
    maxLeftArray[i] = maxLeft;
    maxLeft = Math.max(maxLeft, nums[i]);
    maxRightArray[nums.length - 1 - i] = maxRight;
    maxRight = Math.max(maxRight, nums[nums.length - 1 - i]);
  }

  let trappedWater = 0;
  for (let i = 1; i < nums.length - 1; i++) {
    let waterAtI = Math.min(maxLeftArray[i], maxRightArray[i]) - nums[i];
    if (waterAtI > 0) {
      trappedWater += waterAtI;
    }
  }

  return trappedWater;
};

const trappingRainWater2 = (nums = []) => {
  let left = 0;
  let leftMax = nums[0];
  let right = nums.length - 1;
  let rightMax = nums[nums.length - 1];
  let trappedWater = 0;

  while (left < right) {
    if (nums[left] < nums[right]) {
      let i = left + 1;
      let waterAtI = leftMax - nums[i];
      if (waterAtI > 0) {
        trappedWater += waterAtI;
      }
      leftMax = Math.max(leftMax, nums[i]);
      left++;
    } else {
      let i = right - 1;
      let waterAtI = rightMax - nums[i];
      if (waterAtI > 0) {
        trappedWater += waterAtI;
      }
      rightMax = Math.max(rightMax, nums[i]);
      right--;
    }
  }

  return trappedWater;
};

const res = trappingRainWater2([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
console.log(res);
