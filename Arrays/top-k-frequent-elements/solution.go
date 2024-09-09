func topKFrequent(nums []int, k int) []int {
    // build frequency map
	freq := make(map[int]int) // nums[i]:count
	for _, num := range(nums) {
		freq[num]++
	}
    
	// fill the buckets where the index represents the frequency
	buckets := make([][]int, len(nums) + 1) // [][]int = slice of slices
	for num, f := range freq {
		buckets[f] = append(buckets[f], num)
	}

	// get top k elements
	result := []int{} // array of int
	for i := len(buckets) - 1; i >= 0 && len(result) < k; i-- {
		for _, num := range buckets[i] {
			result = append(result, num)
			if len(result) == k {
				return result
			}
		}	
	}

	return result
}
