/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// using built-in JS Array functions
var topKFrequent = function (nums, k) {
  const dict = {}; // {num: frequency}
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    dict[num] = 1 + (dict[num] || 0);
  }

  return Object.entries(dict)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((entry) => entry[0]);
};

// using bucket sort
function topKFrequentBucketSort(nums, k) {
  const frequencyMap = new Map();
  const buckets = Array(nums.length + 1)
    .fill()
    .map(() => []);

  // Step 1: Count the frequency of each element
  for (let num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  // Step 2: Fill the buckets where the index represents the frequency
  for (let [num, frequency] of frequencyMap) {
    buckets[frequency].push(num);
  }

  // Step 3: Collect the top k frequent elements from the buckets
  const result = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    let remaining = k - result.length;

    if (buckets[i].length > 0) {
      result.push(...buckets[i].slice(0, remaining));

      if (result.length == k) return result; // early return
    }
  }

  return result;
}
