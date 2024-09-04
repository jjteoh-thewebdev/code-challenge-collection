bool hasDuplicate(int[] nums) {
    // HashSet works like Set in Javascript
    HashSet<int> seen = new HashSet<int>();

    foreach(int num in nums) {
        // HashSet.Add() return bool
        // alternatively, for better readability,
        // use Contains() and Add()
        if(seen.Add(num) == false) return true;
    }
    return false;
}

