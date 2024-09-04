package main

import "fmt"

// containsDuplicates checks if the slice contains any duplicate elements.
func containsDuplicates(nums []int) bool {
	// Go does not have built-in Set
	// Create a set using a map
    seen := make(map[int]struct{}) 

    for _, num := range nums {
        if _, exists := seen[num]; exists {
            return true 
        }
        seen[num] = struct{}{}
    }

    return false 
}

func main() {
    isAccepted := containsDuplicates([]int{1, 2, 3, 3}) == true && 
				containsDuplicates([]int{1, 2, 3}) == false

	fmt.Printf("Your solution is: %s\n", func() string {
		if isAccepted {
			return "Accepted"
		}
		return "Rejected"
	}())
}