function moveZeroes(nums) {
    let index = 0;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]

        if (num !== 0) {
            nums[index] = num;
            index += 1
        }
    }

    for (let i = index; i < nums.length; i++) {
        nums[i] = 0
    }

    return nums
} 

console.log(moveZeroes([0, 2, 0, 4, 5, 0, 2, 3]))