# VALIDATE TREE

## Rules

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

## Example 1

Input: root = [3,9,20,null,null,15,7]<br>
Output: [[3],[9,20],[15,7]]<br>

## Example 2

Input: root = [1]<br>
Output: [[1]]<br>

## Example 3

Input: root = []<br>
Output: []<br>

## my Code

```javascript
var isValidBST = function (root) {
  const valid = (node, left, right) => {
    if (!node) {
      return true;
    }
    if (node.val <= left || node.val >= right) {
      return false;
    }
    return (
      valid(node.left, left, node.val) && valid(node.right, node.val, right)
    );
  };
  return valid(root, -Infinity, Infinity);
};
```

## Complexity

[Time] Complexity O(n)

- since, it only iterate the array once

[Space] Complexity O(1)

- since, it dosent add more memory
