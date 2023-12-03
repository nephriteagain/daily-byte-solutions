/**
 * Given a binary tree and a target, 
 * return whether or not there exists a root to leaf path 
 * such that all values along the path sum to the target.

Ex: Given the following tree…

      1
     / \
    5   2
   /   / \
  1  12   29
and a target of 15, return true as the path 1->2->12 sums to 15.
Ex: Given the following tree…

     104
    /   \
  39     31
 / \    /  \
32  1  9    10
and a target of 175, return true as the path 104->39->32 sums to 175.
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
        sumPathToLeaf(target) {
            if (!this.root && target === 0) {
                return true;
            }
            if (!this.root && target !== 0) {
                return false;
            }
            function dfs(node,pathTotal,target) {
                if (!node) {
                    return pathTotal === target
                }

                const total = pathTotal+node.val;
                return dfs(node.left, total, target) || dfs(node.right, total, target)
            }
            return dfs(this.root, 0, target)
        }

    }

    const n = new btNode(1)
    n.addLeft(5)
    n.addRight(2)
    n.left.addLeft(1)
    n.right.addLeft(12)
    n.right.addRight(29)
    const t = new btTree(n)
    const a = t.sumPathToLeaf(15)
    console.log(a)

    const n2 = new btNode(104)
    n2.addLeft(39)
    n2.addRight(31)
    n2.left.addLeft(32)
    n2.left.addRight(1)
    n2.right.addLeft(9)
    n2.right.addRight(10)
    const t2 = new btTree(n2)
    const a2 = t2.sumPathToLeaf(175)
    console.log(a2)

    const n3 = new btNode(100)
    n3.addLeft(1)
    n3.addRight(100)
    n3.left.addLeft(32)
    n3.left.addRight(44)
    n3.right.addLeft(111)
    n3.right.addRight(500)
    const t3 = new btTree(n3)
    const a3 = t3.sumPathToLeaf(322)
    console.log(a3)
})()