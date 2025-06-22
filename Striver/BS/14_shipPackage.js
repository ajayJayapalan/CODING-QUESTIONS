const shipPackage = (arr = [], d) => {
  const totalWeight = arr.reduce((prev, curr) => prev + curr, 0);
  const maxWeight = Math.max(...arr);

  let low = maxWeight;
  let high = totalWeight;

  let minCapacity = Infinity;

  const getDayTakenForCapacity = (cap) => {
    let day = 1;
    let tempCapacity = cap;

    for (let i = 0; i < arr.length; i++) {
      const weight = arr[i];
      tempCapacity -= weight;
      if (tempCapacity < 0) {
        i--;
        day++;
        tempCapacity = cap;
      }
    }

    return day;
  };

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    const day = getDayTakenForCapacity(mid);

    if (day <= d) {
      minCapacity = Math.min(minCapacity, mid);
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return minCapacity;
};

console.log(shipPackage([5, 4, 5, 2, 3, 4, 5, 6], 5));
// console.log(shipPackage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1));
