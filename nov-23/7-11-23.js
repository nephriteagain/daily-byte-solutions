/**
This question is asked by Amazon. 
Given a non-empty linked list, 
return the middle node of the list.
If the linked list contains an even number of elements, 
return the node closer to the end.
Ex: Given the following linked lists...

1->2->3->null, return 2
1->2->3->4->null, return 3
1->null, return 1
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
    addNode(val) {
        const newNode = new Node(val)
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let curr = this.head;
        while (curr?.next) {
            curr = curr.next;
        }
        curr.next = newNode;
        return;
    }
    getMiddle() {
        if (!this.head) {
            return null
        }
        if (this.head.next === null) {
            return this.head;
        }
        let first = this.head;
        let second = this.head;
        
        while (second?.next) {
            first = first.next;
            second = second.next?.next ?? null
        }
        return first;
    }

}

const l1 = new LinkedList()
l1.addNode(1)
l1.addNode(2)
l1.addNode(3)
console.log(l1)
const middle = l1.getMiddle()
console.log(middle)

const l2 = new LinkedList()
l2.addNode(1)
l2.addNode(2)
l2.addNode(3)
l2.addNode(4)
const mid2 = l2.getMiddle()
console.log(mid2)

const l3 = new LinkedList()
l3.addNode(1)
const mid3 = l3.getMiddle()
console.log(mid3)
