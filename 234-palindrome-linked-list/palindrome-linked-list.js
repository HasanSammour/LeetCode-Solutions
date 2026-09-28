/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // Step 1 - Find the middle of the linked list using Fast & Slow pointers
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;        // Move slow one step
        fast = fast.next.next;   // Move fast two steps
    }

    // Step 2 - Reverse the second half of the linked list
    let prev = null;
    let current = slow;

    while (current !== null) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    // Step 3 - Compare the first half with the reversed second half
    let firstHalf = head;
    let secondHalf = prev;   // prev is now the head of the reversed second half

    while (secondHalf !== null) {
        if (firstHalf.val !== secondHalf.val) {
            return false;    // Mismatch found
        }
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }

    // Step 4 - All values matched -> it's a palindrome
    return true;
};