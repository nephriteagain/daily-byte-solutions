/**
 * Given a binary tree, 
 * return its level order traversal where the nodes 
 * in each level are ordered from left to right.

Ex: Given the following tree...

    4
   / \
  2   7
return [[4], [2, 7]]
Ex: Given the following tree...

    2
   / \
  10  15
        \
         20
return [[2], [10, 15], [20]]
Ex: Given the following tree...

    1
   / \
  9   32
 /      \
3        78
return [[1], [9, 32], [3, 78]]
 */

class bstNode {
    constructor(val, left=null, right=null) {
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

    getLevelOrder() {
        if (!this.root) {
            return []
        }
        const result = [];
        function dfs(node, level ,result) {
            if (!node) {
                return;
            }
            result[level] ? 
            result[level].push(node.val) :
            result[level] = [node.val]
            
            dfs(node.left, level+1, result)
            dfs(node.right, level+1, result)
        }

        dfs(this.root, 0, result)

        return result
    }
}

(function solultion(){

    const n = new bstNode(4)
    n.addLeft(2)
    n.addRight(7)

    const t = new bstTree(n)
    const a = t.getLevelOrder()
    console.log(a)

    const n2 = new bstNode(2)
    n2.addLeft(10)
    n2.addRight(15)
    n2.right.addRight(20)
    const t2 = new bstTree(n2)
    const a2 = t2.getLevelOrder()
    console.log(a2)

    const n3 = new bstNode(1)
    n3.addLeft(9)
    n3.addRight(32)
    n3.left.addLeft(3)
    n3.right.addRight(78)
    const t3 = new bstTree(n3)
    const a3 = t3.getLevelOrder()
    console.log(a3)

})()