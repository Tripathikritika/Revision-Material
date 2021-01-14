const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var isPalindrome = function (head) {
    let slowPointer = head
    let fastPointer = head
    
    while(fastPointer && fastPointer.next){
    	slowPointer = slowPointer.next
        fastPointer = fastPointer.next.next
    }
  	fastPointer = head
    slowPointer = reverse(slowPointer)
    
    while( slowPointer ){
      	if(slowPointer.data !== fastPointer.data){
        	return false
        }
      	slowPointer = slowPointer.next
        fastPointer = fastPointer.next
    }
    return true
};
var reverse = function( node ){
	let prev = null
    
     while( node ){
     	let nextNode = node.next
        node.next = prev
        prev = node
        node = nextNode
         
     }
  return prev
}
