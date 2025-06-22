const printNiceSubArray = (nums = [], k) => {
  let count = 0;
  let result = [];

  let left = 0;
  let mid = 0;
  let right = 0;

  const isOdd = (num) => num % 2 === 1;

  while (right < nums.length) {
    if (count === k) {
      while (mid < right && !isOdd(nums[mid])) {
        mid++;
      }
      if (left <= mid) {
        let str = nums.slice(left, right + 1);
        result.push(str);
        left++;
      } else {
        right++;
        if (isOdd(nums[right])) {
          count--;
          mid = left;
        } else {
          left = 0;
        }
      }
    } else {
      if (isOdd(nums[right])) {
        count++;
      }
      if (count !== k) {
        right++;
      }
    }
  }

  return result;
};

const res = printNiceSubArray([2, 2, 5, 6, 9, 2, 11], 2);
console.log(res);
