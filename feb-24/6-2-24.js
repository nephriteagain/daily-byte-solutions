"use strict";

/**
 * This question is asked by Amazon. 
 * Given two trees s and t return whether or not t is a subtree of s.
Note: For t to be a subtree of s not only must each node’s value 
in t match its corresponding node’s value in s, 
but t must also exhibit the exact same structure as s. 
You may assume both trees s and t exist.

Ex: Given the following trees s and t…

s = 1
   / \
  3   8
t = 1
     \
      8
return false

Ex: Given the following trees s and t…

s = 7
   / \
  8   3
t = 7
   / \
  8   3
return true

Ex: Given the following trees s and t…

s = 7
   / \
  8   3
t = 7
   / \
  8   3
     /
    1
return false
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

class BTree {
   /**
    * 
    * @param {BNode|null} root 
    */
   constructor(root=null) {
      this.root = root;
   }

   /**
    * 
    * @param {BNode} node 
    * @param {(number|null)[]} array 
    * @returns {(number|null)[]}
    */
   _createArrayStructure(node, array=[]) {
      if (!node) {
         array = [...array,null]
         return array
      }
      return [
         ...array, 
         node.val, 
         ...this._createArrayStructure(node.left, array), 
         ...this._createArrayStructure(node.right, array)
      ]
   }

   getArrayStucture() {
      return this._createArrayStructure(this.root, [])
   }
}

/**
 * 
 * @param {BTree} s 
 * @param {BTree} t 
 * @returns {boolean}
 */
function isTSubtreeOfS(s,t) {
   const sA = s.getArrayStucture()
   const tA = t.getArrayStucture()

   for (let i = 0; i < tA.length; i++) {
      if (tA[i] !== sA[i]) {
         return false
      }
   }
   return true;
}
/**
 * 
 * @param {BNode|null} s 
 * @param {BNode|null} t 
 * @returns {boolean}
 */
function isTSubtreeOfSV2(s,t) {
   if (!s && !t) {
      return true;
   }
   if (!s || !t) {
      return false;
   }
   return s.val === t.val && isTSubtreeOfSV2(s.left, t.left) && isTSubtreeOfSV2(s.right, t.right);   
}



/**
s = 1
   / \
  3   8
t = 1
     \
      8
return false

 */
function s1(){

   const n1 = new BNode(1)
   const n2 = new BNode(3)
   const n3 = new BNode(8)
   n1.left = n2;
   n1.right = n3;
   const t1 = new BTree(n1)
   
   const n4 = new BNode(1)
   const n5 = new BNode(8)
   n4.right = n5;
   const t2 = new BTree(n4)
   
   const result = isTSubtreeOfS(t1, t2)
   console.log(result)
   const r2 = isTSubtreeOfSV2(t1.root, t2.root)
   console.log(r2)
   console.log()
}
s1()


/**
 * 
 * 
 s = 7
   / \
  8   3
t = 7
   / \
  8   3
return true
 */
function s2(){
   const n1 = new BNode(7)
   const n2 = new BNode(8)
   const n3 = new BNode(3)
   n1.left = n2;
   n1.right = n3;
   const t1 = new BTree(n1)

   const n4 = new BNode(7)
   const n5 = new BNode(8)
   const n6 = new BNode(3)
   n4.left = n5;
   n4.right = n6;
   const t2 = new BTree(n4)

   const result = isTSubtreeOfS(t1,t2)
   console.log(result)   
   const r2 = isTSubtreeOfSV2(t1.root, t2.root)
   console.log(r2)
   console.log()
}
s2()
   


/**
s = 7
   / \
  8   3
t = 7
   / \
  8   3
     /
    1
return false
 */

function s3() {
   const n1 = new BNode(7)
   const n2 = new BNode(8)
   const n3 = new BNode(3)
   n1.left = n2;
   n2.right = n3;   
   const t1 = new BTree(n1)

   const n4 = new BNode(7)
   const n5 = new BNode(8)
   const n6 = new BNode(3)
   const n7 = new BNode(1)
   n4.left = n5;
   n4.right = n6;
   n6.left = n7;
   const t2 = new BTree(n4)

   const result = isTSubtreeOfS(t1,t2)
   console.log(result)
   const r2 = isTSubtreeOfSV2(t1.root, t2.root)
   console.log(r2)
   console.log()
}
s3()