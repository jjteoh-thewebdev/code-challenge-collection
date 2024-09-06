from collections import Counter

def is_anagram(s1: str, s2: str):
    if(len(s1) != len(s2)):
        return False

    return Counter(s1) == Counter(s2)

if __name__ == "__main__":
    isAccepted = is_anagram("racecar", "carrace") and is_anagram("jar", "jam") == False and is_anagram("aacc", "ccac") == False
    print(f"Your solution is: {'Accepted' if isAccepted else 'Rejected'}")


# Python 3's Collection module comes with built in Counter Class
# This data type is implement as dictionary that holds count of elements in a hashable object
# Example: Counter("racecar") 
# Output: {'r': 2, 'a': 2, 'c': 2, 'e': 1}


# it is equivalent to the following version
def is_anagram_without_counter(s1: str, s2: str):
    if(len(s1) != len(s2)):
        return False

    s1Dict, s2Dict = {}, {}

    for i in range(len(s1)):
        s1Dict[s[i]] = 1 + s1Dict.get(s1[i], 0)
        s2Dict[s[i]] = 1 + s2Dict.get(s2[i], 0)

    return s1Dict == s2Dict