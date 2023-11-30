/**
 * Given an n-ary tree, 
 * return its level order traversal.
Note: an n-ary tree is a tree in which 
each node has no more than N children.

Ex: Give the following n-ary tree…

    8
  / | \
 2  3  29
return [[8], [2, 3, 29]]
Ex: Given the following n-ary tree…

     2
   / | \
  1  6  9
 /   |   \
8    2    2
   / | \
 19 12 90
return [[2], [1, 6, 9], [8, 2, 2], [19, 12, 90]]
 */

(function(){

    class NaryNode {
        constructor(val) {
            this.val = val;
            this.children = [];
        }
        addChild(val) {
            this.children.push(new NaryNode(val))
        }
        addChildren(...children) {
            for (let i = 0; i < children.length; i++) {
                this.children.push(new NaryNode(children[i]))
            }
        }
    }

    class NaryTree {
        constructor(root=null) {
            this.root = root;
        }
        getLevelOrder() {
            if (!this.root) {
                return [];
            }
            function dfs(node,level, result) {
                if (!node) {
                    return;
                }
                result[level] === undefined ?
                result[level] = [node.val] :
                result[level].push(node.val)

                for (let i = 0; i < node.children.length; i++) {
                    dfs(node.children[i], level+1, result)
                }                
            }
            const result = [];
            dfs(this.root, 0, result);
            return result;
        }
    }

    const n = new NaryNode(8)
    n.addChildren(2,3,29)
    const t = new NaryTree(n)
    const a = t.getLevelOrder()
    console.log(a)

    const n2 = new NaryNode(2)
    n2.addChildren(1,6,9)
    n2.children[0].addChild(8)
    n2.children[1].addChild(2)
    n2.children[2].addChild(2)
    n2.children[1].children[0].addChildren(19,12,90)
    const t2 = new NaryTree(n2)
    const a2 = t2.getLevelOrder()
    console.log(a2)

})()

