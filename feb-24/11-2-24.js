/**
 * 
Given a string s, reverse the words.
Note: You may assume that there are no leading or 
trailing whitespaces and each word within s is only separated by a single whitespace.

Ex: Given the following string s…

s = "The Daily Byte", return "Byte Daily The".
 */

/**
 * @param {string} sentence
 */
function solution(sentence) {
    
    const array = sentence.split(' ')   
    let i = 0;
    let j = array.length - 1;

    while (i < j) {
        [array[i], array[j]] = [array[j], array[i]]
        i++
        j--
    }

    return array.join(' ')
}

console.log(solution('the daily byte'))