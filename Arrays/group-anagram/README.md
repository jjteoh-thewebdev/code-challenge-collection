> Source: Neetcode150, LeetCode.49

> Tags: Array, Medium

Given an array of strings `strs`, group the
`anagrams` together. You can return the answer in any order.

> Anagrams are words/phrases that have same occurances of characters in a string, e.g. silent, listen

Example 1:

```
Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

- There is no string in strs that can be rearranged to form "bat".
- The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
- The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
```

Example 2:

```
Input: strs = [""]

Output: [[""]]

```

Example 3:

```
Input: strs = ["a"]

Output: [["a"]]
```

Constraints:

- 1 <= strs.length <= 104
- 0 <= strs[i].length <= 100
- strs[i] consists of lowercase English letters.

# Solution

Anagrams have 2 properties, they must have equal length, and when we sort the characters in the string, they will form a same string, e.g. `silent` and `lsiten` both will form `eilnst` when sorted. Let's call the sorted form as `base form` for the rest of the writtings.

Leveraging these properties, what we can do is creating a dictionary where we use the base form (i.e. `eilnst`) as key and array of strings to store the oringal form (i.e. `silent` and `listen`). Then, we convert the Dictionary as array of arrays as output.

Alternative to sorting each string, we can create another dictionary to hold the count of character in the string, encode it by joining them with ',' and then adding the string to the outer dictionary.

#### Pseudo Code

```
CREATE anagrams_dictionary

FOR EACH string in strs
    CREATE count_array of size 26 to hold character count(26 because [a-z])

    FOR EACH character in string
        INCREMENT count_array[character] by 1

    CONVERT count_array to string, key

    ADD string to anagrams_dictionary[key]

CONVERT anagrams_dictionary to array of arrays

RETURN the result
```

#### Space Complexity

```
Let:

n = the maximum length of a string in strs
m = the number of strings in strs
```

There are few storages that we concern:

1. `anagrams_dictionary` - this dictionary stores all the keys(build from 26) and strings, so the space complexity can denote as `O(m⋅26)` where `m` is the number of string in `strs`, since 26 is constant, we can simplify the notation to just `O(m)`.
2. `count_array` - For each string, a fixed-size array of length 26 is created. Since the dictionary length is constant, the space complexity for this is `O(1)`
3. final result - The final result is a list of lists of strings, which holds all the original strings. This also requires `O(m⋅n)` space to store all the strings.

Since, the space complexity is dominated by the storage of the input strings and the dictionary, so the overall space complexity is the overall complexity is `O(m⋅n)`.

#### Time Complexity

```
Let:

n = the maximum length of a string in strs
m = the number of strings in strs
```

```
CREATE anagrams_dictionary

FOR EACH string in strs
    CREATE count_array of size 26 to hold character count(26 because [a-z])

    FOR EACH character in string
        INCREMENT count_array[character] by 1

    CONVERT count_array to string, key

    ADD string to anagrams_dictionary[key]

CONVERT anagrams_dictionary to array of arrays

RETURN the result
```

1. `Outer loop(FOR EACH string in strs)` - this loop runs once for each string in strs(`m` times).
2. `Inner loop(FOR EACH character in string)` - this loop runs once for each character(`n` times) in the string.
3. `Building the key(CONVERT count_array to string, key)` - we can limit the size of count_array to 26 since there are only 26 lowercase English characters, this implies that there will be 26 iterations over each string to build the key, thus, the complexity of this process is O(26). Since 26 is constant and indepent of input size, in Big O notation we can simplify to O(1).
4. `Adding string to dictionary(ADD string to anagrams_dictionary[key])` - we use dictionary to lookup(by key) and and insert, thus the complexity of this process is O(1)
5. `Converting result(CONVERT anagrams_dictionary to array of arrays)` - this takes `m` times to process.

Thus, the overall time complexity is `O(m.n)` where `m` is number of strings from input array, and `n` is the average length(number of characters) of each string.
