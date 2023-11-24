/**
 * Given a binary search tree, 
 * rearrange the tree such that it forms a linked list 
 * where all its values are in ascending order.

Ex: Given the following tree...
        5
       / \
      1   6
return...

1
 \
  5
   \
    6
Ex: Given the following tree...

       5
      / \
    2    9
   / \ 
  1   3 
return...

1
 \
  2
   \
    3
     \
      5
       \
        9
Ex: Given the following tree...

5
 \
  6
return...

5
 \
  6
 */

function easySolution(){
    class Node {
        constructor(val,next=null) {
            this.val = val;
            this.next = next;
        }
    }

    class bstNode {
        constructor(val,left=null,right=null) {
            this.val =  val;
            this.left = left;
            this.right = right;
        }
        addLeft(val) {
            const node = new bstNode(val)
            this.left = node;
        }
        addRight(val) {
            const node = new bstNode(val)
            this.right = node;
        }
    }

    class bstTree {
        constructor(root=null) {
            this.root = root;
        }

        

        convertToAscendingLinkedList() {
            if (!this.root) return null;

            let curr = null;
            let head = null;

            function dfs(currBST) {
                if (!currBST) {
                    return;
                }
                dfs(currBST.left)
    
                const node = new Node(currBST.val);
                if (!head) {
                    head = node
                    curr = node;
                } else {
                    curr.next = node;
                    curr = node;
                }
                dfs(currBST.right)                
            }
         
            dfs(this.root, head, curr)
            return head;
        }
    }

    const n1 = new bstNode(5)
    n1.addLeft(1)
    n1.addRight(6)

    const t = new bstTree(n1)
    const s1 = t.convertToAscendingLinkedList()
    console.log(s1)

    const n2 = new bstNode(5)
    n2.addLeft(2)
    n2.addRight(9)
    n2.left.addLeft(1)
    n2.left.addRight(3)
    const t2 = new bstTree(n2)
    const s2 = t2.convertToAscendingLinkedList()
    console.log(s2)

    const n3 = new bstNode(5)
    n3.addRight(6)
    const t3 = new bstTree(n3)
    
    const s3 = t3.convertToAscendingLinkedList()
    console.log(s3)
}

easySolution()