const reverseList = (head) => {
  if (head === null) return null;

  let current = head;
  let prev = null;
  let next = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};
