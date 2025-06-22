const isPalindrome = (str = "", low, high) => {
  while (low < high) {
    if (str.charAt(low) !== str.charAt(high)) return false;
    low++;
    high--;
  }
  return true;
};

const possiblePalinByRemovingOneChar = (str = "") => {
  let low = 0;
  let high = str.length - 1;

  while (low < high) {
    if (str.charAt(low) !== str.charAt(high)) {
      const withoutLow = isPalindrome(str, low + 1, high);
      if (withoutLow) return str.charAt(low);
      const withoutHigh = isPalindrome(str, low, high - 1);
      if (withoutHigh) return str.charAt(high);

      return -1;
    }
    low++;
    high--;
  }

  return -2;
};

const res = possiblePalinByRemovingOneChar("malazyalam");
console.log(res);
