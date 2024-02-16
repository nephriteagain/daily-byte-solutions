/**
 * Given a binary tree, 
 * returns of all its levels in a bottom-up fashion 
 * (i.e. last level towards the root). 
 * Ex: Given the following tree…

        2
       / \
      1   2
return [[1, 2], [2]]
Ex: Given the following tree…

       7
      / \
    6    2
   / \ 
  3   3 
return [[3, 3], [6, 2], [7]]
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
        getAllLevelsBottomUp() {
            if (!this.root) {
                return [];
            }
            function dfs(node,level,result) {
                if (!node) {
                    return;
                }
                result[level] === undefined ?
                result[level] = [node.val] :
                result[level].push(node.val)

                dfs(node.left, level+1,result)
                dfs(node.right,level+1, result)
            }
            const result = [];
            dfs(this.root, 0, result)
            return result.reverse()
        }

    }

    const n = new btNode(2)
    n.addLeft(1)
    n.addRight(2)
    const t = new btTree(n)
    const a = t.getAllLevelsBottomUp()
    console.log(a)

    const n2 = new btNode(7)
    n2.addLeft(6)
    n2.addRight(2)
    n2.left.addLeft(3)
    n2.left.addRight(3)
    const t2 = new btTree(n2)
    const a2 = t2.getAllLevelsBottomUp()
    console.log(a2)

})()