/**
 * Given two binary trees, 
 * return whether or not the two trees are identical. 
 * Note: identical meaning they exhibit the same structure 
 * and the same values at each node. Ex: Given the following trees...

        2
       / \
      1   3
    2
   / \
  1   3

return true.

Ex: Given the following trees...

        1
         \
          9
           \
           18
    1
   /
  9
   \
    18

return false.

Ex: Given the following trees...

        2
       / \
      3   1
    2
   / \
  1   3

return false.   
 */

const { bstNode }  = require('./24-11-23')

class bstTree {
    constructor(root=null) {
        this.root = root;
    }    
}

function checkIfIdentical(t1, t2) {

    function dfs(n1,n2) {
        if (!n1 && !n2) {
            return true
        }
        if (!n1 || !n2) {
            return false
        }
        if (n1.val !== n2.val) {
            return false
        }
        if (n1.val === n2.val) {
            return dfs(n1.left,n2.left) && dfs(n1.right, n2.right)
        } else {
            return false
        }
    }

    return dfs(t1.root, t2.root)

}

const n = new bstNode(2)
n.addLeft(3)
n.addRight(1)
const t = new bstTree(n)

const n2 = new bstNode(2)
n2.addLeft(3)
n2.addRight(1)
const t2 = new bstTree(n2)

const a = checkIfIdentical(t,t2)
console.log(a)

const n3 = new bstNode(1)
n3.addRight(9)
n3.right.addRight(18)
const t3 = new bstTree(n3)

const n4 = new bstNode(1)
n4.addLeft(9)
n4.left.addRight(18)
const t4 = new bstTree(n4)

const a2 = checkIfIdentical(t3, t4)
console.log(a2)


const n5 = new bstNode(2)
n5.addLeft(3)
n5.addRight(1)
const t5 = new bstTree(n5)

const n6 = new bstNode(2)
n6.addLeft(1)
n6.addRight(3)
const t6 = new bstTree(n6)

const a3 = checkIfIdentical(t5,t6)
console.log(a3)