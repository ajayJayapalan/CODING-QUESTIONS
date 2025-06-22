/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let [left, right] = [1, Math.max(...piles)];

  const getCalculated = (k) => {
    // let hourTook = 0;
    // let balancePile = 0;
    // for (let pile of piles) {
    //   if (pile <= k) {
    //     hourTook = hourTook + 1;
    //   } else {
    //     hourTook = hourTook + Math.floor((pile + balancePile) / k);
    //     balancePile = (pile + balancePile) % k;
    //   }
    // }
    // if (balancePile !== 0) {
    //   hourTook++;
    // }
    // console.log({ balancePile, hourTook, k });

    let hourTook = 0;
    for (let pile of piles) {
      hourTook += Math.ceil(pile / k);
    }
    console.log({ hourTook, k });
    if (hourTook <= h) {
      return true;
    } else {
      return false;
    }
  };

  // 1. brute-force
  //   for (let k = left; k <= right; k++) {
  //     if (getCalculated(k)) {
  //       return k;
  //     }
  //   }

  // 2. binary-search
  while (left < right) {
    let k = Math.floor((left + right) / 2);
    if (getCalculated(k)) {
      right = k;
    } else {
      left = k + 1;
    }
  }

  return left;
};

const piles = [30, 11, 23, 4, 20];
const h = 6;

const res = minEatingSpeed(piles, h);
console.log({ res });
