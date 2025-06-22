const subArraySumOddCount = (nums = []) => {
  let even = 1;
  let odd = 0;

  let sum = 0;
  let count = 0;

  for (let num of nums) {
    sum += num;
    if (sum % 2) {
      // odd
      count += even;
      odd++;
    } else {
      count += odd;
      even++;
    }
  }

  return count;
};

const subArraySumEventCount = (nums = []) => {
  let even = 1;
  let odd = 0;

  let sum = 0;
  let count = 0;

  for (let num of nums) {
    sum += num;
    if (sum % 2) {
      // odd
      count += odd;
      odd++;
    } else {
      count += even;
      even++;
    }
  }

  return count;
};
