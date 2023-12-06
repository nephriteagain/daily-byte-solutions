/**
 * Given a binary tree, containing unique values, 
 * determine if it is a valid binary search tree.
Note: the invariants of a binary search tree (in our case) 
are all values to the left of a given node are less than 
the current node’s value, all values to the right of a given 
node are greater than the current node’s value, 
and both the left and right subtrees of a given node must also be binary search trees.

Ex: Given the following binary tree…

   1
 /   \
2     3
return false.
Ex: Given the following tree…

   2
 /   \
1     3
return true.
 */

(function(){

    class btNode {
        constructor(val,left=null,right=null) {
            this.val = val;
            this.left = left;
            this.right = right;
        }
        addLeft(val) {
            this.left = new btNode(val)
        }
        addRight(val) {
            this.right = new btNode(val)
        }
    }

    class btTree {
        constructor(root=null) {
            if (Array.isArray(root)) {
                

                return
            }

            this.root = root;
        }
        /**
         * @returns {boolean} returns a boolean
         */
        isValidBinarySearchTree() {
            if (!this.root) {
                return true;
            }

            function dfs(node, min, max) {
                if (!node) {
                    return true;
                }

                if (node.val <= min || node.val >= max) {
                    return false;
                }

                return dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
            }

            return dfs(this.root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
        }
    }

    const n = new btNode(1)
    n.addLeft(2)
    n.addRight(3)
    const t = new btTree(n)
    const a = t.isValidBinarySearchTree()
    console.log(a)

    const n2 = new btNode(2)
    n2.addLeft(1)
    n2.addRight(3)
    const t2 = new btTree(n2)
    const a2 = t2.isValidBinarySearchTree()
    console.log(a2)

})();
