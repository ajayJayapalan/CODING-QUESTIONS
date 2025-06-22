const getDaysToShip = (nums = [], shipCapacity) => {
  let right = 0;
  let day = 1;
  let capacity = shipCapacity;

  while (right < nums.length) {
    let weight = nums[right];
    if (capacity - weight >= 0) {
      // ship it
      capacity -= weight;
      right++;
      if (capacity === 0) {
        day++;
        capacity = shipCapacity;
      }
    } else {
      // cant ship it
      day++;
      capacity = shipCapacity;
    }
  }

  return day;
};

const res = getDaysToShip([5, 4, 5, 2, 3, 4, 5, 6], 9);
console.log(res);

const shipInDdays = (nums = [], d) => {
  let max = nums.reduce((acc, num) => acc + num, 0);
  let min = Math.max(...nums);

  for (let i = min; i <= max; i++) {
    let isPossible = getDaysToShip(nums, i);
  }
};
