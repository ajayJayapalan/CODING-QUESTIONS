/**
 * Time O(2n) | Space O(a,b)
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const anagramTableOfS = {};
  const anagramTableOfT = {};

  for (let i = 0; i < s.length; i++) {
    const sLetter = s[i];
    const tLetter = t[i];

    if (anagramTableOfS?.[sLetter] === undefined) {
      anagramTableOfS[sLetter] = 1;
    } else {
      anagramTableOfS[sLetter]++;
    }

    if (anagramTableOfT?.[tLetter] === undefined) {
      anagramTableOfT[tLetter] = 1;
    } else {
      anagramTableOfT[tLetter]++;
    }
  }

  if (
    Object.keys(anagramTableOfS).length !== Object.keys(anagramTableOfT).length
  )
    return false;

  for (let i = 0; i < s.length; i++) {
    const sLetter = s[i];
    const tLetter = t[i];

    if (
      anagramTableOfS[sLetter] !== anagramTableOfT[sLetter] ||
      anagramTableOfS[tLetter] !== anagramTableOfT[tLetter]
    ) {
      return false;
    }
  }

  return true;
};
