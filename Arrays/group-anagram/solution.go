func groupAnagrams(strs []string) [][]string {
    anagramMap := make(map[string][]string)

    for _, s := range strs {
        // compute count
        count := [26]int{}

        for _, c := range s {
            count[c - 'a']++
        }

        // generate key from count array
        key := make([]byte, 26)
        for i, ct := range count {
            key[i] = byte(ct + 'a')
        }
        keyStr := string(key)

        anagramMap[keyStr] = append(anagramMap[keyStr], s)
    }

    // map to 2d array
    result := make([][]string, 0, len(anagramMap))
	// alternatively, you can do: var result [][]string -- this will do dynamic sizing
	// make() will do storage allocation up front

	for _, group := range anagramMap {
		result = append(result, group)
	}

	return result
}