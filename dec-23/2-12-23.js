/**
 * 
Given a binary tree, return its maximum depth.
Note: the maximum depth is defined as the number 
of nodes along the longest path from root node to leaf node.

Ex: Given the following tree…

    9
   / \
  1   2
return 2
Ex: Given the following tree…

    5
   / \
  1  29
    /  \
   4   13
return 3
 */

(function(){
    class btNode {
        constructor(val,left=null,right=null) {
            this.val = val;
            this.left = left;
            this.right = right;
        }
        addLeft(val) {
            this.left = new btNode(val);            
        }
        addRight(val) {
            this.right = new btNode(val)
        }
    }

    class btTree {
        constructor(root=null) {
            this.root = root;
        }
        getMaxDepth() {
            if (!this.root) {
                return 0;
            }

            function dfs(node,currDepth) {
                if (!node) {
                    return currDepth - 1;
                }                
                return Math.max(
                    dfs(node.left,currDepth+1),
                    dfs(node.right, currDepth+1)
                )
            }
            return dfs(this.root, 1)   
        }
    }

    const n = new btNode(9)
    n.addLeft(1)
    n.addRight(2)
    const t = new btTree(n)
    console.log(t)
    const a = t.getMaxDepth()
    console.log(a)

    const n2 = new btNode(5)
    n2.addLeft(1)
    n2.addRight(29)
    n2.right.addLeft(4)
    n2.right.addRight(13)
    const t2 = new btTree(n2)
    const a2 = t2.getMaxDepth()
    console.log(a2)
})()