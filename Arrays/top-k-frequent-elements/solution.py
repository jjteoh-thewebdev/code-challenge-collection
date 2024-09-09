def top_k_frequenct(nums, k):
    # build frequency map
    freq = defaultdict(int)
    for num in nums:
        freq[num] += 1

    # fill the buckets where the index represents the frequency
    buckets = [[] for _ in range(len(nums) + 1)] # create array of len nums + 1, initialize with empty arrays
    for num, f in freq.items():
        buckets[f].append(num)

    # get top k elements
    result = []
    for i in range(len(buckets) - 1, 0, -1): # range(max, min, desc)
        for num in buckets[i]:
            if len(result) < k:
                result.append(num)
                if len(result) == k:
                    return result # early return if fulfilled
            
    return result