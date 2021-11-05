/* Sort array of 0 , 1 , 2, without sorting Algo  */

/* 

 time : O(n)
 space: O(1)

*/

const swap = (e1, e2) => [e2, e1];

const sort = (arr) => {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    while (arr[high] === 2) {
      high--;
    }
    if (mid === high) {
      if (arr[mid] === 0) {
        [arr[low], arr[mid]] = swap(arr[low], arr[mid]);
      }
      break;
    }
    if (arr[i] === 0) {
      [arr[low], arr[mid]] = swap(arr[low], arr[mid]);
      low++;
      mid++;
    } else if (arr[i] === 1) {
      mid++;
    } else if (arr[i] === 2) {
      [arr[mid], arr[high]] = swap(arr[mid], arr[high]);
      i--;
    }
  }

  console.log(arr);
};

sort([2, 2, 2, 2, 2, 2, 0, 0, 0, 0]);
