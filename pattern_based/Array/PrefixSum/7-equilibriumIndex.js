const equilibriumIndex = (nums = []) => {
  const prefixSumArr = [];
  let sum = 0;
  for (let num of nums) {
    sum += num;
    prefixSumArr.push(sum);
  }

  for (let i = 0; i < nums.length; i++) {
    let leftSum = 0;
    let rightSum = 0;
    if (i > 0) {
      leftSum = prefixSumArr[i - 1];
    }
    if (i < nums.length - 1) {
      rightSum = prefixSumArr[nums.length - 1] - prefixSumArr[i];
    }

    if (leftSum == rightSum) {
      return i;
    }
  }

  return -1;
};

const res = equilibriumIndex([-7, 1, 5, 2, -4, 3, 0]);
console.log(res);
