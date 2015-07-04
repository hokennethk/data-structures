var BinarySearchTree = function(value){
	var bst = Object.create(BinarySearchTree.prototype);
	bst.value = value;
	bst.left = null;
	bst.right = null;
	return bst;
};

BinarySearchTree.prototype = {};
BinarySearchTree.prototype.insert = function(value){
	var rootNode = this;
	var newNode = BinarySearchTree(value);
	
	// check rootNode value vs input value
	// if value < rootNode value...
		// check rootNode.left exists. if it does
			// set rootNode = rootNode.left

	// else if value > rootNode value...

	//base case
		var checkNode = function(node){
			if (value > node.value){
				//go right
				if (node.right !== null) {
					node = node.right;
					checkNode(node)
				} else {
					node.right = newNode;
				}
			} else {
				//go left
				if (value < node.value){
					if (node.left !== null){
						node = node.left;
						checkNode(node);
					} else {
						node.left = newNode;
					}
				}
			}
		};

	checkNode(rootNode);


};

BinarySearchTree.prototype.contains = function(){

};

BinarySearchTree.prototype.depthFirstLog = function(){

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
