# BINARY TREE PREORDER TRAVERSAL

## Rules

Given the root of a binary tree, return the preorder traversal of its nodes' values.

## Example 1

Input: root = [1,null,2,3]<br>
Output: [1,2,3]<br>

## Example 2

Input: root = [1]<br>
Output: [1]<br>

## Code Recursive

```javascript
var preorderTraversal = function (root) {
  let list = [];
  const traversal = (root, list) => {
    if (root === null) {
      return list;
    }
    list.push(root.val);
    traversal(root.left, list);
    traversal(root.right, list);
    return list;
  };
  return traversal(root, list);
};
```

## Complexity

[Time] Complexity O(n)

- since, it only iterate the array once

[Space] Complexity O(n)

- since, it dosent add more memory

## Code Iterative

NOTE:
use a STACK

```javascript
var preorderTraversal = function (root) {
  // the initial stack
  let stack = [root],
    lis = [];
  while (stack.length > 0) {
    const curr = stack.pop();
    // there are two choice in this situation
    /* 1. you can keep the if statement to check
    the curr node and erase the if statement that check curr.left and curr.right
    */
    /* 2. you can erase the if(curr) and keep the if(curr.right) and if(curr.left)
     */
    // However i think the first option will make the code more faster

    if (curr) {
      if (curr.right) {
        stack.push(curr.right);
      }
      if (curr.left) {
        stack.push(curr.left);
      }
      lis.push(curr.val);
    }
  }
  return lis;
};
```

## Complexity

[Time] Complexity O(n)

- since, it only iterate the array once

[Space] Complexity O(n)

- since, it dosent add more memory
