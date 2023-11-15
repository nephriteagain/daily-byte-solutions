/**
 * This question is asked by Google. 
 * Create a class CallCounter that tracks the number of 
 * calls a client has made within the last 3 seconds. 
 * Your class should contain one method, 
 * ping(int t) that receives the current timestamp (in milliseconds) 
 * of a new call being made and returns the number of calls made within the last 3 seconds.
Note: you may assume that the time associated with each 
subsequent call to ping is strictly increasing.

Ex: Given the following calls to ping…

ping(1), return 1 (1 call within the last 3 seconds)
ping(300), return 2 (2 calls within the last 3 seconds)
ping(3000), return 3 (3 calls within the last 3 seconds)
ping(3002), return 3 (3 calls within the last 3 seconds)
ping(7000), return 1 (1 call within the last 3 seconds)
 */

class CallCounter {
    constructor() {
        this._calls = [];       
    }
    
    ping(t) {
        this._calls.push(t)
        return this._getNumberOfCallsWithinThreeSeconds(t)
    }

    _getNumberOfCallsWithinThreeSeconds(now) {
        let numOfCalls = 0
        for (let i = this._calls.length-1; i >= 0; i--) {
            const time = this._calls[i]
            console.log(now, '=', time, '==', now-time)
            if (now - time <= 3000) {
                numOfCalls++
            } else {
                break;
            }
        }
        return numOfCalls;
    }

    compareThis(globalThis) {
        console.log(this === globalThis)
    }
}

const counter = new CallCounter()

console.log(counter.ping(1))
console.log(counter.ping(300))
console.log(counter.ping(3000))
console.log(counter.ping(3002))
console.log(counter.ping(7000))

