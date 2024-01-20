// Create a Binary Search Tree with insertion, contains, delete,
// tree traversals(postorder, preorder, in order).

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
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertHelper(this.root, newNode);
        }
    }

    insertHelper(root, newNode) {
        if (newNode.val < root.val) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertHelper(root.left, newNode);
            }
        } else if (newNode.val > root.val) {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertHelper(root.right, newNode);
            }
        }
    }

    search(val) {
        return this.searchHelper(this.root, val);
    }

    searchHelper(root, val) {
        if (root === null) {
            return false;
        } else if (root.val === val) {
            return true;
        } else if (val < root.val) {
            return this.searchHelper(root.left, val);
        } else {
            return this.searchHelper(root.right, val);
        }
    }

    delete(val) {
        this.root = this.deleteHelper(this.root, val);
    }

    deleteHelper(root, val) {
        if (root === null) {
            return null;
        } else if (val < root.val) {
            root.left = this.deleteHelper(root.left, val);
            return root;
        } else if (val > root.val) {
            root.right = this.deleteHelper(root.right, val);
            return root;
        } else {
            // Case 1: No children
            if (root.left === null && root.right === null) {
                root = null;
                return root;
            }

            // Case 2: One child
            if (root.left === null) {
                root = root.right;
                return root;
            } else if (root.right === null) {
                root = root.left;
                return root;
            }

            // Case 3: Two children
            const minRight = this.findMin(root.right);
            root.val = minRight.val;
            root.right = this.deleteHelper(root.right, minRight.val);
            return root;
        }
    }

    findMin(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }

    postorderTraversal(root) {
        if (root === null) {
            return;
        }

        this.postorderTraversal(root.left);
        this.postorderTraversal(root.right);
        console.log(root.val);
    }

    preorderTraversal(root) {
        if (root === null) {
            return;
        }

        console.log(root.val);
        this.preorderTraversal(root.left);
        this.preorderTraversal(root.right);
    }

    inorderTraversal(root) {
        if (root === null) {
            return;
        }

        this.inorderTraversal(root.left);
        console.log(root.val);
        this.inorderTraversal(root.right);
    }
}
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.preorderTraversal(bst.root)
console.log();
bst.delete(10)
bst.preorderTraversal(bst.root)
console.log(bst.search(5));
