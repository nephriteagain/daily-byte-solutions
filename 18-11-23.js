/**
 * This question is asked by Google. 
 * Given the reference to the root of a binary search tree and a search value, 
 * return the reference to the node that contains the value if it exists and null otherwise.
Note: all values in the binary search tree will be unique.

Ex: Given the tree...

        3
       / \
      1   4
and the search value 1 return a reference to the node containing 1.
Ex: Given the following tree...

        7
       / \
      5   9
         / \ 
        8   10
and the search value 9 return a reference to the node containing 9.
Ex: Given the following tree...

        8
       / \
      6   9
and the search value 7 return null.
 */

class BSTnode {
    constructor(val, left=null, right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }

    addLeft(val) {
        const node = new BSTnode(val);
        this.left = node;
    }

    addRight(val) {
        const node = new BSTnode(val);
        this.right = node;
    }
}

class BST {
    constructor(root=null) {
        this.root = root;
    };

    getNode(val) {
        if(this.root === null){
            return null;
        };
        return this.getValDFS(this.root, val)
    }
    getValDFS(node, val) {
        if (node === null) {
            return null;
        }
        if (node.val === val) {
            return node;
        }
        if (node.val < val) {
            return this.getValDFS(node.right, val)
        } 
        if (node.val > val) {
            return this.getValDFS(node.left, val)
        }
    }
}

function solution() {
    const n = new BSTnode(3)
    n.addLeft(1)
    n.addRight(4)
    const c1 = new BST(n)
    const a1 = c1.getNode(1)
    console.log(a1)

    const n2 = new BSTnode(7)
    n2.addLeft(5);
    const n3 = new BSTnode(9)
    n2.right = n3;
    n3.addLeft(8)
    n3.addRight(10)
    const c2 = new BST(n2)
    const a2 = c2.getNode(9)
    console.log(a2)

    const n4 = new BSTnode(8)
    n4.addLeft(6)
    n4.addRight(9)
    const c3 = new BST(n4);
    const a3 = c3.getNode(7)
    console.log(a3)
}

solution()

