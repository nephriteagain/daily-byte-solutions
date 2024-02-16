/**
 * Given a binary tree, 
 * return its zig-zag level order traversal 
 * (i.e. its level order traversal from left to right the first level, 
 * right to left the level the second, etc.).

Ex: Given the following tree…

    1
   / \
  2   3
return [[1], [3, 2]]
Ex: Given the following tree…

    8
   / \
  2  29
    /  \
   3    9
return [[8], [29, 2], [3, 9]]
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
            this.root = root;
        }
        getZigZagLevel() {
            if (!this.root) {
                return [];
            }
            function dfs(node,level,result) {
                if (!node) {
                    return;
                }
                if (level % 2 === 0) {
                    result[level] !== undefined ?
                    result[level].push(node.val) :
                    result[level] = [node.val]
                } else {
                    result[level] !== undefined ?
                    result[level].unshift(node.val) :
                    result[level] = [node.val]
                }
                dfs(node.left, level+1, result)
                dfs(node.right, level+1, result)
            }
            const result = [];
            dfs(this.root,0,result);
            return result;
        }
    }


    const n = new btNode(1)
    n.addLeft(2)
    n.addRight(3)
    const t = new btTree(n)
    const a = t.getZigZagLevel()
    console.log(a)

    const n2 = new btNode(8)
    n2.addLeft(2)
    n2.addRight(29)
    n2.right.addLeft(3)
    n2.right.addRight(9)
    const t2 = new btTree(n2)
    const a2 = t2.getZigZagLevel()
    console.log(a2)

})()