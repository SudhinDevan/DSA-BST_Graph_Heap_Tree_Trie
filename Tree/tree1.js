// 1.) Implement a binary tree and display it.

class Node {
    constructor(element) {
        this.element = element
        this.left = null
        this.right = null
    }
}
let a = new Node("a")
let b = new Node("b")
let c = new Node("c")
let d = new Node("d")
let e = new Node("e")
let f = new Node("f")
let g = new Node('g')

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f
c.left = g
function breadthFist(root) {
    let queue = [root]
    while (queue.length > 0) {
        let current = queue.shift()
        console.log(current.element);
        if (current.left !== null) {
            queue.push(current.left)
        }
        if (current.right !== null) {
            queue.push(current.right)
        }
    }




}
breadthFist(a)