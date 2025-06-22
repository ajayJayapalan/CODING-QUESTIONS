class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class DotNode {
  constructor() {
    this.dot = {};
  }
}

class WordDictionary {
  constructor() {
    this.head = new TrieNode();
    this.dotHead = new DotNode();
  }

  addWord(word) {
    let curr = this.head;
    let currDot = this.dotHead;
    for (let char of word) {
      if (!curr.children[char]) {
        curr.children[char] = new TrieNode();
        currDot.dot[char] = true;
      }
      curr = curr.children[char];

      if (!currDot.dot["."]) {
        currDot.dot["."] = new DotNode();
      }
      currDot = currDot.dot["."];
    }
    curr.isEnd = true;
  }

  search(word) {
    let curr = this.head;
    let currDot = this.dotHead;
    let isDot = false;
    for (let char of word) {
      if (char === "." || isDot) {
        // currDot =
        console.log(word, char, currDot);
        if (char !== ".") {
          if (!currDot.dot[char]) {
            return false;
          }
        }
        currDot = currDot.dot["."];
        isDot = true;
      } else if (curr.children[char]) {
        curr = curr.children[char];
        currDot = currDot.dot["."];
      } else {
        return false;
      }
    }

    // if (isDot) return true;
    return curr.isEnd ? true : false;
  }

  startsWith(word) {
    let curr = this.head;
    for (let char of word) {
      if (curr.children[char]) {
        curr = curr.children[char];
      } else {
        return false;
      }
    }

    return word !== "" ? true : false;
  }
}

const wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
// console.log(JSON.stringify(wordDictionary, null, 2));
console.log(wordDictionary.search("pad")); // return False
console.log(wordDictionary.search("bad")); // return True
console.log(wordDictionary.search(".ad")); // return True
console.log(wordDictionary.search("b..")); // return True
console.log(wordDictionary.search(".a..")); // return True
// wordDictionary.search("bad"); // return True
// wordDictionary.search(".ad"); // return True
// wordDictionary.search("b.."); // return True
