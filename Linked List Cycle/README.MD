# LINKED LIST CYCLE

## Rules

Given head, the `head` of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer. Internally, `pos` is used to denote the index of the node that tail's `next` pointer is connected to. Note that `pos` is not passed as a parameter.

Return `true` if there is a cycle in the linked list. Otherwise, return `false`.

## Example 1

Input: head = [3,2,0,-4], pos = 1<br>
Output: true<br>
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

## Example 2

Input: head = [1,2], pos = 0<br>
Output: true<br>
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

## Idea

the the first tought is to create a object or dictionary that will store all the value that is alreadu occured once. However this technique will create a problem when there are two or more same value. Hence we need to use `MAP`. With using `MAP` we can use the object itself as a key to. So when an object is show twice it will call the `MAP` and return false

<h3> The Code</h3>

```javascript
var hasCycle = function (head) {
  const mem = new Map();
  let current = head;
  while (current) {
    if (mem.get(current)) {
      return true;
    }
    mem.set(current, current);
    current = current.next;
  }
  return false;
};
```

<h3> ## Complexity </h3>

[Time] Complexity O(n)

- since, it only iterate the array once

[Space] Complexity O(N)

- since, it dosent add more memory

---

## Better idea
