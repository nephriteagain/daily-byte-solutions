/**
 * Word length
 * 
Given a string, s, return the length of the last word.
Note: You may not use any sort of split() method.

Ex: Given the following string…

s = "The Daily Byte", return 4 (because "Byte" is four characters long).
 */


// assuming the string is trimmed
function lastWordLen(str) {
    let len = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            ++len;
            continue;
        }
        len = 0
    }
    return len;
}

console.log(lastWordLen("The Daily Byte"))
console.log(lastWordLen('this is a test bla bla bla'))