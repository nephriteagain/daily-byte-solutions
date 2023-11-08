/**
 * This question is asked by Facebook. 
 * Given a linked list and a value n, 
 * remove the nth to last node and return the resulting list.

Ex: Given the following linked lists...

1->2->3->null, n = 1, return 1->2->null
1->2->3->null, n = 2, return 1->3->null
1->2->3->null, n = 3, return 2->3->null
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
        this.length = 0
    }


    add(val) {
        const newNode = new Node(val)
        this.length++;
        if (this.head === null) {
            this.head = newNode;
            return
        }
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
        return
    }
    

    /**
     * 
     * @param {number} n 
     */
    removeNthFromLast(n) {
        if (n === 0) {
            return this;
        }
        if (this.head === null) {
            return this;
        }
        const nodeArr = []
        let curr = this.head;
        while (curr) {
            nodeArr.push(curr)
            curr = curr.next
        }
        
        if (nodeArr.length < n) {
            return this;
        }
        if (nodeArr.length === 1 && n === 1) {
            this.head = null
            return this;
        }
        
        let indexOfNodeToRemove = nodeArr.length - n;
        if (indexOfNodeToRemove === 0) {
            this.head = this.head.next;
            return this;
        }
        nodeArr[indexOfNodeToRemove-1].next = nodeArr[indexOfNodeToRemove].next;
        return this;
    }

    getValues() {
        if (this.head === null) {
            return []
        }
        const values = []
        let curr = this.head;
        while (curr) {
            values.push(curr.val)
            curr = curr.next
        }
        return values
    }
}

/** 
 * @param {number[]} values 
 */
function generateLinkedListFromValues(values) {
    const list = new LinkedList()
    for (const v of values) {
        list.add(v)
    }
    return list
}

const s1 = generateLinkedListFromValues([1,2,3])
s1.removeNthFromLast(1)
console.log(JSON.stringify(s1.getValues()), JSON.stringify([1,2]))
const s2 = generateLinkedListFromValues([1,2,3])
s2.removeNthFromLast(2)
console.log(JSON.stringify(s2.getValues()), JSON.stringify([1,3]))
const s3 = generateLinkedListFromValues([1,2,3])
s3.removeNthFromLast(3)
console.log(JSON.stringify(s3.getValues()), JSON.stringify([2,3]))

