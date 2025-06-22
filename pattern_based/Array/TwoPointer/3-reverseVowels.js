const reverseVowels = (strs = "") => {
  const vowels = ["a", "e", "i", "o", "u"];

  strs = strs.split("");
  let left = 0;
  let right = strs.length - 1;

  while (left < right) {
    while (left < right && !vowels.includes(strs[left])) {
      left++;
    }

    while (left < right && !vowels.includes(strs[right])) {
      right--;
    }

    if (left < right) {
      let temp = strs[left];
      strs[left] = strs[right];
      strs[right] = temp;
      left++;
      right--;
    }
  }

  return strs.join("");
};

const res = reverseVowels("helioulo");
console.log(res);
