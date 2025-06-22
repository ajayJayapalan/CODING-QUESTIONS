/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let [smallArr, bigArr] = [num1, num2];
  if (smallArr.length > bigArr.length) {
    [smallArr, bigArr] = [bigArr, smallArr];
  }

  let totalLeftPart = (smallArr.length + bigArr.length) >> 1;
  let isOdd = (smallArr.length + bigArr.length) % 2 !== 0;

  let left = 0;
  let right = smallArr.length - 1;

  const getMedian = (smRight, lgRight) => {
    if (isOdd) {
      return Math.min(smallArr[smRight + 1], bigArr[lgRight + 1]);
    } else {
      return (
        (Math.min(smallArr[smRight], bigArr[lgRight]) +
          Math.max(smallArr[smRight + 1], smallArr[lgRight + 1])) /
        2
      );
    }
  };

  while (left <= right) {
    console.log({ left, right });
    let mid = (left + right) >> 1;
    let smRight = mid;
    let lgRight = totalLeftPart - (smRight + 1) - 1; // -1 : finding index

    console.log({ smRight, lgRight, totalLeftPart });

    if (
      smallArr[smRight] <= bigArr[lgRight + 1] &&
      bigArr[lgRight] <= smallArr[smRight + 1]
    ) {
      const median = getMedian(smRight, lgRight);
      return median;
    } else if (smallArr[smRight] > bigArr[lgRight + 1]) {
      right = mid - 1;
    } else if (bigArr[lgRight] > smallArr[smRight + 1]) {
      left = mid + 1;
    }
  }

  //   if(left === 0){
  return bigArr[totalLeftPart];
  //   }else if (right = smallArr.length - 1){

  //   }
};

const num1 = [1, 2, 3];
const num2 = [4, 5, 6, 7];

const res = findMedianSortedArrays(num1, num2);
console.log({ res });
