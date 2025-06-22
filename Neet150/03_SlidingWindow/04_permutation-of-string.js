/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const charMap = getCharMap(s1);

  let [startIndex, endIndex] = [0, s1.length];
  while (endIndex <= s2.length) {
    const hasInclusion = doesIncusionHave(
      s2.slice(startIndex, endIndex),
      charMap
    );
    if (hasInclusion) {
      return true;
    }
    startIndex++;
    endIndex++;
  }

  return false;
};

const getCharMap = (s1) => {
  const map = new Map();

  s1.split("").forEach((char) => {
    if (map.has(char)) {
      let count = map.get(char);
      count++;
      map.set(char, count);
    } else {
      map.set(char, 1);
    }
  });

  return map;
};

const doesIncusionHave = (str, map) => {
  let index = 0;
  while (index < str.length) {
    if (!map.has(str[index])) {
      return false;
    }
    index++;
  }

  return true;
};
