const fourSum = (arr, target) => {
  arr.sort((a, b) => a - b);

  const n = arr.length;
  const ans = [];

  for (let i = 0; i < arr.length; i++) {
    if (i !== 0 && arr[i] === arr[i - 1]) continue;

    for (let j = i + 1; j < arr.length; j++) {
      if (j !== i + 1 && arr[j] === arr[j - 1]) continue;

      let k = j + 1;
      let l = n - 1;
      while (k < l) {
        const sum = arr[i] + arr[j] + arr[k] + arr[l];

        if (sum < target) {
          k++;
        } else if (sum > target) {
          l--;
        } else if (sum === target) {
          ans.push([arr[i], arr[j], arr[k], arr[l]]);
          do {
            k++;
          } while (arr[k] === arr[k - 1]);
        }
      }
    }
  }

  return ans;
};

console.log(fourSum([4, 3, 3, 4, 4, 2, 1, 2, 1, 1], 9));
