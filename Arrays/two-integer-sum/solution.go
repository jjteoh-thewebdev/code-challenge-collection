package main

import "fmt"

func twoSum(nums []int, target int) []int {
    d := make(map[int]int)

    for index, x := range nums {
        y := target - x

        if idx, found := d[y]; found {
            return []int{idx, index}
        }

        d[x] = i
    }

    return []int{-1, -1}
}
