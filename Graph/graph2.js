// Implement a graph class which can add vertex and edges.

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
    hasEdge(vertex1, vertex2) {
        return (this.adjacentlist[vertex1].has(vertex2) && this.adjacentlist[vertex2].has(vertex1))
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
g.display('')