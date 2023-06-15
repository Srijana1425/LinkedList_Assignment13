class Node
{
    constructor(d)
    {
        this.data = d;
        this.next = null;
    }
}
 
let head;
function kAltReverse(node, k)
{
    let current = node;
    let next = null, prev = null;
    let count = 0;
    while (current != null && count < k)
    {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        count++;
    }
    if (node != null)
    {
        node.next = current;
    }
    count = 0;
    while (count < k - 1 && current != null)
    {
        current = current.next;
        count++;
    }
    if (current != null)
    {
        current.next = kAltReverse(current.next, k);
    }
    return prev;
}
 
function printList(node)
{
    while (node != null)
    {
        console.log(node.data + " ");
        node = node.next;
    }
}
 
function push(newdata)
{
    let mynode = new Node(newdata);
    mynode.next = head;
    head = mynode;
}
for(let i = 9; i > 0; i--)
{
    push(i);
}
console.log("Given Linked List :<br>");
printList(head);
head = kAltReverse(head, 3);
console.log("<br>");
console.log("Modified Linked List :<br>");
printList(head);