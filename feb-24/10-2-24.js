/**
 * 
Given an array of integers, nums, 
and a value k, return the kth largest element.

Ex: Given the following array nums…

[1, 2, 3], k = 1, return 3.
Ex: Given the following array nums…

[9, 2, 1, 7, 3, 2], k = 5, return 2.
 */


/**
 * 
 * @param {number[]} nums 
 * @param {number} k
 * @returns {number}
 */
function solution(nums, k) {
    if (k > nums.length) {
        throw new Error('k is larger than nums!')
    }

    nums.sort((a,b) => b-a)    

    return nums[k-1]
}

console.log(solution([1,2,3], 1))
console.log(solution([9,2,1,7,3,2]), 5)

