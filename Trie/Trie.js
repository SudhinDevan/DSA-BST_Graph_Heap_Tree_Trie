// class Node {
//     constructor() {
//         this.children = {}
//         this.isWord = false
//     }
// }
// class Trie {
//     constructor() {
//         this.root = new Node()
//     }
//     Insert(word) {
//         let curr = this.root
//         for (let i = 0; i < word.length; i++) {
//             let char = word[i]
//             if (!(char in curr.children)) {
//                 curr.children[char] = new Node()
//             }
//             curr = curr.children[char]

//         }
//         curr.isWord = true
//         console.log(curr.isWord);
//     }
//     contain(word) {
//         let curr = this.root
//         for (let i = 0; i < word.length; i++) {
//             let elem = word[i]
//             if (!(elem in curr.children)) {
//                 return false
//             }
//             curr = curr.children[elem]
//         }
//         return curr.isWord
//     }
//     delete(word) {
//         const stack = []
//         let node = this.root
//         if (!this.contain(word)) {
//             return false
//         }
//         for (let i = 0; i < word.length; i++) {
//             let char = word[i]
//             stack.push({ node, char })
//             node = node.children[char]
//         }
//         node.isWord = false
//         while (stack.length > 0) {
//             const { node, char } = stack.pop()
//             if (Object.keys(node.children).length === 0 && node.isWord !== true) {
//                 delete node.children[char]
//             } else {
//                 break
//             }
//         }
//         return true
//     }
// }
// let a = new Trie()
// a.Insert("suji")
// console.log(a.contain("Sujith"));
// console.log(a.delete("suji"))


class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) { //S U D H I N
        let currentNode = this.root;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!currentNode.children[char]) {
                currentNode.children[char] = new TrieNode();
            }
            currentNode = currentNode.children[char];
        }
        currentNode.isEndOfWord = true;
    }

    search(word) {
        let currentNode = this.root;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!currentNode.children[char]) {
                return false;
            }
            currentNode = currentNode.children[char];
        }
        return currentNode.isEndOfWord;
    }

    startsWith(prefix) {
        let currentNode = this.root;
        for (let i = 0; i < prefix.length; i++) {
            const char = prefix[i];
            if (!currentNode.children[char]) {
                return false;
            }
            currentNode = currentNode.children[char];
        }
        return true;
    }
}
