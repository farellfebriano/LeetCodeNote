var removeDuplicates = function (nums) {
  let pointer1 = 1;
  let pointer2 = 1;
  if (nums.length <= 1) {
    return nums;
  }
  while (pointer2 < nums.length) {
    console.log(nums);
    if (nums[pointer2] === nums[pointer2 - 1]) {
      pointer2++;
    } else {
      nums[pointer1] = nums[pointer2];
      pointer1++;
      pointer2++;
    }
  }
  return pointer1;
};
