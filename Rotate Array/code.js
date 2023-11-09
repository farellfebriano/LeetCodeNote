/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let index;
  if (k > nums.length) {
    index = nums.length - (k % nums.length);
    console.log(index);
  } else {
    index = nums.length - k;
  }

  const spliced = nums.splice(index);
  nums.unshift(...spliced);
};
