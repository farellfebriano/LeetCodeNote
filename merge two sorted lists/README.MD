# REVERSE NUMBER

## Rules

You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.

## Example 1

Input: list1 = [1,2,4], list2 = [1,3,4]<br>
Output: [1,1,2,3,4,4]

## Example 2

Input: list1 = [], list2 = []<br>
Output: []

## Example 3

Example 3:

Input: list1 = [], list2 = [0]<br>
Output: [0]

## CODE

fghj

```javascript
var mergeTwoLists = function (list1, list2) {
  const dummy = new ListNode();
  let tail = dummy;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    console.log(dummy);
    tail = tail.next;
  }
  if (!list1) {
    tail.next = list2;
  } else {
    tail.next = list1;
  }
  return dummy.next;
};
```

## Complexity

[Time] Complexity O(n)

- since, it only iterate the array once

[Space] Complexity O(1)

- since, it dosent add more memory
