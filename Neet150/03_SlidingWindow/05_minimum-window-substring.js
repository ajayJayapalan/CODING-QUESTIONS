/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (s.length < t.length) return "";
  if (t.length === 1) return s.split("").includes(t) ? t : "";

  const tMap = getCharMap(t);
  let minSubString = "";
  let [startIndex, endIndex] = [0, 1];

  let nextIndex = [];

  while (endIndex <= s.length) {
    const currentChar = s[endIndex];
    const isCharInMap = checkCharInMap(tMap, currentChar);

    const subString = s.slice(startIndex, endIndex);
    const isSubStringFindInMap = checkMapInSubString(tMap, subString);

    if (isCharInMap) {
      nextIndex.push(endIndex);
    }

    if (isSubStringFindInMap) {
      if (minSubString === "" || minSubString.length > subString.length) {
        minSubString = subString;
      }
      startIndex = nextIndex.shift();
    }
    console.log(subString, startIndex, endIndex, nextIndex);
    endIndex++;
  }

  return minSubString;
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

const checkMapInSubString = (map, subString) => {
  const mapClone = new Map(map);
  for (let s of subString) {
    checkInMap(mapClone, s);
  }
  const isAll = isAllFind(mapClone);
  return isAll;
};

const checkCharInMap = (map, char) => {
  return map.has(char);
};

const checkInMap = (map, char) => {
  if (map.has(char)) {
    let count = map.get(char);
    if (count === 0) {
      return false;
    }
    count--;
    map.set(char, count);
    return true;
  }
};

const isAllFind = (map) => {
  for (let [key, value] of map) {
    if (value > 0) {
      return false;
    }
  }

  return true;
};

const res = minWindow("ADOBECODEBANC", "ABC");
console.log(res);
