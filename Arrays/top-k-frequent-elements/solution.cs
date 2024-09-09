using System;
using System.Collections.Generic;

public class Solution {
    public int[] TopKFrequent(int[] nums, int k) {
        // build frequency map
        Dictionary<int, int> frequencyMap = new Dictionary<int, int>();
        foreach(var num in nums) 
        {
            if(!frequencyMap.ContainsKey(num)) 
            {
                frequencyMap[num] = 0;
            } 
            frequencyMap[num]++;
        }

        // fill the buckets where the index represents the frequency
        List<int>[] buckets = new List<int>[nums.Length + 1];
        foreach(var pair in frequencyMap) 
        {
            int num = pair.Key;
            int freq = pair.Value;

            if(buckets[freq] == null) 
            {
                buckets[freq] = new List<int>();
            }
            buckets[freq].Add(num);    
        }

        // get top k elements
        // using list instead array because we cannot assure there are always k elements
        List<int> result = new List<int>(); 
        for (int i = buckets.Length - 1; i >= 0 && result.Count < k; i--) 
        {
            if(buckets[i] != null)
            {
                int remaining = k - result.Count;
                result.AddRange(buckets[i].Take(remaining)); // AddRange = insert multiple

                if(result.Count == k) return result.ToArray();
            }
        }

        return result.ToArray(); // as expected int[]
    }
}
