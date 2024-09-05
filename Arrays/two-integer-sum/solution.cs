using System;
using System.Collections.Generic;

class Program
{
    static void Main(string[] args)
    {
        int[] nums = { 2, 7, 11, 15 };
        int target = 9;
        int[] result = TwoSum(nums, target);

        Console.WriteLine($"[{result[0]}, {result[1]}]"); // Output: [0, 1]
    }

    public static int[] TwoSum(int[] nums, int target)
    {
        Dictionary<int, int> dict = new Dictionary<int, int>();

        for (int i = 0; i < nums.Length; i++)
        {
            int y = target - nums[i];

            if (dict.ContainsKey(y))
            {
                return new int[] { dict[y], i };
            }

            dict[nums[i]] = i;
        }

        return new int[] { -1, -1 };
    }


}