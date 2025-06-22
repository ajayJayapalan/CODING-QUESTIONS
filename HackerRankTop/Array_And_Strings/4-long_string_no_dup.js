const lengthOfLongestSubstring = (str = "") => {
  let length = 0;
  let max = 0;

  const set = new Set();

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    // if find duplication letter
    if (set.has(letter)) {
      // check is this max
      max = Math.max(max, length);
      // reset
      length = 0;
      set.clear();
    }
    length++;
    set.add(letter);
  }

  return max;
};

console.log(lengthOfLongestSubstring("pwwkew"));
