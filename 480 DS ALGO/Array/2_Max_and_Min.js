// Find min and max form an array.

// 1.
((arr) => {
  let min = arr[0];
  let max = arr[0];
  for (ar of arr) {
    if (min > ar) {
      min = ar;
    }
    if (max < ar) {
      max = ar;
    }
  }
  console.log(min, max);
})([1, 2, 3, 4, 5, 6]);

// t : o(n)
// s : o(1)

// 2
function getMinMax(arr, n) {
  let minmax = {};
  var i;

  if (n == 1) {
    minmax.max = arr[0];
    minmax.min = arr[0];
    return minmax;
  }

  /* If there are more than one elements, then initialize min
	and max*/

  if (arr[0] > arr[1]) {
    minmax.max = arr[0];
    minmax.min = arr[1];
  } else {
    minmax.max = arr[1];
    minmax.min = arr[0];
  }

  for (i = 2; i < n; i++) {
    if (arr[i] > minmax.max) {
      minmax.max = arr[i];
    } else if (arr[i] < minmax.min) {
      minmax.min = arr[i];
    }
  }

  return minmax;
}

/* Driver program to test above function */

var arr = [1000, 11, 445, 1, 330, 3000];
var arr_size = 6;
minmax = getMinMax(arr, arr_size);
console.log(minmax);
