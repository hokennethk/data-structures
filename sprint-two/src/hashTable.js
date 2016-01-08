var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var i = getIndexBelowMaxForKey(k, this._limit);
  var linkedList;
  // check to see if anything exists at storage location
  if (this._storage.get(i)) {
    // iterate through linked list to check
      // if (k, v) exists, overwrite it
      // otherwise add to tail
    var found = false;  
    linkedList = this._storage.get(i);
    // checking for existing keys, overwrite if necessary
    linkedList.each(function(node) {
      if (node.value[0] === k) {
        node.value[1] = v;
        found = true;
      } 
    });  
    if (!found) {
      linkedList.addToTail([k,v]);
    }
  } else {
    linkedList = LinkedList();
    linkedList.addToTail([k,v]);
    this._storage.set(i, linkedList);
  }
};

HashTable.prototype.retrieve = function(k) {
  var i = getIndexBelowMaxForKey(k, this._limit);
  var linkedList = this._storage.get(i);
  var value = null;
  if (linkedList){
    linkedList.each(function(node){
      if (node.value[0] === k){
        value = node.value[1];
      }
    });
  }
  return value;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var linkedList = this._storage.get(i);
  var parent;
  var current = parent;
  if (linkedList){  
    if (linkedList.head.value[0] === k){
        // we are removing the head
        linkedList.removeHead();
    } else {
      //we must search the linked list for the node to remove

      linkedList.each(function(node){
        current = node;
        if (current.next && current.next.value[0] === k){
          current.next = current.next.next;
        }
      });
    }
  }
};
