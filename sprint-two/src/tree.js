var Tree = function(value){
  var newTree = {};
  newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // array of children

  return newTree;
};


  


var treeMethods = {};

treeMethods.addChild = function(value){
	// create child tree
	var childTree = Tree(value);
	this.children.push(childTree);
};

treeMethods.contains = function(target){
	var self = this;
	var contained = false;
	

	var containsTarget = function (node){
		// base case
		if (node.value === target){
			contained = true;
		}
		// recursive case
		// loop through children: for each child, call recursive function
		for (var i = 0; i < node.children.length; i ++){
			containsTarget(node.children[i]);
		}
	}


	containsTarget(self);
	return contained;
};


/*
 * Complexity: What is the time complexity of the above functions?
 	addchild - O(1)

 	contains - O(n^2)
 */


			
			