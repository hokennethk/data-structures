var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
	  newQueue.length = 0;
	  newQueue.frontOfQueue = 0;
	  newQueue.backOfQueue = 0;
	  newQueue.storage = {};
  return newQueue;
};

var queueMethods = {};
queueMethods.enqueue = function(value){
	this.backOfQueue++;
	this.storage[this.backOfQueue] = value;

};

queueMethods.dequeue = function(){
	if (this.size()){
		this.frontOfQueue++;
		var temp = this.storage[this.frontOfQueue];
		delete this.storage[this.frontOfQueue];
		return temp;
	}

};

queueMethods.size = function(){
	this.length = this.backOfQueue - this.frontOfQueue;
	return this.length;
}


