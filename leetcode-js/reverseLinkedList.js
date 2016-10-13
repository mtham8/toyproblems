const reverseLinkedList = head => {
  let current = head;
  let previous = null;
  let holder = null;
  if (current === null || current.next === null) {
    return current;
  }
  while (current) {
    holder = current.next;
    current.next = previous;
    previous = current;
    current = holder;
  }
  return previous;
}