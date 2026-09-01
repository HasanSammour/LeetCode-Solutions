/**
 * Initialize data structure
 * 
 * Approach I follow: I use a fixed-size array (1000001) since key range is 0 to 10^6
 * This gives us O(1) time complexity for all operations
 * 
 * Time Complexity: O(1) for put, get, remove
 * Space Complexity: O(10^6) ≈ O(1) since it's fixed
 */

var MyHashMap = function() {
    // Step 1: Create an array to store values
    // We use a fixed size of 1000001 because:
    // - Max key is 10^6 (from constraints)
    // - We need index 0 to 10^6 inclusive
    // - We initialize all values to -1 (meaning "not found")
    this.map = new Array(1000001).fill(-1);
};

/**
 * Insert a (key, value) pair into the HashMap
 * If the key already exists update the corresponding value
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    // Step 2: Store value directly at key's index
    this.map[key] = value;
};

/** 
 * Get the value to which the specified key is mapped
 * Returns -1 if the key is not found.
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    // Step 3: Return value at key's index (or -1 if not found)
    return this.map[key];
};

/** 
 * Remove the key and its corresponding value from the HashMap
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    // Step 4: Set value at key's index to -1 (meaning "removed")
    this.map[key] = -1;
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */