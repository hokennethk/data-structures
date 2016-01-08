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

BinarySearchTree.prototype.contains = function(value){
	var found = false;
	var rootNode = this;
	// base case: value === rootNode.value
	var checkNode = function(node) {
		if (node.value === value) {
			found = true;
		} else {
			if (value > node.value) {
				if (node.right !== null){
					checkNode(node.right);
				}
			} else {
				if (node.left !== null){
					checkNode(node.left);
				}
			}
		}
	};
	checkNode(rootNode);
	return found;
};

BinarySearchTree.prototype.depthFirstLog = function(callback){
	var rootNode = this;

	var executeCallBack = function(node){
		callback(node.value);
		if (node.left !== null) {
			executeCallBack(node.left);
		}
		if (node.right !== null) {
			executeCallBack(node.right);
		}
	};
	executeCallBack(rootNode);

};