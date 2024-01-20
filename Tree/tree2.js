//  How does the breadth-first traversal algorithm implemented in this code help to calculate
// the sum of all the node values in the binary tree, and what is the final result of the sum?

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
let a = new Node(3)
let b = new Node(2)
let c = new Node(7)
let d = new Node(4)
let e = new Node(-2)
let f = new Node(5)
a.left = b
a.right = c
b.left = d
b.right = e
c.right = f


function sum(root) {
    let queue = [root]
    let sum = 0
    while (queue.length) {
        let current = queue.shift()
        sum += current.value
        if (current.left) {
            queue.push(current.left)
        }
        if (current.right) {
            queue.push(current.right)
        }
    }
    console.log(sum);
}
sum(a)