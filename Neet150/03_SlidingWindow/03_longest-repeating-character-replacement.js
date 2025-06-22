/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let [startIndex, endIndex] = [0, 1];
  let maxLength = 1;

  let startingLetter = s[0];

  let kClone = k;
  let firstOtherCharIndex = null;
  let tempLength = 1;

  while (endIndex < s.length) {
    if (kClone >= 0) {
      const currentChar = s[endIndex];
      if (startingLetter === currentChar) {
        tempLength++;
      } else {
        if (!firstOtherCharIndex) {
          firstOtherCharIndex = endIndex;
        }

        kClone--;
        if (!(kClone < 0)) {
          tempLength++;
        }
      }
      endIndex++;
      maxLength = Math.max(maxLength, tempLength);
    } else {
      startIndex = firstOtherCharIndex;
      endIndex = startIndex + 1;
      kClone = k;
      firstOtherCharIndex = null;
      tempLength = 1;
    }
  }

  return maxLength;
};

const input = {
  s: "AABABBA",
  k: 1,
};

const output = characterReplacement(input.s, input.k);

console.log({ output });
