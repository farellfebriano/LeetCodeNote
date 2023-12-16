# ISOMORPHIC STRINGS

## Rules

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

## Example 1

Input: s = "egg", t = "add"<br>
Output: true<br>

## Example 2

Input: s = "foo", t = "bar"<br>
Output: false<br>

## Example 3

Input: s = "paper", t = "title"<br>
Output: true<br>

## Approach

return false when the KEY AND THE VALUE DOSENT MATCH
return false when the VALUE IS ALREADY IN SETS

```javascript
var isIsomorphic = function (s, t) {
  const map = new Map();
  const set = new Set();
  const length = s.length;
  for (let i = 0; i < length; i++) {
    const key = s[i];
    const val = t[i];
    if (map[key] !== undefined) {
      if (map[key] !== val) {
        return false;
      }
    } else {
      if (set.has(val)) {
        return false;
      }
      map[key] = val;
      set.add(val);
    }
  }
  return true;
};
```

<h3> --Complexity-- </h3>

Time Complexity O(n)

- since, it only iterate the array once

Space Complexity O(n)

- since, it dosent add more memory
