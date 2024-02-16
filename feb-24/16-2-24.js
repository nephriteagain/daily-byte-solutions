/**
 * 
Given the reference to a binary search tree and a value to insert, 
return a reference to the root of the tree after the value has been inserted 
in a position that adheres to the invariants of a binary search tree.
Note: It is guaranteed that each value in the tree, including the value to be inserted, is unique.

Ex: Given the following tree and value…

      2
     / \
    1   3
value = 4, return the following tree...
      2
     / \
    1   3
         \
          4
 */

class BSNode {
    constructor(val,left,right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
    
    insert(val) {
        this._dfsInsert(this, val)
        return this
    }

    _dfsInsert(node, val) {
        if (!node.left && node.val > val) {
            node.left = new BSNode(val)
        }
        if (!node.right && node.val < val) {
            node.right = new BSNode(val)
        }
        if (node.left && node.val > val) {
            this._dfsInsert(node.left, val)
        }
        if (node.right && node.val < val) {
            this._dfsInsert(node.right, val)
        }
        
    }
}

function solution() {
    const b1 = new BSNode(2)
    const b2 = new BSNode(1)
    const b3 = new BSNode(3)
    b1.left = b2;
    b1.right = b3

    b1.insert(4)
    console.log(b1)
}
solution()