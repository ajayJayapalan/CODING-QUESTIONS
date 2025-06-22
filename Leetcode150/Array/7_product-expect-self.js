const productExpectSelf = (nums = [1, 2, 3, 4]) => {
  const prefixArr = new Array(nums.length);
  const sufixArr = new Array(nums.length);

  let prefixValue = 1;
  let sufixValue = 1;

  for (let i = 0; i < nums.length; i++) {
    let j = nums.length - 1 - i;
    prefixValue = prefixValue * nums[i];
    sufixValue = sufixValue * nums[j];

    prefixArr[i] = prefixValue;
    sufixArr[j] = sufixValue;
  }

  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let product = (prefixArr?.[i - 1] ?? 1) * (sufixArr?.[i + 1] ?? 1);
    result.push(product);
  }

  console.log({ result });
  return result;

  console.log({ prefixArr, sufixArr });
};

productExpectSelf();
