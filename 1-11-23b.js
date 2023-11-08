/**
 * This question is asked by Google. Given two integer arrays, 
 *  return their intersection.
Note: the intersection is the set of elements that are common to both arrays.

Ex: Given the following arrays...

nums1 = [2, 4, 4, 2], nums2 = [2, 4], return [2, 4]
nums1 = [1, 2, 3, 3], nums2 = [3, 3], return [3]
nums1 = [2, 4, 6, 8], nums2 = [1, 3, 5, 7], return []
 */


/**
 * 
 * @param {number[]} num1 
 * @param {number[]} num2 
 * @returns {number[]}
 */
function solution(num1, num2) {
    const set = new Set()
    num1.sort((a,b) => a-b)
    num2.sort((a,b) => a-b)
    let i = 0, j = 0;
    
    while (i < num1.length && j < num2.length) {
        if (num1[i] === num2[j]) {
            set.add(num1[i])
            i++, j++
        }
        else if (num1[i] < num2[j]) {
            i++
        }
        else if (num1[i] > num2[j]) {
            j++
        }
    }

    return Array.from(set)
}

function test(result, answer) {
    const start = Date.now()
    for (let i  = 0; i < result.length; i++) {
        if (result[i] !== answer[i]) {
            throw new Error('incorrect', result , '!==', answer)
        }
        console.log(result, 'matched', answer)
    }
    const end = Date.now()
    console.log(`passed ${end-start}ms`)
}

test(solution([2, 4, 4, 2], [2, 4]), [2,4])
test(solution([1, 2, 3, 3],[3, 3]), [3])
test(solution([2, 4, 6, 8],[1, 3, 5, 7]), [])
