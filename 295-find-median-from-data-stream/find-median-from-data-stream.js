
var MedianFinder = function() {
    // Max-Heap for the lower half (store negatives to simulate max-heap)
    this.maxHeap = [];

    // The idea of negative is like That
    // Normally the array in JS is minheap
    // heap = [1, 2, 3, 5]
    // root = 1 (minimum)

    // with negative
    // we store: [-3, -1, -5, -2]
    // heap = [-5, -3, -2, -1]
    // root = -5 (which is originally 5 maximum value)

    // Min-Heap for the upper half
    this.minHeap = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    // Step 1 - Add to Max-Heap first
    this._pushMax(this.maxHeap, num);

    // Step 2 - Move the largest from Max-Heap to Min-Heap
    const maxTop = this._popMax(this.maxHeap);
    this._pushMin(this.minHeap, maxTop);

    // Step 3 - Balance sizes: Max-Heap should have >= Min-Heap size
    if (this.minHeap.length > this.maxHeap.length) {
        const minTop = this._popMin(this.minHeap);
        this._pushMax(this.maxHeap, minTop);
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    // Step 1 - If sizes are equal -> average of two middle values
    if (this.maxHeap.length === this.minHeap.length) {
        return (-this.maxHeap[0] + this.minHeap[0]) / 2;
    }
    // Step 2 - If Max-Heap has one more -> the top of Max-Heap
    return -this.maxHeap[0];
};


// ------------------------------------------------------------
// Next is 4 Helpers private methods
// ------------------------------------------------------------

// Helper: Push a value into the Min-Heap (Bubble Up)
MedianFinder.prototype._pushMin = function(heap, val) {
    // Add the new value to the end of the heap
    heap.push(val);
    let i = heap.length - 1;

    // Bubble up while the new value is smaller than its parent
    while (i > 0) {
        const parent = Math.floor((i - 1) / 2);
        if (heap[parent] <= heap[i]) break;
        [heap[parent], heap[i]] = [heap[i], heap[parent]];
        i = parent;
    }
};

// Helper: Pop the minimum from the Min-Heap (Bubble Down)
MedianFinder.prototype._popMin = function(heap) {
    // Save the root (minimum value) to return later
    const top = heap[0];
    const last = heap.pop();

    if (heap.length > 0) {
        // Move the last element to the root
        heap[0] = last;
        let i = 0;

        // Bubble down while the element is larger than its smallest child
        while (true) {
            let smallest = i;
            const left = 2 * i + 1;
            const right = 2 * i + 2;

            if (left < heap.length && heap[left] < heap[smallest]) smallest = left;
            if (right < heap.length && heap[right] < heap[smallest]) smallest = right;

            if (smallest === i) break;

            [heap[smallest], heap[i]] = [heap[i], heap[smallest]];
            i = smallest;
        }
    }

    return top;
};

// Helper: Push a value into the Max-Heap (using negatives)
MedianFinder.prototype._pushMax = function(heap, val) {
    // Store the negative to simulate a Max-Heap using a Min-Heap
    heap.push(-val);
    let i = heap.length - 1;

    // Bubble up while the new value is smaller than its parent
    while (i > 0) {
        const parent = Math.floor((i - 1) / 2);
        if (heap[parent] <= heap[i]) break;
        [heap[parent], heap[i]] = [heap[i], heap[parent]];
        i = parent;
    }
};

// Helper: Pop the maximum from the Max-Heap (using negatives)
MedianFinder.prototype._popMax = function(heap) {
    // Save the root (maximum value) to return later
    const top = -heap[0];
    const last = heap.pop();

    if (heap.length > 0) {
        // Move the last element to the root
        heap[0] = last;
        let i = 0;

        // Bubble down while the element is larger than its smallest child
        while (true) {
            let smallest = i;
            const left = 2 * i + 1;
            const right = 2 * i + 2;

            if (left < heap.length && heap[left] < heap[smallest]) smallest = left;
            if (right < heap.length && heap[right] < heap[smallest]) smallest = right;

            if (smallest === i) break;

            [heap[smallest], heap[i]] = [heap[i], heap[smallest]];
            i = smallest;
        }
    }

    return top;
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */