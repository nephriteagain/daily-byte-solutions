/**
 * Given a binary search tree, 
 * return its mode (you may assume the answer is unique). 
 * If the tree is empty, return -1. 
 * Note: the mode is the most frequently occurring value in the tree.

Ex: Given the following tree...

        2
       / \
      1   2
return 2.

Ex: Given the following tree...

         7
        / \
      4     9
     / \   / \
    1   4 8   9
               \
                9  
return 9.
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

    getMode() {
        if (!this.root) {
            return -1;
        }
        let map = new Map()

        function dfs(node,map) {
            if (!node) {
                return
            }
            if (map.has(node.val)) {
                const item = map.get(node.val)
                map.set(node.val, item+1)
            } else {
                map.set(node.val, 1)
            }
            dfs(node.left, map)
            dfs(node.right, map)
        }

        dfs(this.root, map)
        let maxRepeat = -1;
        let maxVal = -1;
        
        for (const [k,v] of map) {
            if (v > maxRepeat) {
                maxRepeat = v;
                maxVal = k;
            }
        }

        return maxVal;
    }
}

function solution() {
    const n = new bstNode(2)
    n.addLeft(1)
    n.addRight(2)
    const t = new bstTree(n)
    const a = t.getMode()
    console.log(a)

    const n2 = new bstNode(7)
    n2.addLeft(4)
    n2.addRight(9)
    n2.left.addLeft(1)
    n2.left.addRight(4)
    n2.addRight(9)
    n2.right.addLeft(8)
    n2.right.addRight(9)
    n2.right.right.addRight(9)
    const t2 = new bstTree(n2)
    const a2 = t2.getMode()
    console.log(a2)

}

solution()

module.exports = {
    bstNode
}