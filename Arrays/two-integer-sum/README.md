> Source: Neetcode150, LeetCode.1

> Tags: Array, Easy

# Description

Given an array of integers `nums` and an integer `target`, return the indices `x` and `y` such that `nums[x] + nums[y] == target` and `x != y`.

You may assume that every input has either no pair or exactly one pair of indices `x` and `y` that satisfy the condition.

Return the answer with the smaller index first. Return [-1, -1] if no pair satisfy the condition.

Example 1:

```
Input:
nums = [3,4,5,6], target=7

Output: [0,1]
```

Explanation: nums[0] + nums[1] = 7, so output = [0,1]

```
Input: nums = [4,5,6], target = 10
Output: [0,2]
```

Constraints:

- 2 <=nums.length <=1000
- -10,000,000 <= nums[x] <= 10,000,000
- -10,000,000 <= target <= 10,000,000

### Solution

From the problem, we can derive `x + y = target`. Conventionally, we will have to loop through the input(brute force), for each element, x, we need to check any of the rest of the element, y, can perfectly sum up to get result equals to the target.

For example:
`input: [1,2,3] target=5`

We will need to loop through the input, where these are the combinations:
`{ 1+2, 1+3, 2+3 }`

The pseudo code would look like this:

```
FOR every x in input and not last element
    FOR every y in input after element x
        IF x + y = target
            RETURN [x,y]
```

For the first loop's condition, we do not need to check the last element as if we have scan through the combination of last element with all the previous elements. Same concept applies to the inner loop condition, we only need to check combination against the element starting from x onwards.

i.e.

input: [1,2,3] target=5

when x=1, y={2,3} = { 1+2, 1+3 }

when x=2, y={3} = {2+3}

{2+1} is redundant when x=2 because we already checked something similar {1+2} when x=1.

Though, we already solved the problem, however, the is room for optimization.

we know that `x + y = target`, thus, `y = target - x`.

We can remove the need for nested loop by capturing element that we have visited in a dictionary/map, d. For each element `x` in input, we lookup whether `y`(by target - x) in the dictionary, if y exist, we return the indices, else we push x into d, and move forwards to next element.

#### Pseudo Code

```
CREATE dictionary, d

FOR every element, x, in input
    y = target - x

    IF y in d
        RETURN [index of x, index of y]

    ADD x to the d

RETURN [-1, -1] if no matching pair found
```

#### Space Complexity

(for nested loop solution) -
No additional space introduced, thus the overall space complexity is `O(1)`.

(for optimized solution) -
In worst case, the dictionary,d will store n elements, thus, the overall space complexity is `O(n)`.

#### Time Complexity

(for nested loop solution) -
In worst case, we will need to loop through `n-1` for the outer loop. For inner loop, we need to run `n-1` times on the first pass, `n-2` times on the second pass, and so on which can be simplified to `O(n^2)`. Thus, overall complexity is `O(n^2)`.

(for optimized solution) -
In worst case, we will need to loop through every elements in input, thus the overall time complexity is `O(n)` where n is length of input.
