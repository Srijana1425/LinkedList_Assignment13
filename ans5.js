class Node
{
    constructor(key)
    {
        this.key = key;
        this.next = null;
    }
}
function deleteLast(head, key)
{
    let x = null;
    let temp = head;
      
    while (temp != null)
    {
        if (temp.key == key)
            x = temp;
   
        temp = temp.next;
    }
    if (x != null)
    {
        x.key = x.next.key;
        temp = x.next;
        x.next = x.next.next;
    }
    return head;
}
function printList(node)
{
    while (node != null)
    {
        console.log(node.key + " ");
        node = node.next;
    }
}
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(5);
head.next.next.next.next = new Node(2);
head.next.next.next.next.next = new Node(10);
console.log("Created Linked List: <br>");
printList(head);
deleteLast(head, 2);
console.log("<br>Linked List after " + 
               "Deletion of 2: <br>");
printList(head);