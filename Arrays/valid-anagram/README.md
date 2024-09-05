> Source: Neetcode150

> Tags: Array, Easy

# Description

Given two strings `s1` and `s2`, return `true` if the two strings are anagrams of each other, otherwise return false.

> An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

```
Input: s1 = "racecar", s2 = "carrace"

Output: true
```

Example 2:

```
Input: s1 = "jar", s2 = "jam"

Output: false
```

Constraints:

`s1` and `s2` only consist of lowercase English letters.

#### Solution

The two strings are anagram when:

1. Both strings have equal length
2. Both strings have equal number of characters' occurances regardless the sequence.

The main idea is to check the length of both strings, create 2 dictionaries that hold the number of character occurances in each strings. Then, we compare both dictionaries.

#### Pseudo Code

```
// early return if lengths are different
IF s1 length != s2 length
    return false

CREATE 2 dictionaries d1, d2

FOR every element in s1
    INCREMENT d1[element] by 1

FOR every element in s2
    INCREMENT d2[element] by 1

FOR every entry in d1
    IF entry not exists in d2 OR counts are different
        return false

return true

```

#### Space Complexity

In this solution, we primarily concern about the two dictionaries/maps that we use to hold the character frequency.

In worst case, both dictionaries will need to hold all the character frequency, thus, the overall memory complexity is `O(n)`.

#### Time Complexity

This solution can break into two parts, the first part compare the length and the second part compare the character frequency in the string.

Comparing the length is an `O(1)` operation because we can access the string length at constant time.

The second part involve looping thru both strings, store each character frequency in dictionary and lastly compare them. Since, we need to go through each characters in both strings, this is an `O(n)` operation where n is the length of the string.

Since in the worst scenario, we will need to run through first and second part of the solution, thus, the overall time complexity is `O(n)`.
