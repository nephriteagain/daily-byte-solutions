/**
 * This question is asked by Microsoft. 
 * Given a linked list, containing unique numbers, 
 * return whether or not it has a cycle.
Note: a cycle is a circular arrangement (i.e. one node points back to a previous node)

Ex: Given the following linked lists...

1->2->3->1 -> true (3 points back to 1)
1->2->3 -> false
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
    attachNewNode(node) {
        if (!this.head) {
            this.head = node;
            return;
        }
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = node;
        return;
    }

    addNode(val) {
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
        return;
    }
    isCircular() {
        if (!this.head === null) {
            return false
        }
        let curr = this.head;
        while (curr) {
            if (curr.next === this.head) {
                return true
            }
            curr = curr.next;
        }
        return false
    }
}

const l1 = new LinkedList()

const n1 = new Node(1)
const n2 = new Node(2)
const n3 = new Node(3)

l1.attachNewNode(n1)
l1.attachNewNode(n2)
l1.attachNewNode(n3)
l1.attachNewNode(n1)

console.log(l1.isCircular())

const l2 = new LinkedList()

const n4 = new Node(1)
const n5 = new Node(2)
const n6 = new Node(3)

l2.attachNewNode(n4)
l2.attachNewNode(n5)
l2.attachNewNode(n6)

console.log(l2.isCircular())