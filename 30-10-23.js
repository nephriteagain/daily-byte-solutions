/**
 * This question is asked by Facebook. 
 * Given two strings s and t return whether or not s is an anagram of t.
Note: An anagram is a word formed by reordering the letters of another word.

Ex: Given the following strings...

s = "cat", t = "tac", return true
s = "listen", t = "silent", return true
s = "program", t = "function", return false
 */

/**
 * 
 * @param {string} s 
 * @param {string} t 
 * @returns {boolean}
 */
function solution(s,t) {
    if (s.length !== t.length) {
        return false
    }    
    const sSort = s.split('').sort()
    const tSort = t.split('').sort()

    for (let i = 0; i < sSort.length; i++) {
        if (sSort[i] !== tSort[i]) {
            return false
        }
    }
    return true
}

function test(result, answer) {
    const start = Date.now()
    result === answer ? console.log(result, '==', answer) : console.error(result, '!=', answer);
    const end = Date.now()
    console.log(`${end-start}ms`)
}

test(solution('cat', 'tac'), true)
test(solution('listen', 'silent'), true)
test(solution('program', 'function'), false)