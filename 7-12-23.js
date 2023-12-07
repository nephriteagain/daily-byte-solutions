/**
 * SAME LEAF SEQUENCE
 */


/**
 * Given two binary trees, 
 * return whether or not both trees have the same leaf sequence. 
 * Two trees have the same leaf sequence if both trees’ 
 * leaves read the same from left to right.

Ex: Given the following trees…

   1
 /   \
1     3
and


   7
 /   \
1     2
return false as both the trees' 
leaves don't read the same from left to right (i.e. [1, 3] and [1, 2]).

Ex: Given the following trees…

    8
   / \
  2   29
    /  \
   3    9
and

    8
   / \
  2  29
 /   /  \
2   3    9
     \
      3
return true as both the trees' 
leaves read the same from left to right (i.e. [2, 3, 9] and [2, 3, 9]).
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
    }

    /**
     * 
     * @param {btTree} tree1 
     * @param {btTree} tree2 
     * @returns {boolean}
     */
    function sameLeafSequence(tree1, tree2) {
        const leaves1 = [];
        const leaves2 = [];
        if (tree1.root) {
            leafList(tree1.root, leaves1)
        }
        if (tree2.root) {
            leafList(tree2.root, leaves2)
        }
        if (leaves1.length !== leaves2.length) {
            return false;
        }
        for (let i = 0; i < leaves1.length; i++) {
            if (leaves1[i] !== leaves2[i]) {
                return false;
            }
        }

        return true;
    }

    /**
     * 
     * @param {btNode} tree 
     * @returns {void}
     *
     */
    function leafList(node,result) {
        if (!node.left && !node.right) {
            result.push(node.val)
        }

        if (node.left) {
            leafList(node.left, result)
        }
        if (node.right) {
            leafList(node.right, result)
        }

    }

    const n = new btNode(1)
    n.addLeft(1)
    n.addRight(3)
    const t = new btTree(n)

    const n2 = new btNode(7)
    n2.addLeft(1)
    n2.addRight(2)
    const t2 = new btTree(n2)

    const a = sameLeafSequence(t,t2)
    console.log(a)

    const n3 = new btNode(8)
    n3.addLeft(2)
    n3.addRight(29)
    n3.right.addLeft(3)
    n3.right.addRight(9)
    const t3 = new btTree(n3)

    const n4 = new btNode(8)
    n4.addLeft(2)
    n4.addRight(29)
    n4.left.addLeft(2)
    n4.right.addLeft(3)
    n4.right.addRight(9)
    n4.right.left.addLeft(3)
    const t4 = new btTree(n4)
    const a2 = sameLeafSequence(t3,t4)
    console.log(a2)



})()