// create two dict to hold counts
function isAnagram(s1, s2) {
  // condition 1: length must be same
  if (s1.length !== s2.length) return false;

  // condition 2: the occurance of char in both string must be same
  const s1Dict = {}; // alternatively, use Map()
  const s2Dict = {};

  for (let i = 0; i < s1.length; i++) {
    // increment value by 1
    s1Dict[s1[i]] = 1 + (s1Dict[s1[i]] || 0);
    s2Dict[s2[i]] = 1 + (s2Dict[s2[i]] || 0);
  }

  for (const key in s1Dict) {
    if (s1Dict[key] !== s2Dict[key]) return false;
  }

  return true;
}

const isAccepted =
  isAnagram("racecar", "carrace") === true &&
  isAnagram("jar", "jam") === false &&
  isAnagram("weeow", "weewo") === true &&
  isAnagram("amana", "aman") === false &&
  isAnagram("aacc", "ccac") == false;

console.log(`Your answer is ${isAccepted ? `Accepted` : `Rejected`}`);
