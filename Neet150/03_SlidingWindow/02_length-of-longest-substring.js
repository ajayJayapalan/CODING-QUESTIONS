/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  let [startIndex, endIndex] = [0, 1];
  let map = new Map();

  map.set(s[startIndex], true);
  while (endIndex < s.length) {
    if (map.has(s[endIndex])) {
      startIndex = endIndex;
      map.clear();
    }

    map.set(s[endIndex], true);
    endIndex++;

    maxLength = Math.max(maxLength, endIndex - startIndex);
  }
  return maxLength;
};

const input = "abcabcbb";
const output = lengthOfLongestSubstring(input);

console.log({ output });
