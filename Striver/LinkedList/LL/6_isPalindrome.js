class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Brute force approach
const isPalindrome = (list) => {
  let slow = list;
  let fast = list;

  const arr = [];
  while (fast && fast.next) {
    arr.push(slow.value);
    slow = slow.next;
    fast = fast.next.next;
  }

  // If the length of the list is odd, skip the middle element
  if (fast) {
    slow = slow.next;
  }

  // Compare the second half with the elements in the array
  while (slow) {
    const value = arr.pop();
    if (value !== slow.value) {
      return false;
    }
    slow = slow.next;
  }

  return true;
};

// Optimal approach
const isPalindrome2 = (list) => {
  let slow = list;
  let fast = list;
  let previous = null;

  // Reverse the first half of the list while finding the midpoint
  while (fast && fast.next) {
    fast = fast.next.next;
    const next = slow.next;
    slow.next = previous;
    previous = slow;
    slow = next;
  }

  // If the length of the list is odd, skip the middle element
  if (fast) {
    slow = slow.next;
  }

  // Compare the reversed first half with the second half
  while (previous && slow) {
    if (previous.value !== slow.value) {
      return false;
    }
    previous = previous.next;
    slow = slow.next;
  }

  return true;
};

// Example usage:
const list = new Node(1);
list.next = new Node(2);
list.next.next = new Node(3);
list.next.next.next = new Node(4);
list.next.next.next.next = new Node(3);
list.next.next.next.next.next = new Node(2);
list.next.next.next.next.next.next = new Node(1);

console.log(isPalindrome2(list)); // Should return true
