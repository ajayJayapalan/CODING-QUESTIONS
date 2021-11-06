// Union of 2 array

const union = (arr1 = [], arr2 = []) => {
  const hashMap = {};

  let len1 = arr1.length;
  let len2 = arr2.length;
  let high = len1 > len2 ? len1 : len2;
  let len = high + 1;

  let bigArr = len1 > len2 ? arr1 : arr2;
  let smallArr = len1 > len2 ? arr2 : arr1;

  let newArr = [];
  for (let i = 0, arr = bigArr; i < len; i++) {
    if (i === high) {
      i = 0;
      len = len1 + len2 - high;
      arr = smallArr;
    }
    if (!hashMap[arr[i]]) {
      hashMap[arr[i]] = arr[i];
      newArr.push(arr[i]);
    }
  }

  console.log(newArr);
};

union([85, 25, 1, 32, 32, 54, 6], [86, 25, 4, 30, 54]);
