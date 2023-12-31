# ODD EVEN LINKED LINK LIST

## Rules

Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

## Example 1

Input: arr = [2,1]<br>
Output: false<br>

## Example 2

Input: arr = [3,5,5]<br>
Output: false<br>

## Example 3

Input: arr = [0,3,2,1]<br>
Output: true<br>

## Code

```javascript
var oddEvenList = function (head) {
  // the idea we just foing to split into two and link it at the end
  if (!head || head.next === null) {
    return head;
  }
  // there be 2 node
  let odd = head;
  let even = head.next;
  // this will be the memory
  let memEven = even;
  let memOdd = odd;
  let curr = head.next.next;
  let count = 3;
  while (curr) {
    if (count % 2 > 0) {
      odd.next = curr;
      odd = odd.next;
    } else {
      even.next = curr;
      even = even.next;
    }
    count++;
    curr = curr.next;
  }
  odd.next = null;
  even.next = null;
  odd.next = memEven;

  // we will return memOdd
  return memOdd;
};
```

## Complexity

[Time] Complexity O(n)

- since, it only iterate the array once

[Space] Complexity O(1)

- since, it dosent add more memory

## Better faster code

```python
class Solution(object):
    def oddEvenList(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        if not head or not head.next:
            return head

        odd=head
        even=head.next
        even_head=even

        while even and even.next:
            odd.next = even.next
            odd = odd.next
            even.next=odd.next
            even = even.next
        odd.next = even_head
        return head
```
