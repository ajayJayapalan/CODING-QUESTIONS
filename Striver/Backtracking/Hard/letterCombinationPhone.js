const dict = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

const letterCombinationPhone = (str) => {
  const solutions = [];

  const backtrack = (i, path) => {
    if (i === str.length) {
      solutions.push(path);
      return;
    }

    for (let key of dict[str.at(i)]) {
      path = path + key;
      backtrack(i + 1, path);
      path = path.slice(0, -1);
    }
  };

  backtrack(0, "");
  return solutions;
};

console.log(letterCombinationPhone("23"));
