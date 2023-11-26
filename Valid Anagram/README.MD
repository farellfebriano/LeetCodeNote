# Single Number

## Rules

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

## Example 1

Input: s = "anagram", t = "nagaram"<br>
Output: true<br>

## Example 2

Input: s = "rat", t = "car"<br>
Output: false<br>

## my Code

```javascript
var isAnagram = function (s, t) {
  let mem1 = {};
  let mem2 = {};
  if (s.length != t.length) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    mem1[s[i]] = 1 + (!mem1[s[i]] ? 0 : mem1[s[i]]);
    mem2[t[i]] = 1 + (!mem2[t[i]] ? 0 : mem2[t[i]]);
  }
  for (let key in mem1) {
    if (!mem2[key] || mem1[key] != mem2[key]) {
      return false;
    }
  }
  return true;
};
```

## Complexity

[Time] Complexity O(n)

- since, it only iterate the array once

[Space] Complexity O(n)

- since, it dosent add more memory
