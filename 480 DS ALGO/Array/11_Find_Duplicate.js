/* Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number. */

const findDup = (arr = []) => {
  let sumOfNPlusOne = 0;
  let n = arr.length - 1;

  let sumOfN = (n * (n + 1)) / 2;

  arr.forEach((el) => (sumOfNPlusOne += el));

  console.log(sumOfNPlusOne - sumOfN);
};

findDup([3, 1, 3, 4, 2]);
