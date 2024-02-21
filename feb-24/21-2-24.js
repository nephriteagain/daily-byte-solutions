/**

This question is asked by Amazon. 
Given the root of a binary tree where every node’s value is 
either 0 or 1 remove every subtree that does not have a 1 in it.
Ex: Given the following binary tree…

        1
      /   \
    1      0
Return the tree such that it’s been modified to look as follows…
        1
      /
    1
Ex: Given the following binary tree…

        1
      /   \
    1      1
Return the tree such that it’s been modified to look as follows…
        1
      /   \
    1      1
(No modifications are necessary)
 */

/**
 * NOTE: update this in the future!!!!!!!!!
 */
/**Clean tree */
class bNode {
    /**
     * 
     * @param {number} val 
     * @param {bNode|null} left 
     * @param {bNode|null} right 
     */
    constructor(val, left=null, right=null) {
        this.val = val;
        this.left = left;
        this.right = right
    }


    removeSubtreeWith0() {
        this._removeNo1SubtreeDfs(this)
        return this
    }

    _removeNo1SubtreeDfs(node) {
        if (!node) {
            return
        }
        const left = node.left;
        const right = node.right;
        if (left) {
            if (left.val === 0) {
                node.left = null;
            } else {
                this._removeNo1SubtreeDfs(left)
            }
        }

        if (right) {
            if (right.val === 0) {
                node.right = null;
            }  else {
                this._removeNo1SubtreeDfs(right)
            }
        }        
    }
}

function solution() {

    const n1 = new bNode(1)
    const n2 = new bNode(1)
    const n3 = new bNode(0)
    n1.left = n2;
    n1.right = n3;

    console.log(n1.removeSubtreeWith0())

    const  n4 = new bNode(1)
    const  n5 = new bNode(1)
    const  n6 = new bNode(1)
    n4.left = n5;
    n4.right = n6;

    console.log(n4.removeSubtreeWith0())


}

solution()