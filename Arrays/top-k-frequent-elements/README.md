> Source: Neetcode150, LeetCode.1

> Tags: Array, Medium

# Description

Given an integer array `nums` and an integer `k`, return the k most frequent elements. You may return the answer in `any order`.

Example 1:

```
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
```

Example 2:

```
Input: nums = [1], k = 1
Output: [1]
```

Constraints:

- 1 <= nums.length <= 105
- -104 <= nums[i] <= 104
- k is in the range [1, the number of unique elements in the array].
- It is guaranteed that the answer is unique.

Follow up: Your algorithm's time complexity must be better than `O(n log n)`, where `n` is the array's size.

# Solution

1. `Build Frequency Map` - Count the frequency of each element in the array using a hashmap.
2. `Sort the Map base on number of frequency` - Since the frequencies range from 1 to `n` (size of the array), we can use bucket sort to organize numbers by their frequency. Each bucket corresponds to possible frequency.
3. `Extract Top K Elements` - Traverse the buckets from hight to low and collect top `k` frequent element.

Example:

`input: [1,1,1,1,1,2,2,3,4,4,4,4,4,4,6,6,6]`
`k = 3`

1. `Build Frequency Map`

- `1` appears 5 times
- `2` appears 2 times
- `3` appears 1 time
- `4` appears 6 times
- `6` appears 3 times

```js
frequencyMap = {
  1: 5,
  2: 2,
  3: 1,
  4: 6,
  6: 3,
};
```

2. `Bucket Creation` - bucket[frequency] = [element]

- `bucket[1]` = [3]
- `bucket[2]` = [2]
- `bucket[3]` = [6]
- `bucket[5]` = [1]
- `bucket[6]` = [4]

3. `Extract Top K Elements`

- start from highest frequency bucket(index = 6), extract until we have `k` elements.
- answer: [4,1,6]

#### Pseudo Code

```
FOR each num in nums
    INCREMENT frequency[num]++

DECLARE buckets = Array of size of `nums` length + 1 (because frequency min:max = 0:n, where n is the length of nums)
FOR each num
    PUSH num into buckets[frequency]

FOR each i=buckets length - 1
    remaining = k - result length

    IF buckets[i] length > 0
        PUSH values of buckets[i] into result, take max = remaining (as we only need remaining count to fulfill k)

    INCREMENT i by 1

RETURN result
```

#### Time Complexity

- `Frequency Map` - Counting each element in the input array, thus, `O(n)` where `n` is the size of the input array.
- `Bucket Sort` - Filling the buckets and collecting the top `k` elements takes `O(n)`.

Overall time complexity = `O(n)`

#### Space Complexity

- One `Frequency Map` to hold the count the frequency of elements in the input array. `O(n)`, where `n` is the size of input array.
- `Bucket`, an array that holds elements by their frequency. `O(n)`

Overall space complexity is `O(n)`
