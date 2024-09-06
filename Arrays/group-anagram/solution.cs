public class Solution {
    public IList<IList<string>> GroupAnagrams(string[] strs) {
        var anagramGroups = new Dictionary<string, List<string>>();

        foreach (var s in strs) {
            var count = new int[26];
            foreach (var c in s) {
                count[c - 'a']++;
            }

            var key = string.Join(',', count);
            if (!anagramGroups.ContainsKey(key)) {
                anagramGroups[key] = new List<string>();
            }

            anagramGroups[key].Add(s);
        }

        return anagramGroups.Values.ToList<IList<string>>();
    }
}