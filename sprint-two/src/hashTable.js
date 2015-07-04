var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
    var i = getIndexBelowMaxForKey(k, this._limit);
    // if hash table at i is empty:
    // insert into hash table an object { k: v, next: null }
    // otherwise insert new node into 'linked list'
    var obj = {};
        obj[k] = v;
        obj.next = null;
    if (this._storage.get(i)) {
		var current = this._storage.get(i);
		console.dir(current);
		while (current.next !== null) {
			current = current.next;
		}
		current.next = obj;
    } else {
        this._storage.set(i, obj);
    }

};

HashTable.prototype.retrieve = function(k) {
    var i = getIndexBelowMaxForKey(k, this._limit);
    // this._storage.get(k)
    // storage[i] should return an object that contains objects aka a linkedlist
    // we are looking to return the specific object in question
    // we'll look at this._storage.get(i)
    // if (this._storage.get(i).hasOwnProperty(k)) 
    // return value
    //else 
    //while this._storage.get(i).next != null
    // check this._storage.get(i).next... 

    if (this._storage.get(i)) {
        if (this._storage.get(i).hasOwnProperty(k)) {
            return this._storage.get(i)[k];
        } else {
            var current = this._storage.get(i).next;
            while (current !== null) {
                if (current.hasOwnProperty(k)) {
                    return current[k];
                } else {
                    current = current.next;
                }
            }
            return false;
        }
    }
};

HashTable.prototype.remove = function(k){
	
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
