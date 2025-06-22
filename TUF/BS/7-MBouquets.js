const getNumOfBouquets = (nums, day, k) => {
  let adjCount = 0;
  let numOfBouquets = 0;

  for (let i = 0; i < nums.length; i++) {
    let isBloom = nums[i] <= day;
    if (isBloom) {
      adjCount++;
    } else {
      adjCount = 0;
    }
    if (adjCount === k) {
      numOfBouquets++;
      adjCount = 0;
    }
  }

  return numOfBouquets;
};

const minDayToMakeMBouquets = (nums = [], bouquetsCount, flowerPerBouq) => {
  if (nums.length < bouquetsCount * flowerPerBouq) return -1;

  let maxDay = Math.max(...nums);

  for (let day = 1; day <= maxDay; day++) {
    let numOfBouquets = getNumOfBouquets(nums, day, flowerPerBouq);
    if (numOfBouquets === bouquetsCount) return day;
  }

  return -1;
};

const res = minDayToMakeMBouquets([1, 10, 3, 10, 2], 3, 1);
console.log(res);
