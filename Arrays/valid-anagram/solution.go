package main

import (
	"fmt"
	"reflect"
)

func isAnagram(s1, s2 string) bool {
	// Condition 1: Length must be the same
	if len(s1) != len(s2) {
		return false
	}

	// rune = alias of int32, unicode code point
	count1 := make(map[rune]int)
	count2 := make(map[rune]int)

	// Count characters in the first string
	for _, char := range s1 {
		count1[char]++
	}

	// Count characters in the second string
	for _, char := range s2 {
		count2[char]++
	}

	// Compare the two frequency maps
	return reflect.DeepEqual(count1, count2)
}

func main() {
	isAccepted := isAnagram("racecar", "carrace") == true && 
					isAnagram("jar", "jam") == false &&
						isAnagram("weeow", "weewo") == true &&
							isAnagram("amana", "aman") == false


	fmt.Printf("Your solution is: %s\n", func() string {
		if isAccepted {
			return "Accepted"
		}
		return "Rejected"
	}())
}