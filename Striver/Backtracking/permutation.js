const permute = (arr) => {
  if (arr.length === 1) return [arr.slice()];

  const solution = [];
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let remaining = arr.filter((el) => el !== num);
    let perms = permute(remaining);
    // console.log(perms);
    for (let perm of perms) {
      perm.unshift(num);
      solution.push(perm);
    }
  }

  return solution;
};

console.log(permute([1, 2, 3]));
