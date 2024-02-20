/**
 * Given two linked lists that represent two numbers, 
 * return the sum of the numbers also represented as a list.

Ex: Given the two linked lists…

a = 1->2, b = 1->3, return a list that looks as follows: 2->5
Ex: Given the two linked lists…

a = 1->9, b = 1, return a list that looks as follows: 2->0
 */

class LinkList {
    constructor(head = null) {
        this.head = head;
    }

    /**
     * 
     * @param {LinkNode|null} node 
     * @param {number[]} vals 
     * @returns {number}
     */
    traverseAndReturnNumericVal(node, vals) {
        if (!node) {
            return Number(vals.join('')) || 0
        }
        vals.push(node.val)
        return this.traverseAndReturnNumericVal(node.next, vals)
    }
}

class LinkNode {
    constructor(val, next=null) {
        this.val = val
        this.next = next;
    }
}

/**
 * 
 * @param {LinkList} l1 
 * @param {LinkList} l2 
 * @returns {LinkList}
 * 
 */
function addLinkList(l1, l2) {
    const num1 = l1.traverseAndReturnNumericVal(l1.head, [])
    const num2 = l2.traverseAndReturnNumericVal(l2.head, [])

    const sum = num1 + num2
    const sumStr = sum.toString()

    const linkedList = new LinkList()
    let curr = null;
    for (let i = 0; i < sumStr.length; i++) {
        const num = Number(sumStr[i])
        const node = new LinkNode(num)
        if (!curr) {
            linkedList.head = node;
            curr = linkedList.head;
            continue;
        }
        curr.next = node;
        curr = curr.next;
    }

    return linkedList
}

const l1 = new LinkNode(1);
const l2 = new LinkNode(2);
l1.next = l2;
const ll1 = new LinkList(l1)
const l3 = new LinkNode(1);
const l4 = new LinkNode(3);
l3.next = l4;
const ll2 = new LinkList(l3)


console.log(addLinkList(ll1, ll2))

const l5 = new LinkNode(1);
const l6 = new LinkNode(9);
l5.next = l6;
const ll3 = new LinkList(l5)

const l7 = new LinkNode(1);
const ll4 = new LinkList(l7)


console.log(addLinkList(ll3, ll4))