/**
Given an array nums, return the third largest (distinct) value.
Note: If the third largest number does not exist, return the largest value.


Ex: Given the following array nums…

nums = [1, 4, 2, 3, 5], return 3.
Ex: Given the following array nums…

nums = [2, 3, 3, 5], return 2.
Ex: Given the following array nums…

nums = [9, 5], return 9.
 */


/**
 * 
 * @param {number[]} nums 
 * @returns {number}
 */ 
function thirdLargest(nums) {   
    const distinctNums = new Array(...new Set(nums))
    return distinctNums.sort((a,b) => b-a)[nums.length < 3 ? 0 : 2]
}

console.log(thirdLargest([1,4,2,3,5]))
console.log(thirdLargest([2,3,3,5]))
console.log(thirdLargest([9,5]))
