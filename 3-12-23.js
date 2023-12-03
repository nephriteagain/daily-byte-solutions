/**
 * Given a binary tree, 
 * return a list of strings containing all root to leaf paths.

Ex: Given the following tree…

   1
 /   \
2     3
return ["1->2", "1->3"]
Ex: Given the following tree…

    8
   / \
  2  29
    /  \
   3    9
return ["8->2", "8->29->3", "8->29->9"]
 */

(function(){

    
    class btNode {
        /**
         * 
         * @param {number} val 
         * @param {btNode|null} left 
         * @param {btNode|null} right 
         */
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
        /**
         * 
         * @param {btNode|null} root 
         */
        constructor(root=null) {
            this.root = root;
        }
        getRootToLeafPath() {
            if (!this.root) {
                return [];
            }

            /**
             * 
             * @param {btNode} node 
             * @param {string[]} result 
             * @param {string} path 
             */
            function dfs(node,result,path) {
                if (!node.left && !node.right) {
                    result.push(path)
                }
                if (node.left) {
                    dfs(node.left, result, `${path}->${node.left.val}`)
                }
                if (node.right) {
                    dfs(node.right ,result, `${path}->${node.right.val}`)
                }
            }
            const result = [];
            dfs(this.root, result, `${this.root.val}`)
            return result;  
        }
    }

    const n = new btNode(1)
    n.addLeft(2)
    n.addRight(3)
    const t = new btTree(n)
    const a = t.getRootToLeafPath()
    console.log(a)

    const n2 = new btNode(8)
    n2.addLeft(2)
    n2.addRight(29)
    n2.right.addLeft(3)
    n2.right.addRight(9)
    const t2 = new btTree(n2)
    const a2 = t2.getRootToLeafPath()
    console.log(a2)

})()
