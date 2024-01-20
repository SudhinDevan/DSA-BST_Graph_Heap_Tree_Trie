// Implement a trie

class Node {
    constructor() {
        this.children = {}
        this.isWord = false
    }
}
class Trie {
    constructor() {
        this.root = new Node()
    }
    insert(str) {
        let curr = this.root
        for (let i = 0; i < str.length; i++) {
            let child = str[i]
            if (!(child in curr.children)) {
                curr.children[child] = new Node()
            }
            curr = curr.children[child]
        }
        curr.isWord = true
    }
    getFullNode(node, prefix) {
        const words = []
        if (node.isWord) {
            words.push(prefix)
        }
        for (const char in node.children) {
            var childNode = node.children[char]
            var child = this.getFullNode(childNode, prefix + char)
            words.push(...child)
        }
        return words
    }
    print() {
        console.log(this.getFullNode(this.root, ""))
    }
}




const t = new Trie()
t.insert("Sudhin")
t.insert("Devan")
t.print()
