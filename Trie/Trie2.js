// 2.) Search for a word or its prefix in trie

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
    contains(str) {
        let curr = this.root
        for (let i = 0; i < str.length; i++) {
            if (!(str[i] in curr.children)) {
                return false
            }
            curr = curr.children[str[i]]
        }
        return curr.isWord
    }
    prefix(str) {
        let curr = this.root
        for (let i = 0; i < str.length; i++) {
            if (!(str[i] in curr.children)) {
                return false
            }
            curr = curr.children[str[i]]
        }
        return true
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
console.log(t.contains("Sudhin"))
console.log(t.prefix("sud"))
console.log(t.contains("sud"))
console.log(t.prefix("sud"))