> Source: Neetcode150

> Tags: Array, Easy

# Duplicate Integer

Given an integer array `nums`, return `true` if any value appears more than once in the array, otherwise return `false`.

Example 1:

```
Input: nums = [1, 2, 3, 3]

Output: true
```

Example 2:

```
Input: nums = [1, 2, 3, 4]

Output: false
```

# Solution

> for following explanation, `set` is interchangablely referring to `Set` in Javascript/Typescript/Python, `HashSet` in C#.

The general idea is to maintain a collection(can be set/array/dictionary) of numbers that we already seen once, while looping through each element in ``nums`, we check whether the element already existed in our "seen" collection, if yes, we return true and break out from the loop early, else we continue to next element.

#### Pseudo Code

```
seen = []

FOR every element in nums:
    IF element in seen:
        RETURN true

    ADD element to seen

RETURN false

```

#### Memory Complexity

We need an additional array to hold the elements that already seen. In worst case or in another words, the `nums` array does not contains any duplication, the additional array will hold all elements of `nums` array. Thus, the overall memory complexity is `O(n)`

#### Time Complexity

The early return approach potentially can be faster, however,in worst case(no duplication), we will still need to loop through the entire `nums` array. Thus, the overall time complexity is `O(n)`
