/**
This question is asked by Amazon. 
You are at a birthday party and are asked to distribute cake to your guests. 
Each guess is only satisfied if the size of the piece of cake they’re given, 
matches their appetite (i.e. is greater than or equal to their appetite). 
Given two arrays, appetite and cake where the ithelement of appetite represents the ith guest’s appetite, 
and the elements of cake represents the sizes of cake you have to distribute, 
return the maximum number of guests that you can satisfy.

Ex: Given the following arrays appetite and cake…

appetite = [1, 2, 3], cake = [1, 2, 3], return 3.
Ex: Given the following arrays appetite and cake…

appetite = [3, 4, 5], cake = [2], return 0.
 */



/**
 * 
 * @param {number[]} appetite 
 * @param {number[]} cake 
 * @returns {number}
 */
function solution(appetite, cake) {
    let satisfiedGuestCount = 0;
    for (let i = 0; i < appetite.length; i++) {
        if (appetite[i] <= cake[i]) {
            ++satisfiedGuestCount;
        }
    }
    return satisfiedGuestCount
}

const s1 = solution([1,2,3], [1,2,3])
const s2 = solution([3,4,5], [2])
console.log({s1,s2})

