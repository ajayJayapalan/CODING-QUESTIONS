/* Merge two array without extra Space */

/* 

    time:
    space: O(1)

*/

const merger = (arr1 = [], arr2 = []) => {
  let n1 = arr1.length;
  let n2 = arr2.length;

  let i1 = 0;
  let i2 = 0;

  while (i1 < n1 && i2 < n2) {
    if (arr1[i1] < arr2[i2]) {
      i1++;
    } else {
      let temp = arr1.pop();
      arr1.splice(i1, 0, arr2[i2]);
      arr2[i2] = temp;
      i2++;
    }
  }

  arr2.sort((a, b) => a - b);
  console.log(arr1);
  console.log(arr2);
};

merger([1, 3, 5, 7], [0, 2, 6, 8, 9]);
