var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var frontOfQueue = 0;
  var backOfQueue = 0;
  var length = 0;


  // Implement the methods below

  someInstance.enqueue = function(value){
    backOfQueue++;
    storage[backOfQueue] = value;
  };

  someInstance.dequeue = function(){
    if (someInstance.size() > 0) {
      frontOfQueue++;
      var temp = storage[frontOfQueue];
      delete storage[frontOfQueue];
      return temp;
    }
  };

  someInstance.size = function(){
    length = backOfQueue - frontOfQueue;
    return length;
  };

  return someInstance;
};



