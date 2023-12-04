# Remove Duplicates from Sorted Array

## Rules

Given the `head` of a singly linked list, return `true` if it is a palindrome or `false` otherwise.

## Example 1

Input: nums = [3,0,1]<br>
Output: 2<br>
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is<br>
the missing number in the range since it does not appear in nums.<br>

## Example 2

Input: nums = [0,1]<br>
Output: 2<br>
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.<br>

## Example 3

Input: nums = [9,6,4,2,3,5,7,0,1]<br>
Output: 8<br>
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.<br>

## First Approach

<h3> --Code--</h3>

```javascript
var missingNumber = function (nums) {
  let sum1 = 0;
  let sum2 = 0;
  let zero = false;
  // the loop need to be added + 1 because we want the num length be added in the sum1
  for (let i = 0; i < nums.length + 1; i++) {
    if (nums[i] === 0) {
      // catch the zero if its exist change it true
      zero = true;
    }
    // add all the nums and if is undefined just add 0
    sum1 += nums[i] === undefined ? 0 : nums[i];
    // add all the index
    sum2 += i;
  }
  if (zero) {
    // so the logic is eaither 0 is missing from the array or the (sum2-sum1)
    return sum2 - sum1;
  }
  // and if zero is not exist just return 0
  return 0;
};
```

<h3> --Complexity--</h3>

Time Complexity O(n)

- since, it only iterate the array once

[Space] Complexity O(n)

- since, it dosent add more memory

## Better approach

in this approach we combile fast & slow algorythm with how 2 pointers like we do the array above.

<h3>--Code--</h3>

```javascript
var isPalindrome = function (head) {
  let slow = head;
  let fast = head;
  // divide th linklist in two half part
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  //reverse the first half of the link list
  let prev = null;
  while (slow) {
    const temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }

  let left = head;
  let right = prev;

  // using two pointers and iterate each single node to make sure its the same value (palindrom)
  while (right) {
    if (right.val != left.val) {
      return false;
    }
    left = left.next;
    right = right.next;
  }
  return true;
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
