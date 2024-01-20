// Validate whether a given tree is BST or not.

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(val) {
        const newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            if (val === current.val) return undefined;
            if (val < current.val) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
    findClosestValue(target) {
        if (!this.root) return undefined;
        let current = this.root;
        let closest = current.val;
        while (current) {
            if (Math.abs(target - current.val) < Math.abs(target - closest)) {
                closest = current.val;
            }
            if (target === current.val) return closest;
            if (target < current.val) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return closest;
    }
}
function isBST(root) {
    function helper(node, min, max) {
        if (!node) {
            return true;
        }
        if (node.val <= min || node.val >= max) {
            return false;
        }
        return helper(node.left, min, node.val) && helper(node.right, node.val, max);
    }
    return helper(root, -Infinity, Infinity);
}
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(7);
bst.insert(12);
bst.insert(17);
console.log(isBST(bst.root));