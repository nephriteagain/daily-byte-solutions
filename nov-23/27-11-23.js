/**
 * Given a binary tree return all the values you’d be able 
 * to see if you were standing on the left side of it 
 * with values ordered from top to bottom.

Ex: Given the following tree…

-->    4
      / \
-->  2   7
return [4, 2]
Ex: Given the following tree…

-->        7
         /  \
-->     4     9
       / \   / \
-->   1   4 8   9
                 \
-->               9
return [7, 4, 1, 9]
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
            this.root = root
        }
        getLeftMostValPerLevel() {
            if (!this.root) {
                return [];
            }
            function dfs(node, level, result) {
                if (!node) {
                    return
                }
                if (result[level] === undefined) {
                    result[level] = node.val;
                }
                dfs(node.left, level+1, result)
                dfs(node.right, level+1, result)
            }
            const result = [];
            dfs(this.root,0,result)
            return result
        }

    }

    const n = new btNode(4)
    n.addLeft(2)
    n.addRight(7)
    const t = new btTree(n)
    const a = t.getLeftMostValPerLevel()
    console.log(a)

    const n2 = new btNode(7)
    n2.addLeft(4)
    n2.addRight(9)
    n2.left.addLeft(1)
    n2.left.addRight(4)
    n2.right.addLeft(8)
    n2.right.addRight(9)
    n2.right.right.addRight(9)
    const t2 = new btTree(n2)
    const a2 = t2.getLeftMostValPerLevel()
    console.log(a2)

})()