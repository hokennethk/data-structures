var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {
  	length: 0,
  	storage: {}
  };
  _.extend(newStack, stackMethods);
  return newStack;
};

var stackMethods = {
	push: function(value) {
		this.length++;
		this.storage[this.length] = value;
	},

	pop: function() {
		if (this.length > 0) {
			var temp = this.storage[this.length];
			delete this.storage[this.length];
			this.length--;
			return temp;
		}
	},

	size: function() {
		return this.length;
	}
};