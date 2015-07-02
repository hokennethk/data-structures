var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.length = 0;
  newStack.storage = {};
  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
	this.length++;
	this.storage[this.length] = value;
};

stackMethods.pop = function() {
	if (this.length > 0) {
		var temp = this.storage[this.length];
		delete this.storage[this.length];
		this.length--;
		return temp;
	}
};

stackMethods.size = function() {
	return this.length;
};
