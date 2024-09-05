// by popping a char from s2 everytimes we match an element in s1
function isAnagram(s1, s2) {
  // condition 1: length must be same
  if (s1.length !== s2.length) return false;

  // condition 2: the occurance of char in both string must be same
  for (const a of s1) {
    const index = s2.indexOf(a);

    // early return if char of s1 not found in s2
    if (index < 0) return false;

    // remove first occurance of a in s2
    s2 = s2.slice(0, index) + s2.slice(index + 1); // for array, use splice
  }

  return true;
}

const isAccepted =
  isAnagram("racecar", "carrace") === true &&
  isAnagram("jar", "jam") === false &&
  isAnagram("weeow", "weewo") === true &&
  isAnagram("amana", "aman") === false;

console.log(`Your answer is ${isAccepted ? `Accepted` : `Rejected`}`);
