const dictionary = [
  "i",
  "like",
  "sam",
  "sung",
  "samsung",
  "mobile",
  "ice",
  "and",
  "cream",
  "icecream",
  "man",
  "go",
  "mango",
];
const wordBreak = (fullWord) => {
  const solutions = [];
  const wordArray = fullWord.split("");
  const n = wordArray.length;

  const findWords = (letter) => {
    return dictionary.filter((item) => item[0] === letter);
  };

  const backtrack = (letterIndex, sentence) => {
    if (letterIndex >= n) {
      solutions.push(sentence.join(" "));
      return;
    }
    const letter = wordArray[letterIndex];
    const words = findWords(letter);

    for (let word of words) {
      let len = word.length;
      let haveWord = fullWord.substring(letterIndex, letterIndex + len);
      if (haveWord === word) {
        sentence.push(word);
        backtrack(letterIndex + len, sentence);
        sentence.pop();
      }
    }
  };

  backtrack(0, []);
  return solutions;
};

console.log(wordBreak("ilikeicecreamandmango"));
