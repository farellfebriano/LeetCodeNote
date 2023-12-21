# REVERSE LINKEDLIST II

## Rules

Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

## Example 1

Input: head = [1,2,3,4,5], left = 2, right = 4<br>
Output: [1,4,3,2,5]<br>

## Example 2

Input: head = [5], left = 1, right = 1<br>
Output: [5]<br>

## Code

```javascript
var reverseBetween = function (head, left, right) {
  let dummy = new ListNode(0, head);
  let curr = head;

  // reach node at positon "left"
  leftPrev = dummy;
  for (let i = 0; i < left - 1; i++) {
    leftPrev = leftPrev.next;
    curr = curr.next;
  }
  // reverse until the right
  let prev = null;
  for (let i = 0; i < right - left + 1; i++) {
    const temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  leftPrev.next.next = curr;
  leftPrev.next = prev;

  return dummy.next;
};
```

## Complexity

[Time] Complexity O(1)

- since, it only iterate the array once

[Space] Complexity O(1)

- since, it dosent add more memory
