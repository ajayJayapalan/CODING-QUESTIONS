const map = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

const letterCobination = (digits = "") => {
  const result = [];
  const solution = [];

  const backtrack = (index) => {
    if (solution.length === digits.length) {
      result.push(solution.join(""));
      return;
    }

    const letters = map[digits[index]];
    for (let letter of letters) {
      solution.push(letter);
      backtrack(index + 1);
      solution.pop();
    }
  };

  backtrack(0);
  return result;
};

console.log(letterCobination("23"));
