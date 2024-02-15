/**
Given a binary tree, return the bottom-left most value.
Note: You may assume each value in the tree is unique.
Ex: Given the following binary tree…

      1
     / \
    2   3
   /
  4 
return 4.
Ex: Given the following binary tree…

      8
     / \
    1   4
       /
      2 
return 2.
 * 
 */

class BNode {
      /**
       * 
       * @param {number} val 
       * @param {BNode|null} left 
       * @param {BNode|null} right 
       */
      constructor(val,left=null,right=null) {
            this.val = val;
            this.left = left;
            this.right = right; 
      }
      
}


/**
 * 
 * @param {BNode|null} node 
 * @param {number} level 
 * @param {'left'|'right'} type 
 * @param {{val: number; level:number}} currentLeftMost 
 * @returns {number}
 * @note not pure!!!
 */
function getBottomLeftMostNodeVal(node, level, type, currentLeftMost) {
      if (!node) {
            return currentLeftMost.val;
      }
      if (type === 'left' && level > currentLeftMost.level) {
            currentLeftMost.val = node.val
      }
      getBottomLeftMostNodeVal(node.left, level+1, 'left', currentLeftMost)
      getBottomLeftMostNodeVal(node.right, level+1, 'right', currentLeftMost)

      return currentLeftMost.val
}

function solution() {
      const n1 = new BNode(1)
      const n2 = new BNode(2)
      const n3 = new BNode(3)
      const n4 = new BNode(4)

      n1.left = n2;
      n1.right = n3;
      n2.left = n4;
      console.log(getBottomLeftMostNodeVal(n1, 0, 'left', {val:n1.val, level: 0}))

      const n5 = new BNode(8)
      const n6 = new BNode(1)
      const n7 = new BNode(4)
      const n8 = new BNode(2)

      n5.left = n6;
      n5.right = n7;
      n7.left = n8;
      console.log(getBottomLeftMostNodeVal(n5, 0, 'left', {val:n5.val, level:0}))

}

solution()