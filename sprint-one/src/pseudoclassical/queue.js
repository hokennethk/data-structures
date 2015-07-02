var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
  this.frontOfQueue = 0;
  this.backOfQueue = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
	this.backOfQueue++;
	this.storage[this.backOfQueue] = value;
};

Queue.prototype.dequeue = function() {
	if (this.size()) {
		this.frontOfQueue++;
		var temp = this.storage[this.frontOfQueue];
		delete this.storage[this.frontOfQueue];
		return temp;
	}
};

Queue.prototype.size = function() {
	this.length = this.backOfQueue - this.frontOfQueue;
	return this.length;
};