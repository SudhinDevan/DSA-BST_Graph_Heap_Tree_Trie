// Delete a word from Trie


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
    delete(word) {
        const stack = [];
        let node = this.root;
        if (!this.contains(word)) {
            return false
        }
        for (let i = 0; i < word.length; i++) {
            let char = word[i]
            stack.push({ node, char })
            node = node.children[char]
        }
        node.isWord = false;
        while (stack.length > 0) {
            const { node, char } = stack.pop();
            if (Object.keys(node.children).length === 0 && !node.isWord) {
                delete node.children[char];
            } else {
                break;
            }
        }
        return true;
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
    print() {
        console.log(this.getFullNode(this.root, ""))
    }
}




const t = new Trie()
t.insert("Sudhin")
t.insert("devan")
t.insert("martin")
t.print()
t.delete("devan")
t.print()