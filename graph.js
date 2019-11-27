class Graph {
  constructor() {
    this.nodes = {};
  }

  addNode(value) {
    this.nodes[value] = {
      edges: {}
    };
  }

  contains(node) {
    return !!this.nodes[node];
  }

  removeNode(node) {
    if (this.contains(node)) {
      for (let connectedNode in this.nodes[node].edges) {
        this.removeEdge(node, connectedNode);
      }
      delete this.nodes[node];
    }
  }

  hasEdge(toNode, fromNode) {
    if (!this.contains(fromNode)) {
      return false;
    }
    return !!this.nodes[toNode].edges[fromNode];
  }

  addEdge(toNode, fromNode) {
    this.nodes[toNode].edges[fromNode] = true;
    this.nodes[fromNode].edges[toNode] = true;
  }

  removeEdge(toNode, fromNode) {
    if (!this.contains(toNode) || this.contains(fromNode)) {
      return;
    }
    delete this.nodes[toNode].edges[fromNode];
    delete this.nodes[fromNode].edges[toNode];
  }
}
