/**
 * This question is asked by Microsoft. 
 * Design a class, MovingAverage, which contains a method, 
 * next that is responsible for returning the moving average from a stream of integers.
Note: a moving average is the average of a subset of data at a given point in time.

Ex: Given the following series of events...

// i.e. the moving average has a capacity of 3.
MovingAverage movingAverage = new MovingAverage(3)
m.ne
m.next(7)
m.next(6)

MovingAverage class definition:

*/
class MovingAverage {
    constructor(size) {
        this.size = size;
        this.stream = [];        
    }

    next(n) {
        this.stream.push(n)

        let remaining = this.size;
        const values = [];

        for (let i = this.stream.length-1; i >= 0; i--) {
            if (remaining === 0) {
                break;
            }
            values.push(this.stream[i])
            remaining--;
        }

        return (values.reduce((acc,curr) => acc + curr,0))/values.length
    }
}

// i.e. the moving average has a capacity of 3.
const m = new MovingAverage(3);
const s1 =  m.next(3) 
const s2 = m.next(5) 
const s3 = m.next(7)
const s4 = m.next(6)

console.log(s1,s2,s3,s4)

const ma = new MovingAverage(5)

const s5 = ma.next(3)
const s6 = ma.next(2)
const s7 = ma.next(5)
const s8 = ma.next(9)
const s9 = ma.next(3)
const s10 = ma.next(11)
const s11 = ma.next(4)
const s12 = ma.next(17)

console.log(s5,s6,s7,s8,s9,s10,s11,s12)

