/**
Given a string s, 
return the length of the longest substring containing at most two distinct characters.
Note: You may assume that s only contains lowercase alphabetical characters.

Ex: Given the following value of s…

s = "aba", return 3.
Ex: Given the following value of s…

s = "abca", return 2.
 */



/**
 * 
 * @param {string} s 
 * @returns {number}
 */
function solution(s) {
    let longest = 0;

    for (let i = 0; i < s.length; i++) {
        let currentLength = 0;
        let distinct = new Set();
        let j = i;
        while (distinct.size <= 2 && j < s.length)  {
            distinct.add(s[j])
            if (distinct.size <= 2) {
                ++currentLength;
            }
            j++;
        }
        longest = Math.max(longest, currentLength)
    }


    return longest;
}

console.log(solution("aba"))
console.log(solution("abca"))