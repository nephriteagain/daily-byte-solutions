/**
 * 
This question is asked by Apple. 
Given a potentially cyclical linked list where each value is unique, 
return the node at which the cycle starts. 
If the list does not contain a cycle, 
return null.

Ex: Given the following linked lists...

1->2->3, return null
1->2->3->4->5->2 (5 points back to 2), return a reference to the node containing 2
1->9->3->7->7 (7 points to itself), return a reference to the node containing 7
 */

class Node {
    constructor(val){
        this.val = val
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    connectNode(node) {
        if (!this.head) {
            this.head = node;
            return;
        }
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = node
    }
    
    addNode(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head =  newNode;
            return;
        }
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
        return;
    }
    getCyclicNode() {
        if (!this.head) {
            return null;
        }
        const nodes = new Map()

        let curr = this.head;
        while (curr) {
            const nextNode = curr.next;
            if (nextNode === null) {
                return null;
            }
            if (nodes.has(nextNode.val)) {
                return nextNode;
            }
            nodes.set(nextNode.val, nextNode)

           curr = curr.next; 
        }
        return null;
    }
}

const l1 = new LinkedList()
l1.addNode(1)
l1.addNode(2)
l1.addNode(3)
console.log(l1.getCyclicNode())

const n1 = new Node(1)
const n2 = new Node(2)
const n3 = new Node(3)
const n4 = new Node(4)
const n5 = new Node(5)

n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5
n5.next = n2

const l2 = new LinkedList()
l2.connectNode(n1)

console.log(l2.getCyclicNode())

const a1 = new Node(1)
const a2 = new Node(9)
const a3 = new Node(3)
const a4 = new Node(7)

a1.next = a2;
a2.next = a3;
a3.next = a4;
a4.next = a4;

const l3 = new LinkedList()
l3.connectNode(a1)

console.log(l3.getCyclicNode())
