/**
 * This question is asked by Facebook. 
 * Given a linked list, 
 * containing unique values, 
 * reverse it, 
 * and return the result.

Ex: Given the following linked lists...

1->2->3->null, 
    return a reference to the node that contains 3 which points to a 
    list that looks like the following: 3->2->1->null
7->15->9->2->null, 
    return a reference to the node that contains 2 which points to 
    a list that looks like the following: 2->9->15->7->null
1->null, 
    return a reference to the node that contains 1 which points 
    to a list that looks like the following: 1->null
 */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    addVal(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
    }
    
}

class UniqureLinkedList extends LinkedList {
    constructor() {
        super()
        this._uniqueVals = new Set()
    }
    addVal(val) {
        const valIsAlreadyExist = this._uniqueVals.has(val);
        if (valIsAlreadyExist) {
            throw new Error('value already exist')
        }
        this._uniqueVals.add(val)
        super.addVal(val)
    }
    addVals(values) {
        if (!Array.isArray(values)) {
            throw new Error(`required values of type array, ${typeof values} is provided`)
        }
        for (const v of values) {
            this.addVal(v)
        }
    }

    reverse() {
        if (!this.head) {
            return null;
        }
        let prev = null;
        let curr = this.head;

        while (curr) {
            const temp = curr;
            curr = curr.next;
            temp.next = prev;
            prev = temp;
            if (!curr?.next) {
                this.head = prev;
            }
        }
        return this.head;
        
    }
    
    // easy solution using array
    // reverse() {
    //     if (!this.head) {
    //         return null;
    //     }
    //     const nodeArr = [];
        
    //     let curr = this.head;
    //     while (curr) {
    //         if (curr) {
    //             nodeArr.push(curr);
    //         }
    //         curr = curr.next;
    //     }
    //     for (let i = 0; i < nodeArr.length; i++) {
    //         if (i === 0) {
    //             nodeArr[i].next = null;
    //             continue;
    //         }
    //         nodeArr[i].next = nodeArr[i-1]
    //     }
    //     console.log(nodeArr)
    //     this.head = nodeArr[nodeArr.length-1]
    //     return this.head;
    // }

}

const t = new UniqureLinkedList()
t.addVals([1,2,3])
console.log(t.head, 'normal')
console.log(t.reverse(), 'reversed')
