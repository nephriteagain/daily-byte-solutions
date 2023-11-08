/**
 * This question is asked by Amazon. 
 * Given two strings representing sentences, 
 * return the words that are not common to both strings 
 * (i.e. the words that only appear in one of the sentences). 
 * You may assume that each sentence is a sequence of words 
 * (without punctuation) correctly separated using space characters.
 * 

Ex: given the following strings...

sentence1 = "the quick", sentence2 = "brown fox", return ["the", "quick", "brown", "fox"]
sentence1 = "the tortoise beat the haire", sentence2 = "the tortoise lost to the haire", return ["beat", "to", "lost"]
sentence1 = "copper coffee pot", sentence2 = "hot coffee pot", return ["copper", "hot"]
 */

/**
 * 
 * @param {string} s1 
 * @param {string} s2 
 * @returns {string[]}
 */
function solution(s1,s2) {
    const set1 = new Set(s1.split(' '))
    const set2 = new Set(s2.split(' '))

    const uncommon = []
    
    for (const word of set1) {
        if (!set2.has(word)) {
            uncommon.push(word)
        }
    }
    for (const word of set2) {
        if (!set1.has(word)) {
            uncommon.push(word)
        }
    }
    console.log(uncommon)
    return uncommon

}

const s1 = solution('the quick', 'brown fox')
const s2 = solution('the tortoise beat the haire', "the tortoise lost to the haire")
const s3 = solution("copper coffee pot", "hot coffee pot")


function test(result, answer) {
    result.sort()
    answer.sort()
    if (result.length !== answer.length) {
        console.error('incorrect', result, '!==', answer)
        return
    }
    for (let i = 0; i < result.length; i++) {
        if (result[i] !== answer[i]) {
            console.error(result[i], '!==', answer[i])
            console.error('incorrect', result, '!==', answer)            
            return
        }
    }
    console.log('matched', result, '==', answer)
}

test(s1, ["the", "quick", "brown", "fox"])
test(s2, ["beat", "to", "lost"])
test(s3, ["copper", "hot"])