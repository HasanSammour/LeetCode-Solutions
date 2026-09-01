/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    // Check 1: empty list
    // If the list is empty return null
    if (head === null) {
        return null;
    }
    
    // Check 2: single node
    // If the list has only one node create a tree node with that value
    if (head.next === null) {
        return new TreeNode(head.val);
    }
    
    // If normal linkedlist pass above checks
    // Step 1: Find the middle node using slow and fast pointers
    // This is the key step we need the middle element to be the root (since element are sorted)
    let slow = head;      // Moves one step at a time
    let fast = head;      // Moves two steps at a time
    let prev = null;      // Tracks the node before slow (to split the list)
    
    // When fast reaches the end slow will be at the middle
    while (fast !== null && fast.next !== null) {
        prev = slow;           // Keep track of node before middle
        slow = slow.next;      // Move slow one step
        fast = fast.next.next; // Move fast two steps
    }
    
    // Step 2: Split the linked list into two halves
    // The middle node is now at {slow}
    // The left half starts from {head} and ends at {prev}
    if (prev !== null) {
        prev.next = null; // Disconnect left half from middle
    }
    
    // Step 3: Create root node from the middle element
    const root = new TreeNode(slow.val);
    
    // Step 4: Build left subtree from the left half
    // The left half contains elements smaller than root
    root.left = sortedListToBST(head);
    
    // Step 5: Build right subtree from the right half
    // The right half starts from slow.next and contains elements larger than root
    root.right = sortedListToBST(slow.next);
    
    // Return the root of the balanced BST
    return root;
};