class Node {
		constructor() {
			this.data = 0;
			this.prev = null;
			this.next = null;
		}
	}
var head = null;
	function deleteNode(del) {
		if (head == null || del == null)
			return null;
		if (head == del)
			head = del.next;
		if (del.next != null)
			del.next.prev = del.prev;
		if (del.prev != null)
			del.prev.next = del.next;

		del = null;

		return head;
	}
	function deleteNodeAtGivenPos(n) {
		if (head == null || n <= 0)
			return;

var current = head;
		var i;
		for (i = 1; current != null && i < n; i++) {
			current = current.next;
		}
		if (current == null)
			return;
		deleteNode(current);
	}
	function push(new_data) {
var new_node = new Node();
		new_node.data = new_data;
		new_node.prev = null;
		new_node.next = head;
		if (head != null)
			head.prev = new_node;
		head = new_node;
	}
	function printList() {
var temp = head;
		if (temp == null)
			console.log("Doubly Linked list empty");

		while (temp != null) {
			console.log(temp.data + " ");
			temp = temp.next;
		}
    }
		push(4);
		push(3);
		push(1);
		console.log("Doubly linked " + "list before deletion:");
		printList();
		var n = 3;
		deleteNodeAtGivenPos(n);
		console.log("Doubly linked " + "list after deletion:");
		printList();