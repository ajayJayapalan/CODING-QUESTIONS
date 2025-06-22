const longestCommonPrefix = (strs = []) => {
  let prefix = strs[0];

  const getNewPrefix = (prefix = "", string = "") => {
    let i = 0;
    while (i < Math.min(prefix.length, string.length)) {
      if (prefix[i] !== string[i]) break;
      i++;
    }

    return prefix.slice(0, i);
  };

  for (let i = 1; i < strs.length; i++) {
    prefix = getNewPrefix(prefix, strs[i]);
  }

  return prefix;
};

const res = longestCommonPrefix(["flower", "flow", "flight"]);
console.log(res);
