# Single Number

## Rules

Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

Given a balanced string s, split it into some number of substrings such that:

Each substring is balanced.
Return the maximum number of balanced strings you can obtain.

## Example 1

Input: s = "RLRRLLRLRL"<br>
Output: 4<br>
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.<br>

## Example 2

Input: s = "RLRRRLLRLL"<br>
Output: 2<br>
Explanation: s can be split into "RL", "RRRLLRLL", each substring contains same number of 'L' and 'R'.
Note that s cannot be split into "RL", "RR", "RL", "LR", "LL", because the 2nd and 5th substrings are not balanced.<br>

## Example 3

Input: s = "LLLLRRRR"<br>
Output: 1<br>
Explanation: s can be split into "LLLLRRRR".<br>

## my Code

```python
class Solution:
    def balancedStringSplit(self, s: str) -> int:
        sumR=0
        occurence=0
        for i in s:
            if(i=='L'):
                occurence+=1
            else:
                occurence-=1
            if(occurence==0):
                sumR+=1
        return sumR
```

## Complexity

[Time] Complexity O(n)

- since, it only iterate the array once

[Space] Complexity O(n)

- since, it dosent add more memory
