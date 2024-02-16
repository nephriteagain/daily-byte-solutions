/**
 * 
 * This question is asked by Facebook. 
 * Given a string s containing only lowercase letters, 
 * continuously remove adjacent characters that are the same and return the result.

Ex: Given the following strings...

s = "abccba", return ""
s = "foobar", return "fbar"
s = "abccbefggfe", return "a"
 */

function solution(string) {
    let curr = ''
    let i = 0;
    let j = 1;

    while (i < string.length) {
        if (string[i] === string[j]) {
            while (string[i] === string[j]) {
                j++;
            }
            i = j;
            j++;
        } else {
            curr+=string[i];
            i++,j++;
        }
    }

    if (curr !== string) {
        return solution(curr)
    }

    return curr

}



const s1 = solution('abccba')
const s2 =  solution('foobar')
const s3 = solution('abccbefggfe')
const s4 = solution('dogerland')
const s5 = solution('doggerland')

console.log(s1, s2, s3, s4, s5)