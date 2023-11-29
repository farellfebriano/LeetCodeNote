# Remove Duplicates from Sorted Array

## Rules

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

## Example 1

Input: s = "leetcode"<br>
Output: 0

## Example 2

Input: s = "loveleetcode"<br>
Output: 2

## First Approach

using two loops to and hashmap to count the occurence. And iterate trough the map and return that has the ocurence below 2

<h3> --Code--</h3>

```javascript
var firstUniqChar = function (s) {
  let mem = {};
  for (string of s) {
    if (!mem[string]) {
      mem[string] = 1;
      continue;
    }
    mem[string] += 1;
  }
  for (let i in mem) {
    if (mem[i] < 2) {
      return s.indexOf(i);
    }
  }
  return -1;
};
```

<h3> --Complexity--</h3>

Time Complexity O(n)

- since, it only iterate the array once

[Space] Complexity O(n)

- since, it dosent add more memory

## Better approach

since the time complexity will always be O(n) we can minimize the space complexity into O(1)

<h3>--Code--</h3>

```javascript
var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  }
  return -1;
};
```

--Note--
This code determine that if the first index of a value is the same with the last index of the same value, if its true just return the same index

## How The Code Works Visualy

- this is how the patterns look like visualy in the first while loop
  ![View Design](assets/odd-and-even.png)

- this is how the patterns look like visualy in the second while loop for `ODD`
  ![View Design](assets/odd.png)

- this is how the patterns look like visualy in the second while loop for `EVEN`
  ![View Design](assets/even.png)

## Complexity

Time Complexity `O(n)`

Space Complexity `O(1)`
