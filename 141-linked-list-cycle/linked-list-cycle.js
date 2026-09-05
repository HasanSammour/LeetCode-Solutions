/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // Edge case: empty list or single node without cycle
    if (!head || !head.next) {
        return false;
    }

    // Step 1: Initialize slow and fast pointers
    let slow = head;
    let fast = head;
    
    // Step 2: Traverse the list
    while (fast !== null && fast.next !== null) {
        // Move slow one step
        slow = slow.next;
        
        // Move fast two steps
        fast = fast.next.next;
        
        // Step 3: Check if they meet
        if (slow === fast) {
            return true; // if 2 pointer met then there must be a Cycle
        }
    }
    
    // Step 4: fast reached null then there is no cycle
    return false;
};