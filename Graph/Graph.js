class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=new Set()
        }
    }
    addEdge(vertex1, vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1)
    }
    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex+" -> "+[...this.adjacencyList[vertex]])
        }
    }
    hasEdge(vertex1,vertex2){
        return (this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1));
    }
    deleteEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1);
    }
    deleteVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return null;
        }
        for(let adjacentVertex in this.adjacencyList){
            this.deleteEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }

    
    dfs(startVertex, visited = {}) {
        if (!this.adjacencyList[startVertex]) return;
    
        console.log(startVertex);
        visited[startVertex] = true;
    
        for (const neighbor of this.adjacencyList[startVertex]) {
          if (!visited[neighbor]) {
            this.dfs(neighbor, visited);
          }
        }
      }
    
      // Breadth-First Search (BFS)
      bfs(startVertex) {
        const queue = [startVertex];
        const visited = { [startVertex]: true };
    
        while (queue.length > 0) {
          const currentVertex = queue.shift();
          console.log(currentVertex);
    
          for (const neighbor of this.adjacencyList[currentVertex]) {
            if (!visited[neighbor]) {
              visited[neighbor] = true;
              queue.push(neighbor);
            }
          }
        }
      }
}
const graph = new Graph();
graph.addEdge('A','B');
graph.addEdge('B','C');
graph.addEdge('B','A');
graph.display()
console.log("BFS")
graph.bfs('C');
console.log("DFS")
graph.dfs('C')