class Node {
  constructor(data, next, random) {
    this.data = data;
    this.next = next;
    this.random = random;
  }
}

const cloneLL = (head) => {
  const map = new Map();

  let newHead = null;
  let current = head;

  const createOrGetNode = (node) => {
    if (!node) return null;
    if (map.has(node)) return map.get(node);

    const newNode = new Node(node.data, null, null);
    map.set(node, newNode);
    return newNode;
  };

  while (current) {
    const node = createOrGetNode(current);
    if (!newHead) {
      newHead = node;
    }
    node.random = createOrGetNode(current.random);
    node.next = createOrGetNode(current.next);
    current = current.next;
  }

  return newHead;
};
