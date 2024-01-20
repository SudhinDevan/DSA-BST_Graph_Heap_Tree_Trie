// Write functions to delete node and edges.

class Graph {
    constructor() {
        this.adjacentlist = {}
    }
    isEmpty() {
        return Object.keys(this.adjacentlist).length === 0
    }
    addvertex(vertex) {
        if (!this.adjacentlist[vertex]) {
            this.adjacentlist[vertex] = new Set()
        }
    }
    addEdge(vertex1, vertex2) {
        if (!this.adjacentlist[vertex1]) {
            this.addvertex(vertex1)
        }
        if (!this.adjacentlist[vertex2]) {
            this.addvertex(vertex2)
        }
        this.adjacentlist[vertex1].add(vertex2)
        this.adjacentlist[vertex2].add(vertex1)
    }
    deleteEdge(vertex1, vertex2) {
        this.adjacentlist[vertex1].delete(vertex2)
        this.adjacentlist[vertex2].delete(vertex1)
    }
    deleteVertex(vertex) {
        if (!this.adjacentlist[vertex]) {
            return
        }
        for (let adj of this.adjacentlist[vertex]) {
            this.deleteEdge(vertex, adj)
        }
        delete this.adjacentlist[vertex]
    }
    hasEdge(vertex1, vertex2) {
        return (this.adjacentlist[vertex1].has(vertex2) && this.adjacentlist[vertex2].has(vertex1))
    }
    bfs(start) {
        let queue = [start]
        let visited = new Set()
        visited.add(start)
        while (queue.length) {
            let vertex = queue.shift()
            console.log(vertex)
            for (let next of this.adjacentlist[vertex]) {
                if (!visited.has(next)) {
                    visited.add(next)
                    queue.push(next)
                }
            }
        }
    }

    display() {
        for (let vertex in this.adjacentlist) {
            console.log(vertex + "->" + [...this.adjacentlist[vertex]])
        }
    }
}
const g = new Graph()
console.log(g.isEmpty())
g.addvertex('A')
g.addvertex('B')
g.addvertex('C')
g.addvertex('D')
g.addvertex('E')
g.addEdge('A', 'B')
g.addEdge('B', 'C')
g.addEdge('C', 'D')
g.addEdge('B', 'E')
g.display()
g.deleteEdge('B', 'E')
g.deleteVertex('C')
console.log("after")
g.display()