// brute force - generate all permuataion of one string and compare is the other string exist or not;
// time - n!
// space - 1

// better - sort and compare both strings are same or not
const validAanagrams = (str1, str2) => {
  str1.sort((a, b) => a - b);
  str2.sort((a, b) => a - b);

  return str1 === str2;
};

// optimal - using hashmap
// time - n
// space - n
const validAnagrams2 = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const map = new Map();

  for (let str of str1) {
    map.set(str, (map.get(str) || 0) + 1);
  }
  for (let str of str1) {
    if (!map.has(str)) return false;
    map.set(str, map.get(str) - 1);
  }

  for (let value of map.values()) {
    if (value !== 0) return false;
  }

  return true;
};

// optimal - with array

const validAnagram3 = (str1 = "", str2 = "") => {
  if (str1.length !== str2.length) return false;

  const arr = new Array(26).fill(0);
  const startIndex = "a".charCodeAt(0);

  for (let i = 0; i < str1.length; i++) {
    let index = str1[i].charCodeAt(0) - startIndex;
    arr[index]++;
    let index2 = str2[i].charCodeAt(0) - startIndex;
    arr[index2]--;
  }

  for (let num of arr) {
    if (num !== 0) return false;
  }

  return true;
};
