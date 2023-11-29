# strStr()

## Rules

Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

## Example 1

Input: haystack = "sadbutsad", needle = "sad"<br>
Output: 0<br>
Explanation: "sad" occurs at index 0 and 6.<br>
The first occurrence is at index 0, so we return 0.<br>

## Example 2

Input: haystack = "leetcode", needle = "leeto"<br>
Output: -1<br>
Explanation: "leeto" did not occur in "leetcode", so we return -1.<br>

<h3> --The Code--</h3>

```javascript
var strStr = function (haystack, needle) {
  if (haystack === "" || haystack === needle) {
    return 0;
  }
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    if (haystack.slice(i, i + needle.length) === needle) {
      return i;
    }
  }
  return -1;
};
```

<h3> --Complexity-- </h3>

Time Complexity O(n)

- since, it only iterate the array once

Space Complexity O(1)

- since, it dosent add more memory
