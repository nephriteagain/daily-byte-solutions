/**
 * Given a binary search tree, 
 * return the minimum difference between any two nodes in the tree.

Ex: Given the following tree...
        2
       / \
      3   1
return 1.
Ex: Given the following tree...
        29
       /  \
     17   50
    /     / \
   1    42  59
return 8.
Ex: Given the following tree...
        2
         \
         100
return 98.
 */

class bstNode {
    constructor(val,left=null,right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
    addLeft(val) {
        this.left = new bstNode(val)
    }
    addRight(val) {
        this.right = new bstNode(val)
    }

}

class bstTree {
    constructor(root=null) {
        this.root = root;
    }
    getMinNodeDifference() {
        if (!this.root) return -1;

        function dfs(node, parentVal, minDiff) {
            if (!node) {
                return minDiff
            }
            return Math.min(
                Math.abs(parentVal - node.val), 
                dfs(node.left, node.val, minDiff), 
                dfs(node.right, node.val, minDiff)
            )
        }
        return Math.min(
            dfs(this.root.left, this.root.val, Infinity), 
            dfs(this.root.right, this.root.val, Infinity))
    }
}

const n = new bstNode(2)
n.addLeft(3)
n.addRight(1)
const t = new bstTree(n)
const a = t.getMinNodeDifference()
console.log(a)

const n2 = new bstNode(29)
n2.addLeft(17)
n2.addRight(50)
n2.left.addLeft(1)
n2.right.addLeft(42)
n2.right.addRight(59)
const t2 = new bstTree(n2)
const a2 = t2.getMinNodeDifference()
console.log(a2)

const n3 = new bstNode(2)
n3.addRight(100)
const t3 = new bstTree(n3)
const a3 = t3.getMinNodeDifference()
console.log(a3)