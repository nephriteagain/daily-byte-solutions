/**
 * This question is asked by Google. 
 * Given a linked list and a value, 
 * remove all nodes containing the provided value, 
 * and return the resulting list.

Ex: Given the following linked lists and values...

1->2->3->null, value = 3, return 1->2->null
8->1->1->4->12->null, value = 1, return 8->4->12->null
7->12->2->9->null, value = 7, return 12->2->9->null
 */

class Node {
    constructor(val)  {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    addNode(val) {
        const newNode = new Node(val)
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
    }

    removeVal(val) {
        if (this.head === null) {
            return this;
        }
        if (this.head.val === val) {
            this.head = this.head.next;
        }
    
        let prev = null;
        let curr = this.head;
        while (curr) {
            if (curr.val === val) {
                prev.next = curr.next
            } else {
                prev = curr
            }
            curr = curr.next
        }
        return this
    }

    getValues() {
        const values = []
        let curr = this.head;
        while (curr) {
            values.push(curr.val)
            curr = curr.next
        }
        return values
    }
}

function generateLinkedListFromValues(values) {
    const newList = new LinkedList()
    for (const v of values) {
        newList.addNode(v)
    }
    return newList
}

const l1 = generateLinkedListFromValues([1,2,3])
const l2 = generateLinkedListFromValues([8,1,1,4,12])
const l3 = generateLinkedListFromValues([7,12,2,9])

/**
 * 
1->2->3->null, value = 3, return 1->2->null
8->1->1->4->12->null, value = 1, return 8->4->12->null
7->12->2->9->null, value = 7, return 12->2->9->null
 */

l1.removeVal(3)
console.log(l1.getValues())
l2.removeVal(1)
console.log(l2.getValues())
l3.removeVal(7)
console.log(l3.getValues())
