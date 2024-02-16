/**
 * This question is asked by Amazon. 
 * Given two strings s and t, 
 * which represents a sequence of keystrokes, 
 * where # denotes a backspace, 
 * return whether or not the sequences produce the same result.

Ex: Given the following strings...

s = "ABC#", t = "CD##AB", return true
s = "como#pur#ter", t = "computer", return true
s = "cof#dim#ng", t = "code", return false
 */

function isEqual(s1, s2) {
    const string1 = decode(s1)
    const string2 = decode(s2)
    return string1 === string2
}

function decode(string) {
    let result = '';

    for (let i = 0; i < string.length; i++) {
        if (string[i] === '#') {
            result = result.slice(0,result.length-1)
        } else {
            result+= string[i]
        }
    }

    return result
}

console.log(isEqual("ABC#","CD##AB"), isEqual("como#pur#ter","computer"), isEqual("cof#dim#ng","code"))