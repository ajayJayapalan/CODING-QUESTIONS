const maxVowels = (str = "", k) => {
  const vowels = ["a", "e", "i", "o", "u"];

  let count = 0;
  let max = 0;
  let left = 0;
  let right = 0;

  const isVowel = (index) => vowels.includes(str.charAt(index));
  while (right < str.length) {
    let size = right - left + 1;
    const isRightVowel = isVowel(right);
    if (isRightVowel) {
      count++;
    }
    max = Math.max(max, count);

    if (size < k) {
      right++;
    } else {
      right++;
      const isLeftVowel = isVowel(left);
      if (isLeftVowel) {
        count--;
      }
      left++;
    }
  }

  return max;
};

const res = maxVowels("abciiidef", 3);
console.log(res);
