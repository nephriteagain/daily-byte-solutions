/**
 * Given a binary tree, return its column order traversal 
 * from top to bottom and left to right. 
 * Note: if two nodes are in the same row and column, 
 * order them from left to right.

Ex: Given the following tree…

    8
   / \
  2   29
     /  \
    3    9
return [[2], [8, 3], [29], [9]]
Ex: Given the following tree…

     100
    /   \
  53     78
 / \    /  \
32  3  9    20
return [[32], [53], [100, 3, 9], [78], [20]]
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

        getColumnOrderTraversal() {
            if (!this.root) {
                return [];
            }
            function dfs(node,level,result) {
                if (!node) {
                    return  ;
                }
                if (result.has(level)) {
                    result.get(level).push(node.val)
                } else {
                    result.set(level, [node.val])
                }
                dfs(node.left, level-1, result)
                dfs(node.right, level+1, result)
            }
            const result = new Map()
            dfs(this.root,0,result)
            const ans = [];
            for (const [k,v] of result) {
                ans.push({k,v})
            }
            const res = ans.sort((a,b) => a.k-b.k).map(({k,v})=> v)
            return res
        }
    }

    const n = new btNode(8)
    n.addLeft(2)
    n.addRight(29)
    n.right.addLeft(3)
    n.right.addRight(9)
    const t = new btTree(n)
    const a = t.getColumnOrderTraversal()
    console.log(a)

    const n2 = new btNode(100)
    n2.addLeft(53)
    n2.addRight(78)
    n2.left.addLeft(32)
    n2.left.addRight(3)
    n2.right.addLeft(9)
    n2.right.addRight(20)
    const t2 = new btTree(n2)
    const a2 = t2.getColumnOrderTraversal()
    console.log(a2)
})()