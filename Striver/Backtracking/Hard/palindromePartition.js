const palindromePartition = (word) => {
  const solutions = [];

  const isPalindrome = (str) => str === str.split("").reverse().join("");

  const backtrack = (str, result) => {
    if (str === "") {
      for (let res of result) {
        console.log({ res });
        if (!isPalindrome(res)) {
          return;
        }
      }
      solutions.push(JSON.parse(JSON.stringify(result)));
      return;
    }

    for (let i = 1; i <= str.length; i++) {
      let str1 = str.substring(0, i);
      let str2 = str.substring(i);
      result.push(str1);
      backtrack(str2, result);
      result.pop();
    }
  };

  backtrack(word, []);
  return solutions;
};

console.log(palindromePartition("aab"));
