/**
 * This question is asked by Apple. 
 * Given two sorted linked lists, 
 * merge them together in ascending order and return a reference to the merged list

Ex: Given the following lists...

list1 = 1->2->3, list2 = 4->5->6->null, return 1->2->3->4->5->6->null
list1 = 1->3->5, list2 = 2->4->6->null, return 1->2->3->4->5->6->null
list1 = 4->4->7, list2 = 1->5->6->null, return 1->4->4->5->6->7->null
 */


const isNode = (node) => {
    return typeof node.val === 'number' && (isNode(node.next) || typeof node.next === null)
}

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}


class LinkList {
    constructor(node=null) {
        this.head = node
    }

    addNode(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            return;
        }
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode
    }

    
    mergeLinkedList(list) {
        const mergedList =  new LinkList()
        let currLocal = this.head;
        let currForeign = list.head;

        while (currLocal && currForeign) {
            const localVal = currLocal.val;
            const foreignVal = currForeign.val;
            if (foreignVal < localVal) {
                mergedList.addNode(foreignVal)
                currForeign = currForeign.next
            } else{
                mergedList.addNode(localVal)
                currLocal = currLocal.next
            }
        }
        while (currLocal) {
            mergedList.addNode(currLocal.val);
            currLocal = currLocal.next;
        }
        while (currForeign) {
            mergedList.addNode(currForeign.val);
            currForeign = currForeign.next;
        }
        return mergedList;
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

/**
 * 
list1 = 1->2->3, list2 = 4->5->6->null, return 1->2->3->4->5->6->null
list1 = 1->3->5, list2 = 2->4->6->null, return 1->2->3->4->5->6->null
list1 = 4->4->7, list2 = 1->5->6->null, return 1->4->4->5->6->7->null
 */

function generateSortedLinkedListFromValues(values) {
    if (values.length === 0) {
        throw new Error('empty node values array')
    }
    values.sort((a,b) => a - b)
    const newList = new LinkList()
    for (const v of values) {
        newList.addNode(v)
    }
    return newList
}

const list1 = generateSortedLinkedListFromValues([1,2,3])
const list2 =generateSortedLinkedListFromValues([4,5,6])
const mergedList = list1.mergeLinkedList(list2)
console.log(mergedList.getValues())

const list3 = generateSortedLinkedListFromValues([1,3,5])
const list4 = generateSortedLinkedListFromValues([2,4,6])
const mergedList2 = list3.mergeLinkedList(list4)
console.log(mergedList2.getValues())

const list5 = generateSortedLinkedListFromValues([4,4,7])
const list6 = generateSortedLinkedListFromValues([1,5,6])
const mergedList3 = list5.mergeLinkedList(list6)
console.log(mergedList3.getValues())
