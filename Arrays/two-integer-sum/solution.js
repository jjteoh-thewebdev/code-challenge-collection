function twoSum(nums, target) {
  const map = new Map(); // key = num, value = index of num in input

  for (let x = 0; x < nums.length; x++) {
    const num = nums[x];
    const needed = target - num;

    const matchIndex = map.get(needed);

    if (matchIndex >= 0) return [matchIndex, x];

    map.set(num, x);
  }

  return [-1, -1];
}
