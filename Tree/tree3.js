// 2.) Implement depth-first search (DFS) for a binary tree using both recursive and iterative methods.

function deabthFt(root) {
    const stack = [root]
    while (stack.length > 0) {
        const current = stack.pop()
        console.log(current.value);
        if (current.right) {
            stack.push(current.right)


        }
        if (current.left) {
            stack.push(current.left)
        }
    }
}
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
deabthFt(a)


//recursive
function df(root) {
    if (root == null) return
    console.log(root.value);
    df(root.left)
    df(root.right)
}
df(a)