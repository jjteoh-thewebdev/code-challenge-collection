// tested with .net 8
using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        bool isAccepted =   IsAnagram("racecar", "carrace") == true &&
                            IsAnagram("jar", "jam") == false &&
                            IsAnagram("weeow", "weewo") == true &&
                            IsAnagram("amana", "aman") == false;
		
        Console.WriteLine($"Your answer is {(isAccepted ? "Accepted" : "Rejected")}");
    }

    static bool IsAnagram(string s1, string s2)
    {
        // Condition 1: Length must be the same
        if (s1.Length != s2.Length)
        {
            return false;
        }

        // Create dictionaries to store character frequencies
        Dictionary<char, int> charCount1 = new Dictionary<char, int>();
        Dictionary<char, int> charCount2 = new Dictionary<char, int>();

        // Count the characters in the first string
        foreach (char c in s1)
        {
            if (charCount1.ContainsKey(c))
            {
                charCount1[c]++;
            }
            else
            {
                charCount1[c] = 1;
            }
        }

        // Count the characters in the second string
        foreach (char c in s2)
        {
            if (charCount2.ContainsKey(c))
            {
                charCount2[c]++;
            }
            else
            {
                charCount2[c] = 1;
            }
        }

        // Compare the character frequencies
        foreach (var pair in charCount1)
        {
            if (!charCount2.ContainsKey(pair.Key) || charCount2[pair.Key] != pair.Value)
            {
                return false;
            }
        }

        return true;
    }
}