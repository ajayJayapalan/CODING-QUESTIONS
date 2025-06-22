/**
 * Find the Kth missing positive number using binary search.
 * @param {number[]} arr - Sorted array of unique positive integers
 * @param {number} k - The kth missing number to find
 * @returns {number}
 */
const kthMissing = (arr = [], k) => {
  let left = 0;
  let right = arr.length - 1;

  // Binary search to find how many numbers are missing before mid
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const missingCount = arr[mid] - (mid + 1);

    if (missingCount < k) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // After the loop, left is the number of elements that are ≤ the kth missing
  return left + k;
};
