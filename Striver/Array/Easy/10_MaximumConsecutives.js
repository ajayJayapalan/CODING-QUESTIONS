const maximumConsecutives = (arr) => {
  const onesCount = 0;

  let i = 0;
  while (i < arr.length) {
    let count = 0;
    while (arr[i] === 1 && i < arr.length) {
      count++;
      i++;
    }
    if (count > 0 && count > onesCount) {
      onesCount = count;
    }
    i++;
  }

  return onesCount;
};

const input = [1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1];
const output = maximumConsecutives(input);
console.log(output);
