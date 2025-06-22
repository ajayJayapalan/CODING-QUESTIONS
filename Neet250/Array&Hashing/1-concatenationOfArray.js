const concatArray = (nums = []) => {
  const n = nums.length;
  const result = new Array(n * 2);

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    result[i] = num;
    result[i + n] = num;
  }

  return result;
};

const res = concatArray([1, 2, 1]);
console.log(res);
