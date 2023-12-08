/**
 * Given a binary tree, 
 * return the sum of all left leaves of the tree. 
 * Ex: Given the following tree…

    5
   / \
  2   12
     /  \
    3    8
return 5 (i.e. 2 + 3)
Ex: Given the following tree…

       2
      / \
    4    2
   / \ 
  3   9 
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
            this.right = new btNode(val);
        }

    }

    class btTree {
        constructor(root=null) {
            this.root = root;
        }
        getSumOfAllLeftLeaves() {
            if (!this.root) {
                return 0;
            }
            const result = {val:0}
            function dfs(node, isLeft, total) {
                if (!node.left && !node.right && isLeft) {
                    total.val+=node.val;
                }

                if (node.left) {
                    dfs(node.left, true, total)
                }
                if (node.right) {
                    dfs(node.right, false, total)
                }
            }
            dfs(this.root, false, result)
            return result.val;
        }
        
    }

    const n = new btNode(5)
    n.addLeft(2)
    n.addRight(12)
    n.right.addLeft(3)
    n.right.addRight(8)
    const t = new btTree(n)
    const a = t.getSumOfAllLeftLeaves()
    console.log(a)

    const n2 = new btNode(2)
    n2.addLeft(4)
    n2.addRight(2)
    n2.left.addLeft(3)
    n2.left.addRight(9)
    const t2 = new btTree(n2)
    const a2 = t2.getSumOfAllLeftLeaves()
    console.log(a2)

})()