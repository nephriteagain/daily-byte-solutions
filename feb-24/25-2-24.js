/**
Given an array of integers, nums, 
each element in the array either appears once or twice. 
Return a list containing all the numbers that appear twice.
Note: Each element in nums is between one and nums.length (inclusive).

Ex: Given the following array nums…

nums = [2, 3, 1, 5, 5], return [5].
Ex: Given the following array nums…

nums = [1, 2, 3], return [].
Ex: Given the following array nums…

nums = [7, 2, 2, 3, 3, 4, 4], return [2,3,4].
 */

//solution 1 create a set that compares the num
function takeTwo(nums) {
    const set = new Set()
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i]
        if (!set.has(n)) {
            set.add(n)
        } else {
            res.push(n)
        }
    }
    return res
}

console.log(takeTwo([2,3,1,5,5]))
console.log(takeTwo([1,2,3]))
console.log(takeTwo([7, 2, 2, 3, 3, 4, 4]))

//solution 2 create a array that compares the num
function takeTwo2(nums) {
    const arr = [];
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i]
        if (arr[n] === undefined) {
            arr[n] = n
        } else {
            res.push(n)
        }
    }
    return res
}

console.log(takeTwo2([2,3,1,5,5]))
console.log(takeTwo2([1,2,3]))
console.log(takeTwo2([7, 2, 2, 3, 3, 4, 4]))

