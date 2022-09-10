function moveZeroes(nums) {
    let index = 0;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]

        if (num !== 0) {
            console.log(nums[index] = num);
            index += 1
        }
    }

    return nums
} 

console.log(moveZeroes([0, 2, 0, 4, 5, 0, 2, 3]))