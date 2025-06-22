class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.head = new TrieNode();
  }

  insert(word) {
    let curr = this.head;
    for (let char of word) {
      if (!curr.children[char]) {
        curr.children[char] = new TrieNode();
      }
      curr = curr.children[char];
    }
    curr.isEnd = true;
  }

  search(word) {
    let curr = this.head;
    for (let char of word) {
      if (curr.children[char]) {
        curr = curr.children[char];
      } else {
        return false;
      }
    }
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

const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // return True
console.log(trie.search("app")); // return False
console.log(trie.startsWith("app")); // return True
trie.insert("app");
console.log(trie.startsWith("app")); // return True

console.log(JSON.stringify(trie, null, 1));
