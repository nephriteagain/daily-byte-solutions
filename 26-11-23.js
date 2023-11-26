/**
 * Given a binary tree, 
 * return the largest value in each of its levels. 
 * Ex: Given the following tree…

    2
   / \
  10  15
        \
         20
return [2, 15, 20]
Ex: Given the following tree…

          1
         / \
        5   6
       / \   \  
      5   3   7 
return [1, 6, 7]
 */

class btNode {
    constructor(val,left=null,right=null) {
        this.val = val;
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
    
    getLargestValuePerLevel() {
        if (!this.root) {
            return [];
        }

        function dfs(node,level,result) {
            if (!node) {
                return;
            }
            result[level] !== undefined ?
            result[level] = Math.max(result[level], node.val) :
            result[level] = node.val

            dfs(node.left, level+1, result)
            dfs(node.right, level+1, result)
        }

        let result = [];
        dfs(this.root, 0, result)
        return result;

    }
}


(function solultion() {
    const n = new btNode(2)
    n.addLeft(10)
    n.addRight(15)
    n.right.addRight(20)
    const t = new btTree(n)
    const a = t.getLargestValuePerLevel()
    console.log(a)

    const n2 = new btNode(1)
    n2.addLeft(5)
    n2.addRight(6)
    n2.left.addLeft(5)
    n2.left.addRight(3)
    n2.right.addRight(7)
    const t2 = new btTree(n2)
    const a2 = t2.getLargestValuePerLevel()
    console.log(a2)

})()