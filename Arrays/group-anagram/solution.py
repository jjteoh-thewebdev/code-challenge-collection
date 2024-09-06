class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        d = defaultdict(list) # create dictionary with values that are list = List[List[str]]

        for s in strs:
            count = [0] * 26 # [a-z] because input constrained to lowercase English letter

            for c in s:
                # hash_code = str(Counter(s)) 
                # final result from Counter will not be in expected order

                # ord(c) - ord("a") to normalize to 0-25
                count[ord(c) - ord("a")] += 1
               
            hash_code = tuple(count) # something like (0,0,1,0)
            #print(f"hash_code of count: {hash_code}")
            d[hash_code].append(s)
    
        return d.values()
            
