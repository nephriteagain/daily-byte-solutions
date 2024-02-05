/**
 * This question is asked by Google. 
 * Given an array, nums, and an integer k, 
 * return whether or not two unique indices exist 
 * such that nums[i] = nums[j] and the two indices i and jj are at most k elements apart. 
 * Ex: Given the following array nums and value k…

nums = [1, 2, 1], k = 1, return false.
Ex: Given the following array nums and value k…

nums = [2, 3, 2], k = 2, return true.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @returns {boolean}
 */
 function solution(nums, k){
    let i = 0;
    while (i < nums.length -1) {
        for (let j = i+1; j < nums.length; j++) {
            // this is when two indices are to far of each other
            // so we move to another i
            if (j - i > k) {
                break;
            }
            if (nums[j] === nums[i]) {
                return true
            }
        }
        i++
    }
    return false

 }

 console.log(solution([1,2,1],1))
 console.log(solution([2,3,2],2))