const validAnagram = (s = "", t = "") => {
  if (s.length !== t.length) return false;

  const map = new Map();

  for (let letter of s) {
    map.set(letter, (map.get(letter) ?? 0) + 1);
  }
  for (let letter of t) {
    if (!map.has(letter)) return false;
    map.set(letter, map.get(letter) - 1);
  }

  for (let value of map.values()) {
    if (value !== 0) return false;
  }

  return true;
};

const res = validAnagram("jar", "jam");
console.log(res);
