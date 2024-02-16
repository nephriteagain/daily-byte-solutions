/**
 * Given a binary tree, return whether or not it forms 
 * a reflection across its center (i.e. a line drawn straight down starting from the root).
Note: a reflection is when an image, 
flipped across a specified line, forms the same image.

Ex: Given the following tree…

   2
 /   \
1     1
return true as when the tree is reflected across its center all the nodes match.
Ex: Given the following tree…

    1
   / \
  5   5
   \    \
    7    7
return false as when the tree is reflected across its center the nodes containing sevens do not match.
 */

(function(){

    class btNode {
        constructor(val,left=null,right=null) {
            this.val = val;
            this.left = null;
            this.right = null;
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
        isSymmetrical() {
            if (!this.root) {
                return true;
            }

            function dfs(left, right) {
                if (!left.left && !right.right) {
                    return true;
                }
                if (!left.right && !right.left) {
                    return true
                }
                if (!left.left || !right.right) {
                    return false;
                }
                if (!left.right || !right.left) {
                    return false
                }
                
                if (left.val !== right.val) {
                    return false
                }
                return dfs(left.left, right.right) && dfs(left.right, right.left)
            }

            return dfs(this.root.left, this.root.right)
        }

    }

    const n = new btNode(2)
    n.addLeft(1)
    n.addRight(1)
    const t = new btTree(n)
    const a = t.isSymmetrical()
    console.log(a)

    const n2 = new btNode(1)
    n2.addLeft(5)
    n2.addRight(5)
    n2.left.addRight(7)
    n2.right.addRight(7)
    const t2 = new btTree(n2)
    const a2 = t2.isSymmetrical()
    console.log(a2)

    const n3 = new btNode(1)
    n3.addLeft(2)
    n3.addRight(2)
    n3.left.addLeft(3)
    n3.left.addRight(4)
    n3.right.addLeft(4)
    n3.right.addRight(3)
    const t3 = new btTree(n3)
    const a3 = t3.isSymmetrical()
    console.log(a3)

    // const n4 = new btNode()

})()