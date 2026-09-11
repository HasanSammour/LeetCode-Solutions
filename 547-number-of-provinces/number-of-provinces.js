/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const n = isConnected.length;
    
    // Edge Case: Single city
    if (n === 1) {
        return 1;
    }

    // Step 1: Track visited cities
    const visited = new Array(n).fill(false);
    let provinces = 0;
    
    // Step 2: DFS to visit all cities in the same province
    const dfs = (city) => {
        visited[city] = true;
        
        // Visit all directly connected cities
        for (let neighbor = 0; neighbor < n; neighbor++) {
            if (isConnected[city][neighbor] === 1 && !visited[neighbor]) {
                dfs(neighbor);
            }
        }
    };
    
    // Step 3: Count provinces
    // Start DFS from each unvisited city
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            provinces++;
            dfs(i);
        }
    }
    
    return provinces;
};