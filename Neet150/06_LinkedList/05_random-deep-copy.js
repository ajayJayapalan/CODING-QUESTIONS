/**
 *  Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  let curr = head;
  let prev = null;
  let prevHead = null;

  const map = new Map();

  // 1 - pass
  while (curr) {
    let clone = new NodeWithRandom(curr.val);
    map.set(curr, clone);
    if (prev === null) {
      prev = clone;
      prevHead = clone;
    } else {
      prev.next = clone;
      prev = prev.next;
    }
    curr = curr.next;
  }

  // 2 - pass
  curr = head;
  while (curr) {
    let clone = map.get(curr);
    clone.random = map.get(curr.random);

    curr = curr.next;
  }

  return prevHead;
};

class NodeWithRandom {
  next = null;
  random = null;
  constructor(val, next, random) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

// [[7,null],[13,0],[11,4],[10,2],[1,0]]

const input = [];
input[0] = new NodeWithRandom(7);
input[1] = new NodeWithRandom(13);
input[0].next = input[1];
input[2] = new NodeWithRandom(11);
input[1].next = input[2];
input[3] = new NodeWithRandom(10);
input[2].next = input[3];
input[4] = new NodeWithRandom(1);
input[3].next = input[4];
input[4].next = null;

input[0].random = null;
input[1].random = input[0];
input[2].random = input[4];
input[3].random = input[2];
input[4].random = input[0];

// console.log(input);

const res = copyRandomList(input[0]);
