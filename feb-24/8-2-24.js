/**
 * Given an integer N, 
 * return the total number self divisible numbers 
 * that are strictly less than N (starting from one).
Note: A self divisible number if a number that is divisible by all of its digits.

Ex: Given the following value of N…

N = 17, return 12 because 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15 are all self divisible numbers.
 */


/**
 * @typedef {Set<number>} NumberSet
 */

class SelfDivisibleNumbers {
    constructor(){
        /** @type {NumberSet} */
        this.divisibleNums = new Set();
        /** @type {NumberSet} */
        this.nonDivisibleNums = new Set();
    }

    /**
     * 
     * @param {number} n 
     * @returns {number} total self divisibles less than n
     */
    getTotalDivisibles(n) {
        const start = Date.now() 
        let current = 1;
        let total = 0;
        while (current < n) {
            if (this.divisibleNums.has(current)) {
                ++total;
                ++current;
                continue;
            }
            if (this.nonDivisibleNums.has(current)) {
                current++;
                continue;
            }
            const digitStr = current.toString()
            let isDivisible = true;
            for (let i = 0; i < digitStr.length; i++) {
                const singleDigit = Number(digitStr[i]);
                if (singleDigit === 0 || current % singleDigit !== 0) {
                    isDivisible = false;
                    this.nonDivisibleNums.add(current)
                    break;
                }
            }
            if (isDivisible) {
                ++total, this.divisibleNums.add(current)
            }
            current++
        }
        const end = Date.now()
        console.log(`solved ${n} and the result is ${total} and it took ${end-start}ms to complete`)
        return total;
    }
    
}

const totalSelfDivisible = new SelfDivisibleNumbers()
totalSelfDivisible.getTotalDivisibles(10_000_000)
totalSelfDivisible.getTotalDivisibles(10_000_000)
