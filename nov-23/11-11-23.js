/**
 * This question is asked by Google. 
 * Given a string only containing the following characters 
 * (, ), {, }, [, and ] 
 * return whether or not the opening and closing characters are in a valid order.

Ex: Given the following strings...

"(){}[]", return true
"(({[]}))", return true
"{(})", return false
"{[()]} return true"
"{{[[]]}} return true"
"{[()()]} return true"
"{[({})]}() return true"
 */

function isValid(string) {

    if (string.length % 2 !== 0) {
        return false
    }

    const pair = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    const stack = [];

    for (let i = 0; i < string.length; i++) {
        if (pair.hasOwnProperty(string[i])) {
            const last = stack.pop()
            if (pair[string[i]] !== last) {
                return false
            }
        } else {
            stack.push(string[i])
        }
    }
    

    return true;
}

const a1 = isValid("(){}[]")
const a2 = isValid("(({[]}))")
const a3 = isValid("{(})")
const a4 = isValid('{[()]}')
const a5 = isValid('{{[[]]}}')
const a6 = isValid('{[()()]}')
const a7 = isValid( '{[({})]}()')

console.log(a1, a2, a3, a4, a5, a6, a7)