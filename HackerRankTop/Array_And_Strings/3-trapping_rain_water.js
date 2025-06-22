const trap = (arr = []) => {
  // equation : Min(max_left, max_right) - curr[i]
  const max_left_arr = new Array(arr.length);
  const max_right_arr = new Array(arr.length);

  let maxLeft = 0;
  let maxRight = 0;
  for (let i = 0; i < arr.length; i++) {
    let j = arr.length - 1 - i;
    maxLeft = Math.max(maxLeft, arr[i]);
    maxRight = Math.max(maxRight, arr[j]);

    max_left_arr[i] = maxLeft;
    max_right_arr[j] = maxRight;
  }

  let trapWaterSum = 0;
  for (let i = 0; i < arr.length; i++) {
    trapWaterSum += Math.min(max_left_arr[i], max_right_arr[i]) - arr[i];
  }
  return trapWaterSum;
};

const trap2 = (arr = []) => {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  let leftMax = arr[leftPointer];
  let rightMax = arr[rightPointer];

  let currentPointer = leftPointer + 1;

  while (leftPointer < rightPointer) {
    let;
  }
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
