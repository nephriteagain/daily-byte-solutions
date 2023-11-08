/**
 * This question is asked by Microsoft. 
 * Given a string, return the index of its first unique character. 
 * If a unique character does not exist, return -1.

Ex: Given the following strings...

"abcabd", return 2
"thedailybyte", return 1
"developer", return 0
 * 
 */
function solution(string) {
    let index = Infinity;
    let char = ''
    const obj = {}

    for (let i = string.length-1; i >= 0; i--) {
        const character = string[i]
        if (obj[character] === undefined) {
            obj [character] = 1
            if (i < index) {
                index = i;
                char = character
            }
        }
        else if (char === character) {
            index = Infinity;
            char = ''
        }
    }

    if (index == Infinity) {
        return -1
    }
    return index

}

function test(result, answer) {
    const start = Date.now()
    result === answer ? console.log(result, '==', answer) : console.error(result, '!=', answer);
    const end = Date.now()
    console.log(`${end-start}ms`)
}

test(solution('abcabd'), 2);
test(solution('thedailybyte'), 1);
test(solution('developer'), 0);