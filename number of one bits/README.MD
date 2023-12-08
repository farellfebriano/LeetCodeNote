# NUMBER OF 1 BITS

## Rules

Write a function that takes the binary representation of an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

Note:

Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed integer. -3.

## Example 1

Input: n = 00000000000000000000000000001011<br>
Output: 3<br>
Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.

## Example 2

Input: n = 00000000000000000000000010000000<br>
Output: 1<br>
Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.<br>

## Example 3

Input: n = 11111111111111111111111111111101<br>
Output: 31<br>
Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.<br>

## First Approach

<h3> --Code--</h3>

```javascript
var hammingWeight = function (n) {
  // if n equal zero just return 0
  if (n <= 0) {
    return 0;
  }
  // change the number into a sring with toString(2) method
  const bits = n.toString(2);
  // create a match
  const arr = bits.match(/1/g);
  // return the match length since match is returning all the match in the array
  return arr.length;
};
```

<h3> --Complexity--</h3>

Time Complexity O(n)

- since, it only iterate the array once

[Space] Complexity O(1)

- since, it dosent add more memory

## Better approach

in this approach we combile fast & slow algorythm with how 2 pointers like we do the array above.

<h3>--Code--</h3>

```javascript
var hammingWeight = function (n) {
  let count = 0;
  // if n is not 0 keep the loop going
  while (n !== 0) {
    // check if the n has 1 at the end with number one since 1's bits is 0001
    count += n & 1;
    // shift the bit number to the right
    n = n >>> 1;
  }
  return count;
};
```

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
