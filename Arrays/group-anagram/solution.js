/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const result = new Map();

  for (const str of strs) {
    const count = Array(26).fill(0);

    for (const c of str) {
      count[c.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    const key = count.join();
    if (!result.has(key)) {
      result.set(key, []);
    }

    const arr = result.get(key);
    arr.push(str);
    result.set(key, arr);
  }

  return Array.from(result.values());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
console.log(groupAnagrams(["bdddddddddd", "bbbbbbbbbbc"])); // OUTPUT: [["bbbbbbbbbbc"], ["bdddddddddd"]]

/**
 * note that count.join('') wont work as input like ["bdddddddddd", "bbbbbbbbbbc"]
 * will generate
 * bdddddddddd = 
    [
    0, 1, 0, 10, 0, 0, 0, 0,
    0, 0, 0,  0, 0, 0, 0, 0,
    0, 0, 0,  0, 0, 0, 0, 0,
    0, 0
    ]
  bbbbbbbbbbc = 
    [
    0, 10, 1, 0, 0, 0, 0, 0,
    0,  0, 0, 0, 0, 0, 0, 0,
    0,  0, 0, 0, 0, 0, 0, 0,
    0,  0
    ]

    which both will generate key = 010100000000000000000000000

    thus, we use count.join() which default delimeter is "," or we use custom delimeter
 */
