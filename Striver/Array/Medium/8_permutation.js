const permute = (nums) => {
  if (nums.length === 1) return [nums];

  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let remaining = nums.filter((el) => el !== num);
    const perms = permute(remaining);

    for (let perm of perms) {
      result.push([num, ...perm]);
    }
  }

  return result;
};

console.log(permute([1, 2, 3]));
