const validAnagrams = (str1 = "", str2 = "") => {
  if (str1.length !== str2.length) return false;

  const map = new Map();

  for (let char of str1) {
    map.set(char, (map.get(char) ?? 0) + 1);
  }

  for (let char of str2) {
    if (!map.has(char)) return false;
    map.set(char, map.get(char) - 1);
  }

  for (let num of map.values()) {
    if (num !== 0) return false;
  }

  return true;
};

console.log(validAnagrams("listen", "silet"));
