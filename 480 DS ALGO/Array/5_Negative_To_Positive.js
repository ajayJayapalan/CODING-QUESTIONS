// Move all negative numbers to beginning and positive to end with constant extra space

/* 

    time : O(n)
    space : O(1)

*/

const swap = (e1, e2) => [e2, e1];

const negToPost = (arr) => {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      [arr[j], arr[i]] = swap(arr[j], arr[i]);
      j++;
    }
  }
  console.log(arr);
};

negToPost([-12, 11, -13, -5, 6, -7, 5, -3, -6]);
