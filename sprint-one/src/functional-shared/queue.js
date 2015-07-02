var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {
  	length:0,
  	frontOfQueue:0,
  	backOfQueue:0,
  	storage:{}
  };
  _.extend(newQueue,queueMethods);
  return newQueue;
};

var queueMethods = {
	enqueue:function(value){
		this.backOfQueue++;
		this.storage[this.backOfQueue] = value
	},
	dequeue:function(){
		if(this.size()>0){
			this.frontOfQueue++
			var temp = this.storage[this.frontOfQueue];
			delete this.storage[this.frontOfQueue];
			return temp;
		}
	},
	size:function(){
		this.length = this.backOfQueue - this.frontOfQueue;
		return this.length;
	}
};

//extend Queue to contain the QueueMethods object
//use this to refer to the specific instance of Queue's propertys



