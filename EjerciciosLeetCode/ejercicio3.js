function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let n = i + 1; n < nums.length; n++) {
            if (nums[i] + nums[n] == target) {
                return [i, n]
            }
        }
    }
}


console.log(twoSum([2,7,11,15], 9))