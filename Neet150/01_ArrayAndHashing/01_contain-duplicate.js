/**
 * Hash Table - Early Exit
 * Time O(N) | Space O(n)
 * https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */

const containsDuplicate = function (nums = []) {
  const elements = {};

  for (let element of nums) {
    if (elements?.[element] === undefined || elements[element] !== 1) {
      elements[element] = 1;
    } else {
      return true;
    }
  }

  return false;
};
