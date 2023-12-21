# Best Time to Buy and Sell Stock

## Rules

Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in O(1) extra space complexity and O(n) time complexity.

## Example 1

Input: head = [1,2,3,4,5]<br>
Output: [1,3,5,2,4]<br>

## Example 2

Input: head = [2,1,3,5,6,4,7]<br>
Output: [2,3,6,7,1,5,4]<br>

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
