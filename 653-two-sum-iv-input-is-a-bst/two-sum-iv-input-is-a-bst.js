/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    // Check: Empty Tree
    // If the tree is empty return false
    // Note: LeetCode guarantees root is valid but we handle anyway
    if (!root) {
        return false;
    }
    
    // Step 1: Initialize a Set (HashMap) to store visited values
    // This Set will help us check in O(1) if a complement exists

    // Why Set? - Set provides O(1) average time complexity for:
    // .has() => check if a value exists
    // .add() => insert a value
    const seen = new Set();
    
    // Step 2: Depth-First Search (DFS) to traverse the tree
    // We use DFS (pre-order) to visit each node exactly once
    const dfs = (node) => {
        // Check: If node is null we've reached a leaf
        // Return false because no pair found in this path
        if (!node) {
            return false;
        }
        
        // Step 3: Calculate the complement
        // The complement is the value we need to find to reach the target sum
        // Example: if node.val = 5 and k = 9, complement = 4
        const complement = k - node.val;
        
        // Step 4: Check if complement exists in the Set
        // If complement is found we have a pair (complement + node.val = k)
        // Return true immediately
        
        // This is the key step - the HashMap (Set) makes this O(1)
        if (seen.has(complement)) {
            return true;
        }
        
        // Step 5: Add current node value to the Set
        // Mark this value as "seen" so it can be used as a complement
        // for other nodes later in the traversal
        seen.add(node.val);
        
        // Step 6: Recursively check left and right subtrees
        // Continue the search down the tree
        const leftResult = dfs(node.left);
        const rightResult = dfs(node.right);
        
        // Return true if either subtree finds the pair
        return leftResult || rightResult;
    };
    
    // Start DFS from the root and return the result
    return dfs(root);
};