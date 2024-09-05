def two_sum(nums, target):
    d = {}

    for index, x in enumerate(nums):
        y = target - x

        if y in d:
            return [d[y], index]

        d[x] = index

    return [-1, -1]