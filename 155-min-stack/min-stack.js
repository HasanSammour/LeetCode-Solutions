
var MinStack = function() {
    // Main stack to store all values
    this.stack = [];
    
    // Auxiliary stack to track minimum values
    // Each element in minStack corresponds to the minimum value
    // in the main stack up to that point
    this.minStack = [];
    // we use this stack to make sure we can get minValue in constant time O(1)
};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function(value) {
    // first check to handle all edge cases ensure value pushed is a valid number
    if (value === undefined || value === null || typeof value !== 'number' || isNaN(value)) {
        return;
    }

    // Add value to main stack
    this.stack.push(value);
    
    // Update minStack: 
    // If minStack is empty: push the value as the first minimum
    // If minStack is non-empty: push the smaller of new value or current minimum
    if (this.minStack.length === 0) {
        this.minStack.push(value);
    } else {
        // Get current minimum
        const currentMin = this.minStack[this.minStack.length - 1];
        // Push the minimum between new value and current minimum
        // this.minStack.push(Math.min(value, currentMin));

        // after i change This from Math.min to if-else i get better Runtime
        if (value < currentMin) {
            this.minStack.push(value);
        } else {
            this.minStack.push(currentMin);
        }
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    // if stack is empty do nothing
    if (this.stack.length === 0) {
        return;
    }
    
    // Remove top from main stack
    this.stack.pop();
    
    // Remove top from minStack to keep them have same length always
    this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    // Return the last element of the main stack
    // Problem guarantees stack is non-empty but we check anyway
    if (this.stack.length === 0) {
        return null;
    }
    return this.stack[this.stack.length - 1];
    // here we do not delete value so we do not touch minStack
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    // Return the last element of minStack
    // This always contains the minimum value at current state
    // Problem guarantees stack is non-empty but we check anyway
    if (this.minStack.length === 0) {
        return null;
    }
    return this.minStack[this.minStack.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */