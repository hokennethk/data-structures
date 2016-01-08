var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
	if (!this.contains(item)) {
		this._storage.push(item);
	}
};

setPrototype.contains = function(item){
	var contains = false;
	_.each(this._storage,function(value){
		if (value === item){
			contains = true;
		}
	});

	return contains;
};

setPrototype.remove = function(item){
	if (this.contains(item)){
		var index = this._storage.indexOf(item);
		this._storage.splice(index,1);
	}
};

