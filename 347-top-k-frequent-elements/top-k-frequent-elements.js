/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // Step 1 - Count frequencies using Hash Map
    const freqMap = new Map();
    for (const num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    // Step 2 - Initialize Min-Heap
    const minHeap = [];

    // Step 2.1 - Push a pair [frequency, value] into the Min-Heap
    const push = (pair) => {
        minHeap.push(pair);
        let i = minHeap.length - 1;
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (minHeap[parent][0] <= minHeap[i][0]) break;
            [minHeap[parent], minHeap[i]] = [minHeap[i], minHeap[parent]];
            i = parent;
        }
    };

    // Step 2.2 - Pop the minimum element from the Min-Heap
    const pop = () => {
        const top = minHeap[0];
        const last = minHeap.pop();
        if (minHeap.length > 0) {
            minHeap[0] = last;
            let i = 0;
            while (true) {
                let smallest = i;
                const left = 2 * i + 1;
                const right = 2 * i + 2;
                if (left < minHeap.length && minHeap[left][0] < minHeap[smallest][0]) smallest = left;
                if (right < minHeap.length && minHeap[right][0] < minHeap[smallest][0]) smallest = right;
                if (smallest === i) break;
                [minHeap[smallest], minHeap[i]] = [minHeap[i], minHeap[smallest]];
                i = smallest;
            }
        }
        return top;
    };

    // Step 3 - Keep only the k most frequent elements in the Min-Heap
    for (const [num, count] of freqMap) {
        push([count, num]);
        if (minHeap.length > k) {
            pop();
        }
    }

    // Step 4 - Extract the values and return
    return minHeap.map(([count, num]) => num);
};