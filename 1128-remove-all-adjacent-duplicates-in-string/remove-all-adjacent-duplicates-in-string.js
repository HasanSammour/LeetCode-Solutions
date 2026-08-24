/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    // Edge Case 1: Check if input is valid
    // Note: LeetCode guarantees (s is a non-null string) but we handle anyway
    if (s === null || s === undefined || typeof s !== 'string') {
        return "";
    }
    
    // Edge Case 2: If string length is 0 return empty string
    // Note: LeetCode guarantees (s.length >= 1) but we handle anyway
    if (s.length === 0) {
        return "";
    }
    
    // Edge Case 3: If string length is 1 no adjacent duplicates possible
    // Note: LeetCode guarantees (s.length >= 1) but we handle anyway
    if (s.length === 1) {
        return s;
    }
    
    // Stack to store characters
    const stack = [];
    
    // Iterate through each character
    for (const c of s) {
        // If stack is not empty and top of stack equals current character
        if (stack.length > 0 && stack[stack.length - 1] === c) {
            stack.pop();  // Remove the pair
        } else {
            stack.push(c);  // Add current character
        }
    }
    
    // Convert stack to string and return
    return stack.join('');  
};