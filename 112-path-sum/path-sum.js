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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    // Base Case: empty node -> no path
    if (root === null) {
        return false;
    }

    // Step 1 - Subtract the current node value from targetSum
    targetSum -= root.val;

    // Step 2 - Check if it's a leaf node (no children)
    if (root.left === null && root.right === null) {
        // Leaf node: check if targetSum reached 0
        return targetSum === 0;
    }

    // Step 3 - Recursively check left and right subtrees
    return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};