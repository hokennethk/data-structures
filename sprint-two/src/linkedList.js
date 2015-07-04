var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //traverse through list until the value of node.next = null
    //if null - node.next = new node with value
    //set newNode.next = null

    //if the list is empty, the node passed in is = head
    var newNode = Node(value);
    var current = list.head;
    if (current === null) {
        //the list is empty
        list.head = newNode;
        list.tail = newNode;
        return;
    } else {
        while (current.next !== null) {
            current = current.next;
        }
        //current is the last item in the list
        current.next = newNode;
        list.tail = newNode;

    }

};

  list.removeHead = function(){
      if (list.head !== null){
        var temp = list.head;
        list.head = list.head.next;
        return temp.value;
      }
  };

  list.contains = function(target){
    var current = list.head;
    while (current !== null) {
      if (current.value === target) {
        return true;
      }
      // advance current node
      current = current.next;
    }

    // not found
    return false;
  };
  
  list.each = function (callback){
    var current = list.head;
    while (current !== null){
      callback(current)
      current = current.next;
    }
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addToTail = O(n)
 removeHead = O(1)
 contains = O(n)

 */
