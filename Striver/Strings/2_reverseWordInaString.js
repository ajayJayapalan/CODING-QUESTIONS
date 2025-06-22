const reverseWordInAString = (sentence = "") => {
  let newSentence = "";
  let temp = "";
  for (let char of sentence) {
    if (char === " ") {
      newSentence = temp + " " + newSentence;
      temp = "";
    } else {
      temp += char;
    }
  }

  if (temp !== "") {
    newSentence = temp + " " + newSentence;
  }

  return newSentence;
};

console.log(reverseWordInAString("this    ajay"));
