var graphNode = function(value) {
	this.value = value
	this.edges = []; // connections node has
};

var Graph = function(){
	this.nodes = [];
};

Graph.prototype.addNode = function(node){
	var newNode = new graphNode(node);
	this.nodes.push(newNode);
};

Graph.prototype.contains = function(node){
	var contains = false;
	_.each(this.nodes,function(graphNode){
		if (graphNode.value === node){
			contains = true;
		}
	});

	return contains;
};

Graph.prototype.removeNode = function(node){
	if (this.contains(node)) {
		var index = this.nodes.indexOf(node);
		this.nodes.splice(index, 1);
	}
};

Graph.prototype.hasEdge = function(fromNode, toNode){
	var nodeValuesMap = _.map(this.nodes, function(graphNode) {
		return graphNode.value;
	});
	var fromNodeIndex = nodeValuesMap.indexOf(fromNode);
	var toNodeIndex = nodeValuesMap.indexOf(toNode);
	return _.contains(this.nodes[fromNodeIndex].edges, this.nodes[toNodeIndex]);

};

Graph.prototype.addEdge = function(fromNode, toNode){
	//grab graphNode that contains the value - fromNode
	//once the graphNode is grabbed, add the graphNode that contains the toNode value to the graphNodes edges
	var nodeValuesMap = _.map(this.nodes, function(graphNode) {
		return graphNode.value;
	});	
	var fromNodeIndex = nodeValuesMap.indexOf(fromNode);
	var toNodeIndex = nodeValuesMap.indexOf(toNode);
	this.nodes[fromNodeIndex].edges.push(this.nodes[toNodeIndex]);
	this.nodes[toNodeIndex].edges.push(this.nodes[fromNodeIndex]);
	

};

Graph.prototype.removeEdge = function(fromNode, toNode){
	if (this.hasEdge(fromNode,toNode)){
		var nodeValuesMap = _.map(this.nodes, function(graphNode) {
			return graphNode.value;
		});	
		var fromNodeIndex = nodeValuesMap.indexOf(fromNode);
		var toNodeIndex = nodeValuesMap.indexOf(toNode);
		this.nodes[fromNodeIndex].edges.splice(this.nodes[toNodeIndex],1);
		this.nodes[toNodeIndex].edges.splice(this.nodes[fromNodeIndex],1);
	}
};

Graph.prototype.forEachNode = function(cb){
	_.each(this.nodes, function(node){
		cb(node.value);
	});
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



