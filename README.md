# LinkedList_Assignment13
**Question 1**<br>
Given two linked list of the same size, the task is to create a new linked list using those linked lists. The condition is that the greater node among both linked list will be added to the new linked list.<br>
**Examples:**<br>
Input: list1 = 5->2->3->8<br>
list2 = 1->7->4->5<br>
Output: New list = 5->7->4->8<br><br>
Input:list1 = 2->8->9->3<br>
list2 = 5->3->6->4<br>
Output: New list = 5->8->9->4<br><br>

*Answer*<br>
**Code** [Link]()<br>
******************************************************************************************************************************
 **Question 2**<br>
Write a function that takes a list sorted in non-decreasing order and deletes any duplicate nodes from the list. The list should only be traversed once.
For example if the linked list is 11->11->11->21->43->43->60 then removeDuplicates() should convert the list to 11->21->43->60.<br>
**Example 1:**<br>
Input:LinkedList: 11->11->11->21->43->43->60<br>
Output:11->21->43->60<br>
**Example 2:**<br>
Input:LinkedList: 10->12->12->25->25->25->34<br>
Output:10->12->25->34<br><br>

*Answer*<br>
**Code** [Link]()<br>
******************************************************************************************************************************
**Question 3**<br>
Given a linked list of size **N**. The task is to reverse every **k** nodes (where k is an input to the function) in the linked list. If the number of nodes is not a multiple of *k* then left-out nodes, in the end, should be considered as a group and must be reversed (See Example 2 for clarification).<br>
**Example 1:**<br>
Input:LinkedList: 1->2->2->4->5->6->7->8<br>
K = 4<br>
Output:4 2 2 1 8 7 6 5<br>
Explanation:The first 4 elements 1,2,2,4 are reversed first
and then the next 4 elements 5,6,7,8. Hence, the
resultant linked list is 4->2->2->1->8->7->6->5.<br>
**Example 2:**<br>
Input:LinkedList: 1->2->3->4->5<br>
K = 3<br>
Output:3 2 1 5 4<br>
Explanation:The first 3 elements are 1,2,3 are reversed
first and then elements 4,5 are reversed.Hence,
the resultant linked list is 3->2->1->5->4.<br><br>

*Answer*<br>
**Code** [Link]()<br>
******************************************************************************************************************************
**Question 4**<br>
Given a linked list, write a function to reverse every alternate k nodes (where k is an input to the function) in an efficient way. Give the complexity of your algorithm.<br>
**Example:**<br>
Inputs:   1->2->3->4->5->6->7->8->9->NULL and k = 3<br>
Output:   3->2->1->4->5->6->9->8->7->NULL.<br><br>

*Answer*<br>
**Code** [Link]()<br>
******************************************************************************************************************************
**Question 5**<br>
Given a linked list and a key to be deleted. Delete last occurrence of key from linked. The list may have duplicates.<br>
**Examples**:<br>
Input:   1->2->3->5->2->10, key = 2<br>
Output:  1->2->3->5->10<br><br>

*Answer*<br>
**Code** [Link]()<br>
******************************************************************************************************************************
 **Question 6**<br>
Given two sorted linked lists consisting of **N** and **M** nodes respectively. The task is to merge both of the lists (in place) and return the head of the merged list.<br>
**Examples:**<br>
Input: a: 5->10->15, b: 2->3->20<br>
Output: 2->3->5->10->15->20<br><br>
Input: a: 1->1, b: 2->4<br>
Output: 1->1->2->4<br><br>

*Answer*<br>
**Code** [Link]()<br>
******************************************************************************************************************************
**Question 7**<br>
Given a **Doubly Linked List**, the task is to reverse the given Doubly Linked List.<br>
**Example:**<br>
Original Linked list 10 8 4 2<br>
Reversed Linked list 2 4 8 10<br><br>

*Answer*<br>
**Code** [Link]()<br>
******************************************************************************************************************************
**Question 8**<br>
Given a doubly linked list and a position. The task is to delete a node from given position in a doubly linked list.<br>
**Example 1:**<br>
Input:LinkedList = 1 <--> 3 <--> 4<br>
x = 3<br>
Output:1 3<br>
Explanation:After deleting the node at
position 3 (position starts from 1),
the linked list will be now as 1->3.<br><br>
**Example 2:**<br>
Input:LinkedList = 1 <--> 5 <--> 2 <--> 9<br>
x = 1<br>
Output:5 2 9<br><br>
*Answer*<br>
**Code** [Link]()<br>
