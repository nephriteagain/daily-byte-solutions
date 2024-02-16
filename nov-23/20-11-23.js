/**
 * Given a binary search tree that contains unique 
 * values and two nodes within the tree, 
 * a, and b, return their lowest common ancestor.
Note: the lowest common ancestor of two nodes is the 
deepest node within the tree such that both nodes are descendants of it.

Ex: Given the following tree...
       7
      / \
    2    9
   / \ 
  1   5 
and a = 1, b = 9, return a reference to the node containing 7.
Ex: Given the following tree...

        8
       / \
      3   9
     / \ 
    2   6
and a = 2, b = 6, return a reference to the node containing 3.
Ex: Given the following tree...

        8
       / \
      6   9
and a = 6, b = 8, return a reference to the node containing 8.
 */

function solution() {
    //   find the nodes,
    //      move up the ancestry,
    //  find the lowest relative
    class bstNode {
        constructor(val) {
            this.val = val
        }
        addLeft(val) {
            this.left = new bstNode(val)
        }
        addRight(val) {
            this.right = new bstNode(val)
        }
    }

    class bstTree {
        constructor(root = null) {
            this.root = root;
        }
        findNode(val) {
            if (!this.root) {
                return null;
            }
            function dfs(node,val, path) {
                if (!node) {
                    return null
                }
                if (node.val === val) {
                    path.push(node)
                    return path
                }
                if (node.val < val) {
                    path.push(node)
                    return dfs(node.right, val, path)
                }
                if (node.val > val) {
                    path.push(node)
                    return dfs(node.left, val, path)
                }
            }
            const result = dfs(this.root, val, [])
            return result
        }
        getLowestCommonAncestor(a,b) {
            const n1 = this.findNode(a)
            const n2 = this.findNode(b)
            while (n1.length && n2.length) {
                const a1 = n1.pop()
                const a2 = n2.pop()

                if (a1.val === a2.val) {
                    return a1
                }
                if (a1.val < a2.val) {
                    n2.push(a2)
                }
                if (a1.val > a2.val) {
                    n1.push(a1)
                }
            }
            // throw new Error('no common ancestor')
        }



    }

    const n1 = new bstNode(7)
    n1.addLeft(2)
    n1.addRight(9)
    n1.left.addLeft(1)
    n1.left.addRight(5)
    const t1 = new bstTree(n1)
    const a1 =  t1.getLowestCommonAncestor(1,9)
    console.log(a1)

    const n2 = new bstNode(8)
    n2.addLeft(3)
    n2.addRight(9)
    n2.left.addLeft(2)
    n2.left.addRight(6)
    const t2 = new bstTree(n2)
    const a2 = t2.getLowestCommonAncestor(2,6)
    console.log(a2)


    const n3 = new bstNode(8)
    n3.addLeft(6)
    n3.addRight(9)
    const t3 = new bstTree(n3)
    console.log(t3)
    const a3 = t3.getLowestCommonAncestor(6,8)
    console.log(a3)
}

solution()