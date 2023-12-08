# REVERSE BITS

## Rules

Reverse bits of a given 32 bits unsigned integer.

Note:

Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825.

## Example 1

Input: n = 00000010100101000001111010011100<br>
Output: 964176192 (00111001011110000010100101000000)<br>
Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.<br>

## Example 2

Input: n = 11111111111111111111111111111101<br>
Output: 3221225471 (10111111111111111111111111111111)<br>
Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.<br>

## CODE

```javascript
var reverseBits = function (n) {
  // the result
  let result = 0;
  //loping trough the bits
  for (let i = 0; i < 32; i++) {
    // get the las bit from the n
    const lastBit = n & 1;
    //shift accoring to the loop
    const reverseBit = lastBit << (31 - i);
    result = result | reverseBit;
    n = n >>> 1;
  }
  // ake the bits is unsigned
  return result >>> 0;
};
```

## Complexity

[Time] Complexity O(n)

- since, it only iterate the array once

[Space] Complexity O(1)

- since, it dosent add more memory
