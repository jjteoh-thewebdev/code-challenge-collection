
from typing import List

def has_duplicate(nums: List[int]) -> bool:
    seen = set()

    for num in nums:
        if num in seen:
            return True

        seen.add(num)

    return False   

if __name__ == "__main__":
    isAccepted = has_duplicate([1,2,3,3]) and has_duplicate([1,2,3]) == False
    print(f"Your solution is: {'Accepted' if isAccepted else 'Rejected'}")