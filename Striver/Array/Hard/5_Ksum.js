const findSumOfK = (k, arr, target) => {
  arr.sort((a, b) => a - b);

  const answers = [];
  const answer = [];

  const kSum = (k, startIndex, target) => {
    if (k !== 2) {
      for (let i = startIndex; i < arr.length - k; i++) {
        if (i !== startIndex && arr[i] === arr[i - 1]) continue;
        answer.push(arr[i]);
        kSum(k - 1, i + 1, target - arr[i]);
        answer.pop();
      }
    } else {
      let left = startIndex;
      let right = arr.length - 1;

      while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum < target) {
          left++;
        } else if (sum > target) {
          right--;
        } else {
          answers.push([...answer.slice(), arr[left], arr[right]]);
          do {
            left++;
          } while (arr[left] === arr[left - 1]);
        }
      }
    }

    return;
  };

  kSum(k, 0, target);

  return answers;
};

console.log(findSumOfK(4, [4, 3, 3, 4, 4, 2, 1, 2, 1, 1], 9));
// [ [ 1, 1, 3, 4 ], [ 1, 2, 2, 4 ], [ 1, 2, 3, 3 ] ]
