const longestSubstringWithoutRepeatingChars = (s = "") => {
  let max = 0;
  const set = new Set();

  let left = 0;
  let right = 0;

  while (right < s.length) {
    if (!set.has(s.charAt(right))) {
      max = Math.max(max, right - left + 1);
      set.add(s.charAt(right));
      right++;
    } else {
      left++;
      set.delete(s.charAt(left));
    }
  }

  return max;
};

const res = longestSubstringWithoutRepeatingChars("bbbb");
console.log(res);
