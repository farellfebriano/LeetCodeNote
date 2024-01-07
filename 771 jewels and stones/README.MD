# JEWELS AND STONES

## Rules

You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

## Example 1

Input: jewels = "aA", stones = "aAAbbbb"<br>
Output: 3<br>

## Example 2

Input: jewels = "z", stones = "ZZ"<br>
Output: 0<br>

## Code

```javascript
var numJewelsInStones = function (jewels, stones) {
  let dict = {},
    count = 0;
  for (let i of jewels) {
    dict[i] = i;
  }
  for (let i = 0; i < stones.length; i++) {
    const alpha = stones[i];
    if (dict[alpha] !== undefined) {
      count += 1;
    }
  }
  return count;
};
```

## Complexity

[Time] Complexity O(n)

- since, it only iterate the array once

[Space] Complexity O(1)

- since, it dosent add more memory

## Better faster code

```javascript
var numJewelsInStones = function (jewels, stones) {
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones[i])) {
      count += 1;
    }
  }
  return count;
};
```

## NOTE

When using includes method, use the want that is we ttying to find as an object of the method and the value where we want to find it as a parameter in the function
