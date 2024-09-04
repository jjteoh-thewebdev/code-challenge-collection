function hasDuplicate(nums) {
  // alternatively, Array() can be used,
  // but I doubt the performance of Array.includes() is better than Set.has()
  const seen = new Set();

  let i = 0;
  // use != null to avoid false negative when nums[i] = 0
  while (nums[i] != null) {
    if (seen.has(nums[i])) {
      return true;
    }

    seen.add(nums[i]);

    i++;
  }

  return false;
}

/** Tests */
const solution = new Solution();
const isAccepted =
  hasDuplicate([1, 2, 3, 3]) === true &&
  hasDuplicate([1, 2]) === false &&
  hasDuplicate([0, 10, 11, 0]) === true &&
  hasDuplicate([0]) === false;

console.log(`Your answer is ${isAccepted ? `Accepted` : `Rejected`}`);
