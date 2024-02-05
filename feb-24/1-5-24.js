/**
 * This question is asked by Facebook. 
 * Given the root of a binary tree and two values low and high 
 * return the sum of all values in the tree that are within low and high.

Ex: Given the following tree where low = 3 and high = 5…

        1
       / \
      7   5
    /    / \
   4    3   9
return 12 (3, 4, and 5 are the only values within low and high and they sum to 12)
 */

(function solution() {
    class Node {

        /**         
         * @param {number} val 
         * @param {Node|null} left 
         * @param {Node|null} right 
         */
        constructor(val, left=null, right=null) {
            this.val = val;
            this.left = left;
            this.right = right
        }
    }

    class  Tree {
        /**
         * @param {Node|null} root 
         */
        constructor(root=null) {
            this.root =root;
        }
        /**
         * 
         * @param {number} low 
         * @param {number} high 
         * @returns {number}
         */       
        getSumWithinVals(low, high) {
            if (!this.root) {
                return 0
            }
            return  this._dfs(this.root, low, high)
        }

        /**
         * 
         * @param {Node|null} node 
         * @param {number} low 
         * @param {number} high 
         * @returns {number}
         */
        _dfs(node, low, high) {
            if (!node) {
                return 0
            }
            if (node.val >= low && node.val <= high) {
                return  node.val + this._dfs(node.left, low, high) + this._dfs(node.right, low, high)
            }
            return  this._dfs(node.left, low, high) + this._dfs(node.right, low, high)
        }
    }

    const n1 = new Node(1)
    const n2 =  new Node(7)
    const n3 = new Node(5)
    const n4 = new Node(4)
    const n5 =  new  Node(3)
    const n6 = new Node(9)

    n1.left = n2, n1.right = n3
    n2.left = n4
    n3.left = n5, n3.right =  n6

    const t = new Tree(n1)
    console.log(t.getSumWithinVals(3,5))
})()