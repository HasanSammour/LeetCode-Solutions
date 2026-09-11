/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    // Edge Case - Only one person
    // If n = 1 and no trust relationships the only person is the judge
    if (n === 1 && trust.length === 0) {
        return 1;
    }
    
    
    // Step 1: Create arrays for in-degree and out-degree
    const inDegree = new Array(n + 1).fill(0);
    const outDegree = new Array(n + 1).fill(0);
    
    // Step 2: Process directed edges
    // For each [a, b]: a -> b (a trusts b)
    for (const [a, b] of trust) {
        outDegree[a]++;  // a has outgoing edge
        inDegree[b]++;   // b has incoming edge
    }
    
    // Step 3: Find the judge node
    // Judge: outDegree = 0 AND inDegree = n - 1
    for (let i = 1; i <= n; i++) {
        if (outDegree[i] === 0 && inDegree[i] === n - 1) {
            return i;
        }
    }
    
    // No judge found
    return -1;
};