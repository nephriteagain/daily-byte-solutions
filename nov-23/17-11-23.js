/**
 * Design a class to implement a stack using only a single queue. 
 * Your class, QueueStack, should support the following stack methods: 
 *  push() (adding an item), 
 * pop() (removing an item), 
 * peek() (returning the top value without removing it), 
 * and empty() (whether or not the stack is empty).
 */


class QueueStack {
    constructor() {
        this._stack = [];        
    }

    push(val) {
        this._stack.push(val)
    }

    pop() {
        const val = this._stack.pop()
        return val;
    }
    
    peek() {
        return this._stack[this._stack.length-1]
    }

    empty() {
        this._stack = [];
    }
}

const stack = new QueueStack()
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.peek()) // 3
console.log(stack.pop()) //3
console.log(stack.peek()) //2
stack.empty()
console.log(stack.peek()) // undefined