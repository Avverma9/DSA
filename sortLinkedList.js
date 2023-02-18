function sortList(head) {
  if (!head || !head.next) return head;
  let slow = head, fast = head, prev;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = null;
  const left = sortList(head);
  const right = sortList(slow);
  return merge(left, right);

  function merge(l, r) {
    let dummy = new ListNode();
    let curr = dummy;
    while (l && r) {
      if (l.val < r.val) {
        curr.next = l;
        l = l.next;
      } else {
        curr.next = r;
        r = r.next;
      }
      curr = curr.next;
    }
    curr.next = l ? l : r;
    return dummy.next;
  }
}
 
let res = dummy.next;
let head=[4,1,2,3]
console.log(sortList);
console.log(res);