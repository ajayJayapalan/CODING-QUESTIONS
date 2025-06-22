/**
 * @param {string[]} strs
 * @return {string[][]}
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 */
var groupAnagrams = function (strs) {
  const sortedStrs = strs.map((str) =>
    str
      .split("")
      .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
      .join("")
  );

  const indexMap = new Map();
  const output = [];

  for (let i = 0; i < sortedStrs.length; i++) {
    const isAlreadyExist = indexMap.has(sortedStrs[i]);

    if (isAlreadyExist) {
      const index = indexMap.get(sortedStrs[i]);
      output[index].push(strs[i]);
    } else {
      output.push([strs[i]]);
      indexMap.set(sortedStrs[i], output.length - 1);
    }
  }

  return output;
};
