// Given a an array of edges, implement a graph

const arr = ['A', 'B', 'C', 'D']
const edges = [
    ['A', 'B'],
    ['A', 'C'],
    ['B', 'C'],
    ['D', 'B'],
    ['C', 'D']
]
const adjacencylist = new Map()


function addNode(char) {
    adjacencylist.set(char, [])
}


function addEdge(vertex1, vertex2) {
    if (!adjacencylist.has(vertex1)) {
        addNode(vertex1)
    }
    if (!adjacencylist.has(vertex2)) {
        addNode(vertex2)
    }
    adjacencylist.get(vertex1).push(vertex2)
    adjacencylist.get(vertex2).push(vertex1)
}
arr.forEach(addNode)
edges.forEach(edge => addEdge(...edge))
console.log(adjacencylist)